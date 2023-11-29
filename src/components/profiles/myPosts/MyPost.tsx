import React, { useEffect, useState } from "react";
import { PostsList } from "../../posts/PostsList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useNavigate } from "react-router";
import LazyLoading from "../../loading/LazyLoading";
import { PostsItem } from "../../posts/PostsItem";
import { IPost } from "../../../store/posts/postTypes";
import { getPosts } from "../../../store/posts/postsAction";
import { array } from "yargs";

const MyPost = () => {
  const { posts, loading } = useSelector((state: RootState) => state.posts);
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [userPosts, setUserPosts] = useState<Array<IPost> | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userPosts = posts.filter(
      (post: IPost) => post.user === currentUser.id
    );
    setUserPosts(userPosts);
  }, [posts]);

  return (
    <div>
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
            onClick={() => navigate("/add-post")}
          >
            Add Post
          </button>
        </div>
        {loading ? (
          <LazyLoading />
        ) : (
          <div className="">
            {userPosts &&
              userPosts.map((post: IPost) => (
                <PostsItem key={post.id} post={post} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPost;
