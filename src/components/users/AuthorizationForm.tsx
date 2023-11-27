import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/users/usersActions";
import { AppDispatch, RootState } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";
import Error from "../ui/Error";

const AuthorizationForm = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { loading, error } = useSelector((state: RootState) => state.users);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <Error />
          ) : (
            <div className="flex items-center h-full w-full mx-auto justify-around flex-wrap">
              <div className="text-center">
                <h1 className="text-[5rem]">Authorization</h1>
                <h2 className="text-[3rem]">See you at the top</h2>
              </div>
              <form className="flex flex-col bg-white bg-opacity-70 w-[27rem] rounded-lg items-center p-7 py-14 gap-3 gap-y-10">
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, email: e.target.value })
                  }
                  className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-3 px-1 text-xl font-bold bg-[#D9D9D9] "
                />
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, password: e.target.value })
                  }
                  className="border-gray-400 border-8 outline-none rounded-2xl w-[90%] py-3 px-1 text-xl font-bold bg-[#D9D9D9] "
                />
                <button
                  onClick={() => {
                    dispatch(loginUser({ userLogin, navigate }));
                  }}
                  className="border-4 font-jomhuria text-4xl text-violet-500 border-violet-500 w-[90%] rounded-xl px-10 text-center hover:bg-violet-500 hover:text-white"
                >
                  Log In
                </button>
                <p>
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-blue-600 underline">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AuthorizationForm;
