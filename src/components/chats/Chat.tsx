import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { addMessage, getOneChat } from "../../store/chats/ChatsActions";
import ChatMessages from "./ChatMessages";
import ChatMembersModal from "./ChatMembersModal";

const Chat = ({ id }: { id: number }) => {
  const { chatroom, loading } = useSelector((state: RootState) => state.chats);
  const [message, setMessage] = useState({
    chatroom: 0,
    content: "",
  });
  const [prikol, setPrikol] = useState(false);
  const [modal, setModal] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setMessage({ ...message, chatroom: id });
  }, [id, dispatch, prikol]);

  return (
    <>
      {modal && (
        <ChatMembersModal
          setModal={setModal}
          members={chatroom?.participants}
        />
      )}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {chatroom && (
            <div className="text-white w-full h-full flex flex-col">
              <h2
                className="bg-gray-900 py-5 px-3 text-xl font-bold cursor-pointer"
                onClick={() => setModal(true)}
              >
                {chatroom.title}
              </h2>
              {chatroom.messages.length ? (
                <ChatMessages messages={chatroom.messages} />
              ) : (
                <span className="m-auto text-center">No messages...</span>
              )}

              <div className="flex items-center">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({ message }));
                    setMessage({ ...message, content: "" });
                    setPrikol(!prikol);
                  }}
                  className="w-full"
                >
                  <input
                    type="text"
                    placeholder="Введите текст..."
                    className="border-2 border-black p-1 w-full text-black"
                    onChange={(e: any) =>
                      setMessage({ ...message, content: e.target.value })
                    }
                    value={message.content}
                  />
                </form>
                <button
                  onClick={() => {
                    dispatch(addMessage({ message }));
                    setMessage({ ...message, content: "" });
                    setPrikol(!prikol);
                  }}
                  className="p-2"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Chat;
