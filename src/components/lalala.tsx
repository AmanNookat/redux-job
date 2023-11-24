import React from "react";

const lalala = () => {
  return (
    <div>
      {/* export const getProfiles = createAsyncThunk(
  "profiles/getProfiles",
  async (_, { getState, dispatch }) => {
    const Authorization = `Bearer ${getAccessToken()}`;

    await dispatch(getCurrentUser());

    // @ts-ignore
    const { currentUser } = getState().users;

    console.log(currentUser);

    let profiles;

    if (currentUser?.type_user === "Human") {
      const { data } = await axios.get(`${PROFILES_API}/user_profiles/`, {
        headers: { Authorization },
      });
      profiles = data;
    } else {
      const { data } = await axios.get(`${PROFILES_API}/company_profiles/`, {
        headers: { Authorization },
      });
      profiles = data;
    }

    return profiles;
  }
); */}
    </div>
  );
};

export default lalala;
