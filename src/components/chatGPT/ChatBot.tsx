import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setChatGpt } from "../../store/chatGpt/gptAction";
import { IGpt } from "../../store/chatGpt/typeGpt";
import arow_up from "../../assets/arrow-up.png";
import style from "./chatgpt.module.css";
import LazyLoading from "../loading/LazyLoading";

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<IGpt[]>([]);
  const [lastMessageLoading, setLastMessageLoading] = useState<boolean>(false);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const { mess, loading } = useSelector((state: RootState) => state.chatGpt);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (mess) setMessages(mess);
    return;
  }, [mess]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!messageInputRef.current) return;

    const userMessage = messageInputRef.current.value.trim();
    if (userMessage.length === 0) {
      return;
    }

    const newUserMessage: IGpt = {
      id: messages.length + 1,
      created_at: new Date().toISOString(),
      message: userMessage,
      response: "",
      user: 5,
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    messageInputRef.current.value = "";

    try {
      setLastMessageLoading(true);

      const response = await dispatch(setChatGpt(userMessage));

      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === newUserMessage.id
            ? { ...msg, response: response.payload }
            : msg
        )
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLastMessageLoading(false);
    }
  };

  useEffect(() => {
    dispatch(setChatGpt("Hello"));
  }, []);

  return (
    <div className="flex flex-col h-auto p-2 bg-gray-900">
      <div className="card flex-grow-1">
        <div className="flex flex-col items-center justify-center">
          <div className="card-header bg-primary text-4xl mb-12 p-4  text-white">
            How can I help you today?
          </div>
          <div className="z-10 fixed left-94 top-60">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={style.loader}
            >
              {/* ... (your SVG content) */}
            </svg>
          </div>
        </div>
        <div>
          <div
            className=" flex flex-col items-center card-body messages-box overflow-auto"
            id="messages-box"
          >
            <ul className="list-none p-0 z-40 w-[70%]">
              {mess?.map((message: IGpt) => (
                <li
                  key={message.id}
                  className={`message-container ${
                    message.user === 5 ? "user-message" : "bot-message"
                  }`}
                >
                  <div className="message p-4 rounded bg-slate-300 my-4">
                    <div className="message-sender font-bold mb-2">
                      {message.user === 5 ? "You" : "AI Chatbot"}
                    </div>
                    <div className="message-content">{message.message}</div>
                    {loading && <div>Loading...</div>}
                    {message.response && !loading && (
                      <div className="message-response text-gray-500 mt-1">
                        {/* Extract relevant information from the response object */}
                        <div className="">{message.response}</div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <form
        className="message-form fixed bottom-0 bg-transparent z-50 text-gray-300 h-36 w-full"
        onSubmit={handleSubmit}
      >
        <div className="input-group flex items-center h-full w-full justify-center">
          <input
            type="text"
            className="form-control message-inpu border-2  border-gray-900  h-16 w-4/5 rounded-xl text-gray-900  text-2xl"
            placeholder="Type your message..."
            ref={messageInputRef}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-primary btn-send bg-white border-gray-900 border-2 text-gray-900 h-16 rounded--3xl text-3xl ml-10 hover:bg-slate-900 hover:text-gray-400"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
