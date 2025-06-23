import React, { useEffect, useRef, useState } from "react";
import ChatBotIcon from "./ChatBotIcon";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { FaMessage } from "react-icons/fa6";
import { myInformation } from "./myInfo";
import { IoCloseSharp } from "react-icons/io5";
import { TbMessageChatbotFilled } from "react-icons/tb";

const Chatbot = () => {
  const chatBodyRef = useRef();
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: myInformation,
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);

  const updateHistory = (text, isError = false) => {
    setChatHistory((prev) => [
      ...prev.filter((msg) => msg.text !== "Thinking..."),
      { role: "model", text, isError },
    ]);
  };
  const generateBotResponse = async (history) => {
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong");
      console.log(data);
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };
  //   Auto scroll when ever scroll history updaes
  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);
  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        id="chatbot-toggler"
        onClick={() => setShowChatbot((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#4b6cb7] to-[#182848] p-4 rounded-full shadow-lg text-white text-2xl animate-bounce hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out"
      >
        <span>
          <TbMessageChatbotFilled />
        </span>
      </button>
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            className="material-symbols-rounded"
            onClick={() => setShowChatbot((prev) => !prev)}
          >
            <span>
              <IoCloseSharp />
            </span>
          </button>
        </div>
        {/* Chat body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">Hey there🖐 How Can i help you? </p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        {/* Chat Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
