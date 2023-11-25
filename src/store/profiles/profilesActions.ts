import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PROFILES_API, RESUME_API } from "../../helpers/consts";
import { getAccessToken } from "../../helpers/functions";
import { IProfile } from "./profilesTypes";
import { getCurrentUser } from "../users/usersActions";
import { RootState } from "../store";

export const getUsersProfiles = createAsyncThunk(
  "profiles/getUsersProfiles",
  async () => {
    const Authorization = `Bearer ${getAccessToken()}`;
    const { data } = await axios.get(`${PROFILES_API}/user_profiles`, {
      headers: { Authorization },
    });

    return data;
  }
);

export const getCompaniesProfiles = createAsyncThunk(
  "profiles/getCompaniesProfiles",
  async () => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const { data } = await axios.get(`${PROFILES_API}/company_profiles`, {
      headers: { Authorization },
    });

    return data;
  }
);

export const getOneProfile = createAsyncThunk(
  "profiles/getOneProfile",
  async ({ user }: { user: number }, { getState, dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    await dispatch(getCurrentUser());

    const { currentUser } = (getState() as RootState).users;

    let profiles;

    if (currentUser?.type_user === "Human") {
      const { data } = await axios.get(
        `${PROFILES_API}/user_profiles/${user}`,
        {
          headers: { Authorization },
        }
      );
      profiles = data;
    } else {
      const { data } = await axios.get(
        `${PROFILES_API}/company_profiles/${user}`,
        {
          headers: { Authorization },
        }
      );
      profiles = data;
    }

    return profiles;
  }
);

export const editprofile = createAsyncThunk(
  "profiles/editProfiles",
  async ({ profile }: { profile: IProfile }, { dispatch }) => {
    const formData = new FormData();

    formData.append("languages", profile.languages);
    formData.append("programming_languages", profile.programming_languages);
    formData.append("education", profile.education);
    formData.append("stack", profile.stack);
    formData.append("about", profile.about);
    formData.append("age", profile.age);
    formData.append("work_experience", profile.work_experience);
    formData.append("achievments", profile.achievments);
    formData.append("profile_image", profile.profile_image);

    if (typeof profile.profile_image === "string") {
      fetch(profile.profile_image)
        .then((response) => response.blob())
        .then((blob) => {
          new File([blob], "filename.png", { type: "image/png" });
        })
        .catch((error) =>
          console.error("Ошибка при загрузке изображения:", error)
        );
    } else {
      formData.append("image_profile", profile.profile_image);
    }

    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.patch(`${PROFILES_API}/${profile.id}/`, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(getCompaniesProfiles());
    dispatch(getUsersProfiles());
  }
);

export const createProfile = createAsyncThunk(
  "profiles/createProfile",
  async ({ profile }: { profile: IProfile }) => {
    const formData = new FormData();

    formData.append("languages", profile.languages);
    formData.append("programming_languages", profile.programming_languages);
    formData.append("education", profile.education);
    formData.append("stack", profile.stack);
    formData.append("about", profile.about);
    formData.append("age", profile.age);
    formData.append("work_experience", profile.work_experience);
    formData.append("achievments", profile.achievments);
    formData.append("profile_image", profile.profile_image);

    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.post(PROFILES_API, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });
  }
);

export const deleteprofile = createAsyncThunk(
  "profiles/deleteProfile",
  async ({ id }: { id: any }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;
    await axios.delete(`${PROFILES_API}/${id}`, {
      headers: {
        Authorization,
      },
    });
    dispatch(getCompaniesProfiles());
    dispatch(getUsersProfiles());
  }
);

export const uploadResumeFile = createAsyncThunk(
  "profiles/uploadResumeFile",
  async (
    { resumeFile, id }: { resumeFile: File; id: number },
    { dispatch }
  ) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const formData = new FormData();

    formData.append("id", JSON.stringify(id));
    formData.append("upload_file", resumeFile);

    await axios.post(`${RESUME_API}/other_resume/`, formData, {
      headers: {
        Authorization,
        "Content-Type": "multipart/form-data",
      },
    });

    await dispatch(getOneProfile({ user: id }));
  }
);

export const deleteResumeFile = createAsyncThunk(
  "profiles/deleteResumeFile",
  async ({ resumeId, id }: { resumeId: number; id: number }, { dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    await axios.delete(`${RESUME_API}/other_resume/${resumeId}/`, {
      headers: {
        Authorization,
      },
    });

    await dispatch(getOneProfile({ user: id }));
  }
);
