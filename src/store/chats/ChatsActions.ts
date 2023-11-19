import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CHATS_API } from "../../helpers/consts";
import { IChatRoom } from "./ChatsTypes";
import { getAccessToken } from "../../helpers/functions";

export const getChatrooms = createAsyncThunk("chats/getChatrooms", async () => {
  const { data } = await axios.get(`${CHATS_API}/chatrooms/`);
  return data;
});

// export const createChatroom = createAsyncThunk(
//   "chats/createChatroom",
//   async ({ chatroom }: { chatroom: IChatRoom }) => {
//     const formData = new FormData();
//     console.log(chatroom);

//     formData.append("title", chatroom.title);
//     // @ts-ignore
//     formData.append("participants", chatroom.participants);

//     const Authorization = `Bearer ${getAccessToken()}`;
//     await axios.post(`${CHATS_API}/chatrooms/`, {
//       headers: { Authorization, "Content-Type": "application/json" },
//     });

//     alert("комната чата создана");
//   }
// );

export const createChatroom = createAsyncThunk(
  "chats/createChatroom",
  async ({ chatroom }: { chatroom: IChatRoom }) => {
    const formData = new FormData();

    formData.append("title", chatroom.title);
    formData.append("participants", chatroom.participants.toString());

    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.post(`${CHATS_API}/chatrooms/`, formData, {
      headers: {
        Authorization,
      },
    });

    alert("Chat room created");
  }
);
