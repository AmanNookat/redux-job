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
  async ({ project }: { project: IProject }) => {
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
  }
);
