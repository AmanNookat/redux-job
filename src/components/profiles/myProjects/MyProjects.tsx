import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../../../store/store";
import { getOneProfile } from "../../../store/profiles/profilesActions";

const MyProjects = () => {
  const { oneProfile } = useSelector((state: RootState) => state.profiles);

  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProfile({ user: +id! }));
  }, [dispatch]);
  console.log(oneProfile);

  return (
    <div>
      <h1>MyProjects</h1>
      <div></div>
    </div>
  );
};

export default MyProjects;
