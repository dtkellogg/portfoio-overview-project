import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import aboutMe from "../../img/aboutMe.JPG";
import reddit from "../projects/reddit/RedditApp.js";

import thalassa from "../../img/thalassa.jpg";
import tetris from "../../img/tetris.jpg";
import hangman from "../../img/hangman.jpg";
import budgetTracker from "../../img/budgetTracker.png";
import api from "../../img/api.png";

import Footer from "../layout/Footer";

import "../../App.scss";

const Home = () => {
  return (
    <Fragment>
      <section className="hero">
        <h1>Damian Toshiya Kellogg</h1>
        <h2>Front-End Web Developer</h2>
        <p>Welcome to my site! Come check out my projects.</p>
      </section>

      <section className="project__container">
        <article className="project__card project__item--0">
          <img src={api} alt="About me img" className="project__photo" />
          <Link to="/reddit/home" className="btn">
            API (NodeJS)
          </Link>
        </article>
        <article className="project__card project__item--1">
          <img src={thalassa} alt="About me img" className="project__photo" />
          <Link to="/reddit/home" className="btn">
            Thalassa (SASS)
          </Link>
        </article>
        <article className="project__card project__item--2">
          <img src={tetris} alt="About me img" className="project__photo" />
          <Link to="/reddit/home" className="btn">
            Tetris (React)
          </Link>
        </article>
        <article className="project__card project__item--3">
          <img src={hangman} alt="About me img" className="project__photo" />
          <Link to="/reddit/home" className="btn">
            Hangman (React)
          </Link>
        </article>
        <article className="project__card project__item--4">
          <img
            src={budgetTracker}
            alt="About me img"
            className="project__photo"
          />
          <Link to="/reddit/home" className="btn">
            Budget Tracker (React)
          </Link>
        </article>
      </section>

      <section className="about-me">
        <img src={aboutMe} alt="About Me" />
        <h3>About Me.</h3>
        <p className="about-me__p--1">
          Hello! My name Toshi and I am looking to become a Junior Front-End Web
          Developer.
        </p>
        <p className="about-me__p--2">
          Over the past year, I have worked on sharpening my programming skills
          so that I can be a highly effective entry level programmer. I've spent
          a lot time mastering html5 and css3. I have also become skilled with a
          few frameworks, namely SASS and React. I am deeply passionate about
          learning, motivated to take-on difficult challenges, have a strong
          memory, obnoxious nature of being attention oriented and most
          importantly, I'm fun to be around.
        </p>
        <p className="about-me__p--3">
          Although I didn't study Computer Science in college, my background is
          in mathematics and science. I have BS in Chemistry from UC Davis, and
          I have worked in Materials Testing Laboratory for five years. Most
          recently, I have been teaching high school students in a wide variety
          of subject matter. This includes science, math, English, Spanish, and
          the SAT/ACT.
        </p>
        <p className="about-me__p--4">
          Please take some time to look at my projects. Feel free to ask me any
          questions you have via the form in the footer.
        </p>
      </section>

      <section className="skills">
        <h3>Select Skills.</h3>
        <div className="skills__icons">
          <i class="fab fa-html5 skills__icon"></i>
          <i class="fab fa-css3-alt skills__icon"></i>
          <i class="fab fa-sass skills__icon"></i>
          <i class="fab fa-js skills__icon"></i>
          <i class="fab fa-react skills__icon"></i>
          <i class="fab fa-node skills__icon"></i>
          <i class="fas fa-language skills__icon"></i>
          <i class="fas fa-running skills__icon"></i>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Home;
