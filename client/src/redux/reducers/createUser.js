import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from "../actions/types";

const initialState = {
  loading: true
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        payload
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}