import { combineReducers } from "redux";
import alert from "./alert";
import createUser from "./createUser";
import view from "./view";

export default combineReducers({
  alert,
  createUser,
  view
});