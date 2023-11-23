import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PROFILES_API } from "../../helpers/consts";

export const getProfiles = createAsyncThunk("tasks/getProfiles", async () => {
  const { data } = await axios.get(PROFILES_API);
  return { data };
});

export const getOneTask = createAsyncThunk(
  "tasks/getOneTask",
  async ({ id }) => {
    const { data } = await axios.get(`${PROFILES_API}/${id}`);
    return data;
  }
);

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async ({ profile }, { dispatch }) => {
    await axios.patch(`${PROFILES_API}/${profile.id}`, profile);
    dispatch(getProfiles());
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${PROFILES_API}/${id}`);
    dispatch(getProfiles());
  }
);
