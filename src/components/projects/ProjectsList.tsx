import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getProjects } from "../../store/projects/projectsActions";
import { IProject } from "../../store/projects/projectsTypes";
import ProjectCreate from "./ProjectCreate";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const [modal, setModal] = useState(false);

  const { projects, loading } = useSelector(
    (state: RootState) => state.projects
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <button onClick={() => setModal(true)}>Add Project</button>
          <>{modal && <ProjectCreate setModal={setModal} />}</>
          {projects.map((project: IProject) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectsList;
