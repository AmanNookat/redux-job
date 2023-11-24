import { createSlice } from "@reduxjs/toolkit";
import { getOneProject, getProjects } from "./projectsActions";
import { IProject } from "./projectsTypes";

interface IProjects {
  projects: IProject[];
  oneProject: IProject | null;
  loading: boolean;
  error: boolean;
}

const initialState: IProjects = {
  projects: [],
  oneProject: null,
  loading: false,
  error: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //? get projects
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload.reverse();
      })
      .addCase(getProjects.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      //? get one projects
      .addCase(getOneProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneProject.fulfilled, (state, action) => {
        state.loading = false;
        state.oneProject = action.payload;
      })
      .addCase(getOneProject.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

// export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
