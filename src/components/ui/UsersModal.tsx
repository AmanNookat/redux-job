import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import AOS from "aos";
import "aos/dist/aos.css";
import { logout } from "../../helpers/functions";

const UsersModal = ({ setUsersModal }: any) => {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <div className="users--modal__features rounded-s-3xl bg-[#282834] h-[42rem] w-96 p-4 flex flex-col gap-5 text-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <img
              src="https://avatars.githubusercontent.com/u/139735409?v=4"
              className="w-10 h-10"
              alt=""
            />
            <p className="">K1ndoctop</p>
          </div>
          <p className=" cursor-pointer" onClick={() => setUsersModal(false)}>
            X
          </p>
        </div>
        <ul
          className="flex flex-col gap-3"
          onClick={() => setUsersModal(false)}
        >
          <li
            className=" w-66 h-10  p-3 cursor-pointer rounded-2xl hover:bg-[#111827] duration-300 flex items-center gap-3"
            onClick={() => navigate(`/profiles/${currentUser?.id}`)}
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="fill-gray-500"
            >
              <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
            </svg>
            My profile
          </li>
          <li
            className="w-66 h-10  p-3 cursor-pointer rounded-2xl hover:bg-[#111827] duration-300 flex items-center gap-3"
            onClick={() => navigate("/myPosts")}
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="fill-gray-500"
            >
              <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
            </svg>
            My Post
          </li>
          <li
            className="w-66 h-10  p-3 cursor-pointer rounded-2xl hover:bg-[#111827] duration-300 flex items-center gap-3"
            onClick={() => navigate(`/myProjects/${currentUser?.id}`)}
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="fill-gray-500"
            >
              <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
            </svg>
            My Projects
          </li>

          <li
            className="w-66 h-10  p-3 cursor-pointer rounded-2xl hover:bg-[#111827] duration-300 flex items-center gap-3"
            onClick={() => navigate("/chatrooms")}
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="fill-gray-500"
            >
              <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
            </svg>
            Chats
          </li>
          <NavLink
            className="p-3"
            to="/"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default UsersModal;
