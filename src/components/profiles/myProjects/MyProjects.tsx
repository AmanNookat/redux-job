import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../../../store/store";
import { getOneProfile } from "../../../store/profiles/profilesActions";
import { IProject } from "../../../store/projects/projectsTypes";

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
      <div>
        {oneProfile?.project.map((oneProject: IProject) => (
          <div key={oneProject.id}>
            <p>Название проекта: {oneProject.name_project}</p>
            <p>Ссылка на проект:{oneProject.link}</p>
            <div>
              <img
                src={`https://server.reduxjob.com${oneProject.image_project}`}
                alt=""
              />
            </div>
            <p>Описание проекта: {oneProject.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
