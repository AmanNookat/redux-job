import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getProjects } from "../../store/projects/projectsActions";
import { IProject } from "../../store/projects/projectsTypes";
import ProjectCreate from "./ProjectCreate";
import style from "./project.module.css";

const ProjectCard = lazy(() => import("./ProjectCard"));

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
        <div className={style.projects_bg}>
          <div className="flex mb-14 mt-10">
            <div>
              <h3 className="text-8xl ml-4 mt-10">Create your project</h3>
              <p className="text-3xl ml-4 mt-6">
                Do you have a project? Amazing, let's start!{" "}
              </p>
              <p className="text-2xl ml-4  mb-6">
                Describe your project and post it here to make it easier to find
                an employer and view other projects.
              </p>
            </div>
          {/* animation kub */}
          <div className="flex">
            <div className={style.loader}>
              <div className={style.cube}>
                <div className={style.face}></div>
                <div className={style.face}></div>
                <div className={style.face}></div>
                <div className={style.face}></div>
                <div className={style.face}></div>
                <div className={style.face}></div>
              </div>
            </div>
          </div>
          </div>

          <div>
              <button
                className={style.project_butt_create}
                onClick={() => setModal(true)}
              >
                + create project
              </button>
            </div>

          <div className="flex flex-col items-center">
            <>{modal && <ProjectCreate setModal={setModal} />}</>
            <Suspense fallback={<div>Loading ProjectCard...</div>}>
              {projects.map((project: IProject) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsList;
