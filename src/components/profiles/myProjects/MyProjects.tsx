import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../../../store/store";
import { getOneProfile } from "../../../store/profiles/profilesActions";
import { IProject } from "../../../store/projects/projectsTypes";
import "./myProjects.css";

const MyProjects = () => {
  const { oneProfile } = useSelector((state: RootState) => state.profiles);

  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProfile({ user: +id! }));
  }, [dispatch]);

  return (
    <div className="my--projects--container">
      <div className="my--projects">
        <h1 className="my--projects--h1">Your Projects</h1>
        <div>
          {oneProfile?.project.map((oneProject: IProject) => (
            <div className="my--projects--content" key={oneProject.id}>
              <div className="my--projects--image">
                <img
                  src={`https://server.reduxjob.com${oneProject.image_project}`}
                  alt=""
                />
              </div>
              <div className="my--projects--text">
                <p>Название проекта: {oneProject.name_project}</p>
                <p>Описание проекта: {oneProject.description}</p>
                <p>Ссылка на проект:{oneProject.link}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
