import React from "react";
import { IPost } from "../../store/posts/postTypes";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/posts/postsAction";

export const PostsItem = ({ post }: { post: IPost }) => {
  const dispatch: any = useDispatch();
  return (
    <div>
      <div className="">
        <h3>{post.name}</h3>
        <h3>{post.celery}</h3>
        <h4>{post.type_post}</h4>
        {/* <p>{post.description}</p> */}
        <button>Delete</button>
      </div>
    </div>
  );
};
