import { NavLink } from "react-router-dom";

const Navigate = () => {
  return (
    <header className="container-nav">
      <div>
        <li>Yash Avasekar</li>
      </div>
      <nav>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"projects"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"contact"}>Contact</NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Navigate;
