/**
 * This file contains all the User profile routes
 */

import express from "express";
import controller from "../controller/userController";
import validator from "../validator/userValidator";

import { handleValidationErrors } from "../errorHandlers/ErrorHandlers";

const router = express.Router();

//POST USER Signup
router.post(
  "/create",
  validator.create,
  handleValidationErrors,
  controller.create
);

//GET Get USER details
router.get("/view", controller.get);

//UPDATE USER Details
router.patch(
  "/:id",
  validator.update,
  handleValidationErrors,
  controller.update
);

export default router;
