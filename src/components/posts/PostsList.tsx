import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getPosts } from "../../store/posts/postsAction";
import { PostsItem } from "./PostsItem";
import { IPost } from "../../store/posts/postTypes";
import { useNavigate } from "react-router-dom";

export const PostsList = () => {
  const { posts } = useSelector((state: RootState) => state.posts);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPosts(1));
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center">
        <button
          className="p-2 m-4 rounded-lg bg-blue-500 hover:bg-blue-700"
          onClick={() => dispatch(getPosts(0))}
        >
          Company freelanc
        </button>
        <button
          className="p-2 m-4 rounded-lg bg-blue-500 hover:bg-blue-700"
          onClick={() => dispatch(getPosts(1))}
        >
          Vacancy
        </button>
        <button
          className="p-2 m-4 rounded-lg bg-blue-500 hover:bg-blue-700"
          onClick={() => dispatch(getPosts(2))}
        >
          Freelancing
        </button>
        <button
          className="p-2 m-4 rounded-lg bg-blue-500 hover:bg-blue-700"
          onClick={() => dispatch(getPosts(3))}
        >
          Support
        </button>
        <button
          className="p-2 m-4 rounded-lg bg-blue-500 hover:bg-blue-700"
          onClick={() => dispatch(getPosts(4))}
        >
          Forum
        </button>
        <button
          className="p-2 m-4 rounded-lg bg-blue-500 hover:bg-blue-700"
          onClick={() => navigate("/add-post")}
        >
          Add Post
        </button>
      </div>
      <div className="">
        {posts.map((post: IPost) => (
          <PostsItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
