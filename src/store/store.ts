import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/usersSlice";
import chatReducer from "./chats/ChatsSlice";
import postReducer from "./posts/postsSlice";
import projectReducer from "./projects/projectsSlice";
import forumReducer from "./forum/forumSlice";
import profilesReducer from "./profiles/profilesSlice";

export const store: any = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: userReducer,
    chats: chatReducer,
    posts: postReducer,
    projects: projectReducer,
    forum: forumReducer,
    profiles: profilesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
