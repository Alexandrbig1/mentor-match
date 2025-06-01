import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import Mentor from "../models/mentor.model.js";

const getAllMentors = async (req, res) => {
  const mentorsData = await Mentor.find();
  console.log("first request");
  console.log(mentorsData);
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
  createMentor: ctrlWrapper(createMentor),
};
