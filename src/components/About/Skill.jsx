import "./skill.css";

export const Skill = () => {
  return (
    <section className="container-skills">
      <h1>
        Skills and <span id="fancy-text">Technologies</span>
      </h1>
      <h2>Languages</h2>
      <Languages />

      <h2>Frameworks and Libraries</h2>
      <Frameworks />

      <h2>Tools</h2>
      <Tools />
    </section>
  );
};

const Languages = () => {
  return (
    <section className="Languages">
      <p>languages</p>
    </section>
  );
};

const Frameworks = () => {
  return (
    <section className="Frameworks">
      <p>Framework</p>
    </section>
  );
};

const Tools = () => {
  return (
    <section className="Tools">
      <p>Tools</p>
    </section>
  );
};
