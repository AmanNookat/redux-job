import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/usersSlice";
import chatReducer from "./chats/ChatsSlice";
import postReducer from "./posts/postsSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: userReducer,
    chats: chatReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
