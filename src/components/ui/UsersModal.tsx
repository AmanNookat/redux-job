import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

const UsersModal = () => {
  const navigate = useNavigate();

  const { oneProfile, loading } = useSelector(
    (state: RootState) => state.profile
  );
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="users--modal__features"
      >
        <a
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/profile/${oneProfile?.id}`)}
        >
          My profile
        </a>
        <a href="">Your Post</a>
        <a href="">Your Projects</a>
        <a href="">Resume</a>
        <a href="">Chats</a>
      </div>
      <br />
      <div className="">
        <a href="">Sign In</a>
      </div>
    </div>
  );
};

export default UsersModal;
