import { NavLink } from "react-router-dom";

const data = [
  {
    logo: "Yash Avasekar",
  },
  {
    about: "About",
    project: "Projects",
    resume: "Resume",
  },
];

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <li>{data[0].logo}</li>
      </div>
      <div className="tabs">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        {Object.keys(data[1]).map((key, index) => (
          <li key={index}>
            <NavLink to={"/" + key}>{data[1][key]}</NavLink>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
