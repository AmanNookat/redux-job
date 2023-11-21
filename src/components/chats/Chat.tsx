import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { getOneChat } from "../../store/chats/ChatsActions";

const Chat = () => {
  const { chatroom, loading } = useSelector((state: RootState) => state.chats);
  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getOneChat({ chatroomId: parseInt(id) }));
    }
  }, [id, dispatch]);

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
                {chatroom.participants.map((member) => (
                  <p key={member}>id: {member}</p>
                ))}
              </div>
              <div className="border-2 border-black">
                <h3>messages</h3>

                {chatroom.messages.length ? (
                  chatroom.messages.map((message) => (
                    <>
                      <p>{message.text}</p>
                    </>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Chat;
