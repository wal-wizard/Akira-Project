import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {


  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "active" : "none",
    };
  };



  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          className="logo"
          src={require("../img/Akira-PNG.png")}
          alt="nav logo"
        />
      </div>
      <ul className="nav-itnes">
        <li className="nav-iten">
          <NavLink to={"/"} className="iten" style={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li className="nav-iten">
          <NavLink to={"/about"} className="iten" style={navLinkStyle}>
            About
          </NavLink>
        </li>
        <li className="nav-iten">
          <NavLink to={"/galery"} className="iten" style={navLinkStyle}>
            Galery
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
