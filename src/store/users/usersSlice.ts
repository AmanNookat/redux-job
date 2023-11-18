import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  status: string;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  status: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default usersSlice.reducer;
