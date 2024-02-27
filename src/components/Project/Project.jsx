import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return <h1>Project</h1>;
};

export default Project;
