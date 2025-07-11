import express from "express";
import mentorController from "../controllers/mentors.controller.js";

const mentorRouter = express.Router();

mentorRouter.get("/", mentorController.getAllMentors);

mentorRouter.get("/count", mentorController.getMentorsCount);

mentorRouter.get("/:id", mentorController.getMentorById);

export default mentorRouter;
