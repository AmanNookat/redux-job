import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/users/usersActions";
import { RootState } from "../../store/store";
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

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const addMember = (id: string) => {
    if (chatroom.participants.includes(+id)) return;
    setChatroom({ ...chatroom, participants: [...chatroom.participants, +id] });
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/30">
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
              <h2 className="text-xl font-bold">Create your chatroom</h2>
              <input
                type="text"
                placeholder="title"
                onChange={(e) => {
                  setChatroom({ ...chatroom, title: e.target.value });
                }}
              />
              <label>add users to your chatroom</label>
              {/* {chatroom.participants.map((member: any) => (
            <p>{member}</p>
          ))} */}
              <select onChange={(e) => addMember(e.target.value)}>
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
              <button onClick={() => dispatch(createChatroom({ chatroom }))}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatRoomAdd;
