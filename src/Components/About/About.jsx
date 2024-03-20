import Skills from "./Skills";
import {
  background_desc,
  background_title,
  beyond_desc,
  beyond_title,
  experience_desc,
  experience_title,
  passion_desc,
  passion_title,
} from "./data";

const About = () => {
  return (
    <>
      <div className="container-sections">
        <Background />
        <Aside />
      </div>

      <div className="container-sections">
        <Experience /> <Aside />
      </div>

      <div className="container-sections ">
        <Passion /> <Aside />
      </div>

      <div className="container-sections">
        <BeyondCode /> <Aside />
      </div>

      <div className="container-sections">
        <Skills />
      </div>
    </>
  );
};

const Background = () => {
  return (
    <section className="section-about">
      {background_title.map((title) => (
        <h1 key={title}>
          {title[0]} {title[1]} <span className="fancy-color">{title[2]}</span>
        </h1>
      ))}

      {background_desc.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
    </section>
  );
};

const Experience = () => {
  return (
    <section className="section-about">
      {experience_title.map((title) => (
        <div key={title}>
          <h2>
            {title[0]} {title[1]}
          </h2>
          <h1>
            {title[2]} <span className="fancy-color">{title[3]}</span>
          </h1>
        </div>
      ))}

      {experience_desc.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
    </section>
  );
};

const Passion = () => {
  return (
    <section className="section-about">
      {passion_title.map((title) => (
        <h1 key={title}>
          {title[0]} <span className="fancy-color">{title[1]}</span>
        </h1>
      ))}

      {passion_desc.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
    </section>
  );
};

const BeyondCode = () => {
  return (
    <section className="section-about">
      {beyond_title.map((title) => (
        <div key={title}>
          <h2>{title[0]}</h2>
          <h1>
            {title[1]} <span className="fancy-color">{title[2]}</span>
          </h1>
        </div>
      ))}

      {beyond_desc.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
    </section>
  );
};

const Aside = () => {
  return (
    <aside className="about-aside">
      <div className="circle"></div>
      <div className="line"></div>
    </aside>
  );
};

export default About;
