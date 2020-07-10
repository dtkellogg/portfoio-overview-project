import React, { useState, useContext } from "react";
import RedditContext from "../../context/reddit/redditContext";

function Search() {
  const redditContext = useContext(RedditContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      //   alertContext.setAlert("Please enter something", "light");
    } else {
      redditContext.searchReddit(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Reddit..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
}

export default Search;

// rfce
