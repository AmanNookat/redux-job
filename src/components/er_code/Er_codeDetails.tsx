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
            <div className="flex">
              <div className="border bg-gray-800 text-white w-1/2">
                <p>{er_codeOnePost?.name}</p>
                <p>{er_codeOnePost?.user}</p>
                <p>{er_codeOnePost?.description}</p>
                {er_codeOnePost?.file &&
                typeof er_codeOnePost?.file === "string" ? (
                  <img src={er_codeOnePost.file} alt="" width="250" />
                ) : (
                  <span>No image</span>
                )}
                {currentUser?.email == er_codeOnePost?.user && (
                  <>
                   <button
                      className="border text-white hover:text-black uppercase hover:bg-white p-2"
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
