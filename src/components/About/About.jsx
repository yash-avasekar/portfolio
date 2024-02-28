import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container-section  ">
        <BackgroundandEducation />
      </section>

      <section className="container-section">
        <PersonalProjects />
      </section>

      <section className="container-section">
        <SkillsandTechnologies />
      </section>
    </>
  );
};

const BackgroundandEducation = () => {
  return (
    <div className="section-text ">
      <h1>
        <span id="fancy-color">Background and Education</span>
      </h1>
    </div>
  );
};

const PersonalProjects = () => {
  return (
    <div className="section-text ">
      <h2>Work and Experience</h2>
      <h1>
        Personal <span id="fancy-color">Projects</span>
      </h1>
      <li>
        <p>
          <span className="gt">&gt;</span>A portfolio website
        </p>
      </li>
      <li>
        <p>
          <span className="gt">&gt;</span>A simple to-do list app with Django
          Rest and React
        </p>
      </li>
      <li>
        <p>
          <span className="gt">&gt;</span>Ecommerce Website with Djano
          Web-Framework
        </p>
      </li>
      <li>
        <p>
          <span className="gt">&gt;</span>Instagram Lite with Django Rest as
          backend
        </p>
      </li>
    </div>
  );
};

const SkillsandTechnologies = () => {
  return (
    <div className="section-text ">
      <h1>Skills and Technologies</h1>
      <li>Python</li>
    </div>
  );
};

export default About;
