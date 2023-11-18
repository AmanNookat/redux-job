import React from "react";
import { NavLink } from "react-router-dom";
import { checkUserLogin, logout } from "../../helpers/functions";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {checkUserLogin() ? (
        <span
          onClick={() => {
            logout();
          }}
        >
          LogOut
        </span>
      ) : (
        <>
          <NavLink to="/sign-up">Registration</NavLink>
          <NavLink to="/sign-in">Authorization</NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
