import React, { useContext } from "react";
import PostItem from "./PostItem";
// import Spinner from '../layout/Spinner';
import PropTypes from "prop-types";
import RedditContext from "../../context/reddit/redditContext";

const Posts = () => {
  const redditContext = useContext(RedditContext);

  const { posts } = redditContext;

  return (
    <div className="masonry">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

// const postStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gridGap: "1rem",
// };

// const postStyle = {
//   display: "flex",
//   flexWrap: "wrap",
// };

export default Posts;
