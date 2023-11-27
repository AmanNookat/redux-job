import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { editPostFunc, getOnePost } from "../../store/posts/postsAction";
import { IPost } from "../../store/posts/postTypes";
import { clearOnePost } from "../../store/posts/postsSlice";

export const PostsEdit = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { onePost } = useSelector((state: RootState) => state.posts);
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [postId, setPostId] = useState<null | number>(null);
  const [editPost, setEditPost] = useState<IPost | null>(null);
  const [typePost, setTypePost] = useState<null | number>(null);

  useEffect(() => {
    const typeLS = localStorage.getItem("typePost");
    const type: number = typeLS ? parseInt(typeLS) : 0;
    setTypePost(type);
    if (onePost !== null) {
      setEditPost(onePost);
    }
  }, [onePost]);

  useEffect(() => {
    if (id) {
      const posId: number = parseInt(id, 10);
      setPostId(posId);
      dispatch(getOnePost(posId));
    }
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(clearOnePost());
    };
  }, []);

  function chekPost(editPost: IPost | null, id: number) {
    if (!editPost) {
      alert("Error");
      return;
    }

    if (typePost === 0 || typePost === 2) {
      if (
        !editPost.name.trim() ||
        !editPost.type_post.trim() ||
        !editPost.description.trim()
      ) {
        alert("Заполните поле!");
        return;
      }

      const post = {
        name: editPost.name,
        type_post: editPost.type_post,
        description: editPost.description,
        celery: editPost.celery,
      };

      dispatch(editPostFunc({ id, post }));
      navigate(`/details-post/${postId}`);
    } else if (typePost === 1) {
      if (
        !editPost.title.trim() ||
        !editPost.type_work.trim() ||
        !editPost.type_employment.trim() ||
        !editPost.position.trim()
      ) {
        alert("Заполните поле!");
        return;
      }

      const post = {
        title: editPost.title,
        position: editPost.position,
        celery: editPost.celery,
        type_work: editPost.type_work,
        type_employment: editPost.type_employment,
      };

      dispatch(editPostFunc({ id, post }));
      navigate(`/details-post/${postId}`);
    }
  }
  return (
    <>
      <>
        {/* {currentUser?.type_user === "Company" && !typePost && (
        <select onChange={(e) => setTypePost(e.target.value)}>
          <option hidden>Choose</option>
          <option value="Freelancing">Freelancing</option>
          <option value="Vacancy">Vacancy</option>
        </select>
      )} */}
        {typePost === 0 && (
          <div className="">
            <h3>Create fleelancing</h3>
            <input
              type="text"
              placeholder=""
              onChange={(e) =>
                setEditPost({ ...editPost, name: e.target.value } as IPost)
              }
              value={editPost?.name}
            />
            <select
              onChange={(e) =>
                setEditPost({ ...editPost, type_post: e.target.value } as IPost)
              }
              value={editPost?.type_post}
            >
              <option value="Teams">Teams</option>
              <option value="Work">Work</option>
            </select>
            <textarea
              placeholder=""
              onChange={(e) =>
                setEditPost({
                  ...editPost,
                  description: e.target.value,
                } as IPost)
              }
              value={editPost?.description}
            />
            <input
              type="number"
              placeholder=""
              onChange={(e) =>
                setEditPost({
                  ...editPost,
                  celery: parseFloat(e.target.value) || 0,
                } as IPost)
              }
              value={editPost?.celery}
            />
            <button onClick={() => chekPost(editPost, postId!)}>
              Add fleelancing
            </button>
          </div>
        )}
        {typePost === 1 && (
          <div className="">
            <h3>Create vacancy</h3>
            <input
              type="text"
              placeholder=""
              onChange={(e) =>
                setEditPost({ ...editPost, title: e.target.value } as IPost)
              }
              value={editPost?.title}
            />
            <input
              type="text"
              placeholder=""
              onChange={(e) =>
                setEditPost({ ...editPost, position: e.target.value } as IPost)
              }
              value={editPost?.position}
            />
            <select
              onChange={(e) =>
                setEditPost({ ...editPost, type_work: e.target.value } as IPost)
              }
              value={editPost?.type_work}
            >
              <option value="Work">Work</option>
              <option value="Internship">Internship</option>
            </select>
            <select
              onChange={(e) =>
                setEditPost({
                  ...editPost,
                  type_employment: e.target.value,
                } as IPost)
              }
              value={editPost?.type_employment}
            >
              <option value="Office">Office</option>
              <option value="Online">Online</option>
            </select>
            <input
              type="number"
              placeholder=""
              onChange={(e) =>
                setEditPost({
                  ...editPost,
                  celery: parseFloat(e.target.value) || 0,
                } as IPost)
              }
              value={editPost?.celery}
            />
            <button onClick={() => chekPost(editPost, postId!)}>
              Add fleelancing
            </button>
          </div>
        )}
      </>
      {currentUser?.type_user === "Human" && (
        <div className="">
          <h3>Create post</h3>
          <input
            type="text"
            placeholder=""
            onChange={(e) =>
              setEditPost({ ...editPost, name: e.target.value } as IPost)
            }
            value={editPost?.name}
          />
          <select
            onChange={(e) =>
              setEditPost({ ...editPost, type_post: e.target.value } as IPost)
            }
            value={editPost?.type_post}
          >
            <option value="Teams">Teams</option>
            <option value="Work">Work</option>
          </select>
          <textarea
            placeholder=""
            onChange={(e) =>
              setEditPost({ ...editPost, description: e.target.value } as IPost)
            }
            value={editPost?.description}
          />
          <input
            type="number"
            placeholder=""
            onChange={(e) =>
              setEditPost({
                ...editPost,
                celery: parseFloat(e.target.value) || 0,
              } as IPost)
            }
            value={editPost?.celery}
          />
          <button onClick={() => chekPost(editPost, postId!)}>Add post</button>
        </div>
      )}
    </>
  );
};
