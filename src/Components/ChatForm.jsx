import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ChatForm = ({ setChatHistory, generateBotResponse, chatHistory }) => {
  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking...." },
      ]);
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Using the details provided above,please address this query: ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <form action="" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        className="message-input"
        type="text"
        placeholder="Message"
        required
      />
      <button className="" ><p className="ml-2"><FaArrowUp /></p></button>
    </form>
  );
};

export default ChatForm;
