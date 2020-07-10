import { SEARCH_REDDIT, GET_POST, CLEAR_POSTS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_REDDIT:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
