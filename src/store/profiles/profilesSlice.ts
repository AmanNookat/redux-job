import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "./profilesTypes";
import {
  getCompaniesProfiles,
  getOneProfile,
  getUsersProfiles,
} from "./profilesActions";

interface IProjects {
  profiles: IProfile[];
  oneProfile: IProfile | null;
  loading: boolean;
  error: boolean;
}

const initialState: IProjects = {
  profiles: [],
  oneProfile: null,
  loading: false,
  error: false,
};

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //? гет на Профили Юзеров
      .addCase(getUsersProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = action.payload;
      })
      .addCase(getUsersProfiles.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      //? гет на Профили Компаний
      .addCase(getCompaniesProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCompaniesProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = action.payload;
      })
      .addCase(getCompaniesProfiles.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      //? get one projects
      .addCase(getOneProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.oneProfile = action.payload;
      })
      .addCase(getOneProfile.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// export const {} = projectsSlice.actions;
export default profilesSlice.reducer;
