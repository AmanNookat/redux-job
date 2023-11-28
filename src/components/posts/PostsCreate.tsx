import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/posts/postsAction";
import { IAddPost } from "../../store/posts/postTypes";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { modalPostCreate } from "../../store/posts/postsSlice";

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
      dispatch(modalPostCreate());
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
      dispatch(modalPostCreate());
    }
  }

  return (
    <div>
      <>
        {currentUser?.type_user === "Company" && !typePost && (
          <div className="w-full flex flex-col items-center mt-10">
            <h3 className="text-2xl font-bold mb-4">Type Post</h3>
            <select onChange={(e) => setTypePost(e.target.value)}>
              <option hidden>Choose</option>
              <option value="Freelancing">Freelancing</option>
              <option value="Vacancy">Vacancy</option>
            </select>
          </div>
        )}
        {typePost === "Freelancing" && (
          <div className="w1/2 bg-[#19253C] h-screen flex justify-center">
            <div className="">
              <div className="">Create fleelancing</div>
              <input
                className="w-3/4 border border-black rounded-lg p-2 my-2"
                type="text"
                placeholder="Name"
                maxLength={50}
                onChange={(e) =>
                  setNewPost({ ...newPost, name: e.target.value })
                }
              />
              <select
                className="w-3/4 border border-black rounded-lg p-2 my-2"
                onChange={(e) =>
                  setNewPost({ ...newPost, type_post: e.target.value })
                }
              >
                <option hidden>Choose</option>
                <option value="Teams">Teams</option>
                <option value="Work">Work</option>
              </select>
              <textarea
                className="w-3/4 border border-black rounded-lg p-2 my-2"
                placeholder="Description"
                onChange={(e) =>
                  setNewPost({ ...newPost, description: e.target.value })
                }
              />
              <input
                className="w-3/4 border border-black rounded-lg p-2 my-2"
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
          </div>
        )}
        {typePost === "Vacancy" && (
          <div className="w-full flex bg-[#19253C] h-screen">
            <div className="flex flex-col w-5/6 items-center">
              <div className="text-2xl font-bold py-2 w-full text-center text-white ">
                Create vacancy
              </div>
              <input
                className="w-3/4 border border-black rounded-lg p-2 my-2"
                type="text"
                placeholder="Title"
                maxLength={50}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
              />
              <input
                className="w-3/4 border border-black rounded-lg p-2 my-2"
                type="text"
                placeholder="Position"
                maxLength={50}
                onChange={(e) =>
                  setNewPost({ ...newPost, position: e.target.value })
                }
              />
              <select
                className="w-3/4 border border-black rounded-lg p-2 my-2"
                onChange={(e) =>
                  setNewPost({ ...newPost, type_work: e.target.value })
                }
              >
                <option hidden>Choose</option>
                <option value="Work">Work</option>
                <option value="Internship">Internship</option>
              </select>
              <select
                className="w-3/4 border border-black rounded-lg p-2 my-2"
                onChange={(e) =>
                  setNewPost({ ...newPost, type_employment: e.target.value })
                }
              >
                <option hidden>Choose</option>
                <option value="Office">Office</option>
                <option value="Online">Online</option>
              </select>
              <input
                className="w-3/4 border border-black rounded-lg p-2 my-2"
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
          </div>
        )}
      </>
      {currentUser?.type_user === "Human" && (
        <div className="w-full flex bg-[#19253C]">
          <div className="flex flex-col w-5/6 items-center">
            <div className="text-2xl font-bold py-2 w-full text-center text-white ">
              Create post
            </div>
            <input
              className="w-3/4 border border-black rounded-lg p-2 my-2"
              type="text"
              placeholder="name"
              maxLength={50}
              onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
            />
            <select
              className="w-3/4 border border-black rounded-lg p-2 my-2"
              onChange={(e) =>
                setNewPost({ ...newPost, type_post: e.target.value })
              }
            >
              <option hidden>Choose</option>
              <option value="Teams">Teams</option>
              <option value="Work">Work</option>
            </select>
            <textarea
              className="w-3/4 border border-black rounded-lg p-2 my-2"
              placeholder="Description"
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
            />
            <input
              className="w-3/4 border border-black rounded-lg p-2 my-2"
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
        </div>
      )}
    </div>
    // <div>
    //   <h3>comp_post</h3>
    //   <h3>comp_vacancy</h3>
    //   <h3>er_code</h3>
    //   <h3>forum</h3>
    //   <h3>post</h3>
    // </div>
  );
};
