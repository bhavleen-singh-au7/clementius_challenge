import {
  GET_VIEWS,
  VIEW_ERROR,
  EDIT_SINGLE_VIEW,
  TRASH_SINGLE_VIEW
} from "../actions/types";

const initialState = {
  views: [],
  view: null,
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_VIEWS:
      return {
        ...state,
        views: payload,
        loading: false
      };
    case VIEW_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case EDIT_SINGLE_VIEW:
      return {
        ...state,
        views: state.views.map(view => view._id === payload.id ? {
          ...view,
          likes: payload.likes
        } : view),
        loading: false
      };
    case TRASH_SINGLE_VIEW:
      return {
        ...state,
        views: state.views.filter(view => view._id !== payload),
        loading: false
      };
    default:
      return state;
  }
}
