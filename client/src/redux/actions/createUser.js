import axios from 'axios';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "./types";
import { setAlert } from "./alert";

export const createUser = ({ firstName, lastName, email, dob, shortBio }) => async dispatch => {
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ firstName, lastName, email, dob, shortBio });

  try {
    const res = await axios.post("/create", body, config);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CREATE_USER_FAIL
    });
  }
};
