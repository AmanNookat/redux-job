import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import style from "./navbar.module.css";

const UsersModal = () => {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state: RootState) => state.users);

  return (
    <div className={style.usermodal} >
      <div
        className="users--modal__features bg-black p-4"
      >
        <p
          className="bg-[#111827] w-36 p-3 cursor-pointer rounded-t-2xl hover:bg-[#233050] duration-300"
          onClick={() => navigate(`/profiles/${currentUser?.id}`)}
        >
          My profile
        </p>
        <p
          className="bg-[#111827] w-36 p-3 cursor-pointer hover:bg-[#233050] duration-300"
          onClick={() => navigate("/myPosts")}
        >
          My Post
        </p>
        <p
          className="bg-[#111827] w-36 p-3 cursor-pointer hover:bg-[#233050] duration-300"
          onClick={() => navigate(`/myProjects/${currentUser?.id}`)}
        >
          My Projects
        </p>

        <p
          className="bg-[#111827] w-36 p-3 cursor-pointer hover:bg-[#233050] duration-300"
          onClick={() => navigate("/myResume")}
        >
          Resume
        </p>
        <p
          className="bg-[#111827] w-36 p-3 cursor-pointer rounded-b-2xl hover:bg-[#233050] duration-300"
          onClick={() => navigate("/chatrooms")}
        >
          Chats
        </p>
      </div>  
    </div>
  );
};

export default UsersModal;
