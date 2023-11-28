import { createSlice } from "@reduxjs/toolkit";
import { getOneDesc, getOnePost, getPosts } from "./postsAction";
import { IPost } from "./postTypes";

interface PostsState {
  posts: IPost[];
  onePost: null | IPost;
  oneDesc: null;
  loading: boolean;
  error: boolean;
  search: string;
  currentPage: number;
  totalPages: number;
  modalPost: boolean;
}

const initialState: PostsState = {
  posts: [],
  onePost: null,
  oneDesc: null,
  loading: false,
  error: false,
  search: "",
  currentPage: 1,
  totalPages: 1,
  modalPost: false,
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
    setSearchVal: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload.page;
      console.log(state.currentPage);
    },
    modalPostCreate: (state) => {
      state.modalPost = !state.modalPost;
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
        state.posts = action.payload.filteredData;
        state.totalPages = action.payload.totalPages!;
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

export const {
  clearOnePost,
  clearOneDesc,
  setSearchVal,
  modalPostCreate,
  changePage,
} = postsSlice.actions;
export default postsSlice.reducer;
