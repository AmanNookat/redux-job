import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserActivate, IUserReg } from "./usersTypes";
import { USERS_API } from "../../helpers/consts";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "users/registerUsers",
  async ({ user }: { user: IUserReg }) => {
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("password_confirm", user.password_confirm);
    formData.append("phone_number", user.phone_number);
    formData.append("type_user", user.type_user);

    await axios.post(`${USERS_API}/register/`, formData);
    alert("Регистрация прошла успешно");
  }
);

export const activateCode = createAsyncThunk(
  "users/activateCode",
  async ({
    userActivate,
    navigate,
  }: {
    userActivate: IUserActivate;
    navigate: (value: string) => void;
  }) => {
    const formData = new FormData();
    formData.append("email", userActivate.email);
    formData.append("code", userActivate.code);

    await axios.post(`${USERS_API}/activate_code/`, formData);
    alert("Аккаунт активирован");
    return { navigate };
  }
);
