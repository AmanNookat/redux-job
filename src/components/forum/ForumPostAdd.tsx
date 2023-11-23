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
    <div className="p-3 bg-gray-500 flex flex-col gap-y-3">
      <input
        type="text"
        placeholder="post name"
        onChange={(e) => setForumPost({ ...forumPost, name: e.target.value })}
      />
      <textarea
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
        type="file"
        onChange={(e: any) => {
          const selectedFile = e.target.files[0];
          setForumPost({ ...forumPost, file: selectedFile });
        }}
      />
      <button
        onClick={() => {
          dispatch(addForumPost({ forumPost }));
          navigate("/forum");
        }}
      >
        Add Post
      </button>
    </div>
  );
};

export default ForumPostAdd;
