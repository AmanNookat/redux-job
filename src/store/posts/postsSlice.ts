import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAction";

interface PostsState {
  posts: [];
  onePost: null;
  loading: boolean;
  error: boolean;
}

const initialState: PostsState = {
  posts: [],
  onePost: null,
  loading: false,
  error: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
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
      });
  },
});
