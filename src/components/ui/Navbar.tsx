import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { checkUserLogin, logout } from "../../helpers/functions";
import UsersModal from "./UsersModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Navbar = () => {
  const [navClick, setNavClick] = useState(false);

  const [usersModal, setUsersModal] = useState(false);

  const { loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {}, [loading]);

  const toggleMenu = () => {
    setUsersModal(!usersModal);
  };

  function closeUsersModal() {
    setUsersModal(false);
  }

  return (
    <div style={{ display: "flex" }} onClick={() => setNavClick(!navClick)}>
      <NavLink to="/">Home</NavLink>
      {checkUserLogin() ? (
        <>
          <NavLink to="/chatrooms">Chats</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/forum">Forum</NavLink>
          <NavLink to="/profiles">Profiles</NavLink>
          <NavLink
            to="/"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </NavLink>
          {/* Оставляйте модалку последней */}

          <div
            style={{ position: "fixed", right: "5%" }}
            className="users--modal"
          >
            <button className="modalBtn" onClick={toggleMenu}>
              {usersModal ? (
                <div className="close--modal">
                  <p>Your Account</p>
                </div>
              ) : (
                <div className="open--modal">
                  <p>Your Account</p>
                </div>
              )}
            </button>
            {usersModal && (
              <div>
                <UsersModal />
                <div className="overlay" onClick={closeUsersModal}></div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <NavLink to="/sign-up">Registration</NavLink>
          <NavLink to="/sign-in">Authorization</NavLink>
          <NavLink to="/roadmaps">Road Maps</NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
