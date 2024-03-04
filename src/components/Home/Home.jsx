import "./home.css";

import Lottie from "react-lottie";

import { Link } from "react-router-dom";
import hello from "../../Assests/Hello.json";
import about from "../../Assests/About.json";
import skills from "../../Assests/Skills.json";

const defaultOptions = [
  {
    loop: true,
    autoplay: true,
    animationData: hello,
  },
  {
    loop: true,
    autoplay: true,
    animationData: about,
  },
  {
    loop: true,
    autoplay: true,
    animationData: skills,
  },
];

const Home = () => {
  return (
    <div className="container-home">
      <div className="container-section">
        <Hi />
        <HiAside />
      </div>

      <div className="container-section">
        <About />
        <AboutAside />
      </div>

      <div className="container-section">
        <Skills />
        <SkillsAside />
      </div>

      <div className="container-section">
        <Build />
      </div>
    </div>
  );
};

// Hello
const Hi = () => {
  return (
    <section className="section-text">
      <h1>Hi</h1>
      <h1>
        I'm <span id="fancy-text">Yash Avasekar</span>
      </h1>
      <h1 id="full-stack">
        Full-Stack <span id="fancy-text">Developer.</span>
      </h1>

      <p className="sub-text-line-height">
        I am a full-stack web developer.
        <br />I can provide clean and scalable code with great backend service.
      </p>

      <br />
      <br />

      <Link id="project-button" to={"/projects"}>
        My Projects <span id="gt sub-text-color">&gt;</span>
      </Link>
    </section>
  );
};

const HiAside = () => {
  return (
    <aside className="aside-image">
      <Lottie options={defaultOptions[0]} />
    </aside>
  );
};

// About
const About = () => {
  return (
    <section className="section-text">
      <h1 id="h1-small-text">About Me</h1>
      <h1>
        Yash <span id="fancy-text">Avasekar</span>
      </h1>
      <p>
        Hi there! I’m Yash Avasekar, a passionate Web & Backend developer based
        in Solapur, Maharashtra.
      </p>
      <p>
        With a love for clean code and problem-solving, I thrive on turning
        ideas into functional applications.
      </p>
      <p>
        My journey began with a Bachelor’s degree in Computer Science, and since
        then, I’ve been on an exciting coding adventure.
      </p>
    </section>
  );
};

const AboutAside = () => {
  return (
    <aside className="aside-image">
      <Lottie options={defaultOptions[1]} />
    </aside>
  );
};

// Skills
const Skills = () => {
  return (
    <section className="section-text">
      <h1>
        Core <span id="fancy-text">Skills</span>
      </h1>
      <li>
        <p className="sub-text-line-height">
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">Frontend Development :</span>
          HTML, CSS, JavaScript
        </p>
      </li>
      <li>
        <p className="sub-text-line-height">
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">Backend Development :</span>
          Python
        </p>
      </li>
      <li>
        <p className="sub-text-line-height">
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">Frameworks :</span>
          React JS, React Native ,Django-Rest
        </p>
      </li>
      <li>
        <p className="sub-text-line-height">
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">Databases :</span>
          MySQL, MongoDB ,Oracle
        </p>
      </li>
      <li>
        <p className="sub-text-line-height">
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">Version Control :</span>
          Git
        </p>
      </li>
      <li>
        <p className="sub-text-line-height">
          <span className="gt sub-text-color">&gt;</span>
          <span className="sub-text-color">AWS Services :</span>
          AWS EC2 ,AWS S3 Bucket ,AWS Elastic-Beanstalk ,AWS RDS
        </p>
      </li>
    </section>
  );
};

const SkillsAside = () => {
  return (
    <aside className="aside-image">
      <Lottie options={defaultOptions[2]} />
    </aside>
  );
};

// Lets build together
const Build = () => {
  return (
    <section className="section-text section-full-row">
      <h1>Feel free to explore my projects, and get in touch!</h1>
      <h1>Let’s build something amazing together.</h1>
    </section>
  );
};

export default Home;
