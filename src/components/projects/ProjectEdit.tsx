import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProject,
  getOneProject,
} from "../../store/projects/projectsActions";
import { IProject } from "../../store/projects/projectsTypes";

const ProjectEdit = () => {
  const { loading, oneProject } = useSelector(
    (state: RootState) => state.projects
  );
  const [project, setProject] = useState<IProject | null>(oneProject);

  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneProject({ id }));
  }, []);

  useEffect(() => {
    if (oneProject) {
      setProject(oneProject);
    }
  }, [oneProject]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {project && (
            <div className="flex flex-col">
              <img src={project.image_project} alt="" width="100" />
              <input
                type="text"
                placeholder="name"
                value={project?.name_project}
                onChange={(e) => {
                  setProject({ ...project, name_project: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="description"
                value={project?.description}
                onChange={(e) => {
                  setProject({ ...project, description: e.target.value });
                }}
              />
              <input
                type="text"
                placeholder="link"
                value={project?.link}
                onChange={(e) => {
                  setProject({ ...project, link: e.target.value });
                }}
              />
              <input
                type="file"
                onChange={(e) => {
                  const selectedFile = e.target.files![0];
                  setProject({ ...project, image_project: selectedFile });
                }}
              />
              <button
                onClick={() => {
                  dispatch(editProject({ project }));
                  navigate("/projects");
                }}
              >
                Save
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProjectEdit;
