import React, { useState } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEr_codePost } from "../../store/er_code/er_codeActions";

const Er_codeAdd = () => {
  const [er_codePost, setEr_codePost] = useState({
    name: "",
    description: "",
    file: null,
  });

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  return(
    <div className="p-3 bg-gray-500 flex flex-col gap-y-3">
      <input
        type="text"
        placeholder="post name"
        onChange={(e) => setEr_codePost({ ...er_codePost, name: e.target.value })}
      />
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="description"
        onChange={(e) =>
          setEr_codePost({ ...er_codePost, description: e.target.value })
        }
      ></textarea>
      <input
        type="file"
        onChange={(e: any) => {
          const selectedFile = e.target.files![0];
          setEr_codePost({ ...er_codePost, file: selectedFile });
        }}
      />
      <button
        onClick={() => {
          dispatch(addEr_codePost({ er_codePost }));
          navigate("/er_code");
        }}
      >
        Add Post
      </button>
    </div>
  )
};

export default Er_codeAdd;
