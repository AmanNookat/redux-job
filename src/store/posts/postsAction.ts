import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await axios.get(`${POSTS_API}/comp_post/`);
  return data;
});

export const getOnePost = createAsyncThunk("posts/getOnePost", async () => {
  const { data } = await axios.get(`${POSTS_API}/`);
});
