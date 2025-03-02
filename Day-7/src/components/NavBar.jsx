import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="nav-center">
        {" "}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="news">NewsLetters</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
