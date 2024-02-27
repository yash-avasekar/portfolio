import { useEffect } from "react";
import { Link } from "react-router-dom";
import developer from "../../Assests/developer.svg";
import animationData from "../../Assests/hi.json";
import Lottie from "react-lottie";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {

  // }, []);

  return (
    <section className="container-section">
      <Section />
      <Image />
    </section>
  );
};

const Section = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className="section-text">
      <h1>
        Hi
        <Lottie
          id="lottie-hi"
          options={defaultOptions}
          height={100}
          width={100}
          style={{
            margin: "14px",
            transform: "rotate(-45deg)",
          }}
        />
      </h1>
      <h1>
        I'm <span id="fancy-color">Yash Avasekar</span>
      </h1>
      <h1>
        Full-Stack <span id="fancy-color">Developer.</span>
      </h1>
      <p id="co-text">
        I am a full-stack web developer. I can provide clean and scalable code
        with with great backend service.
      </p>
      <br />
      <br />
      <br />
      <br />
      <Link id="project-button" to="/project">
        My Projects
        <span>&gt;</span>
      </Link>
    </div>
  );
};

const Image = () => {
  return (
    <aside>
      <img src={developer} alt="developer.svg" />
    </aside>
  );
};

export default Home;
