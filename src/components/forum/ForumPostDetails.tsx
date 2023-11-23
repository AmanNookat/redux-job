import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteForumPost,
  getOneForumPost,
} from "../../store/forum/forumActions";

const ForumPostDetails = () => {
  const { forumOnePost, loading } = useSelector(
    (state: RootState) => state.forum
  );
  const { currentUser } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneForumPost({ id }));
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {forumOnePost && (
            <div>
              <p>{forumOnePost?.name}</p>
              <p>{forumOnePost?.user}</p>
              <p>{forumOnePost?.description}</p>
              <img src={forumOnePost?.file} alt="" width="300" />
              <p>comments: {forumOnePost?.comments.length}</p>
              <p>likes: {forumOnePost?.like}</p>
              {currentUser?.email == forumOnePost?.user && (
                <>
                  <button
                    onClick={() => {
                      dispatch(deleteForumPost({ id: forumOnePost.id }));
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
          )}
        </>
      )}
    </>
  );
};

export default ForumPostDetails;
