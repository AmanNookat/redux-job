import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { editForumPost, getOneForumPost } from "../../store/forum/forumActions";
import { IForumPost } from "../../store/forum/forumSlice";

const ForumEditPost = () => {
  const { loading, forumOnePost } = useSelector(
    (state: RootState) => state.forum
  );
  const [forumPost, setForumPost] = useState<IForumPost | null>(forumOnePost);

  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneForumPost({ id: +id! }));
  }, []);

  useEffect(() => {
    if (forumPost) {
      setForumPost(forumPost);
    }
  }, [forumPost]);

  return (
    <div className="p-3 bg-gray-500 flex flex-col gap-y-3">
      <input
        type="text"
        placeholder="post name"
        value={forumPost?.name}
        onChange={(e) => setForumPost({ ...forumPost!, name: e.target.value })}
      />
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="desc..."
        value={forumPost?.description}
        onChange={(e) =>
          setForumPost({ ...forumPost!, description: e.target.value })
        }
      ></textarea>
      <input
        type="file"
        onChange={(e: any) => {
          const selectedFile = e.target.files[0];
          setForumPost({ ...forumPost!, file: selectedFile });
        }}
      />
      <button
        onClick={() => {
          dispatch(editForumPost({ forumPost: forumPost!, id: +id! }));
          navigate("/forum");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ForumEditPost;
