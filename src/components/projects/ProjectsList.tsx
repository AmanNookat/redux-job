import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getProjects } from "../../store/projects/projectsActions";
import { IProject } from "../../store/projects/projectsTypes";
import ProjectCreate from "./ProjectCreate";

const ProjectsList = () => {
  const [modal, setModal] = useState(false);

  const { projects, loading } = useSelector(
    (state: RootState) => state.projects
  );

  const dispatch: any = useDispatch();

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
            <div key={project.id} className="border-2 border-black w-[300px]">
              <img src={project.image_project} alt="image" width="100" />
              <h3>title: {project.name_project}</h3>
              <p>desc: {project.description}</p>
              <p>user: {project.user}</p>
              <a
                href={project.link}
                target="_blanck"
                className="text-blue-500 underline"
              >
                Ссылка
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectsList;
