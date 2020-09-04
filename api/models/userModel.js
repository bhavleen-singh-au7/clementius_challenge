import { Schema, model } from "mongoose";

const userModel = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: { type: Date, default: new Date() },
  bio: {
    type: String,
    required: true,
  }
});

export default new model("user", userModel);
