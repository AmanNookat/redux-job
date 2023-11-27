import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

const UsersModal = () => {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state: RootState) => state.users);

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="users--modal__features"
      >
        <p
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/profiles/${currentUser?.id}`)}
        >
          My profile
        </p>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/myPosts")}>
          My Post
        </p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/myProjects")}
        >
          My Projects
        </p>
        <p style={{ cursor: "pointer" }} onClick={() => navigate("/myResume")}>
          Resume
        </p>
        <p>Chats</p>
      </div>
    </div>
  );
};

export default UsersModal;
