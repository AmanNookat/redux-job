import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setChatGpt } from "../../store/chatGpt/gptAction";
import { IGpt } from "../../store/chatGpt/typeGpt";

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
    <div className="flex flex-col h-full">
      <div className="card flex-grow-1">
        <div className="card-header bg-primary text-white">Chat</div>
        <div className="card-body messages-box overflow-auto" id="messages-box">
          <ul className="list-none p-0">
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
      <form
        className="message-form fixed bottom-0 bg-slate-100 w-full"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control message-input h-94"
            placeholder="Type your message..."
            ref={messageInputRef}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary btn-send">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
