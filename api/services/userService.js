import User from "../models/userModel";

const services = {};

//==========================================Create Service==========================================
services.create = (data) =>
  new Promise(async (res, rej) => {
    try {
      //Creating the data
      const user = await new User({ ...data }).save();

      res({
        user,
      });
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get User Service==========================================
services.getUser = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const user = await User.find();

      res(user);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Update User Detail Service==========================================
services.updateUser = (_id, data) =>
  new Promise(async (res, rej) => {
    try {
      //Extracting the email from user
      const { email, ...remData } = data;

      //Updating the hash to database
      const user = await User.findByIdAndUpdate(
        _id,
        {
          ...remData,
        },
        {
          new: true,
        }
      );

      res(user);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default services;
