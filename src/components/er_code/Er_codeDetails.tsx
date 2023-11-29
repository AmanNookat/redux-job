import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteEr_codePost,
  getOneEr_codePost,
} from "../../store/er_code/er_codeActions";
import LazyLoading from "../loading/LazyLoading";

const Er_codeDetails = () => {
  const { er_codeOnePost, loading } = useSelector(
    (state: RootState) => state.er_code
  );
  const { currentUser } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneEr_codePost({ id: +id! }));
  }, []);

  return (
    <>
      {loading ? (
        <LazyLoading />
      ) : (
        <>
          {er_codeOnePost && (
            <div className="flex w-full bg-gray-800 p-2 justify-center h-full items-center">
              <div className=" flex text-white h-full bg-gray-800">
                <div className="w-1/2">
                <p className="text-6xl mb-4 w-[50vh] h-[30vh] overflow-auto">{er_codeOnePost?.name}</p>
                <p className="text-xl mb-2 bg-slate-900 rounded-lg w-[50vh] p-2 h-[50vh] overflow-auto">{er_codeOnePost?.description}</p>
                <p className="text-lg">{er_codeOnePost?.user}</p>
                </div>
                {er_codeOnePost?.file &&
                typeof er_codeOnePost?.file === "string" ? (
                  <div className="ml-6 mr-6">
                  <img className="h-[70vh] w-full rounded-sm overflow-auto" src={er_codeOnePost.file} alt="" width="250" />
                  </div>
                ) : (
                  <span>No image</span>
                )}
                {currentUser?.email == er_codeOnePost?.user && (
                  <>
                    <div>
                   <button
                      className="border text-white hover:text-black uppercase hover:bg-white p-2 mr-4"
                      onClick={() =>
                        navigate(`/er_code-edit/${er_codeOnePost?.id}`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteEr_codePost({ id: er_codeOnePost.id! }));
                        navigate("/er_code");
                      }}
                      className="bg-white border hover:bg-transparent text-black hover:text-white uppercase p-2"
                    >
                      Delete
                    </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Er_codeDetails;
