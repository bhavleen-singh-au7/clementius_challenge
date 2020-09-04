/**
 * This is routes index file.
 * It contains all the routes.
 */
import express from "express";
import userRoutes from "./userRoutes";

const routes = express.Router();

//User Routes
routes.use("/", userRoutes);

export default routes;
