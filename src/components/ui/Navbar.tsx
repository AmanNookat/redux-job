import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { checkUserLogin, logout } from "../../helpers/functions";

const Navbar = () => {
  const [navClick, setNavClick] = useState(false);

  return (
    <div onClick={() => setNavClick(!navClick)}>
      <NavLink to="/">Home</NavLink>
      {checkUserLogin() ? (
        <>
          <NavLink to="/chatrooms">Chats</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink
            to="/"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </NavLink>
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
