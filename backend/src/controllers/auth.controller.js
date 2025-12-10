import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import ctrlWrapper  from "../decorators/ctrlWrapper.js";
import User from "../models/user.model.js";
import HttpError from "../helpers/HttpError.js";
import Session from "../models/sessionSchema.js";

const { JWT_SECRET, NODE_ENV } = process.env;

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: NODE_ENV === "production",
  sameSite: NODE_ENV === "production" ? "none" : "lax", // cross-site in prod if frontend is a different origin
  path: "/",
  // maxAge will be set per refresh lifetime below
};

const ACCESS_EXPIRES = "15m";   // recommended short life for access tokens
const REFRESH_EXPIRES = "7d";   // refresh token lifetime

function signAccessToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_EXPIRES });
}
function signRefreshToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: REFRESH_EXPIRES });
}

const signUp = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(
      409,
      "Email In Use: The provided email address is already associated with an existing account. If you already have an account, please log in."
    );
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  const newSession = await Session.create({
    uid: newUser._id,
  });

  const payload = {
    id: newUser._id.toString(),
    sid: newSession._id.toString(),
  };

  const token = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  // persist refresh token in session
  newSession.refreshToken = refreshToken;
  await newSession.save();

  // set refresh token cookie (do not return in body)
  res.cookie("refreshToken", refreshToken, {
    ...COOKIE_OPTIONS,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
  });

  res.status(201).json({
    message:
      "Congratulations! Your registration was successful. You can now sign in with your new account.",
    user: {
      name: newUser.name,
      email: newUser.email,
      token: token, // access token returned in body
    },
  });
};

const signIn = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(
      401,
      "Authentication Failed: Incorrect login or password. Please double-check your credentials and try again."
    );
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(
      401,
      "Authentication Failed: Incorrect login or password. Please double-check your credentials and try again"
    );
  }

  const { _id: id } = user;

  const newSession = await Session.create({
    uid: id,
  });

  const payload = {
    id: id.toString(),
    sid: newSession._id.toString(),
  };

  const token = signAccessToken(payload);
  const refreshToken = signRefreshToken(payload);

  // persist refresh token in session
  newSession.refreshToken = refreshToken;
  await newSession.save();

  // set httpOnly cookie with refresh token
  res.cookie("refreshToken", refreshToken, {
    ...COOKIE_OPTIONS,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  // do not persist access token on user; return access token only
  res.json({
    message: "Successful operation",
    token,
    user: {
      name: user.name,
      email: user.email,
    },
  });
};

const refresh = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;
  if (!refreshToken) {
    throw HttpError(401, "Refresh token missing");
  }

  let payload;
  try {
    payload = jwt.verify(refreshToken, JWT_SECRET);
  } catch (err) {
    throw HttpError(401, "Invalid refresh token");
  }

  const { id, sid } = payload;

  const session = await Session.findById(sid);
  if (!session || !session.valid) {
    throw HttpError(401, "Invalid session");
  }

  // ensure refresh token matches stored server-side (prevents reuse if rotated)
  if (session.refreshToken !== refreshToken) {
    // possible reuse / theft — invalidate session
    session.valid = false;
    await session.save();
    throw HttpError(401, "Refresh token reuse detected");
  }

  // rotate refresh token (recommended)
  const newPayload = { id: id.toString(), sid: sid.toString() };
  const newAccessToken = signAccessToken(newPayload);
  const newRefreshToken = signRefreshToken(newPayload);

  session.refreshToken = newRefreshToken;
  await session.save();

  res.cookie("refreshToken", newRefreshToken, {
    ...COOKIE_OPTIONS,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ token: newAccessToken });
};

const logOut = async (req, res) => {
  const sid = req.sessionId;

  if (sid) {
    await Session.findByIdAndUpdate(sid, { valid: false, refreshToken: "" });
  }

  // clear cookie on client
  res.clearCookie("refreshToken", { path: "/" });

  res.json({
    message: "Logout Successful: You have been successfully logged out.",
  });
};

export default {
  signUp: ctrlWrapper(signUp),
  signIn: ctrlWrapper(signIn),
  logOut: ctrlWrapper(logOut),
  refresh: ctrlWrapper(refresh),
};