import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PostItem = ({ post: { title, author, thumbnail } }) => {
  const image =
    thumbnail !== "self"
      ? thumbnail
      : "https://assets.entrepreneur.com/content/3x2/2000/20180301190808-reddit-logo.jpeg";

  return (
    <div className="card text-center">
      <img src={image} alt="" className="post-img" />
      <h3>{title}</h3>
      <h3>{author}</h3>
    </div>
  );
};

// PostItem.propTypes = {
//   post: PropTypes.object.isRequired,
// };

export default PostItem;
