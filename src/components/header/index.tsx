import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <Link to="/">Logo</Link>
      </div>
      <div className="about-header">
        <Link to="/about">About</Link>
      </div>
      <div className="projects-header">Projects</div>
      <div className="contacts-header">Contact</div>
    </div>
  );
};

export default Header;
