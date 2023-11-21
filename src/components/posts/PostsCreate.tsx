import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/posts/postsAction";
import { IAddPost } from "../../store/posts/postTypes";

export const PostsCreate = () => {
  const dispatch: any = useDispatch();
  const [newPost, setNewPost] = useState({
    name: "",
    type_post: "",
    description: "",
    celery: 0,
  });

  function chekPost(newPost: IAddPost) {
    if (
      !newPost.name.trim() ||
      !newPost.type_post.trim() ||
      !newPost.description.trim()
    ) {
      alert("Заполните поле!");
      return;
    }

    const type = 1;
    dispatch(addPost({ newPost, type }));
  }
  return (
    <>
      <div className="">
        <h3>Create post</h3>
        <input
          type="text"
          placeholder=""
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
          placeholder=""
          onChange={(e) =>
            setNewPost({ ...newPost, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder=""
          onChange={(e) =>
            setNewPost({ ...newPost, celery: parseFloat(e.target.value) || 0 })
          }
        />
        <button onClick={() => chekPost(newPost)}>Add post</button>
      </div>
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
