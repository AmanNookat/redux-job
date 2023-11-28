import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ChatMessages = ({ messages }: any) => {
  const [realTime, setRealTime] = useState(false);

  const { currentUser } = useSelector((state: RootState) => state.users);

  // useEffect(() => {
  //   function realTimeFunc() {
  //     setRealTime(!realTime);
  //   }
  //   realTimeFunc();
  //   const interval = setInterval(realTimeFunc, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="h-full overflow-auto max-h-full scrollbarDerma flex flex-col">
      {messages.map((message: any) => (
        <div
          className={`w-full flex ${
            currentUser.email !== message.sender
              ? "justify-start"
              : "justify-end"
          }`}
          key={message.id}
        >
          <div
            className={`${
              currentUser.email === message.sender
                ? "bg-blue-500"
                : "bg-gray-900"
            } rounded-lg my-3 mx-2 p-2 max-w-[300px]`}
          >
            <p className="text-red-500">
              {currentUser.email !== message.sender ? message.sender : null}
            </p>
            <p>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
