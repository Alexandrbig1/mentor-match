import mongoose from "mongoose";
import app from "./src/app.js";
import "dotenv/config";

const { MONGO_URI, PORT = 3000 } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
