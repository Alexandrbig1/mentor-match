import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import Mentor from "../models/mentor.model.js";

const getAllMentors = async (req, res) => {
  const { name, tech } = req.query;

  const filter = {};

  if (name) {
    filter.name = { $regex: name, $options: "i" };
  }

  if (tech) {
    const techArray = Array.isArray(tech) ? tech : [tech];

    filter.technologies = { $all: techArray };
  }

  const mentorsData = await Mentor.find(filter);

  res.json(mentorsData);
};

const getMentorById = async (req, res) => {
  const { id } = req.params;
  const mentorsById = await Mentor.findById(id);

  if (!mentorsById) {
    throw HttpError(404, "Mentor not found");
  }

  res.json(mentorsById);
};

export default {
  getAllMentors: ctrlWrapper(getAllMentors),
  getMentorById: ctrlWrapper(getMentorById),
};
