import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>Designed and Developed by Yash Avasekar</p>
      <p>Copyright &copy; 2024</p>
      <p>
        <Link
          to="https://github.com/yash-avasekar/"
          target="_blank"
          className="footer-links"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://instagram.com/_y.a.s.h_7/"
          target="_blank"
          className="footer-links"
        >
          <AiFillInstagram />
        </Link>
        <Link
          to="https://linkedin.com/in/yash-avasekar/"
          target="_blank"
          className="footer-links"
        >
          <FaLinkedinIn />
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
