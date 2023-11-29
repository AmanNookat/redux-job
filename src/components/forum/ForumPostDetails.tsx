import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteForumPost,
  getOneForumPost,
  toggleLikeForumPost,
} from "../../store/forum/forumActions";
import ForumPostComment from "./ForumPostComment";
import { FaHeart } from "react-icons/fa";

const ForumPostDetails = () => {
  const { forumOnePost, loading } = useSelector(
    (state: RootState) => state.forum
  );
  const [liked, setLiked] = useState(true);
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
            <div className="flex flex-wrap h-full w-full bg-gray-800 text-white font-sans">
              <div className="w-1/2 p-4 bg-gray-900">
                <h2 className="text-3xl font-bold mb-6 underline">
                  {forumOnePost?.name}
                </h2>
                <p className="w-full max-h-[300px] overflow-auto mb-3 scrollbarDerma border-b-2 border-b-white">
                  {forumOnePost?.description}
                </p>

                {forumOnePost?.file &&
                typeof forumOnePost?.file === "string" ? (
                  <img
                    src={forumOnePost.file}
                    alt=""
                    width="300"
                    className="w-full max-h-[400px] object-cover mx-auto mb-3 border-2 border-white p-1"
                  />
                ) : (
                  <span>No image available</span>
                )}
                <div className="w-full flex justify-between">
                  {
                    <span
                      onClick={() =>
                        dispatch(toggleLikeForumPost({ id: forumOnePost?.id! }))
                      }
                      className="p-1 cursor-pointer flex items-center"
                    >
                      {liked ? (
                        <FaHeart
                          className="text-3xl text-red-500 relative"
                          onClick={() => setLiked(false)}
                        />
                      ) : (
                        <FaHeart
                          className="text-white text-3xl"
                          onClick={() => setLiked(true)}
                        />
                      )}
                      <span className="text-white ml-3">
                        {forumOnePost?.like}
                      </span>
                    </span>
                  }
                  <p className="font-bold ">{forumOnePost?.user}</p>
                </div>

                {currentUser?.email === forumOnePost?.user && (
                  <div className="flex justify-end gap-x-4 mt-2">
                    <button
                      onClick={() => {
                        dispatch(deleteForumPost({ id: forumOnePost.id! }));
                        navigate("/forum");
                      }}
                      className="font-bold p-2 rounded-md border-2 border-white hover:bg-white hover:text-gray-800"
                    >
                      Delete
                    </button>
                    <button
                      className="px-4 font-bold p-2 rounded-md border-2 border-white hover:bg-white hover:text-gray-800"
                      onClick={() =>
                        navigate(`/forum-edit-post/${forumOnePost?.id}`)
                      }
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-between border-2 border-black w-1/2">
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
