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
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 w-7/12 uppercase rounded-lg bg-[#111827] text-white  gap-y-3 flex flex-col ">
        <h1 className="text-white uppercase font-light text-3xl">edit</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-white mb-2">
            edit title of error:
          </label>
          <input
            className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
            type="text"
            placeholder="enter title of error"
            value={er_codePost?.name}
            onChange={(e) =>
              setEr_codePost({ ...er_codePost!, name: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="block text-white mb-2">
            edit information about error:
          </label>
          <textarea
            className="w-full  px-3 py-2 border rounded bg-gray-700 text-white"
            name=""
            id=""
            cols={30}
            rows={7}
            placeholder="enter error"
            value={er_codePost?.description}
            onChange={(e) =>
              setEr_codePost({ ...er_codePost!, description: e.target.value })
            }
          ></textarea>
        </div>

        <input
          className="mb-4 "
          type="file"
          onChange={(e: any) => {
            const selectedFile = e.target.files[0];
            setEr_codePost({ ...er_codePost!, file: selectedFile });
          }}
        />
        <button
          className=" uppercase border rounded w-36 h-9 hover:text-black hover:bg-white "
          onClick={() => {
            dispatch(editEr_codePost({ er_codePost: er_codePost!, id: +id! }));
            navigate("/er_code");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Er_codeEdit;
