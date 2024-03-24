import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const data = [
  {
    logo: "Yash Avasekar",
  },
  {
    "": "Home",
    about: "About",
    project: "Projects",
    resume: "Resume",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHam = () => {
    if (isOpen) {
      hamClose();
    } else {
      var tabs = document.querySelector(".tabs");
      tabs.className = "tabs show";

      setIsOpen(true);
    }
  };

  const hamClose = () => {
    var tabs = document.querySelector(".tabs");
    tabs.className = "tabs";
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <li>{data[0].logo}</li>
      </div>
      <div className="tabs">
        {Object.keys(data[1]).map((key, index) => (
          <li key={index}>
            <NavLink to={"/" + key} onClick={hamClose}>
              {data[1][key]}
            </NavLink>
          </li>
        ))}
      </div>
      <button className="hamburger" onClick={handleHam}>
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
    </nav>
  );
};

export default NavBar;
