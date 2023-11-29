import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { getEr_codePosts } from "../../store/er_code/er_codeActions";
import { IEr_codePost } from "../../store/er_code/er_codeSlice";
import style from "./er_code.module.css";

import LazyLoading from "../loading/LazyLoading";

const Er_codeList = () => {
  const { er_codePosts, loading } = useSelector(
    (state: RootState) => state.er_code
  );
  const { currentUser } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEr_codePosts());
  }, []);

  console.log(currentUser);

  return (
    <>
      {loading ? (
        <LazyLoading />
      ) : (
        <>
          <div className={style.er_code_bg}>
            <div className="w-full">
              {er_codePosts.map((er_CodePost: IEr_codePost) => (
                <span
                  className="mb-4 p-4 text-2xl border-2 rounded-lg  border-gray-500 flex flex-col w-full h-[10vh] bg-gray-900 text-white"
                  onClick={() => navigate(`/er_code/${er_CodePost.id}`)}
                  key={er_CodePost.id}
                >
                  {er_CodePost.name}
                  {er_CodePost.description}
                </span>
              ))}
            </div>
            <div>
              <button
                className="ml-6 uppercase border-2 bg-gray-800 text-white w-48 h-20 hover:bg-transparent hover:border-slate-900 rounded-s-3xl hover:text-black"
                onClick={() => navigate("/er_code-add")}
              >
                Add Post of error
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Er_codeList;
