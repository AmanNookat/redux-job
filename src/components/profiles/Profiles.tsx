import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompaniesProfiles,
  getUsersProfiles,
} from "../../store/profiles/profilesActions";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const { profiles, loading } = useSelector(
    (state: RootState) => state.profiles
  );

  const { currentUser } = useSelector((state: RootState) => state.users);

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  console.log(profiles);

  useEffect(() => {
    dispatch(getCompaniesProfiles());
    dispatch(getUsersProfiles());
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {profiles.map((profile) => (
            <div>
              <p>{currentUser?.email}</p>
              <p>{profile.age}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Profiles;
