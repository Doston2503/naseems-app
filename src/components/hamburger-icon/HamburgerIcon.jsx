import React from "react";
import "./hamburger-icon.scss";

const HamburgerIcon = ({ menu_show, toggleMenu }) => {
  return (
    <a
      onClick={toggleMenu}
      className={`nohighlight ${menu_show ? "active" : ""}`}
      id="burger-icon"
      href="#"
    >
      <span className="burger part-1"></span>
      <span className="burger part-2"></span>
      <span className="burger part-3"></span>
    </a>
  );
};

export default HamburgerIcon;
