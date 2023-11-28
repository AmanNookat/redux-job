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
        <div className="bg-gray-900 h-full w-full text-white p-16 flex">
          <div className="w-[50rem] h-full">
            <img
              className="w-[35rem]"
              src={oneProject?.image_project}
              alt="image"
              width="400"
            />
          </div>
          <div className="w-[50rem]">
            <p className="text-5xl mb-10">{oneProject?.name_project}</p>
            <p className="text-xl mb-6">{oneProject?.description}</p>
            <p className="text-lg mb-3">{oneProject?.user}</p>
            <div>
              <a href={oneProject?.link} className="text-blue-500 underline">
                LINK TO THE PROJECT
              </a>
            </div>
            {currentUser?.email == oneProject?.user && (
              <div className="mt-3 text-gray-900">
                <>
                  <button
                    onClick={() => {
                      dispatch(deleteProject({ id }));
                      navigate("/projects");
                    }}
                    className="bg-white p-2"
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
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
