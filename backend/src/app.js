import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mentorRouter from "./routes/mentors.routes.js";
import technologyRouter from "./routes/technologies.routes.js";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api/mentors", mentorRouter);

app.use("/api/technologies", technologyRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

export default app;
