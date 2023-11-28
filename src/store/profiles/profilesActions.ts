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

    return data.results;
  }
);

export const getCompaniesProfiles = createAsyncThunk(
  "profiles/getCompaniesProfiles",
  async () => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const { data } = await axios.get(`${PROFILES_API}/company_profiles`, {
      headers: { Authorization },
    });

    return data.results;
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

export const editProfile = createAsyncThunk(
  "profiles/editProfiles",
  async ({ profile }: { profile: IProfile }, { dispatch }) => {
    try {
      const formData = new FormData();

      formData.append("languages", profile.languages);
      formData.append("programming_languages", profile.programming_languages);
      formData.append("education", profile.education);
      formData.append("stack", profile.stack);
      formData.append("about", profile.about);
      formData.append("age", profile.age);
      formData.append("work_experience", profile.work_experience);
      formData.append("achievements", profile.achievements);

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
        formData.append("profile_image", profile.profile_image);
      }

      const Authorization = `Bearer ${getAccessToken()}`;

      await axios.patch(
        `${PROFILES_API}/user_profiles/${profile.user}/`,
        formData,
        {
          headers: {
            Authorization,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(getCompaniesProfiles());
      dispatch(getUsersProfiles());
    } catch (err) {
      console.log(err);
    }
  }
);

// export const createProfile = createAsyncThunk(
//   "profiles/createProfile",
//   async ({ profile }: { profile: IProfile }) => {
//     const formData = new FormData();

//     formData.append("languages", profile.languages);
//     formData.append("programming_languages", profile.programming_languages);
//     formData.append("education", profile.education);
//     formData.append("stack", profile.stack);
//     formData.append("about", profile.about);
//     formData.append("age", profile.age);
//     formData.append("work_experience", profile.work_experience);
//     formData.append("achievments", profile.achievments);
//     formData.append("profile_image", profile.profile_image);

//     const Authorization = `Bearer ${getAccessToken()}`;

//     await axios.post(PROFILES_API, formData, {
//       headers: {
//         Authorization,
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   }
// );

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

export const createResume = createAsyncThunk(
  "profiles/createResume",
  async ({ resumeObj }: { resumeObj: any }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    const formData = new FormData();
    const userFormData = new FormData();

    userFormData.append("email", resumeObj.user.email);
    userFormData.append("first_name", resumeObj.user.first_name);
    userFormData.append("last_name", resumeObj.user.last_name);

    let dateArr = resumeObj.birth.split("-");
    const dateOfBirth = dateArr.reverse().join(".");

    formData.append("user", JSON.stringify(userFormData));
    formData.append("date_of_birth", dateOfBirth);
    formData.append("applied_vacancies", resumeObj.appliedVac);
    formData.append("specialization", resumeObj.specialization);
    formData.append("sex", resumeObj.sex);
    formData.append("city_of_residence", resumeObj.city);
    formData.append("phone_number", resumeObj.phone);
    formData.append("skills", resumeObj.skills);
    formData.append("citizenship", resumeObj.citizenship);
    formData.append("cover_letter", resumeObj.cover);
    formData.append("education", resumeObj.education);
    formData.append("profile", resumeObj.profile);

    await axios.post(`${RESUME_API}/resume/`, formData, {
      headers: {
        Authorization,
      },
    });
    alert("Все по кайфу");
  }
);
