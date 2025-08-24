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
      required: true,
      trim: true,
    },
    technologies: { type: [String], required: true },
    phone: {
      type: String,
      match: /^\+?[1-9]\d{1,14}$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/, // Basic email validation
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    socialLinks: {},
    coreValues: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// mentorSchema.post("save", (doc) => {
//   console.log("New mentor created:", doc);
// });

// mentorSchema.post("save", (err, doc, next) => {
//   if (err) {
//     err.status = 400;
//     console.error("Error creating mentor:", err);
//     return next(err);
//   }
//   console.log("New mentor created:", doc);
//   next();
// });

const Mentor = model("Mentor", mentorSchema);

export default Mentor;
