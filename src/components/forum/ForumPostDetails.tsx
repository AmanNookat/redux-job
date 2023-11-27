import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteForumPost,
  getOneForumPost,
  toggleLikeForumPost,
} from "../../store/forum/forumActions";
import ForumPostComment from "./ForumPostComment";

const ForumPostDetails = () => {
  const { forumOnePost, loading } = useSelector(
    (state: RootState) => state.forum
  );
  const { currentUser } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneForumPost({ id: +id! }));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {forumOnePost && (
            <div className="flex">
              <div className="border-2 border-black w-1/2">
                <p>{forumOnePost?.name}</p>
                <p>{forumOnePost?.user}</p>
                <p>{forumOnePost?.description}</p>
                {forumOnePost?.file &&
                typeof forumOnePost?.file === "string" ? (
                  <img src={forumOnePost.file} alt="" width="300" />
                ) : (
                  <span>No image available</span>
                )}
                {
                  <span
                    onClick={() =>
                      dispatch(toggleLikeForumPost({ id: forumOnePost?.id! }))
                    }
                    className="bg-red-300 p-1 cursor-pointer"
                  >
                    likes: {forumOnePost?.like}
                  </span>
                }
                {currentUser?.email == forumOnePost?.user && (
                  <>
                    <button
                      onClick={() => {
                        dispatch(deleteForumPost({ id: forumOnePost.id! }));
                        navigate("/forum");
                      }}
                      className="bg-red-500 p-2"
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 p-2"
                      onClick={() =>
                        navigate(`/forum-edit-post/${forumOnePost?.id}`)
                      }
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
              <div className="flex flex-col justify-between border-2 border-black w-1/2 h-screen">
                <ForumPostComment
                  comments={forumOnePost?.comments!}
                  id={+id!}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ForumPostDetails;
