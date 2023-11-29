import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setChatGpt } from "../../store/chatGpt/gptAction";
import { IGpt } from "../../store/chatGpt/typeGpt";
import arow_up from "../../assets/arrow-up.png";
import style from "./chatgpt.module.css";

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<IGpt[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const { mess } = useSelector((state: RootState) => state.chatGpt);
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
    setLoading(true);

    messageInputRef.current.value = "";

    try {
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
      setLoading(false);
    }
  };
  console.log(mess);
  //   console.log(messages);

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
              <g className={style.dash}>
                <path
                  style={{ animationDuration: "4s" }}
                  pathLength="360"
                  d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z"
                  className={style.big}
                ></path>
                <path
                  pathLength="360"
                  d="M 20.4603 48.5493 L 16.6461 46.9584 C 17.3209 48.3794 18.4917 49.5682 20.0447 50.2206 C 23.4007 51.6328 27.2707 50.0262 28.6694 46.6367 C 29.3464 44.9966 29.3509 43.1867 28.6806 41.5422 C 28.0103 39.8977 26.7434 38.6151 25.119 37.9315 C 23.5035 37.2544 21.7741 37.279 20.2547 37.8576 L 24.1961 39.5022 C 26.6719 40.5434 27.8427 43.4124 26.8104 45.9105 C 25.7803 48.4085 22.936 49.5905 20.4603 48.5493 Z"
                  className={style.aaa}
                ></path>
                <path
                  pathLength="360"
                  d="M 49.9968 24.2603 C 49.9968 19.9188 46.4954 16.384 42.1943 16.384 C 37.8908 16.384 34.3894 19.9188 34.3894 24.2603 C 34.3894 28.6017 37.8908 32.1343 42.1943 32.1343 C 46.4954 32.1343 49.9968 28.6017 49.9968 24.2603 Z"
                ></path>
                <path
                  pathLength="360"
                  d="M 36.3446 24.2469 C 36.3446 20.9802 38.97 18.3324 42.2054 18.3324 C 45.4431 18.3324 48.0685 20.9802 48.0685 24.2469 C 48.0685 27.5135 45.4431 30.1613 42.2054 30.1613 C 38.97 30.1613 36.3446 27.5135 36.3446 24.2469 Z"
                ></path>
              </g>
              <path
                pathLength="360"
                d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z"
                fill="#212121"
              ></path>
              <path
                className={style.fill}
                pathLength="360"
                d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z"
              ></path>
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
              className="btn btn-primary btn-send bg-white border-gray-900 border-2 text-gray-900 h-16 rounded-3xl text-3xl ml-10 hover:bg-slate-900 hover:text-gray-400"
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
