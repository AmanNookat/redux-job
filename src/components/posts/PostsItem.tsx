import React, { useState } from "react";
import { IPost } from "../../store/posts/postTypes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

export const PostsItem = ({ post }: { post: IPost }) => {
  const { modalPost } = useSelector((state: RootState) => state.posts);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={modalPost ? "w-4/5" : "w-full"}>
      <div
        onClick={() => navigate(`/details-post/${post.id}`)}
        className="bg-stone-300 rounded-lg p-4 mt-4"
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
        <div>
          <h3 className="line-clamp-2 w-2/3">{post.description}</h3>
        </div>
      </div>
    </div>
  );
};
