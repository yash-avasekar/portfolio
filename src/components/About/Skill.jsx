import "./skill.css";
import { ImHtmlFive2 } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrOracle } from "react-icons/gr";

import { SiVisualstudiocode } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import { SiAmazonec2 } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbBucket } from "react-icons/tb";

import { SiWindows } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";

export const Skill = () => {
  return (
    <section className="container-skills">
      <h1>
        Skills and <span id="fancy-text">Technologies</span>
      </h1>

      <h2 className="h2-big-text">Professional Skillset</h2>
      <Skillset />

      <h2 className="h2-big-text">Tools</h2>
      <Tools />

      <h2 className="h2-big-text">Operating System</h2>
      <OS />
    </section>
  );
};

const Skillset = () => {
  return (
    <section className="Skillset">
      <ImHtmlFive2 className="icons" />
      <ImCss3 className="icons" />
      <IoLogoJavascript className="icons" />
      <FaReact className="icons" />
      <FaPython className="icons" />
      <SiDjango className="icons" />
      <SiMysql className="icons" />
      <GrOracle className="icons" />
      <SiMongodb className="icons" />
      <SiAmazonec2 className="icons" />
      <FaDatabase className="icons" />
      <TbBucket className="icons" />
    </section>
  );
};

const Tools = () => {
  return (
    <section className="Skillset">
      <SiVisualstudiocode className="icons" />
      <SiPycharm className="icons" />
      <SiPostman className="icons" />
      <FaGitSquare className="icons" />
      <FaGithub className="icons" />
    </section>
  );
};

const OS = () => {
  return (
    <section className="Skillset">
      <FaUbuntu className="icons" />
      <SiWindows className="icons" />
    </section>
  );
};
