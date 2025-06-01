import { Schema, model } from "mongoose";

const mentorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      // required: true,
      trim: true,
    },
    phone: {
      type: String,
      // required: true,
      match: /^\+?[1-9]\d{1,14}$/,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
      match: /.+\@.+\..+/, // Basic email validation
    },
    nmls: {
      type: String,
      // required: true,
      unique: true,
      match: /^[0-9]{6}$/, // NMLS number validation (6 digits)
    },
    socialLinks: {},
    coreValues: {
      type: [String],
      // required: true,
    },
    description: {
      type: String,
      // required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Mentor = model("Mentor", mentorSchema);

export default Mentor;
