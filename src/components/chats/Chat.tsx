import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { addMessage, getOneChat } from "../../store/chats/ChatsActions";
import ChatMessages from "./ChatMessages";

const Chat = () => {
  const { chatroom, loading } = useSelector((state: RootState) => state.chats);
  const [message, setMessage] = useState({
    chatroom: 0,
    content: "",
  });
  const [prikol, setPrikol] = useState(false);
  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOneChat({ chatroomId: parseInt(id) }));
      setMessage({ ...message, chatroom: parseInt(id) });
    }
  }, [id, dispatch, prikol]);

  // useEffect(() => {
  //   const realTime = setInterval(() => {
  //     setPrikol(!prikol);
  //   }, 5000);

  //   return () => clearInterval(realTime);
  // }, [prikol]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {chatroom && (
            <div>
              <h2>{chatroom.title}</h2>
              <div className="border-2 border-black">
                <h3>members</h3>
                {chatroom.participants.map((member: any) => (
                  <p key={member}>id: {member}</p>
                ))}
              </div>
              <div className="border-2 border-black">
                <h3>messages</h3>

                {chatroom.messages.length ? (
                  <ChatMessages messages={chatroom.messages} />
                ) : (
                  <h2>No messages</h2>
                )}
              </div>
              <div className="flex fixed bottom-5 left-3">
                <input
                  type="text"
                  placeholder="Введите текст..."
                  className="w-96 border-2 border-black p-1"
                  onChange={(e: any) =>
                    setMessage({ ...message, content: e.target.value })
                  }
                  value={message.content}
                />
                <button
                  onClick={() => {
                    dispatch(addMessage({ message }));
                    setMessage({ ...message, content: "" });
                    setPrikol(!prikol);
                  }}
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
