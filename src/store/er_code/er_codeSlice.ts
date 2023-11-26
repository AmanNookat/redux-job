import { createSlice } from "@reduxjs/toolkit";
import { getEr_codePosts, getOneEr_codePost } from "./er_codeActions";

interface IEr_code {
  er_codePosts: IEr_codePost[];
  er_codeOnePost: IEr_codePost | null;
  loading: boolean;
  error: boolean;
}

export interface IEr_codePost {
  name: string;
  id?: number;
  user?: string;
  description: string;
  file: File | null | string | undefined;
}

const initialState: IEr_code = {
  er_codePosts: [],
  er_codeOnePost: null,
  loading: false,
  error: false,
};

const er_codeSlice = createSlice({
  name: "er_code",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEr_codePosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEr_codePosts.fulfilled, (state, action) => {
        state.loading = false;
        state.er_codePosts = action.payload;
      })
      .addCase(getEr_codePosts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getOneEr_codePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneEr_codePost.fulfilled, (state, action) => {
        state.loading = false;
        state.er_codeOnePost = action.payload;
      })
      .addCase(getOneEr_codePost.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default er_codeSlice.reducer;
