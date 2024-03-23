import { useState } from "react";
import image from "./default.jpg";

const Project = () => {
  return (
    <div className="container-sections">
      <Cards />
    </div>
  );
};

const Cards = () => {
  const [cardTitle, setCardTitle] = useState([
    "A Portfolio Website",
    "A Simple Todo Web App",
    "A Blog App",
    "An Instagram Lite Clone",
  ]);

  const [cardDesc, setCardDesc] = useState([
    ["Designed and built a portfolio website using React js"],

    [
      "Designed and built an blog app backend.",
      "Integrated fetures post, comment ,like functionality.",
    ],
    [
      "Developed a task management application using Django rest api (backend).",
      "Implemented features like task creation, due dates, and task completion.",
      "Utilized RESTful APIs for communication.",
    ],
    [
      "Created a lightweight version of Instagram using Django Rest Framework.",
      "Implemented user authentication, photo uploads, and basic social features.",
      "Focused on performance optimization.",
    ],
  ]);

  return (
    <section className="section-full-width">
      <h1>My Recent Work</h1>
      <div className="container-cards  ">
        {cardTitle.map((title, index) => (
          <div className="card" key={index}>
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                borderRadius: "12px",
                aspectRatio: "16/9",
              }}
            />
            <div className="card-title">
              <h2>{title}</h2>
            </div>

            <div className="card-desc">
              {cardDesc[index].map((desc) => (
                <p key={desc}>{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
