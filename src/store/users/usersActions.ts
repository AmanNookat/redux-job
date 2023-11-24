import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser, IUserActivate, IUserLogin, IUserReg } from "./usersTypes";
import { USERS_API } from "../../helpers/consts";
import axios from "axios";
import { getAccessToken } from "../../helpers/functions";

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

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (
    {
      userLogin,
      navigate,
    }: {
      userLogin: IUserLogin;
      navigate: (value: string) => void;
    },
    { dispatch }
  ) => {
    const formData = new FormData();
    formData.append("email", userLogin.email);
    formData.append("password", userLogin.password);

    localStorage.setItem("reduxEmail", JSON.stringify(userLogin.email));

    const { data } = await axios.post(`${USERS_API}/login/`, formData);

    dispatch(getCurrentUser());
    return { data, navigate };
  }
);

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const { data } = await axios.get(`${USERS_API}/users/`);
  return data;
});

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async () => {
    const storedData = localStorage.getItem("reduxEmail");
    if (storedData) {
      const userEmail = JSON.parse(storedData);
      const { data } = await axios.get(`${USERS_API}/users/`);
      const email = data.find((user: IUser) => user.email === userEmail);
      return email;
    }
  }
);

export const changePassword = createAsyncThunk(
  "users/changePassword",
  async ({ password }: { password: any }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const formData = new FormData();
    formData.append("old_password", password.oldPassword);
    formData.append("new_password", password.newPassword);
    formData.append("new_password_confirm", password.newPasswordConfirm);

    await axios.post(`${USERS_API}/change_password/`, formData, {
      headers: {
        Authorization,
      },
    });

    alert("пароль успешно изменен");
  }
);
