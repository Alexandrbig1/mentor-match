import express from "express";
import technologiesController from "../controllers/technologies.controller.js";

const technologiesRouter = express.Router();

technologiesRouter.get("/", technologiesController.getAllTechnologies);

technologiesRouter.get("/count", technologiesController.getTechnologiesCount);

export default technologiesRouter;
