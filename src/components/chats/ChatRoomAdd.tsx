import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/users/usersActions";
import { AppDispatch, RootState } from "../../store/store";
import { IChatRoom } from "../../store/chats/ChatsTypes";
import { createChatroom } from "../../store/chats/ChatsActions";
import { IUser } from "../../store/users/usersTypes";

interface IModalProps {
  setModal: (value: boolean) => void;
}

const ChatRoomAdd = ({ setModal }: IModalProps) => {
  const [chatroom, setChatroom] = useState<IChatRoom>({
    title: "",
    participants: [],
  });
  const { users, loading } = useSelector((state: RootState) => state.users);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const addMember = (id: string) => {
    if (chatroom.participants.includes(+id)) return;
    setChatroom({ ...chatroom, participants: [...chatroom.participants, +id] });
  };

  return (
    <div className="flex fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/30 text-gray-900 z-30">
      <div
        className="m-auto bg-white p-16 rounded-lg flex flex-col text-center items-center gap-5 w-[30rem]"
        style={{ position: "relative" }}
      >
        <button
          style={{
            position: "absolute",
            right: "15px",
            top: "10px",
          }}
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Create your chatroom</h2>
          <input
            type="text"
            placeholder="title"
            className="h-8 border-2 border-gray-500 rounded-md mb-4"
            onChange={(e) => {
              setChatroom({ ...chatroom, title: e.target.value });
            }}
          />
          <label className="text-lg mb-1 font-bold">
            Add users to your chatroom
          </label>

          <select className="mb-4" onChange={(e) => addMember(e.target.value)}>
            <option hidden>users</option>
            {users.length ? (
              <>
                {users.map((user: IUser) => (
                  <option key={user.id} value={user.id}>
                    {user.email}
                  </option>
                ))}
              </>
            ) : (
              <option>users not found</option>
            )}
          </select>
          <button
            className="border-2 p-1 border-gray-600 text-xl rounded-md hover:bg-gray-900 hover:text-white"
            onClick={() => dispatch(createChatroom({ chatroom }))}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomAdd;
