import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import {
  deleteProject,
  getOneProject,
} from "../../store/projects/projectsActions";

const ProjectDetails = () => {
  const { oneProject, loading } = useSelector(
    (state: RootState) => state.projects
  );
  const { currentUser } = useSelector((state: RootState) => state.users);

  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneProject({ id }));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={oneProject?.image_project} alt="image" width="400" />
          <p>{oneProject?.name_project}</p>
          <p>{oneProject?.description}</p>
          <p>{oneProject?.user}</p>
          {currentUser?.email == oneProject?.user && (
            <>
              <button
                onClick={() => {
                  dispatch(deleteProject({ id }));
                  navigate("/projects");
                }}
                className="bg-red-500 p-2"
              >
                Delete
              </button>
              <button
                className="bg-green-500 p-2"
                onClick={() => navigate(`/project-edit/${oneProject?.id}`)}
              >
                Edit
              </button>
            </>
          )}
          <a href={oneProject?.link} className="text-blue-500 underline">
            Link
          </a>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
