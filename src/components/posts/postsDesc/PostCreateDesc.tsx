import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addDesc } from "../../../store/posts/postsAction";
import { modalDescCreate } from "../../../store/posts/postsSlice";

export const PostCreateDesc = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const [postId, setPostId] = useState<null | number>(null);
  const { modalDesc } = useSelector((state: RootState) => state.posts);
  const [newDesc, setNewDesc] = useState({
    title: "",
    body: "",
    post: id,
  });

  useEffect(() => {
    if (id) {
      const pId = parseInt(id, 10);
      setPostId(pId);
    }
  }, [id]);
  useEffect(() => {
    if (modalDesc) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "visible";
      document.documentElement.style.overflowY = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
      document.documentElement.style.overflowY = "visible";
    };
  }, [modalDesc]);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`w-full bg-[#00000080] flex justify-center items-center fixed top-0 h-screen z-50`}
      onClick={() => dispatch(modalDescCreate())}
    >
      <div
        onClick={handleModalClick}
        className="flex flex-col items-center w-1/3 bg-white rounded-lg p-4"
      >
        <h3 className="text-2xl font-medium text-center">
          Add description post
        </h3>
        <input
          className="w-3/4 border border-black rounded-lg p-2 my-2"
          type="text"
          placeholder="title"
          onChange={(e) => setNewDesc({ ...newDesc, title: e.target.value })}
        />
        <textarea
          className="w-3/4 border border-black rounded-lg p-2 my-2 h-48"
          placeholder="Description"
          onChange={(e) => setNewDesc({ ...newDesc, body: e.target.value })}
          maxLength={50}
        />
        <button
          className="p-2 m-4 rounded-lg mr-8 bg-blue-500 hover:bg-blue-700"
          onClick={() => {
            dispatch(addDesc({ id: postId!, post: newDesc }));
            dispatch(modalDescCreate());
          }}
        >
          Add descriptions
        </button>
      </div>
    </div>
  );
};
