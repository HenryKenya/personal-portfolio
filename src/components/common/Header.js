import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../images/avatar.jpeg";

const Header = () => {
  const activeStyle = {
    color: "#000",
    fontWeight: "bold",
  };

  return (
    <section className="container-fluid hero-section">
      <div className="header">
        <img src={avatar} className="avatar" alt="Avatar" />
        <nav className="menu">
          <NavLink to="/" activeStyle={activeStyle} exact>
            About
          </NavLink>
          <NavLink to="/awards-press" activeStyle={activeStyle} exact>
            Awards &amp; Press
          </NavLink>
          <NavLink to="/tech-stark" activeStyle={activeStyle}>
            Tech stack
          </NavLink>
        </nav>
      </div>
    </section>
  );
};
export default Header;
