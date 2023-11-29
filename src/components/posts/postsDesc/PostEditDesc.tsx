import React, { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IDesc } from "../../../store/posts/postTypes";
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

// import React, { useState, useEffect } from "react";
// import { AppDispatch, RootState } from "../../../store/store";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { IDesc, IPost } from "../../../store/posts/postTypes";
// import {
//   editDesc,
//   getOneDesc,
//   getOnePost,
// } from "../../../store/posts/postsAction";
// import {
//   clearOneDesc,
//   clearOnePost,
//   modalDescEdit,
// } from "../../../store/posts/postsSlice";
// import LazyLoading from "../../loading/LazyLoading";

// export const PostEditDesc = () => {
//   const { oneDesc, onePost, loading, modalDescEdit } = useSelector(
//     (state: RootState) => state.posts
//   );
//   const [newDesc, setNewDesc] = useState<IDesc | null>(null);
//   const dispatch: AppDispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [descId, setdescId] = useState<number | null>(null);
//   const [postId, setpostId] = useState<number | null>(null);

//   useEffect(() => {
//     if (id) {
//       const str = id;
//       const [first, second] = str.split(".").map(Number);

//       setdescId(first);
//       setpostId(second);
//     }
//   }, [id]);

//   useEffect(() => {
//     if (oneDesc !== null) {
//       setNewDesc(oneDesc);
//     }
//   }, [oneDesc]);

//   useEffect(() => {
//     if (postId && descId) {
//       dispatch(getOneDesc(descId));
//       dispatch(getOnePost(postId));
//     }
//   }, [descId, postId]);
//   useEffect(() => {
//     return () => {
//       dispatch(clearOneDesc());
//       dispatch(clearOnePost());
//     };
//   }, []);
//   useEffect(() => {
//     if (modalDescEdit) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflowY = "hidden";
//     } else {
//       document.body.style.overflow = "visible";
//       document.documentElement.style.overflowY = "visible";
//     }

//     return () => {
//       document.body.style.overflow = "visible";
//       document.documentElement.style.overflowY = "visible";
//     };
//   }, [modalDescEdit]);
//   return (
//     <>
//       {loading ? (
//         <LazyLoading />
//       ) : (
//         <>
//           {newDesc && onePost && (
//             <div
//               className={`w-full bg-[#00000080] flex justify-center items-center fixed top-0 h-screen z-50`}
//               onClick={() => dispatch(modalDescEdit())}
//             >
//               <div className="flex flex-col items-center w-1/3 bg-white rounded-lg p-4">
//                 <h3 className="text-2xl font-medium text-center">
//                   Edit description post
//                 </h3>
//                 <input
//                   className="w-3/4 border border-black rounded-lg p-2 my-2"
//                   placeholder="Title"
//                   onChange={(e) =>
//                     setNewDesc({ ...newDesc, title: e.target.value } as IDesc)
//                   }
//                   value={newDesc?.title}
//                 />
//                 <textarea
//                   className="w-3/4 border border-black rounded-lg p-2 my-2 h-48"
//                   placeholder="Description"
//                   onChange={(e) =>
//                     setNewDesc({ ...newDesc, body: e.target.value } as IDesc)
//                   }
//                   value={newDesc?.body}
//                 />
//                 <button
//                   className="p-2 m-4 rounded-lg mr-8 bg-blue-500 hover:bg-blue-700"
//                   onClick={() => {
//                     if (newDesc) {
//                       dispatch(editDesc({ id: postId!, desc: newDesc }));
//                       dispatch(modalDescEdit());
//                     }
//                   }}
//                 >
//                   Add descriptions
//                 </button>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </>
//   );
// };
