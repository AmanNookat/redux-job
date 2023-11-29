import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentToForumPost,
  deleteCommentFromForumPost,
  editForumPostComment,
} from "../../store/forum/forumActions";
import { IForumPostComment } from "../../store/forum/forumSlice";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

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
      <div className="max-h-[800px] overflow-auto">
        {comments.length ? (
          comments.map((comment: IForumPostComment) => (
            <div
              className="border-2 border-white rounded-md w-[98%] my-2 mx-auto p-3 bg-gray-900 relative"
              key={comment.id}
            >
              <p className="text-xs mb-1 underline">@{comment.author}</p>
              {edit && editedComment?.id === comment.id ? (
                <input
                  type="text"
                  value={editedComment?.body}
                  onChange={(e: any) =>
                    setEditedComment({ ...editedComment, body: e.target.value })
                  }
                  className="text-black rounded-md mr-2 p-2 w-[20rem]"
                />
              ) : (
                <p>{comment.body}</p>
              )}
              {comment.author === currentUser?.email && (
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
                      className="border-2 border-white p-2 rounded-md hover:bg-white hover:text-gray-500"
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
                        className="bg-red-400 absolute right-1 top-1 p-1 rounded-sm"
                      >
                        <FaTrashAlt />
                      </button>

                      <button
                        onClick={() => {
                          setEdit(true);
                          setEditedComment(comment);
                        }}
                        className="bg-green-400 absolute right-8 top-1 p-1 rounded-sm"
                      >
                        <FaPencilAlt />
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
      <form className="flex mx-2 h-[100px]">
        <textarea
          onChange={(e) => setComment({ ...comment, body: e.target.value })}
          className="border-2 border-black w-full h-full text-black p-1 rounded-md bg-gray-100s"
          placeholder="Add comment..."
          name=""
          id=""
        ></textarea>
        <button
          className="px-2 rounded-md border-2 border-white ml-2 hover:bg-white hover:text-gray-900 font-bold"
          onClick={() => dispatch(addCommentToForumPost({ comment }))}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ForumPostComment;
