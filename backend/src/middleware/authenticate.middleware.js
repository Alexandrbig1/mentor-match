import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Session from "../models/sessionSchema.js";
import HttpError from "../helpers/HttpError.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(HttpError(401, "Access Denied: Authorization not defined"));
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer" || !token) {
    return next(HttpError(401));
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const { id, sid } = payload;

    // validate session
    const session = await Session.findById(sid);
    if (!session || !session.valid) {
      return next(HttpError(401));
    }

    const user = await User.findById(id);
    if (!user) {
      return next(HttpError(401));
    }

    // attach useful context
    req.user = user;
    req.sessionId = sid;
    next();
  } catch (error) {
    next(HttpError(401, error.message));
  }
};

export default authenticate;