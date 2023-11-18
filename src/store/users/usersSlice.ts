import { createSlice } from "@reduxjs/toolkit";
import { IUserReg } from "./usersTypes";
import { activateCode, registerUser } from "./usersActions";

interface UsersState {
  users: IUserReg[];
  loading: boolean;
  error: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearErrorState: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(activateCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(activateCode.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.navigate("/sign-in");
      })
      .addCase(activateCode.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearErrorState } = usersSlice.actions;
export default usersSlice.reducer;
