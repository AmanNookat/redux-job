import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  editEr_codePost,
  getOneEr_codePost,
} from "../../store/er_code/er_codeActions";
import { IEr_codePost } from "../../store/er_code/er_codeSlice";

const Er_codeEdit = () => {
  const { loading, er_codeOnePost } = useSelector(
    (state: RootState) => state.er_code
  );
  const [er_codePost, setEr_codePost] = useState<IEr_codePost | null>(
    er_codeOnePost
  );

  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneEr_codePost({ id: +id! }));
  }, []);

  useEffect(() => {
    if (er_codePost) {
      setEr_codePost(er_codePost);
    }
  }, [er_codePost]);

  return (
    <div className="p-3 bg-violet-400 flex flex-col gap-y-3">
      <input
        type="text"
        placeholder="post name"
        value={er_codePost?.name}
        onChange={(e) =>
          setEr_codePost({ ...er_codePost!, name: e.target.value })
        }
      />
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="desc..."
        value={er_codePost?.description}
        onChange={(e) =>
          setEr_codePost({ ...er_codePost!, description: e.target.value })
        }
      ></textarea>
      <input
        type="file"
        onChange={(e: any) => {
          const selectedFile = e.target.files[0];
          setEr_codePost({ ...er_codePost!, file: selectedFile });
        }}
      />
      <button
        onClick={() => {
          dispatch(editEr_codePost({ er_codePost: er_codePost!, id: +id! }));
          navigate("/er_code");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Er_codeEdit;
