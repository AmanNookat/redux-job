import { createSlice } from "@reduxjs/toolkit";
import { getOneDesc, getOnePost, getPosts } from "./postsAction";

interface PostsState {
  posts: [];
  onePost: null;
  oneDesc: null;
  loading: boolean;
  error: boolean;
}

const initialState: PostsState = {
  posts: [],
  onePost: null,
  oneDesc: null,
  loading: false,
  error: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearOnePost: (state) => {
      state.onePost = null;
    },
    clearOneDesc: (state) => {
      state.oneDesc = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(getOnePost.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getOnePost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.onePost = action.payload;
      })
      .addCase(getOnePost.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getOneDesc.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getOneDesc.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.oneDesc = action.payload;
      })
      .addCase(getOneDesc.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { clearOnePost, clearOneDesc } = postsSlice.actions;
export default postsSlice.reducer;
