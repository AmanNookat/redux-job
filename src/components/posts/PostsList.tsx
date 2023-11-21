import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getPosts } from "../../store/posts/postsAction";
import { PostsItem } from "./PostsItem";
import { IPost } from "../../store/posts/postTypes";

export const PostsList = () => {
  const { posts } = useSelector((state: RootState) => state.posts);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      .
      <div className="">
        {posts.map((post: IPost) => (
          <PostsItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
