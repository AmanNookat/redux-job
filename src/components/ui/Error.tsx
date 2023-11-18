import React from "react";
import { useDispatch } from "react-redux";
import { clearErrorState } from "../../store/users/usersSlice";
import astro from "./../../assets/astro.png";

const Error = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>
        <img
          src={astro}
          alt=""
          width="300"
          height="auto"
          className="astronaut-img my-5"
        />
        <p className="mt-4 text-gray-500">Что-то пошло не так.</p>
      </div>
      <button
        onClick={() => {
          dispatch(clearErrorState());
        }}
        className="bg-blue-500 py-2 rounded-md w-[100px] mx-auto mt-2"
      >
        Назад
      </button>
    </div>
  );
};

export default Error;
