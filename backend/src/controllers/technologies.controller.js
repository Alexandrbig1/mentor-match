import ctrlWrapper from "../decorators/ctrlWrapper.js";
import Mentor from "../models/mentor.model.js";

const getAllTechnologies = async (req, res) => {
  const mentors = await Mentor.find({}, "technologies");

  const allTechs = mentors.flatMap((m) => m.technologies);
  const uniqueTechs = [...new Set(allTechs)];

  res.json(uniqueTechs);
};

const getTechnologiesCount = async (req, res) => {
  const mentors = await Mentor.find({}, "technologies");

  const allTechs = mentors.flatMap((m) => m.technologies);
  const uniqueTechs = [...new Set(allTechs)];

  res.json({ count: uniqueTechs.length });
};

export default {
  getAllTechnologies: ctrlWrapper(getAllTechnologies),
  getTechnologiesCount: ctrlWrapper(getTechnologiesCount),
};
