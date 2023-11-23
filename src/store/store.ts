import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/usersSlice";
import chatReducer from "./chats/ChatsSlice";
import projectReducer from "./projects/projectsSlice";
import forumReducer from "./forum/forumSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: userReducer,
    chats: chatReducer,
    projects: projectReducer,
    forum: forumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
