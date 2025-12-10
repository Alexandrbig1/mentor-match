import { Schema, model } from "mongoose";
import  handleSaveError  from "../hooks/handleSaveError.js";
import emailRegex from "../regex/emailRegex.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegex,
      required: [true, "Email is required"],
      unique: true,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveError);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;