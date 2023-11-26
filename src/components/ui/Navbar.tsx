import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { checkUserLogin, logout } from "../../helpers/functions";
import UsersModal from "./UsersModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import icon_logo from "../../assets/icon_logo.png";
import style from "./navbar.module.css";

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
    <div onClick={() => setNavClick(!navClick)}>
      {/* max-w-full h-20 bg-slate-900 text-white flex gap-6 items-center text-lg */}
      <div className={style.nav_oll}>
        <NavLink className={"ml-4"} to="/">
          Home
        </NavLink>

        {checkUserLogin() ? (
          <>
            <NavLink to="/chatrooms">Chats</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/forum">Forum</NavLink>
            <NavLink to="/profiles">Profiles</NavLink>
            <NavLink to="/posts">Posts</NavLink>

            <NavLink
              to="/"
              onClick={() => {
                logout();
              }}
            >
              Log Out
            </NavLink>
            {/* Оставляйте модалку последней */}
            <div className="users--modal ">
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
                <div className="mt-48">
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
        <div>
          <img className={style.nav_img} src={icon_logo} alt="" />
        </div>
      </div>
      <div className={style.nav_line}></div>
    </div>
  );
};

export default Navbar;
