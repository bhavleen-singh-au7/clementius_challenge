import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_VIEWS,
  VIEW_ERROR,
  EDIT_SINGLE_VIEW,
  TRASH_SINGLE_VIEW
} from "./types";

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
export const edit = id => async dispatch => {
  // try {
  //   await axios.put(`/view/${id}`)
  // }
};

// Trash View
export const trash = id => async dispatch => {
  try {
    await axios.delete(`/view/${id}`);
    dispatch({
      type: TRASH_SINGLE_VIEW,
      payload: id
    });

    dispatch(setAlert("Data Cleared", "success"));
  } catch (err) {
    dispatch({
      type: VIEW_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};