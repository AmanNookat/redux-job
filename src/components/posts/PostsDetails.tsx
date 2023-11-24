import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDesc,
  deletePost,
  getOnePost,
} from "../../store/posts/postsAction";
import { IDesc, IPost } from "../../store/posts/postTypes";
import { clearOnePost } from "../../store/posts/postsSlice";

export const PostsDetails = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { onePost } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (id) {
      const postId: number = parseInt(id, 10);
      dispatch(getOnePost(postId));
    }
    return;
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(clearOnePost());
    };
  }, []);

  return (
    <div>
      {onePost && (
        <div className="">
          <div className="">
            <h3>{(onePost as IPost).name || (onePost as IPost).title}</h3>
            <h3>{(onePost as IPost).celery}</h3>
          </div>
          <div className="">
            {(onePost as IPost).type_post ? (
              <h4>{(onePost as IPost).type_post}</h4>
            ) : (
              <div className="">
                <h4>{(onePost as IPost).type_work}</h4>{" "}
                <h4>{(onePost as IPost).type_employment}</h4>
              </div>
            )}
          </div>
          <div className="">
            <p>{(onePost as IPost).description}</p>
          </div>
          <div className="">
            <button
              className="p-2 m-4 rounded-lg bg-blue-500 hover:bg-blue-700"
              onClick={() => navigate(`/edit-post/${(onePost as IPost).id}`)}
            >
              Edit
            </button>
            <button
              className="p-2 m-4 rounded-lg bg-blue-500 hover:bg-blue-700"
              onClick={() => {
                dispatch(deletePost((onePost as IPost).id));
                navigate("/posts");
              }}
            >
              Delete
            </button>
            <button onClick={() => navigate(`/add-post-desc/${id}`)}>
              Add description
            </button>
          </div>
          <>
            {onePost &&
              (onePost as IPost).desc.map((desc: IDesc) => (
                <div key={desc.id} className="">
                  <h3>{desc.body}</h3>
                  <button
                    onClick={() =>
                      navigate(
                        `/edit-post-desc/${desc.id}.${(onePost as IPost).id}`
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        deleteDesc({
                          id: desc.id,
                          postId: (onePost as IPost).id,
                        })
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </>
        </div>
      )}
    </div>
  );
};
