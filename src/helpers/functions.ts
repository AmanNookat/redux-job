import { ITokens } from "../store/users/usersTypes";
import { USERS_API } from "./consts";
import axios from "axios";

export const addTokensToLocalStorage = (tokens: ITokens) => {
  localStorage.setItem("reduxTokens", JSON.stringify(tokens));
};

export const logout = () => {
  localStorage.removeItem("reduxTokens");
};

export const checkUserLogin = () => {
  const storedData = localStorage.getItem("reduxTokens");
  let tokens;
  if (storedData) {
    tokens = JSON.parse(storedData);
  }
  if (tokens) return true;
  return false;
};

export const updateTokens = () => {
  let updateFunc: NodeJS.Timer | null = setInterval(async () => {
    const storedTokens = localStorage.getItem("reduxTokens");

    if (!storedTokens) {
      if (updateFunc !== null) {
        clearInterval(updateFunc);
      }
      return;
    }

    const tokens = JSON.parse(storedTokens);

    if (!tokens) {
      if (updateFunc !== null) {
        clearInterval(updateFunc);
      }
      return;
    }

    const Authorization = `Bearer ${tokens.access}`;

    const response = await axios.post(
      `${USERS_API}/refresh/`,
      { refresh: tokens.refresh },
      { headers: { Authorization } }
    );

    localStorage.setItem(
      "reduxTokens",
      JSON.stringify({
        refresh: tokens.refresh,
        access: response.data.access,
      })
    );
  }, 1000 * 60 * 60 * 12);

  return updateFunc;
};

export const getAccessToken = () => {
  const storedTokens = localStorage.getItem("reduxTokens");
  if (!storedTokens) return;
  const tokens = JSON.parse(storedTokens);
  return tokens.access;
};
