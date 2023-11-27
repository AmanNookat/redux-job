import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/users/usersActions";
import { AppDispatch, RootState } from "../../store/store";
import { Link } from "react-router-dom";
import Error from "../ui/Error";
import ActivateCodeForm from "./ActivateCodeForm";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirm: "",
    phone_number: "",
    type_user: "" as "Human" | "Company",
  });
  const [modal, setModal] = useState(false);

  const { loading, error } = useSelector((state: RootState) => state.users);

  const dispatch: AppDispatch = useDispatch();

  const handleReg = () => {
    for (let key in user) {
      if (!user[key as keyof typeof user].trim()) {
        return alert("Заполните все поля");
      }
    }

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
              <div className="flex items-center h-full w-[95%] mx-auto justify-around flex-wrap">
                <div className="flex flex-col bg-white bg-opacity-70 w-[35rem] rounded-lg items-center p-7 py-14 gap-3">
                  <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                    className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-2 px-1 text-lg font-bold bg-[#D9D9D9] bg-opacity-100"
                  />
                  <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                    className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-2 px-1 text-lg font-bold bg-[#D9D9D9] bg-opacity-100"
                  />
                  <input
                    type="password"
                    placeholder="password_confirm"
                    onChange={(e) => {
                      setUser({ ...user, password_confirm: e.target.value });
                    }}
                    className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-2 px-1 text-lg font-bold bg-[#D9D9D9] bg-opacity-100"
                  />
                  <input
                    type="text"
                    placeholder="phone"
                    onChange={(e) => {
                      setUser({ ...user, phone_number: e.target.value });
                    }}
                    className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-2 px-1 text-lg font-bold bg-[#D9D9D9] bg-opacity-100"
                  />
                  <div className="flex justify-evenly w-full">
                    <select
                      value={user.type_user}
                      onChange={(e) => {
                        setUser({
                          ...user,
                          type_user: e.target.value as "Human" | "Company",
                        });
                      }}
                      className="bg-violet-500 text-white px-5 font-bold cursor-pointer rounded-md"
                    >
                      <option hidden>Select account type</option>
                      <option value="Human" className="hover:bg-violet-900">
                        user
                      </option>
                      <option value="Company" className="hover:bg-violet-900">
                        company
                      </option>
                    </select>
                    <button
                      onClick={handleReg}
                      className="border-4 text-[2rem] text-violet-500 border-violet-500 rounded-xl px-10 text-center hover:bg-violet-500 hover:text-white"
                    >
                      Create
                    </button>
                  </div>
                  <p>
                    Already have account?{" "}
                    <Link to="/sign-in" className="text-blue-600 underline">
                      Sign In
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
                <div className="text-center">
                  <h1 className="text-[6rem] text-white">Register</h1>
                  <h2 className="text-[4rem] text-white">
                    Start with training
                  </h2>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default RegistrationForm;
