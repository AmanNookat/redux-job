import { createSlice } from "@reduxjs/toolkit";
import { getChatrooms } from "./ChatsActions";

interface ChatsState {
  chats: [];
  loading: boolean;
  error: boolean;
}

const initialState: ChatsState = {
  chats: [],
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
      });
  },
});

export const { clearErrorState } = chatsSlice.actions;
export default chatsSlice.reducer;
