import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDesc,
  deletePost,
  getOnePost,
} from "../../store/posts/postsAction";
import { IDesc, IPost } from "../../store/posts/postTypes";
import { clearOnePost, modalDescCreate } from "../../store/posts/postsSlice";
import LazyLoading from "../loading/LazyLoading";
import { PostCreateDesc } from "./postsDesc/PostCreateDesc";

export const PostsDetails = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { onePost, loading, modalDesc } = useSelector(
    (state: RootState) => state.posts
  );
  const { currentUser } = useSelector((state: RootState) => state.users);

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
  console.log(onePost);

  return (
    <>
      {loading ? (
        <LazyLoading />
      ) : (
        <div>
          {onePost && (
            <div className="w-full flex justify-center m-4">
              <div className="w-2/3 pt-8 shadow-lg bg-white p-4 rounded-xl border">
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-2xl font-semibold">
                      {(onePost as IPost).name || (onePost as IPost).title}
                    </h3>
                    <h3 className="text-2xl font-medium py-2">
                      {(onePost as IPost).celery}$
                    </h3>
                  </div>
                  <div className="mr-8">
                    {(onePost as IPost).type_post ? (
                      <h4 className="text-xl font-medium">
                        {(onePost as IPost).type_post}
                      </h4>
                    ) : (
                      <div className="">
                        <h4>{(onePost as IPost).type_work}</h4>{" "}
                        <h4>{(onePost as IPost).type_employment}</h4>
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <p>{(onePost as IPost).description}</p>
                </div>
                {currentUser?.email === (onePost as IPost).user && (
                  <div className="w-full flex justify-end">
                    <button
                      className="p-2 m-4 rounded-lg mr-8 bg-blue-500 hover:bg-blue-700"
                      onClick={() =>
                        navigate(`/edit-post/${(onePost as IPost).id}`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="p-2 m-4 rounded-lg mr-8 bg-blue-500 hover:bg-blue-700"
                      onClick={() => {
                        dispatch(deletePost((onePost as IPost).id));
                        navigate("/posts");
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="p-2 m-4 rounded-lg mr-8 bg-blue-500 hover:bg-blue-700"
                      onClick={() => dispatch(modalDescCreate())}
                    >
                      Add description
                    </button>
                  </div>
                )}
                <>
                  {onePost &&
                    (onePost as IPost).desc.map((desc: IDesc) => (
                      <div
                        key={desc.id}
                        className="shadow-lg p-6 bg-white my-8 rounded-lg border-t"
                      >
                        <h3 className="text-xl font-semibold">{desc.title}</h3>
                        <h3>{desc.body}</h3>
                        {currentUser?.email === (onePost as IPost).user && (
                          <div>
                            <button
                              className="p-2 m-4 rounded-lg mr-8 bg-blue-500 hover:bg-blue-700"
                              onClick={() =>
                                navigate(
                                  `/edit-post-desc/${desc.id}.${
                                    (onePost as IPost).id
                                  }`
                                )
                              }
                            >
                              Edit
                            </button>
                            <button
                              className="p-2 m-4 rounded-lg mr-8 bg-blue-500 hover:bg-blue-700"
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
                        )}
                      </div>
                    ))}
                </>
              </div>
            </div>
          )}
        </div>
      )}
      {modalDesc && (
        <div className="">
          <PostCreateDesc />
        </div>
      )}
    </>
  );
};
