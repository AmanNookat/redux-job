import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sign-up">Registration</NavLink>
      <NavLink to="/sign-in">Authorization</NavLink>
    </div>
  );
};

export default Navbar;
