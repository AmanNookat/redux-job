import React from "react";
import { IPost } from "../../store/posts/postTypes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PostsItem = ({ post }: { post: IPost }) => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      description position
      <div className="w-full flex flex-col items-center">
        <div
          onClick={() => navigate(`/details-post/${post.id}`)}
          className="w-1/2 bg-stone-300 rounded-lg p-4"
        >
          {post.name ? <h2>{post.name}</h2> : <h2>{post.title}</h2>}
          {post.type_post ? (
            <h3>{post.type_post}</h3>
          ) : (
            <div className="">
              <h3>{post.type_work}</h3> <h3>{post.type_employment}</h3>
            </div>
          )}
          <h2>{post.celery}</h2>
          <div className="">
            <h3>{post.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
