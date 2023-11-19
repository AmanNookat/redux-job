import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CHATS_API } from "../../helpers/consts";

export const getChatrooms = createAsyncThunk("chats/getChatrooms", async () => {
  const { data } = await axios.get(`${CHATS_API}/chatrooms/`);

  return data.results;
});
