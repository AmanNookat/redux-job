import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CHATSGPT_API } from "../../helpers/consts";
import { ITokens } from "../users/usersTypes";

export const setChatGpt = createAsyncThunk(
  "gpt/setChatGpt",
  async (message: string) => {
    try {
      const storedData = localStorage.getItem("reduxTokens");
      let tokens: ITokens | null = null;

      if (storedData) {
        tokens = JSON.parse(storedData);
      }

      if (tokens) {
        const Authorization = `Bearer ${tokens.access}`;
        const config = {
          headers: {
            Authorization,
          },
        };
        const { data } = await axios.post(
          `${CHATSGPT_API}`,
          { message },
          config
        );

        return data;
      }
    } catch (error) {
      throw error;
    }
  }
);
