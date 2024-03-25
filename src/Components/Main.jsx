import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Project from "./Project/Project";
import Resume from "./Resume/Resume";
import { useEffect } from "react";

const Main = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </main>
  );
};

export default Main;
