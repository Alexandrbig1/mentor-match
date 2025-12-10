import { Schema, model } from "mongoose";
import handleSaveError from "../hooks/handleSaveError.js";

const sessionSchema = new Schema(
  {
    uid: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    refreshToken: { type: String },
    valid: { type: Boolean, default: true },
  },
  { versionKey: false, timestamps: true }
);

sessionSchema.post("save", handleSaveError);

const Session = model("session", sessionSchema);

export default Session;