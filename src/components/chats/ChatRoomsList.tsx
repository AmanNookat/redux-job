import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getChatrooms } from "../../store/chats/ChatsActions";
import { IChatRoom } from "../../store/chats/ChatsTypes";
import ChatRoomAdd from "./ChatRoomAdd";
import { useNavigate } from "react-router-dom";
import { randomString } from "../../helpers/functions";

const ChatRoomsList = () => {
  const { chats, loading } = useSelector((state: RootState) => state.chats);
  const [modal, setModal] = useState(false);

  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getChatrooms());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {modal && <ChatRoomAdd setModal={setModal} />}
          <button onClick={() => setModal(true)}>create room</button>
          <div>
            {chats.length ? (
              <>
                {chats.map((chat: IChatRoom) => (
                  <div
                    onClick={() => {
                      navigate(`/chat/${chat.id + randomString()}`);
                    }}
                    key={chat.id}
                    className="border-2 border-black w-52 mb-2 p-3"
                  >
                    <p>title: {chat.title}</p>
                    <p>members: {chat.participants.length}</p>
                  </div>
                ))}
              </>
            ) : (
              <>No chats</>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ChatRoomsList;
