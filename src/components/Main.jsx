import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Project from "./Project/Project";
import ScrolltoTop from "./ScrolltoTop";

const Main = () => {
  return (
    <main className="container">
      <ScrolltoTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
  );
};

export default Main;
