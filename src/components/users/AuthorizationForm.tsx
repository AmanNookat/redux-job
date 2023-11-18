import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/users/usersActions";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import Error from "../ui/Error";

const AuthorizationForm = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { loading, error } = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch();
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
            <div className="p-4 w-1/4 gap-y-3 bg-gray-400 flex flex-col">
              <input
                type="text"
                placeholder="email"
                onChange={(e) =>
                  setUserLogin({ ...userLogin, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="password"
                onChange={(e) =>
                  setUserLogin({ ...userLogin, password: e.target.value })
                }
              />
              <button
                // @ts-ignore
                onClick={() => dispatch(loginUser({ userLogin, navigate }))}
              >
                Log In
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AuthorizationForm;
