import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentToForumPost,
  deleteCommentFromForumPost,
  editForumPost,
  editForumPostComment,
} from "../../store/forum/forumActions";
import { IForumPostComment } from "../../store/forum/forumSlice";

const ForumPostComment = ({
  id,
  comments,
}: {
  id: number;
  comments: IForumPostComment[];
}) => {
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [comment, setComment] = useState({ body: "", forum: id });
  const [editedComment, setEditedComment] = useState<any>(null);
  const [edit, setEdit] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <div>
        {comments.length ? (
          comments.map((comment: IForumPostComment) => (
            <div
              className="border-2 border-black mb-1 w-[90%] mx-auto"
              key={comment.id}
            >
              <p>@{comment.author}</p>
              {edit && editedComment?.id === comment.id ? (
                <input
                  type="text"
                  value={editedComment?.body}
                  onChange={(e: any) =>
                    setEditedComment({ ...editedComment, body: e.target.value })
                  }
                />
              ) : (
                <p>{comment.body}</p>
              )}
              {comment.author === currentUser!.email && (
                <>
                  {editedComment?.id == comment.id ? (
                    <button
                      onClick={() => {
                        dispatch(
                          editForumPostComment({
                            id: +id!,
                            commentBody: editedComment?.body,
                            commentId: editedComment?.id,
                          })
                        );
                      }}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          dispatch(
                            deleteCommentFromForumPost({
                              id: +id!,
                              commentId: +comment.id!,
                            })
                          )
                        }
                        className="bg-red-300"
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          setEdit(true);
                          setEditedComment(comment);
                        }}
                        className="bg-green-300"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          ))
        ) : (
          <p>No comments</p>
        )}
      </div>
      <div className="flex">
        <textarea
          onChange={(e) => setComment({ ...comment, body: e.target.value })}
          className="border-2 border-black w-full"
          name=""
          id=""
        ></textarea>
        <button onClick={() => dispatch(addCommentToForumPost({ comment }))}>
          Send
        </button>
      </div>
    </>
  );
};

export default ForumPostComment;
