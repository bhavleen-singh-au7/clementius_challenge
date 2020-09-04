import User from "../models/userModel";
import service from "../services/userService";
import { handleErrors } from "../errorHandlers/ErrorHandlers";

const controller = {};

//User Create Profile
controller.create = async (req, res) => {
  try {
    //Create new user
    const user = await service.create(req.body);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Get details
controller.get = async (req, res) => {
  try {
    //Get User
    const user = await service.getUser(req);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

//UPDATE User Details
controller.update = async (req, res) => {
  try {
    const user = await service.updateUser(req.params.id, req.body);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

export default controller;
