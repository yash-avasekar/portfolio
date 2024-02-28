import { useEffect } from "react";
import { Link } from "react-router-dom";
import hello from "../../Assests/Hello.json";
import skills from "../../Assests/Skills.json";
import about from "../../Assests/About.json";
import Lottie from "react-lottie";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container-section">
        <Section1 />
        <Aside />
      </section>

      <section className="container-section">
        <Section2 />
        <Aside2 />
      </section>

      <section className="container-section">
        <Section3 />
        <Aside3 />
      </section>

      <section className="container-section">
        <Section4 />
      </section>
    </>
  );
};

const Section1 = () => {
  return (
    <div className="section-text">
      <h1>Hi</h1>
      <h1>
        I'm <span id="fancy-color">Yash Avasekar</span>
      </h1>
      <h1>
        Full-Stack <span id="fancy-color">Developer.</span>
      </h1>
      <p>
        I am a full-stack web developer. I can provide clean and scalable code
        with with great backend service.
      </p>
      <br />
      <br />

      <Link id="project-button" to="/project">
        My Projects
        <span>&gt;</span>
      </Link>
    </div>
  );
};

const Aside = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
  };
  return (
    <aside>
      <Lottie options={defaultOptions} height={550} />
    </aside>
  );
};

const Section2 = () => {
  return (
    <div className="section-text">
      <h1 id="about-text">About Me</h1>
      <h1>
        Yash <span id="fancy-color">Avasekar</span>
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
    </div>
  );
};

const Aside2 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
  };
  return (
    <aside>
      <Lottie options={defaultOptions} height={550} />
    </aside>
  );
};

const Section3 = () => {
  return (
    <div className="section-text">
      <h1>
        Core <span id="fancy-color">Skills</span>
      </h1>

      <li>
        <p>
          <span className="gt">&gt;</span>
          <span className="core-skill-li">Frontend Development :</span>
          HTML, CSS, JavaScript
        </p>
      </li>
      <li>
        <p>
          <span className="gt">&gt;</span>
          <span className="core-skill-li">Backend Development :</span>
          Python
        </p>
      </li>
      <li>
        <p>
          <span className="gt">&gt;</span>
          <span className="core-skill-li">Frameworks :</span>
          React JS, React Native ,Django-Rest
        </p>
      </li>
      <li>
        <p>
          <span className="gt">&gt;</span>
          <span className="core-skill-li">Databases :</span>
          MySQL, MongoDB ,Oracle
        </p>
      </li>
      <li>
        <p>
          <span className="gt">&gt;</span>
          <span className="core-skill-li">Version Control :</span>
          Git
        </p>
      </li>
      <li>
        <p>
          <span className="gt">&gt;</span>
          <span className="core-skill-li">AWS Services :</span>
          AWS EC2 ,AWS S3 Bucket ,AWS Elastic-Beanstalk ,AWS RDS
        </p>
      </li>
    </div>
  );
};

const Aside3 = () => {
  useEffect(() => {}, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: skills,
  };
  return (
    <aside>
      <Lottie options={defaultOptions} height={550} />
    </aside>
  );
};

const Section4 = () => {
  return (
    <div className="section-text">
      <h1>Feel free to explore my projects, and get in touch!</h1>
      <h1>Let’s build something amazing together.</h1>
    </div>
  );
};

export default Home;
