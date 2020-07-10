import React, { useReducer } from "react";
import axios from "axios";
import RedditContext from "./redditContext";
import RedditReducer from "./redditReducer";
import { SEARCH_REDDIT, GET_POST, CLEAR_POSTS, SET_LOADING } from "../types";

const RedditState = (props) => {
  const initialState = {
    posts: [],
    post: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(RedditReducer, initialState);

  // Search reddit
  const searchReddit = async (text) => {
    setLoading();

    const res = await axios.get(`https://www.reddit.com/search.json?q=${text}`);
    console.log(res.data.data.children.map((data) => data.data));

    dispatch({
      type: SEARCH_REDDIT,
      payload: res.data.data.children.map((data) => data.data),
    });
  };

  //   `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`

  // Get post

  // Clear posts

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <RedditContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        loading: state.loading,
        searchReddit,
      }}
    >
      {props.children}
    </RedditContext.Provider>
  );
};

export default RedditState;
