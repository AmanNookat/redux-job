import { createSlice } from "@reduxjs/toolkit";
import { createChatroom, getChatrooms, getOneChat } from "./ChatsActions";
import { IChat } from "./ChatsTypes";

interface ChatsState {
  chats: [];
  chatroom: null | IChat;
  loading: boolean;
  error: boolean;
}

const initialState: ChatsState = {
  chats: [],
  chatroom: null,
  loading: false,
  error: false,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    clearErrorState: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //? get chatrooms
      .addCase(getChatrooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChatrooms.fulfilled, (state, action) => {
        state.loading = false;
        state.chats = action.payload;
      })
      .addCase(getChatrooms.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      //? add chatroom
      .addCase(createChatroom.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChatroom.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createChatroom.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      //? get one chat
      .addCase(getOneChat.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneChat.fulfilled, (state, action) => {
        state.loading = false;
        state.chatroom = action.payload;
      })
      .addCase(getOneChat.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { clearErrorState } = chatsSlice.actions;
export default chatsSlice.reducer;
