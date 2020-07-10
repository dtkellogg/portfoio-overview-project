import React, { Fragment } from "react";
import Search from "../redditPosts/Search";
import Posts from "../redditPosts/Posts";

const Home = () => (
  <Fragment>
    <Search />
    <Posts />
  </Fragment>
);

export default Home;
