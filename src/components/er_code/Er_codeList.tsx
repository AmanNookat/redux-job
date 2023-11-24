import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { getEr_codePosts } from "../../store/er_code/er_codeActions";
import { IEr_codePost } from "../../store/er_code/er_codeSlice";

const Er_codeList = () => {
  const {er_codePosts, loading } = useSelector(
    (state: RootState) => state.er_code
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEr_codePosts());
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <button onClick={() => navigate("/er_code-add")}>
              Add Post
            </button>
          </div>
          <div className="gap-y-3 flex flex-col w-1/3">
            {er_codePosts.map((er_CodePost: IEr_codePost) => (
              <span
                className="border-2 border-black p-1 cursor-pointer"
                onClick={() => navigate(`/er_code/${er_CodePost.id}`)}
                key={er_CodePost.id}
              >
                {er_CodePost.name}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Er_codeList;
