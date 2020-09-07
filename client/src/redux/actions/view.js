import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_VIEWS,
  VIEW_ERROR,
  EDIT_SINGLE_VIEW,
  TRASH_SINGLE_VIEW
} from "./types";
import { toast } from "react-toastify";

// Get Views
export const getViews = () => async dispatch => {
  try {
    const res = await axios.get("/view");

    dispatch({
      type: GET_VIEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: VIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Edit View
export const edit = ({firstName, lastName, email, dob, shortBio}, id) => async dispatch => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ firstName, lastName, email, dob, shortBio });

  try {
    const res = await axios.put(`/view/${id}`, body, config);

    dispatch({
      type: EDIT_SINGLE_VIEW,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: VIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Trash View
export const trash = id => async dispatch => {
  try {
    await axios.delete(`/view/${id}`);
    dispatch({
      type: TRASH_SINGLE_VIEW,
      payload: id
    });
    toast.error("Data Cleared");
  } catch (err) {
    dispatch({
      type: VIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};