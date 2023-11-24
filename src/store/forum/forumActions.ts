import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FORUM_COMMENTS_API, POSTS_API } from "../../helpers/consts";
import { getAccessToken } from "../../helpers/functions";
import { IForumPost, IForumPostComment } from "./forumSlice";

export const getForumPosts = createAsyncThunk(
  "forum/getForumPosts",
  async () => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const { data } = await axios.get(`${POSTS_API}/forum/`, {
      headers: {
        Authorization,
      },
    });
    return data;
  }
);

export const addForumPost = createAsyncThunk(
  "forum/addForumPost",
  async ({ forumPost }: { forumPost: IForumPost }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const formData = new FormData();

    formData.append("name", forumPost.name);
    formData.append("description", forumPost.description);
    formData.append("file", forumPost.file!);

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
  async ({ id }: { id: number }) => {
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
  async ({ id }: { id: number }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.delete(`${POSTS_API}/forum/${id}/`, {
      headers: {
        Authorization,
      },
    });
    dispatch(getForumPosts());
  }
);

export const editForumPost = createAsyncThunk(
  "forum/editForumPost",
  async (
    { forumPost, id }: { forumPost: IForumPost; id: number },
    { dispatch }
  ) => {
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
      formData.append("file", forumPost.file!);
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

export const addCommentToForumPost = createAsyncThunk(
  "forum/addCommentToForumPost",
  async ({ comment }: { comment: IForumPostComment }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const formData = new FormData();

    formData.append("body", comment.body);
    formData.append("forum", JSON.stringify(comment.forum));

    await axios.post(`${FORUM_COMMENTS_API}/`, formData, {
      headers: {
        Authorization,
      },
    });

    dispatch(getOneForumPost({ id: comment.forum }));
  }
);

export const deleteCommentFromForumPost = createAsyncThunk(
  "forum/deleteCommentFromForumPost",
  async (
    { id, commentId }: { id: number; commentId: number },
    { dispatch }
  ) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.delete(`${FORUM_COMMENTS_API}/${commentId}/`, {
      headers: {
        Authorization,
      },
    });

    dispatch(getOneForumPost({ id }));
  }
);

export const editForumPostComment = createAsyncThunk(
  "forum/editForumPostComment",
  async (
    {
      id,
      commentId,
      commentBody,
    }: { id: number; commentBody: string; commentId: number },
    { dispatch }
  ) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const formData = new FormData();

    formData.append("body", commentBody);

    await axios.patch(`${FORUM_COMMENTS_API}/${commentId}/`, formData, {
      headers: {
        Authorization,
      },
    });

    dispatch(getOneForumPost({ id }));
  }
);
