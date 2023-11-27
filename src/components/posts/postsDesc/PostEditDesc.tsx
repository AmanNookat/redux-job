import React, { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IDesc, IPost } from "../../../store/posts/postTypes";
import {
  editDesc,
  getOneDesc,
  getOnePost,
} from "../../../store/posts/postsAction";
import { clearOneDesc, clearOnePost } from "../../../store/posts/postsSlice";
import LazyLoading from "../../loading/LazyLoading";

export const PostEditDesc = () => {
  const { oneDesc, onePost, loading } = useSelector(
    (state: RootState) => state.posts
  );
  const [newDesc, setNewDesc] = useState<IDesc | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [descId, setdescId] = useState<number | null>(null);
  const [postId, setpostId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      const str = id;
      const [first, second] = str.split(".").map(Number);

      setdescId(first);
      setpostId(second);
    }
  }, [id]);

  useEffect(() => {
    if (oneDesc !== null) {
      setNewDesc(oneDesc);
    }
  }, [oneDesc]);

  useEffect(() => {
    if (postId && descId) {
      dispatch(getOneDesc(descId));
      dispatch(getOnePost(postId));
    }
  }, [descId, postId]);
  useEffect(() => {
    return () => {
      dispatch(clearOneDesc());
      dispatch(clearOnePost());
    };
  }, []);

  return (
    <>
      {loading ? (
        <LazyLoading />
      ) : (
        <>
          {newDesc && onePost && (
            <div>
              <div className="">
                <input
                  type="text"
                  placeholder="Description"
                  onChange={(e) =>
                    setNewDesc({ ...newDesc, body: e.target.value } as IDesc)
                  }
                  value={newDesc?.body}
                />
                <button
                  onClick={() => {
                    if (newDesc) {
                      dispatch(editDesc({ id: postId!, desc: newDesc }));
                      navigate(`/details-post/${postId!}`);
                    }
                  }}
                >
                  Add descriptions
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
