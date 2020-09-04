//Validators File it will contain user validators

import { check, body } from "express-validator";

import User from "../models/userModel";

import Error from "../errorHandlers/CustomError";

const validator = {};

//==========================================Create Validator==========================================
validator.create = [
  //Check name
  check("firstName", "Invalid Name").isString(),

  check("lastName", "Invalid Name").isString(),

  //Check if email is valid
  check("email", "Invalid Email").isEmail(),

  check("bio", "Invalid bio").isString(),

  //Check if email is unique
  body("email").custom(async (email) => {
    const user = await User.findOne({
      email,
    });

    if (user) {
      throw new Error(409, "User already exists");
    }
  }),
];

//==========================================Update Validator==========================================

validator.update = [
  //These fields user can't update
  check("_id", "Cannot update id").isEmpty(),

  check("created_at", "Cannot update created_at").isEmpty(),

  //Check name
  check("firstName", "Invalid Name").isString(),

  check("lastName", "Invalid Name").isString(),
];

export default validator;
