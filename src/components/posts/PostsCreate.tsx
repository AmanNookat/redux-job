import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/posts/postsAction";
import { IAddPost } from "../../store/posts/postTypes";
import { RootState } from "../../store/store";

export const PostsCreate = () => {
  const dispatch: any = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [typePost, setTypePost] = useState<string | null>(null);

  const [newPost, setNewPost] = useState({
    name: "",
    title: "",
    position: "",
    type_post: "",
    description: "",
    celery: 0,
    type_work: "",
    type_employment: "",
  });

  function chekPost(newPost: IAddPost, type: number) {
    if (type === 0 || type === 2) {
      if (
        !newPost.name.trim() ||
        !newPost.type_post.trim() ||
        !newPost.description.trim()
      ) {
        alert("Заполните поле!");
        return;
      }

      const post = {
        name: newPost.name,
        type_post: newPost.type_post,
        description: newPost.description,
        celery: newPost.celery,
      };

      dispatch(addPost({ post, type }));
    } else if (type === 1) {
      if (
        !newPost.title.trim() ||
        !newPost.type_work.trim() ||
        !newPost.type_employment.trim() ||
        !newPost.position.trim()
      ) {
        alert("Заполните поле!");
        return;
      }

      const post = {
        title: newPost.title,
        position: newPost.position,
        celery: newPost.celery,
        type_work: newPost.type_work,
        type_employment: newPost.type_employment,
      };

      dispatch(addPost({ post, type }));
    }
  }

  // function chekVacancy(newVacancy: IAddVacancy) {
  //   if (
  //     !newVacancy.title.trim() ||
  //     !newVacancy.type_work.trim() ||
  //     !newVacancy.position.trim() ||
  //     !newVacancy.type_employment.trim()
  //   ) {
  //     alert("Заполните поле!");
  //     return;
  //   }

  //   dispatch(addVacancy({ newVacancy }));
  // }

  return (
    <>
      <>
        {currentUser?.type_user === "Company" && !typePost && (
          <select onChange={(e) => setTypePost(e.target.value)}>
            <option hidden>Choose</option>
            <option value="Freelancing">Freelancing</option>
            <option value="Vacancy">Vacancy</option>
          </select>
        )}
        {typePost === "Freelancing" && (
          <div className="">
            <h3>Create fleelancing</h3>
            <input
              type="text"
              placeholder="Name"
              maxLength={50}
              onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
            />
            <select
              onChange={(e) =>
                setNewPost({ ...newPost, type_post: e.target.value })
              }
            >
              <option hidden>Choose</option>
              <option value="Teams">Teams</option>
              <option value="Work">Work</option>
            </select>
            <textarea
              placeholder="Description"
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Celery"
              maxLength={10}
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  celery: parseFloat(e.target.value) || 0,
                })
              }
            />
            <button onClick={() => chekPost(newPost, 0)}>
              Add fleelancing
            </button>
          </div>
        )}
        {typePost === "Vacancy" && (
          <div className="">
            <h3>Create vacancy</h3>
            <input
              type="text"
              placeholder="Title"
              maxLength={50}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Position"
              maxLength={50}
              onChange={(e) =>
                setNewPost({ ...newPost, position: e.target.value })
              }
            />
            <select
              onChange={(e) =>
                setNewPost({ ...newPost, type_work: e.target.value })
              }
            >
              <option hidden>Choose</option>
              <option value="Work">Work</option>
              <option value="Internship">Internship</option>
            </select>
            <select
              onChange={(e) =>
                setNewPost({ ...newPost, type_employment: e.target.value })
              }
            >
              <option hidden>Choose</option>
              <option value="Office">Office</option>
              <option value="Online">Online</option>
            </select>
            <input
              type="number"
              placeholder="Celery"
              maxLength={10}
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  celery: parseFloat(e.target.value) || 0,
                })
              }
            />
            <button onClick={() => chekPost(newPost, 1)}>
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
            placeholder="name"
            maxLength={50}
            onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
          />
          <select
            onChange={(e) =>
              setNewPost({ ...newPost, type_post: e.target.value })
            }
          >
            <option hidden>Choose</option>
            <option value="Teams">Teams</option>
            <option value="Work">Work</option>
          </select>
          <textarea
            placeholder="Description"
            onChange={(e) =>
              setNewPost({ ...newPost, description: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Celery"
            maxLength={10}
            onChange={(e) =>
              setNewPost({
                ...newPost,
                celery: parseFloat(e.target.value) || 0,
              })
            }
          />
          <button onClick={() => chekPost(newPost, 2)}>Add post</button>
        </div>
      )}
    </>
    // <div>
    //   <h3>comp_post</h3>
    //   <h3>comp_vacancy</h3>
    //   <h3>er_code</h3>
    //   <h3>forum</h3>
    //   <h3>post</h3>
    // </div>
  );
};
