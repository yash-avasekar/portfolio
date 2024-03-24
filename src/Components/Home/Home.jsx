import Lottie from "react-lottie";
import {
  about_description,
  about_title,
  connect,
  intro_description,
  intro_link,
  intro_title,
  LottieFiles,
  skill_description,
  skill_title,
} from "./data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

const Home = () => {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <>
      <div className="container-sections">
        <Intro />
        <HiAside />
      </div>

      <div className="container-sections">
        <Aboutme />
        <AboutAside />
      </div>

      <div className="container-sections">
        <Skills />
        <SkillsAside />
      </div>

      <div className="container-sections">
        <Connect />
      </div>
    </>
  );
};

//  intro

const Intro = () => {
  return (
    <section>
      {intro_title.map((title) => (
        <div key={title}>
          <h1>{title[0]}</h1>
          <h1>
            {title[1]} <span className="fancy-color">{title[2]}</span>
          </h1>
          <h1 className="full-stack-margin">
            {title[3]} <span className="fancy-color">{title[4]}</span>
          </h1>
        </div>
      ))}

      {/* descrition */}
      {intro_description.map((desc) => (
        <li className="p-intro-line-height" key={desc}>
          {desc}
        </li>
      ))}

      <br />
      <br />
      <br />

      {/* project link */}
      <Link className="project-link" to={"/project"}>
        {intro_link[0]} &gt;
      </Link>
    </section>
  );
};

const HiAside = () => {
  return (
    <aside>
      <Lottie options={LottieFiles[0]} />
    </aside>
  );
};

// about me

const Aboutme = () => {
  return (
    <section>
      <h2>{about_title[0]}</h2>
      <h1>
        {about_title[1]} <span className="fancy-color">{about_title[2]}</span>
      </h1>

      {/* description */}
      {about_description.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
    </section>
  );
};

const AboutAside = () => {
  return (
    <aside>
      <Lottie options={LottieFiles[1]} />
    </aside>
  );
};

// skills
const Skills = () => {
  return (
    <section>
      <h1>
        {skill_title[0]} <span className="fancy-color">{skill_title[1]}</span>
      </h1>
      {skill_description.map((desc) => (
        <p className="skills-list-style" key={desc}>
          &gt; <span>{desc[0]}</span> {desc[1]}
        </p>
      ))}
    </section>
  );
};

const SkillsAside = () => {
  return (
    <aside>
      <Lottie options={LottieFiles[2]} width={"90%"} />
    </aside>
  );
};

const Connect = () => {
  return (
    <section className="section-full-width">
      {connect.map((title) => (
        <h2 key={title}>{title}</h2>
      ))}

      <div>
        <Link to="https://github.com/yash-avasekar/" target="_blank">
          <FaGithub className="connect-icons" />
        </Link>
        <Link to="https://instagram.com/_y.a.s.h_7/" target="_blank">
          <AiFillInstagram className="connect-icons" />
        </Link>
        <Link to="https://linkedin.com/in/yash-avasekar/" target="_blank">
          <RiLinkedinFill className="connect-icons" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
