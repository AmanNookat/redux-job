import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";
import { ITokens } from "./postTypes";

const API = ["/comp_post/", "/comp_vacancy/", "/er_code/", "/forum/", "/post/"];

function postToken() {
  const storedData = localStorage.getItem("reduxTokens");
  let tokens: ITokens | null = null;

  if (storedData) {
    tokens = JSON.parse(storedData);
  }

  if (tokens) {
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    return config;
  }
}

//!

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const config: any = postToken();
  const { data } = await axios.get(`${POSTS_API}/comp_post/`, config);
  return data;
});

//!

export const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ newPost, type }: { newPost: object; type: number }) => {
    const config: any = postToken();
    console.log(config);

    await axios.post(`${POSTS_API}/comp_post/`, newPost, config);
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ id, type }: { id: number; type: number }) => {
    await axios.delete(`${POSTS_API}/comp_post/${id}/`);
  }
);
