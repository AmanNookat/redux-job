import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getChatrooms } from "../../store/chats/ChatsActions";
import { IChatRoom } from "../../store/chats/ChatsTypes";
import ChatRoomAdd from "./ChatRoomAdd";
import { useNavigate } from "react-router-dom";
import { randomString } from "../../helpers/functions";
import icons_chat from "../../assets/icons_chat.jpg";
import style from "./chat.module.css";
import { getOneChatroom } from "../../store/chats/ChatsSlice";
import ChatMessages from "./ChatMessages";
import Chat from "./Chat";

const ChatRoomsList = () => {
  const { chats, loading, chatroom } = useSelector(
    (state: RootState) => state.chats
  );
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [modal, setModal] = useState(false);

  const dispatch: AppDispatch = useDispatch();
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
          <div className="bg-gray-800 text-gray-100 flex h-screen">
            <div className="border-l-2 border-gray-500 w-2/5">
              {modal && <ChatRoomAdd setModal={setModal} />}
              <div className="flex items-center justify-center flex-col h-28 bg-gray-900 w-full border-r-2 border-t-2 border-b-2 border-gray-500">
                <div className="flex w-full items-center justify-center mb-2">
                  <h3 className="text-2xl mr-5">Chat</h3>
                  <button
                    className="ml-6 flex text-lg"
                    onClick={() => setModal(true)}
                  >
                    <img className="w-8 mr-2" src={icons_chat} alt="" />
                    <p>create room</p>
                  </button>
                </div>
                <div className="w-full flex items-center justify-center">
                  <input
                    type="text"
                    placeholder="search"
                    className="w-3/4 bg-slate-600 rounded-lg p-1"
                  />
                </div>
              </div>
              <div className="bg-gray-900 w-full h-[85vh] overflow-auto border-r-2 text-xl border-gray-500">
                {chats.length ? (
                  <>
                    {chats.map((chat: IChatRoom) => {
                      if (chat.participants.includes(currentUser?.id)) {
                        return (
                          <div
                            onClick={() => {
                              dispatch(getOneChatroom(chat));
                            }}
                            key={chat.id}
                            className="border-2 h-20 p-3 m-1 border-gray-500 cursor-pointer"
                          >
                            <p>{chat.title}</p>
                            <p>members: {chat.participants.length}</p>
                          </div>
                        );
                      } else if (currentUser?.is_superuser) {
                        return (
                          <div
                            onClick={() => {
                              dispatch(getOneChatroom(chat));
                            }}
                            key={chat.id}
                            className="border-2 h-20 p-3 m-1 border-gray-500 cursor-pointer"
                          >
                            <p>{chat.title}</p>
                            <p>members: {chat.participants.length}</p>
                          </div>
                        );
                      }
                    })}
                  </>
                ) : (
                  <>No chats</>
                )}
              </div>
            </div>
            {chatroom ? (
              <Chat id={chatroom?.id!} />
            ) : (
              <div className={style.scene}>
                <div className={style.forest}>
                  <div className={`${style.tree} ${style.tree1}`}>
                    <div
                      className={`${style.branch} ${style["branch-top"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-middle"]}`}
                    ></div>
                  </div>

                  <div className={`${style.tree} ${style.tree2}`}>
                    <div
                      className={`${style.branch} ${style["branch-top"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-middle"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-bottom"]}`}
                    ></div>
                  </div>

                  <div className={`${style.tree} ${style.tree3}`}>
                    <div
                      className={`${style.branch} ${style["branch-top"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-middle"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-bottom"]}`}
                    ></div>
                  </div>

                  <div className={`${style.tree} ${style.tree4}`}>
                    <div
                      className={`${style.branch} ${style["branch-top"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-middle"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-bottom"]}`}
                    ></div>
                  </div>

                  <div className={`${style.tree} ${style.tree5}`}>
                    <div
                      className={`${style.branch} ${style["branch-top"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-middle"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-bottom"]}`}
                    ></div>
                  </div>

                  <div className={`${style.tree} ${style.tree6}`}>
                    <div
                      className={`${style.branch} ${style["branch-top"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-middle"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-bottom"]}`}
                    ></div>
                  </div>

                  <div className={`${style.tree} ${style.tree7}`}>
                    <div
                      className={`${style.branch} ${style["branch-top"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-middle"]}`}
                    ></div>
                    <div
                      className={`${style.branch} ${style["branch-bottom"]}`}
                    ></div>
                  </div>
                </div>

                <div className={style.tent}>
                  <div className={style.roof}></div>
                  <div className={style["roof-border-left"]}>
                    <div className={style["roof-border"]}></div>
                    <div className={style["roof-border"]}></div>
                    <div className={style["roof-border"]}></div>
                  </div>
                  <div className={style.entrance}>
                    <div className={`${style.door} ${style["left-door"]}`}>
                      <div className={style["left-door-inner"]}></div>
                    </div>
                    <div className={`${style.door} ${style["right-door"]}`}>
                      <div className={style["right-door-inner"]}></div>
                    </div>
                  </div>
                </div>

                <div className={style.floor}>
                  <div className={style.ground1}></div>
                  <div className={style.ground2}></div>
                </div>

                <div className={style.fireplace}>
                  <div className={style.support}></div>
                  <div className={style.support}></div>
                  <div className={style.bar}></div>
                  <div className={style.hanger}></div>
                  <div className={style.smoke}></div>
                  <div className={style.pan}></div>
                  <div className={style.fire}>
                    <div className={style.line1}>
                      <div className={style.particle1}></div>
                      <div className={style.particle2}></div>
                      <div className={style.particle3}></div>
                      <div className={style.particle4}></div>
                    </div>
                    <div className={style.line2}>
                      <div className={style.particle1}></div>
                      <div className={style.particle2}></div>
                      <div className={style.particle3}></div>
                      <div className={style.particle4}></div>
                    </div>
                    <div className={style.line3}>
                      <div className={style.particle1}></div>
                      <div className={style.particle2}></div>
                      <div className={style.particle3}></div>
                      <div className={style.particle4}></div>
                    </div>
                  </div>
                </div>

                <div className={style["time-wrapper"]}>
                  <div className={style.time}>
                    <div className={style.day}></div>
                    <div className={style.night}>
                      <div className={style.moon}></div>
                      <div
                        className={`${style.star} ${style["star1"]} ${style["star-big"]}`}
                      ></div>
                      <div
                        className={`${style.star} ${style["star2"]} ${style["star-big"]}`}
                      ></div>
                      <div
                        className={`${style.star} ${style["star3"]} ${style["star-big"]}`}
                      ></div>
                      <div className={style.star}></div>
                      <div className={style.star}></div>
                      <div className={style.star}></div>
                      <div className={style.star}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ChatRoomsList;
