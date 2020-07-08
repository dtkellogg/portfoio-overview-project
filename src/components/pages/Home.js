import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <section className="hero">
        <h1>Damian Toshiya Kellogg</h1>
        <h2>Front-end Web Developer</h2>
        <p>Welcome to my site! Come take a dive into my life.</p>
      </section>

      <section className="projects-container">
        <article className="project project--0">
          <Link to="/about" className="btn">
            About me
          </Link>
        </article>
      </section>
    </Fragment>
  );
};

export default Home;
