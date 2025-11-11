import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import Mentor from "../models/mentor.model.js";

const getAllMentors = async (req, res) => {
  const { name, tech, page = 1, limit = 20 } = req.query;

  const filter = {};

  if (name) {
    filter.name = { $regex: name, $options: "i" };
  }

  if (tech) {
    const techArray = Array.isArray(tech) ? tech : [tech];

    filter.technologies = { $all: techArray };
  }

  const mentorsData = await Mentor.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const totalDocs = await Mentor.countDocuments(filter);

  res.json({
    data: mentorsData,
    total: totalDocs,
    page: Number(page),
    totalPages: Math.ceil(totalDocs / limit),
  });
};

const getMentorById = async (req, res) => {
  const { id } = req.params;
  const mentorsById = await Mentor.findById(id);

  if (!mentorsById) {
    throw HttpError(404, "Mentor not found");
  }

  res.json(mentorsById);
};

const getMentorsCount = async (req, res) => {
  const count = await Mentor.countDocuments();
  res.json({ count });
};

export default {
  getAllMentors: ctrlWrapper(getAllMentors),
  getMentorById: ctrlWrapper(getMentorById),
  getMentorsCount: ctrlWrapper(getMentorsCount),
};
