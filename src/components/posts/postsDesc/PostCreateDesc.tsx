import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { addDesc } from "../../../store/posts/postsAction";

export const PostCreateDesc = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [postId, setPostId] = useState<null | number>(null);
  const [newDesc, setNewDesc] = useState({
    body: "",
    post: id,
  });

  useEffect(() => {
    if (id) {
      const pId = parseInt(id, 10);
      setPostId(pId);
    }
  }, [id]);

  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setNewDesc({ ...newDesc, body: e.target.value })}
          maxLength={50}
        />
        <button
          onClick={() => {
            dispatch(addDesc({ id: postId!, post: newDesc }));
            navigate(`/details-post/${id}`);
          }}
        >
          Add descriptions
        </button>
      </div>
    </div>
  );
};
