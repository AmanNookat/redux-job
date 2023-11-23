import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getForumPosts } from "../../store/forum/forumActions";
import { useNavigate } from "react-router-dom";

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
          <div>
            <button onClick={() => navigate("/forum-add-post")}>
              Add Post
            </button>
          </div>
          <div className="gap-y-3 flex flex-col w-1/3">
            {forumPosts.map((forumPost: any) => (
              <span
                className="border-2 border-black p-1 cursor-pointer"
                onClick={() => navigate(`/forum/${forumPost.id}`)}
                key={forumPost.id}
              >
                {forumPost.name}
              </span>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ForumList;
