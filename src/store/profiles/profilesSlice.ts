import { createSlice } from "@reduxjs/toolkit";
import { IProfile } from "./profilesTypes";
import { getOneProfile, getProfiles } from "./profilesActions";

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
      //? get projects
      .addCase(getProfiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = action.payload.reverse();
      })
      .addCase(getProfiles.rejected, (state) => {
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
