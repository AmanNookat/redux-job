import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";
import { ITokens } from "./postTypes";
import App from "../../App";

const API = [
  `${POSTS_API}/comp_post/`,
  `${POSTS_API}/comp_vacancy/`,
  `${POSTS_API}/post/`,
  `${POSTS_API}/add_comp_post/`,
  `${POSTS_API}/add_comp_vac/`,
  `${POSTS_API}/add_user_post/`,
];

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
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (type: number) => {
    localStorage.setItem("typePost", JSON.stringify(type));
    const config: any = postToken();
    const { data } = await axios.get(`${API[type]}`, config);
    return data.results;
  }
);

//!

export const getOnePost = createAsyncThunk(
  "posts/getOnePost",
  async (id: number) => {
    const typeLS = localStorage.getItem("typePost");
    const type: number = typeLS ? parseInt(typeLS) : 0;
    const config: any = postToken();
    const { data } = await axios.get(`${API[type]}${id}`, config);
    return data;
  }
);

//!

export const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ post, type }: { post: object; type: number }) => {
    const config: any = postToken();
    await axios.post(`${API[type]}`, post, config);
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: number, { dispatch }) => {
    const typeLS = localStorage.getItem("typePost");
    const type: number = typeLS ? parseInt(typeLS) : 0;
    const config: any = postToken();
    await axios.delete(`${API[type]}${id}`, config);
    dispatch(getPosts(type));
  }
);

export const editPostFunc = createAsyncThunk(
  "posts/editPost",
  async ({ id, post }: { id: number; post: object }, { dispatch }) => {
    const typeLS = localStorage.getItem("typePost");
    const type: number = typeLS ? parseInt(typeLS) : 0;
    const config: any = postToken();
    await axios.patch(`${API[type]}${id}/`, post, config);
    dispatch(getPosts(type));
  }
);

export const addDesc = createAsyncThunk(
  "posts/addDesc",
  async ({ id, post }: { id: number; post: object }, { dispatch }) => {
    const typeL: number = localStorage.getItem("typePost")
      ? parseInt(localStorage.getItem("typePost")!, 10)
      : 0;
    const type = typeL + 3;
    const config: any = postToken();
    await axios.post(`${API[type]}`, post, config);
    dispatch(getOnePost(id));
  }
);

export const getOneDesc = createAsyncThunk(
  "posts/getOneDesc",
  async (id: number) => {
    const typeL: number = localStorage.getItem("typePost")
      ? parseInt(localStorage.getItem("typePost")!, 10)
      : 0;
    const type = typeL + 3;
    const config: any = postToken();
    const { data } = await axios.get(`${API[type]}${id}`, config);
    return data;
  }
);

export const editDesc = createAsyncThunk(
  "posts/editPost",
  async ({ id, desc }: { id: number; desc: object }, { dispatch }) => {
    const typeL: number = localStorage.getItem("typePost")
      ? parseInt(localStorage.getItem("typePost")!, 10)
      : 0;
    const type = typeL + 3;
    const config: any = postToken();

    await axios.patch(`${API[type]}${id}/`, desc, config);
    dispatch(getOnePost(id));
  }
);

export const deleteDesc = createAsyncThunk(
  "posts/deleteDesc",
  async ({ id, postId }: { id: number; postId: number }, { dispatch }) => {
    const typeL: number = localStorage.getItem("typePost")
      ? parseInt(localStorage.getItem("typePost")!, 10)
      : 0;
    const type = typeL + 3;
    const config: any = postToken();

    await axios.delete(`${API[type]}${id}/`, config);
    dispatch(getOnePost(postId));
  }
);
