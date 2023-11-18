import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/users/usersActions";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import Error from "../ui/Error";
import ActivateCodeForm from "./ActivateCodeForm";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirm: "",
    phone_number: "",
    type_user: "",
  });
  const [modal, setModal] = useState(false);

  const { loading, error } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();

  const handleReg = () => {
    for (let key in user) {
      if (!user[key as keyof typeof user].trim()) {
        return alert("Заполните все поля");
      }
    }

    // @ts-ignore
    dispatch(registerUser({ user }));
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <Error />
          ) : (
            <>
              {modal && <ActivateCodeForm setModal={setModal} />}
              <div className="p-4 w-1/4 gap-y-3 bg-gray-400 flex flex-col">
                <input
                  type="text"
                  placeholder="email"
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="password_confirm"
                  onChange={(e) => {
                    setUser({ ...user, password_confirm: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="phone"
                  onChange={(e) => {
                    setUser({ ...user, phone_number: e.target.value });
                  }}
                />
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setUser({ ...user, type_user: e.target.value });
                  }}
                >
                  <option hidden>account type</option>
                  <option value="Human">user</option>
                  <option value="Company">company</option>
                </select>
                <button onClick={handleReg}>Create</button>
                <p>
                  Already have account?{" "}
                  <Link to="/sign-in" className="text-blue-600 underline">
                    Log In
                  </Link>
                </p>
                <button
                  onClick={() => {
                    setModal(true);
                  }}
                  className="bg-violet-500 text-white p-2 rounded-md hover:bg-violet-700"
                >
                  Activate code
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default RegistrationForm;
