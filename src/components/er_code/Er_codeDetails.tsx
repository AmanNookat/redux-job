import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteEr_codePost,
  getOneEr_codePost,
} from "../../store/er_code/er_codeActions";

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
        <h1>Loading...</h1>
      ) : (
        <>
          {er_codeOnePost && (
            <div className="flex">
              <div className="border-2 border-black w-1/2">
                <p>{er_codeOnePost?.name}</p>
                <p>{er_codeOnePost?.user}</p>
                <p>{er_codeOnePost?.description}</p>
                {er_codeOnePost?.file &&
                typeof er_codeOnePost?.file === "string" ? (
                  <img src={er_codeOnePost.file} alt="" width="300" />
                ) : (
                  <span>No image available</span>
                )}
                {currentUser?.email == er_codeOnePost?.user && (
                  <>
                    <button
                      onClick={() => {
                        dispatch(deleteEr_codePost({ id: er_codeOnePost.id! }));
                        navigate("/forum");
                      }}
                      className="bg-red-500 p-2"
                    >
                      Delete
                    </button>
                    <button
                      className="bg-violet-500 p-2"
                      onClick={() =>
                        navigate(`/er_code-edit/${er_codeOnePost?.id}`)
                      }
                    >
                      Edit
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
