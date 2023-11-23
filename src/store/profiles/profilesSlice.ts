import { createSlice } from "@reduxjs/toolkit";
import { addTokensToLocalStorage, updateTokens } from "../../helpers/functions";
import { getProfiles } from "./profilesActions";

interface ProfilesState {
  loading: boolean;
  error: boolean;
}

const initialState: ProfilesState = {
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
      .addCase(getProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfiles.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getProfiles.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { clearErrorState } = usersSlice.actions;
export default usersSlice.reducer;
