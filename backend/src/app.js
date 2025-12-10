import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mentorRouter from "./routes/mentors.routes.js";
import technologyRouter from "./routes/technologies.routes.js";
import healthRouter from "./routes/health.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

// global middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/health", healthRouter);

// rate limiters
const readLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 300, // relaxed for public reads
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 10, // strict for auth routes
  message: { error: "Too many login attempts. Try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

const writeLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // write requests per IP per minute
  message: { error: "Too many write requests. Please slow down." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/mentors", readLimiter, mentorRouter);
app.use("/api/technologies", readLimiter, technologyRouter);

app.use("/api/auth", authLimiter, authRouter);

// Apply writeLimiter only for write verbs under /api
app.use("/api", (req, res, next) => {
  const writeMethods = ["POST", "PUT", "PATCH", "DELETE"];
  if (writeMethods.includes(req.method)) {
    return writeLimiter(req, res, next);
  }
  return next();
});

// fallback 404 / error handlers
app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

export default app;
