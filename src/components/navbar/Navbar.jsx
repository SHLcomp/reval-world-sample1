import "./Navbar.scss";
import logo from "../../assets/logo1.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("Home");

  useEffect(() => {
    switch (location.pathname) {
      case "/reval-world-sample1/":
        setActive("Home");
        break;
      case "/reval-world-sample1/proj":
        setActive("Projects");
        break;
      case "/reval-world-sample1/about":
        setActive("About");
        break;
      case "/reval-world-sample1/contact":
        setActive("Contact");
        break;
      default:
        setActive("");
    }
  }, [location]);

  return (
    <>
    
      <nav>
      {/* Burger Button */}
      <img className="btn" src={logo} alt="" />

      {/* Menu with animation */}
      <ul>
        <Link
          className="a"
          to="/reval-world-sample1/"
          onClick={() => {
            setActive("Home");
          }}
        >
          <li className={active === "Home" ? "clicked" : ""}>Home</li>
        </Link>

        <a
          href="#prod"
          className="a"
          onClick={() => {
            setActive("Services");
          }}
        >
          <li className={active === "Services" ? "clicked" : ""}>Services</li>
        </a>

        <Link
          className="a"
          to="/reval-world-sample1/proj"
          onClick={() => {
            setActive("Projects");
          }}
        >
          <li className={active === "Projects" ? "clicked" : ""}>Projects</li>
        </Link>

        <Link
          className="a"
          to="/reval-world-sample1/about"
          onClick={() => {
            setActive("About");
          }}
        >
          <li className={active === "About" ? "clicked" : ""}>About Us</li>
        </Link>

        <Link
          className="a"
          to="/reval-world-sample1/contact"
          onClick={() => {
            setActive("Contact");
          }}
        >
          <li className={active === "Contact" ? "clicked" : ""}>Contact</li>
        </Link>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
