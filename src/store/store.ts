import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/usersSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
