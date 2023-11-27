import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PROJECTS_API } from "../../helpers/consts";
import { getAccessToken } from "../../helpers/functions";
import { IProject } from "./projectsTypes";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    const Authorization = `Bearer ${getAccessToken()}`;
    const { data } = await axios.get(`${PROJECTS_API}/project`, {
      headers: { Authorization },
    });

    return data;
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async ({ project }: { project: IProject }, { dispatch }) => {
    const formData = new FormData();

    formData.append("name_project", project.name_project);
    formData.append("description", project.description);
    formData.append("link", project.link);
    formData.append("image_project", project.image_project);

    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.post(`${PROJECTS_API}/project/`, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(getProjects());
  }
);

export const getOneProject = createAsyncThunk(
  "projects/getOneProject",
  async ({ id }: { id: number | string | undefined }) => {
    const Authorization = `Bearer ${getAccessToken()}`;
    const { data } = await axios.get(`${PROJECTS_API}/project/${id}`, {
      headers: {
        Authorization,
      },
    });
    return data;
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async ({ id }: { id: number | string | undefined }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;
    await axios.delete(`${PROJECTS_API}/project/${id}`, {
      headers: {
        Authorization,
      },
    });
    dispatch(getProjects());
  }
);

export const editProject = createAsyncThunk(
  "projects/editProjects",
  async ({ project }: { project: IProject }, { dispatch }) => {
    const formData = new FormData();

    formData.append("name_project", project.name_project);
    formData.append("description", project.description);
    formData.append("link", project.link);

    if (typeof project.image_project === "string") {
      fetch(project.image_project)
        .then((response) => response.blob())
        .then((blob) => {
          new File([blob], "filename.png", { type: "image/png" });
        })
        .catch((error) =>
          console.error("Ошибка при загрузке изображения:", error)
        );
    } else {
      formData.append("image_project", project.image_project);
    }

    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.patch(`${PROJECTS_API}/project/${project.id}/`, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(getProjects());
  }
);
