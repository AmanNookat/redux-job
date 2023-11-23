import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";
import { getAccessToken } from "../../helpers/functions";

export const getForumPosts = createAsyncThunk(
  "forum/getForumPosts",
  async () => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const { data } = await axios.get(`${POSTS_API}/forum/`, {
      headers: {
        Authorization,
      },
    });
    console.log(data);
    return data;
  }
);

export const addForumPost = createAsyncThunk(
  "forum/addForumPost",
  async ({ forumPost }: { forumPost: any }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const formData = new FormData();

    formData.append("name", forumPost.name);
    formData.append("description", forumPost.description);
    formData.append("file", forumPost.file);

    await axios.post(`${POSTS_API}/forum/`, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch(getForumPosts());
  }
);

export const getOneForumPost = createAsyncThunk(
  "forum/getOneForumPost",
  async ({ id }: { id: any }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const { data } = await axios.get(`${POSTS_API}/forum/${id}/`, {
      headers: {
        Authorization,
      },
    });
    return data;
  }
);

export const deleteForumPost = createAsyncThunk(
  "forum/deleteForumPost",
  async ({ id }: { id: any }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.delete(`${POSTS_API}/forum/${id}/`, {
      headers: {
        Authorization,
      },
    });
    dispatch(getForumPosts());
  }
);

// if (typeof project.image_project === "string") {
//     fetch(project.image_project)
//       .then((response) => response.blob())
//       .then((blob) => {
//         new File([blob], "filename.png", { type: "image/png" });
//       })
//       .catch((error) =>
//         console.error("Ошибка при загрузке изображения:", error)
//       );

export const editForumPost = createAsyncThunk(
  "forum/editForumPost",
  async ({ forumPost, id }: { forumPost: any; id: any }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    console.log(forumPost);

    const formData = new FormData();

    formData.append("name", forumPost.name);
    formData.append("description", forumPost.description);

    if (typeof forumPost.file === "string") {
      fetch(forumPost.file)
        .then((response) => response.blob())
        .then((blob) => {
          new File([blob], "filename.png", { type: "image/png" });
        })
        .catch((error) =>
          console.error("Ошибка при загрузке изображения:", error)
        );
    } else {
      formData.append("file", forumPost.file);
    }

    await axios.patch(`${POSTS_API}/forum/${id}/`, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch(getForumPosts());
  }
);
