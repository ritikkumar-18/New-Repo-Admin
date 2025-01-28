import { X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ChatApp = () => {
  const [chats, setChats] = useState([
    { id: 1, name: "Evy", lastMessage: "+111 987 6543", time: "12:12 am" },
    { id: 2, name: "Emma Johnson", lastMessage: "Available for discussion", time: "11:45 pm" },
    { id: 3, name: "Bill", lastMessage: "I'll call you tomorrow", time: "10:30 pm" },
    { id: 4, name: "Liam Brown", lastMessage: "Meeting confirmed", time: "9:15 pm" },
    { id: 5, name: "William", lastMessage: "Let me know your thoughts", time: "8:40 pm" },
  ]);

  const [filteredChats, setFilteredChats] = useState(chats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [search, setSearch] = useState("");
  const [isChatListVisible, setIsChatListVisible] = useState(true);

  const chatContainerRef = useRef(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFilteredChats(
      chats.filter(
        (chat) =>
          chat.name.toLowerCase().includes(query) ||
          chat.lastMessage.toLowerCase().includes(query)
      )
    );
  };

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setMessages([
      { sender: "Admin", text: "Welcome to the chat.", timestamp: new Date() },
    ]);
    setIsChatListVisible(false); 
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      sender: "User",
      text: newMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
    setNewMessage("");

    setTimeout(() => {
      const adminResponse = {
        sender: "Admin",
        text: "Thank you for your message. We'll respond shortly.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, adminResponse]);
    }, 1500);
  };

  const handleCloseChat = () => {
    setSelectedChat(null);
    setMessages([]);
    setIsChatListVisible(true); 
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
  <motion.div className="flex flex-col h-full  bg-gray-900 text-white "
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex flex-1 flex-col md:flex-row  ">
      
        <div
          className={`${
            isChatListVisible ? "flex" : "hidden"
          } w-full md:w-1/3 bg-gray-800 border-r md:h-[560px] sm:h-[780px] border-gray-700 flex-col md:flex`}
        >
          <div className="p-4 border-b border-gray-700 bg-gray-800  ">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="flex-1 overflow-y-auto  ">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleSelectChat(chat)}
                className={`p-4 cursor-pointer border-b border-gray-700  ${
                  selectedChat?.id === chat.id ? "bg-rose-700" : "hover:bg-gray-700"
                }`}
              >
                <div className="flex justify-between ">
                  <h3 className="text-lg font-medium">{chat.name}</h3>
                  <span className="text-sm text-gray-400">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${
            isChatListVisible ? "hidden" : "flex"
          } flex-1 flex flex-col bg-gray-900 md:flex`}
        >
          {selectedChat ? (
            <>
              <div className="p-4 border-b border-gray-700 bg-gray-800 shadow-sm flex items-center justify-between">
                <h2 className="text-xl font-medium">{selectedChat.name}</h2>
                {/* <button
                  onClick={handleCloseChat}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Back
                </button> */}
                <X className="text-red-500 hover:cursor-pointer"onClick={handleCloseChat} size={24}/>
              </div>
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 bg-gray-900"
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "Admin" ? "justify-start" : "justify-end"
                    } mb-4`}
                  >
                    <div
                      className={`p-4 rounded-lg shadow-md ${
                        msg.sender === "Admin"
                          ? "bg-rose-700 text-white"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="text-xs text-gray-300 mt-2">
                        {msg.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center ">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border  sm:w-[100px] border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center flex-col">
              <p className="text-gray-400">Select a chat to start messaging.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatApp;
