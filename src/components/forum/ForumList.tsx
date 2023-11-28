import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getForumPosts } from "../../store/forum/forumActions";
import { useNavigate } from "react-router-dom";
import { IForumPost } from "../../store/forum/forumSlice";
import style from "./forum.module.css";
import earth from "../../assets/earsh.jpg";

const ForumList = () => {
  const { forumPosts, loading } = useSelector(
    (state: RootState) => state.forum
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getForumPosts());
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="bg-gray-900 text-white flex">
            <div className="w-1/2 z-10">
              <div className="p-6">
                <h3 className="text-7xl">
                  Have questions? <br /> Ask it here
                </h3>
                <button
                  className="mt-5 border-2 p-4 rounded-3xl text-xl hover:bg-slate-200 hover:text-gray-900"
                  onClick={() => navigate("/forum-add-post")}
                >
                  Add Post
                </button>
              </div>
              <div>
                <div className={style.scene}>
                  <div className={style.wrapper}>
                    <div className={style.globe}>
                      <span className={style.ring}></span>
                      <span className={style.ring}></span>
                      <span className={style.ring}></span>
                      <span className={style.ring}></span>
                      <span className={style.ring}></span>
                      <span className={style.ring}></span>
                      <span className={style.ring}></span>

                      <span className={style.ring}></span>
                      <span className={style.ring}></span>
                      <span className={style.ring}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 border h-[90vh] z-30 p-4 border-gray-500">
              <div className="flex flex-col">
                {forumPosts.length &&
                  forumPosts.map((forumPost: IForumPost) => (
                    <span
                      className="border-b-2 border-gray-500 h-16 p-4 text-xl cursor-pointer hover:bg-gray-800 hover:rounded-sm"
                      onClick={() => navigate(`/forum/${forumPost.id}`)}
                      key={forumPost.id}
                    >
                      {forumPost.name}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ForumList;
