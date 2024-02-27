import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigate = () => {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <>
      <nav className="container-nav">
        <li id="logo">Yash Avasekar</li>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigate;
