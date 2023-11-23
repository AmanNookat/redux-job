import { createSlice } from "@reduxjs/toolkit";
import { getForumPosts, getOneForumPost } from "./forumActions";

interface IForum {
  forumPosts: any;
  forumOnePost: any;
  loading: boolean;
  error: boolean;
}

const initialState: IForum = {
  forumPosts: [],
  forumOnePost: null,
  loading: false,
  error: false,
};

const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //? get all forum post
      .addCase(getForumPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getForumPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.forumPosts = action.payload;
      })
      .addCase(getForumPosts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      //? get one forum post
      .addCase(getOneForumPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneForumPost.fulfilled, (state, action) => {
        state.loading = false;
        state.forumOnePost = action.payload;
      })
      .addCase(getOneForumPost.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default forumSlice.reducer;
