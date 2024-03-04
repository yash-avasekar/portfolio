import { useEffect } from "react";
import "../Home/home.css";
import "./about.css";
import "../../App.css";
import { Skill } from "./Skill";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-home container-about">
      <div className="container-section">
        <BackgroundEducation />
        <Aside />
      </div>

      <div className="container-section">
        <WorkExperience />
        <Aside />
      </div>

      <div className="container-section">
        <Passion />
        <Aside />
      </div>

      <div className="container-section">
        <BeyondCode />
        <Aside />
      </div>

      <div className="container-section">
        <Skill />
      </div>
    </div>
  );
};

const BackgroundEducation = () => {
  return (
    <section className="section-text section-row">
      <h1>
        Background and<span id="fancy-text"> Education</span>
      </h1>
      <p>
        I’m Yash Avasekar, a tech enthusiast hailing from Solapur, Maharashtra.
      </p>
      <p>
        My journey into the world of technology began during my college days.
      </p>
      <p>
        I pursued a Bachelor’s degree in Computer Science from Fabtech Technical
        Campus affilated by Dr. Babasaheb Ambedkar Technological University,
        where I delved into algorithms, data structures, and software
        development.
      </p>
    </section>
  );
};

const WorkExperience = () => {
  return (
    <section className="section-text section-row">
      <h1 id="h1-small-text">Work Experience</h1>
      <h1>
        Personal <span id="fancy-text">Projects</span>
      </h1>
      <p className="sub-text-line-height">
        <li>
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">A Personal Portfolio Website</span>
        </li>
      </p>
      <p className="sub-text-line-height">
        <li>
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">A simple to-do list app.</span>
        </li>
      </p>
      <p className="sub-text-line-height">
        <li>
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">A Blog Web-App</span>
        </li>
      </p>
      <p className="sub-text-line-height">
        <li>
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">Instagram Lite clone Web-App</span>
        </li>
      </p>
    </section>
  );
};

const Passion = () => {
  return (
    <section className="section-text section-row">
      <h1>
        Passion for <span id="fancy-text">Technology</span>
      </h1>
      <p>I’m passionate about solving real-world problems through code.</p>
      <p>
        Whether it’s building efficient algorithms or crafting elegant user
        interfaces, I thrive on the challenges that software development
        presents.
      </p>
      <p>
        My curiosity drives me to explore new technologies and stay up-to-date
        with industry trends.
      </p>
    </section>
  );
};

const BeyondCode = () => {
  return (
    <section className="section-text section-row">
      <h1 id="h1-small-text">Tech and Tales</h1>
      <h1>
        My Journey <span id="fancy-text">Beyond Code</span>
      </h1>
      <p>As a tech enthusiast, my world extends beyond code. Here’s how:</p>
      <p>
        📖<span className="sub-text-color"> Reading Manga:</span>
      </p>
      <ul>
        <li className="list-style-type">
          Manga’s intricate plots and relatable characters captivate me.
        </li>

        <li className="list-style-type">
          Just like debugging, deciphering hidden meanings keeps my mind sharp.
        </li>
      </ul>
      <p>
        🎨<span className="sub-text-color"> Watching Anime:</span>
      </p>
      <ul>
        <li className="list-style-type">
          Stunning visuals and diverse themes inspire my creativity.
        </li>

        <li className="list-style-type">
          As a developer, I seek elegance in design and storytelling.
        </li>
      </ul>
      <p>
        <span className="sub-text-color">Luffy’s Wisdom</span>
      </p>
      <p>
        “As long as I live, I have infinite chances.” – Monkey D. Luffy, One
        Piece
      </p>
      <p>
        Luffy’s unwavering spirit reminds me: Never give up. Never back down.
        🚀🌟
      </p>
    </section>
  );
};

const Aside = () => {
  return (
    <aside className="about-aside">
      <div></div>
    </aside>
  );
};

export default About;
