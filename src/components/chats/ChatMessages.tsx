import React, { useEffect, useState } from "react";

const ChatMessages = ({ messages }: any) => {
  const [realTime, setRealTime] = useState(false);

  useEffect(() => {
    function realTimeFunc() {
      setRealTime(!realTime);
    }

    realTimeFunc();

    const interval = setInterval(realTimeFunc, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {messages.map((message: any) => (
        <p key={message.id}>
          <span className="bg-gray-300">{message.sender}</span> {message.text}
        </p>
      ))}
    </div>
  );
};

export default ChatMessages;
