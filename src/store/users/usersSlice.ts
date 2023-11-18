import { createSlice } from "@reduxjs/toolkit";
import { activateCode, loginUser, registerUser } from "./usersActions";
import { addTokensToLocalStorage, updateTokens } from "../../helpers/functions";

interface UsersState {
  loading: boolean;
  error: boolean;
}

const initialState: UsersState = {
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
      //? registration
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
      //? aactivateCode
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
      })
      //? authorization
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        addTokensToLocalStorage(action.payload.data);
        updateTokens();
        action.payload.navigate("/");
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearErrorState } = usersSlice.actions;
export default usersSlice.reducer;
