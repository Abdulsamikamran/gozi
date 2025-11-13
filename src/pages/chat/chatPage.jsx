import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const chatList = [
  {
    id: 1,
    name: "Janefa Cooper",
    date: "Jan 25, 2025",
    avatar: "/chatIcon.png", // Swap to your asset
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    active: true,
  },
  ...Array(20).fill({
    id: 2,
    name: "Janefa Cooper",
    date: "Jan 25, 2025",
    avatar: "/chatIcon.png",
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    active: false,
  }),
];

const messages = [
  {
    fromMe: false,
    date: "Jan 25, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    fromMe: true,
    date: "Jan 25, 2025",
    text: "Hi how are you?",
  },
];

export default function ChatPage() {
  const [message, setMessage] = useState("");
  return (
    <div className="h-[90vh] w-full bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-8 pt-4 pb-2">
        <button>
          <svg
            width={32}
            height={32}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M15 19l-7-7 7-7"
              stroke="#193B36"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="font-semibold text-[28px] text-[#193B36]">Chat</span>
      </div>
      {/* Main Chat Layout */}
      <div className="flex-1 flex min-h-0 border-t border-[#F0F1F3]">
        {/* Left: Chat List */}
        <div className="w-[360px] bg-white border-r border-[#F0F1F3]  py-2 px-4 overflow-y-auto">
          {chatList.map((chat, i) => (
            <div
              key={i}
              className={`flex gap-3 items-center rounded-xl mb-2 py-2 px-2 cursor-pointer ${
                chat.active
                  ? "bg-[#008080] text-white"
                  : "bg-[#F6F8FA] text-[#193B36] hover:bg-[#e6f1f1]"
              }`}
              style={chat.active ? { boxShadow: "0 1px 8px #00808015" } : {}}
            >
              <img
                src={chat.avatar}
                className="w-[63px] h-[63px] rounded-[16px] object-cover "
                alt={chat.name}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div
                    className={`font-semibold text-[15px] truncate ${
                      chat.active ? "text-white" : "text-[#193B36]"
                    }`}
                  >
                    {chat.name}
                  </div>
                  <div
                    className={`ml-2 text-xs whitespace-nowrap ${
                      chat.active ? "text-white/80" : "text-[#8A929A]"
                    }`}
                  >
                    {chat.date}
                  </div>
                </div>
                <div
                  className={`text-xs truncate ${
                    chat.active ? "text-white/90" : "text-[#8A929A]"
                  }`}
                >
                  {chat.lastMessage}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right: Messages */}
        <div className="flex-1 flex flex-col bg-white px-8 py-4">
          {/* Message history */}
          <div className="flex-1 flex flex-col justify-end gap-8 pb-2">
            {/* Received message */}
            <div className="flex flex-col max-w-xs">
              <div className="bg-[#7C857D] text-white rounded-2xl px-5 py-4 text-[15px] mb-1 break-words">
                {messages[0].text}
              </div>
              <span className="text-[#7C857D] text-[13px] ml-2">
                {messages[0].date}
              </span>
            </div>
            {/* Sent message (right side) */}
            <div className="flex flex-col items-end max-w-xs ml-auto">
              <div className="bg-[#008080] text-white rounded-2xl px-6 py-4 text-[15px] mb-1 break-words">
                {messages[1].text}
              </div>
              <span className="text-[#008080] text-[13px] mr-2">
                {messages[1].date}
              </span>
            </div>
          </div>
          {/* Input */}
          <div className="w-full flex items-center gap-2 mt-4 bg-[#F6F8FA] rounded-t-xl rounded-b-xl border border-[#C7DFDD] px-4 py-2">
            <input
              className="flex-1 outline-none bg-transparent border-none text-[#193B36] text-[16px] placeholder:text-[#7C857D]"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="text-[#008080] hover:text-[#00A79D]">
              <FiSend size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
