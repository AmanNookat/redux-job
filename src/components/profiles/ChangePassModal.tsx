import React, { useState } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { changePassword } from "../../store/users/usersActions";

const ChangePassModal = ({ setModal }: any) => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="flex fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/30">
      <div
        className="m-auto bg-white p-16 rounded-lg flex flex-col text-center items-center gap-5 w-[30rem]"
        style={{ position: "relative" }}
      >
        <button
          style={{
            position: "absolute",
            right: "15px",
            top: "10px",
          }}
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
        <input
          placeholder="old password"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, oldPassword: e.target.value })
          }
        />
        <input
          placeholder="new password"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, newPassword: e.target.value })
          }
        />
        <input
          placeholder="confirm new password"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, newPasswordConfirm: e.target.value })
          }
        />
        <button
          onClick={() => {
            dispatch(changePassword({ password }));
            setModal(false);
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ChangePassModal;
