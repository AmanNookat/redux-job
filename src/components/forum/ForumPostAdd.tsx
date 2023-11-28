import React, { useState } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addForumPost } from "../../store/forum/forumActions";

const ForumPostAdd = () => {
  const [forumPost, setForumPost] = useState({
    name: "",
    description: "",
    file: null,
  });

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/30 text-gray-900">
      <div className="m-auto bg-white p-16 rounded-lg flex flex-col text-center items-center gap-5 w-[30rem] relative">
        <h3 className="text-xl">Create post</h3>
        <input
          className="w-4/5 border-2 border-gray-900 rounded-lg"
          type="text"
          placeholder="post name"
          onChange={(e) => setForumPost({ ...forumPost, name: e.target.value })}
        />
        <textarea
          className="border-2 border-gray-900 rounded-lg"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="desc..."
          onChange={(e) =>
            setForumPost({ ...forumPost, description: e.target.value })
          }
        ></textarea>
        <input
          className="w-4/5"
          type="file"
          onChange={(e: any) => {
            const selectedFile = e.target.files![0];
            setForumPost({ ...forumPost, file: selectedFile });
          }}
        />
          <button
           className="border-2 p-2 w-4/5 rounded-lg bg-slate-800 text-white text-lg hover:bg-slate-200 hover:text-black hover:border-gray-900"
            onClick={() => {
              dispatch(addForumPost({ forumPost }));
              navigate("/forum");
            }}
          >
            Add Post
          </button>
      </div>
    </div>
  );
};

export default ForumPostAdd;
