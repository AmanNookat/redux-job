import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  status: string;
  oneUser: User | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  status: "",
  oneUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearStatusState: (state) => {
      state.status = "";
    },
    clearUserState: (state) => {
      state.oneUser = null;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { clearStatusState, clearUserState } = usersSlice.actions;
export default usersSlice.reducer;
