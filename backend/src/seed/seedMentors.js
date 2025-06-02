import mongoose from "mongoose";
import fs from "fs";
import "dotenv/config";
import Mentor from "../models/mentor.model.js";

const mentors = JSON.parse(
  fs.readFileSync("src/seed/db/mentorsData.json", "utf-8")
);

const seedMentors = async () => {
  try {
    // console.log(mentors);
    if (process.env.NODE_ENV !== "development") {
      console.log("Seeding is only allowed in development!");
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI);

    await Mentor.deleteMany({});

    const createdMentors = await Mentor.insertMany(mentors);

    console.log(`Seeded ${createdMentors.length} mentors successfully.`);
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding mentors:", error);
    process.exit(1);
  }
};

seedMentors();
