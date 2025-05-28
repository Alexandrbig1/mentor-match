import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import rateLimit from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

export default app;
