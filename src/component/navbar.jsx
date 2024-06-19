import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <header>
      <a href="/" className="logo">
        <i className="ri-home-heart-fill"></i>{" "}
        <span className="sudama">Sudama</span>{" "}
        <span className="Aush">Aushdhalya</span>
      </a>
      <ul className={expanded ? "navbar open" : "navbar"}>
        <li onClick={toggleNavbar}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About us
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li className="phone-mobile">
          <a href="tel:+919931618534" className="user">
            <i className="ri-phone-line"></i>9931618534
          </a>
        </li>
      </ul>
      <ul className="main">
        <li className="phone-desktop">
          <a href="tel:+919931618534" className="user">
            <i className="ri-phone-line"></i>9931618534
          </a>
        </li>
        <li>
          <i className="ri-menu-line" id="menu-icon" onClick={toggleNavbar}></i>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
