import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS_API } from "../../helpers/consts";
import { getAccessToken } from "../../helpers/functions";
import axios from "axios";
import { IEr_codePost } from "./er_codeSlice";

export const getEr_codePosts = createAsyncThunk(
  "er_code/getErCodePosts",
  async () => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const { data } = await axios.get(`${POSTS_API}/er_code/`, {
      headers: {
        Authorization,
      },
    });
    return data.results;
  }
);

export const addEr_codePost = createAsyncThunk(
  "forum/addForumPost",
  async ({ er_codePost }: { er_codePost: IEr_codePost }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const formData = new FormData();

    formData.append("name", er_codePost.name);
    formData.append("description", er_codePost.description);
    formData.append("file", er_codePost.file!);

    await axios.post(`${POSTS_API}/er_code/`, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch(getEr_codePosts());
  }
);

export const getOneEr_codePost = createAsyncThunk(
  "er_code/getOneEr_codePost",
  async ({ id }: { id: number }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const { data } = await axios.get(`${POSTS_API}/er_code/${id}/`, {
      headers: {
        Authorization,
      },
    });
    return data;
  }
);

export const deleteEr_codePost = createAsyncThunk(
  "er_code/deleteEr_codePost",
  async ({ id }: { id: number }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.delete(`${POSTS_API}/er_code/${id}/`, {
      headers: {
        Authorization,
      },
    });
    dispatch(getEr_codePosts());
  }
);

export const editEr_codePost = createAsyncThunk(
  "er_code/editEr_codePost",
  async (
    { er_codePost, id }: { er_codePost: IEr_codePost; id: number },
    { dispatch }
  ) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    console.log(er_codePost);

    const formData = new FormData();

    formData.append("name", er_codePost.name);
    formData.append("description", er_codePost.description);

    if (typeof er_codePost.file === "string") {
      fetch(er_codePost.file)
        .then((response) => response.blob())
        .then((blob) => {
          new File([blob], "filename.png", { type: "image/png" });
        })
        .catch((error) =>
          console.error("Ошибка при загрузке изображения:", error)
        );
    } else {
      formData.append("file", er_codePost.file!);
    }

    await axios.patch(`${POSTS_API}/forum/${id}/`, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch(getEr_codePosts());
  }
);
