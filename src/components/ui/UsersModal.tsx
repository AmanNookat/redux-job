import React from "react";

const UsersModal = () => {
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="users--modal__features"
      >
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
