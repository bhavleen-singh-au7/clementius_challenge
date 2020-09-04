import { combineReducers } from "redux";
import alert from "./alert";
import createUser from "./createUser";

export default combineReducers({
  alert,
  createUser
});