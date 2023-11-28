import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getPosts } from "../../store/posts/postsAction";
import { PostsItem } from "./PostsItem";
import { IPost } from "../../store/posts/postTypes";
import { useNavigate } from "react-router-dom";
import LazyLoading from "../loading/LazyLoading";
import { PostsCreate } from "./PostsCreate";
import { modalPostCreate, setSearchVal } from "../../store/posts/postsSlice";
import { type } from "os";
import PostPagination from "./PostPagination";

export const PostsList = () => {
  const { posts, loading, modalPost } = useSelector(
    (state: RootState) => state.posts
  );
  const [search, setSearch] = useState<string>("");
  const dispatch: any = useDispatch();

  useEffect(() => {
    const typeLS = localStorage.getItem("typePost");
    const type: number = typeLS ? parseInt(typeLS) : 1;
    dispatch(getPosts(type));
  }, []);

  function searchCheck() {
    const typeLS = localStorage.getItem("typePost");
    const type: number = typeLS ? parseInt(typeLS) : 1;
    dispatch(setSearchVal(search));
    dispatch(getPosts(type));
  }

  return (
    <div className="flex justify-center">
      {modalPost && (
        <div className="w-1/2 flex">
          <div className="w-full">
            <PostsCreate />
          </div>
        </div>
      )}
      <div className="w-2/3">
        <div className="flex justify-center">
          <div className="p-2 m-4">
            <input
              type="text"
              className="border-2 p-2 rounded-lg"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="mx-2 p-2  bg-slate-400 rounded-lg"
              onClick={() => {
                searchCheck();
              }}
            >
              search
            </button>
          </div>
          <button
            className="p-2 m-4 rounded-lg bg-[#9F96BB] hover:bg-blue-700"
            onClick={() => {
              dispatch(getPosts(0));
            }}
          >
            Company freelanc
          </button>
          <button
            className="p-2 m-4 rounded-lg bg-[#6A70A4] hover:bg-blue-700"
            onClick={() => {
              dispatch(getPosts(1));
            }}
          >
            Vacancy
          </button>
          <button
            className="p-2 m-4 rounded-lg bg-[#265290] hover:bg-blue-700"
            onClick={() => {
              dispatch(getPosts(2));
            }}
          >
            Freelancing
          </button>
          <button
            className="p-2 m-4 rounded-lg bg-[#19253C] hover:bg-blue-700"
            onClick={() => dispatch(modalPostCreate())}
          >
            Add Post
          </button>
        </div>
        {loading ? (
          <LazyLoading />
        ) : (
          <div
            className={
              modalPost
                ? "w-full flex flex-col items-center"
                : "flex flex-col items-center"
            }
          >
            {posts &&
              posts.map((post: IPost) => (
                <PostsItem key={post.id} post={post} />
              ))}
            <div className="">
              <PostPagination />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
