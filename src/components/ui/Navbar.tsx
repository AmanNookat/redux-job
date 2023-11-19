import React from "react";
import { NavLink } from "react-router-dom";
import { checkUserLogin, logout } from "../../helpers/functions";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {checkUserLogin() ? (
        <>
          <NavLink to="/chats">Chats</NavLink>
          <span
            onClick={() => {
              logout();
            }}
            className="cursor-pointer"
          >
            LogOut
          </span>
        </>
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
