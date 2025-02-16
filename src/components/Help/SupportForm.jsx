// import { X } from "lucide-react";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const ChatApp = () => {
//   const [chats, setChats] = useState([
//     { id: 1, name: "Evy", lastMessage: "+111 987 6543", time: "12:12 am" },
//     { id: 2, name: "Emma Johnson", lastMessage: "Available for discussion", time: "11:45 pm" },
//     { id: 3, name: "Bill", lastMessage: "I'll call you tomorrow", time: "10:30 pm" },
//     { id: 4, name: "Liam Brown", lastMessage: "Meeting confirmed", time: "9:15 pm" },
//     { id: 5, name: "William", lastMessage: "Let me know your thoughts", time: "8:40 pm" },
//     // {id:6 , name:"John", lastMessage:"I'll be there in 5 minutes", time:"7:30pm"},
//   ]);

//   const [filteredChats, setFilteredChats] = useState(chats);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [search, setSearch] = useState("");
//   const [isChatListVisible, setIsChatListVisible] = useState(true);

//   const chatContainerRef = useRef(null);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearch(query);
//     setFilteredChats(
//       chats.filter(
//         (chat) =>
//           chat.name.toLowerCase().includes(query) ||
//           chat.lastMessage.toLowerCase().includes(query)
//       )
//     );
//   };

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     setMessages([
//       { sender: "Admin", text: "Welcome to the chat.", timestamp: new Date() },
//     ]);
//     setIsChatListVisible(false); 
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "") return;

//     const message = {
//       sender: "User",
//       text: newMessage,
//       timestamp: new Date(),
//     };
//     setMessages((prev) => [...prev, message]);
//     setNewMessage("");

//     setTimeout(() => {
//       const adminResponse = {
//         sender: "Admin",
//         text: "Thank you for your message. We'll respond shortly.",
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, adminResponse]);
//     }, 1500);
//   };

//   const handleCloseChat = () => {
//     setSelectedChat(null);
//     setMessages([]);
//     setIsChatListVisible(true); 
//   };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//   <motion.div className="flex flex-col h-full  bg-gray-900 text-white  "
//     initial={{ opacity: 0, y: 20 }} 
//     animate={{ opacity: 1, y: 0 }} 
//     transition={{ duration: 0.5 }}>
//       <div className="p-2 border-gray-700 mb-4  ">
//             <input
//               type="text"
//               placeholder="Search"
//               value={search}
//               onChange={handleSearch}
//               className="md:w-[33%] sm:w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
//             />
//             {/* <p className="text-bold text-2xl mt-4">Messages</p> */}
//           </div>
//       <div className="flex flex-1 flex-col md:flex-row px-2 ">
      
//         <div
//           className={`${
//             isChatListVisible ? "flex" : "hidden"
//           }  md:h-auto  md:w-1/3 bg-gray-800 rounded-lg border-r sm:h-[780px] border-gray-700 flex-col md:flex`}
//         >
//           {/* <div className="p-4 border-b border-gray-700 bg-gray-800  ">
//             <input
//               type="text"
//               placeholder="Search"
//               value={search}
//               onChange={handleSearch}
//               className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div> */}
//           <div className="flex-1 overflow-y-auto  ">
//             {filteredChats.map((chat) => (
//               <div
//                 key={chat.id}
//                 onClick={() => handleSelectChat(chat)}
//                 className={`p-4 cursor-pointer border-b border-gray-700  ${
//                   selectedChat?.id === chat.id ? "bg-rose-700" : "hover:bg-gray-700"
//                 }`}
//               >
//                 <div className="flex justify-between ">
//                   <h3 className="text-lg font-medium">{chat.name}</h3>
//                   <span className="text-sm text-gray-400">{chat.time}</span>
//                 </div>
//                 <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div
//           className={`${
//             isChatListVisible ? "hidden" : "flex"
//           } flex-1 flex flex-col bg-gray-900 md:flex`}
//         >
//           {selectedChat ? (
//             <>
//               <div className="p-4 border-b border-gray-700 bg-gray-800 shadow-sm flex items-center justify-between">
//                 <h2 className="text-xl font-medium">{selectedChat.name}</h2>
               
//                 <X className="text-red-500 hover:cursor-pointer"onClick={handleCloseChat} size={24}/>
//               </div>
//               <div
//                 ref={chatContainerRef}
//                 className="flex-1 overflow-y-auto p-4 bg-gray-900"
//               >
//                 {messages.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`flex ${
//                       msg.sender === "Admin" ? "justify-start" : "justify-end"
//                     } mb-4`}
//                   >
//                     <div
//                       className={`p-4 rounded-lg shadow-md ${
//                         msg.sender === "Admin"
//                           ? "bg-gray-100 text-black"
//                           : "bg-green-600 text-white"
//                       }`}
//                     >
//                       <p>{msg.text}</p>
//                       <p className="text-xs text-black mt-2">
//                         {msg.timestamp.toLocaleTimeString()}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center ">
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   placeholder="Type a message..."
//                   className="flex-1 px-4 py-2 border  sm:w-[100px] border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//                 >
//                   Send
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="flex-1 flex items-center justify-center flex-col">
//               <p className="text-gray-400">Select a chat to start messaging.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ChatApp;
// import { X } from "lucide-react";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const ChatApp = () => {
//   const [chats, setChats] = useState([
//     { id: 1, name: "Evy", lastMessage: "+111 987 6543", time: "12:12 am" },
//     { id: 2, name: "Emma Johnson", lastMessage: "Available for discussion", time: "11:45 pm" },
//     { id: 3, name: "Bill", lastMessage: "I'll call you tomorrow", time: "10:30 pm" },
//     { id: 4, name: "Liam Brown", lastMessage: "Meeting confirmed", time: "9:15 pm" },
//     { id: 5, name: "William", lastMessage: "Let me know your thoughts", time: "8:40 pm" },
//   ]);

//   const [filteredChats, setFilteredChats] = useState(chats);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [search, setSearch] = useState("");
//   const [isChatListVisible, setIsChatListVisible] = useState(true);
//   const [isTyping, setIsTyping] = useState(false);

//   const chatContainerRef = useRef(null);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearch(query);
//     setFilteredChats(
//       chats.filter(
//         (chat) =>
//           chat.name.toLowerCase().includes(query) ||
//           chat.lastMessage.toLowerCase().includes(query)
//       )
//     );
//   };

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     setMessages([
//       { sender: "Admin", text: "Welcome to the chat.", timestamp: new Date() },
//     ]);
//     setIsChatListVisible(false);
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "") return;

//     const message = {
//       sender: "User",
//       text: newMessage,
//       timestamp: new Date(),
//     };
//     setMessages((prev) => [...prev, message]);
//     setNewMessage("");
//     scrollToBottom();

//     setIsTyping(true);
//     setTimeout(() => {
//       const adminResponse = {
//         sender: "Admin",
//         text: "Thank you for your message. We'll respond shortly.",
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, adminResponse]);
//       setIsTyping(false);
//       scrollToBottom();
//     }, 1500);
//   };

//   const handleCloseChat = () => {
//     setSelectedChat(null);
//     setMessages([]);
//     setIsChatListVisible(true);
//   };

//   const scrollToBottom = () => {
//     setTimeout(() => {
//       if (chatContainerRef.current) {
//         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//       }
//     }, 100);
//   };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       setTimeout(() => {
//         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//       }, 100); 
//     }
//   }, [messages]);
  

//   return (
//     <motion.div
//       className="flex flex-col  bg-gray-900 text-white"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Search Bar */}
//       <div className="p-2 border-gray-700 mb-4">
//         <input
//           type="text"
//           placeholder="Search"
//           value={search}
//           onChange={handleSearch}
//           className="md:w-[33%] sm:w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
//         />
//       </div>

//       <div className="flex flex-1 flex-col md:flex-row px-2">
//         {/* Chat List */}
//         <div
//           className={`${isChatListVisible ? "flex" : "hidden"} md:h-auto md:w-1/3 bg-gray-800 rounded-lg border-r sm:h-[780px] border-gray-700 flex-col md:flex`}
//         >
//           <div className="flex-1 overflow-y-auto">
//             {filteredChats.map((chat) => (
//               <div
//                 key={chat.id}
//                 onClick={() => handleSelectChat(chat)}
//                 className={`p-4 cursor-pointer border-b border-gray-700 ${
//                   selectedChat?.id === chat.id ? "" : "hover:bg-gray-700"
//                 }`}
//               >
//                 <div className="flex justify-between">
//                   <h3 className="text-lg font-medium">{chat.name}</h3>
//                   <span className="text-sm text-gray-400">{chat.time}</span>
//                 </div>
//                 <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Chat Window */}
//         <div
//           className={`${isChatListVisible ? "hidden" : "flex"} flex-1  flex flex-col bg-gray-900 md:flex`}
//         >
//           {selectedChat ? (
//             <>
//               {/* Chat Header */}
//               <div className="p-4 border-b border-gray-700 bg-gray-800 shadow-sm flex items-center justify-between">
//                 <h2 className="text-xl font-medium">{selectedChat.name}</h2>
//                 <X className="text-red-500 hover:cursor-pointer" onClick={handleCloseChat} size={24} />
//               </div>

//               {/* Chat Messages */}
//               <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 bg-gray-900">
//                 {messages.map((msg, index) => (
//                   <motion.div
//                     key={index}
//                     className={`flex ${msg.sender === "Admin" ? "justify-start" : "justify-end"} mb-4`}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div
//                       className={`p-4 rounded-lg shadow-md ${
//                         msg.sender === "Admin"
//                           ? "bg-gray-100 text-black"
//                           : "bg-green-600 text-white"
//                       }`}
//                     >
//                       <p>{msg.text}</p>
//                       <p className="text-xs text-black mt-2">
//                         {msg.timestamp.toLocaleTimeString()}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}

//                 {/* Typing Indicator */}
//                 {isTyping && (
//                   <motion.div
//                     className="text-gray-400 text-sm italic mt-2"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                   >
//                     Admin is typing...
//                   </motion.div>
//                 )}
//               </div>

//               {/* Message Input */}
//               <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center">
//                 <input
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//                   placeholder="Type a message..."
//                   className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//                   disabled={!newMessage.trim()}
//                 >
//                   Send
//                 </button>
//               </div>
//             </>
//           ) : (
//             <div className="flex-1 flex items-center justify-center flex-col">
//               <p className="text-gray-400">Select a chat to start messaging.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ChatApp;
import { X, Paperclip, Smile, Send } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import EmojiPicker from "emoji-picker-react";

const ChatApp = () => {
  const [chats, setChats] = useState([
    { id: 1, name: "Evy", lastMessage: "+111 987 6543", time: "12:12 am", online: true },
    { id: 2, name: "Emma Johnson", lastMessage: "Available for discussion", time: "11:45 pm", online: false },
    { id: 3, name: "Bill", lastMessage: "I'll call you tomorrow", time: "10:30 pm", online: true },
  ]);

  const [filteredChats, setFilteredChats] = useState(chats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [readReceipts, setReadReceipts] = useState({});
  const [file, setFile] = useState(null);

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
    setMessages([{ sender: "Admin", text: "Welcome to the chat.", timestamp: new Date() }]);
    setReadReceipts((prev) => ({ ...prev, [chat.id]: "Read" }));
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "" && !file) return;

    const message = {
      sender: "User",
      text: newMessage,
      timestamp: new Date(),
      file: file,
    };
    setMessages((prev) => [...prev, message]);
    setNewMessage("");
    setFile(null);
    scrollToBottom();
    setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Delivered" }));

    setIsTyping(true);
    setTimeout(() => {
      const adminResponse = {
        sender: "Admin",
        text: "Thank you for your message. We'll respond shortly.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, adminResponse]);
      setIsTyping(false);
      setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Read" }));
      scrollToBottom();
    }, 1500);
  };

  const handleCloseChat = () => {
    setSelectedChat(null);
    setMessages([]);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleEmojiClick = (emojiObject) => {
    setNewMessage((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <motion.div
      className="flex h-screen bg-gray-900 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-1/3 bg-gray-800 border-r border-gray-700 overflow-y-auto ${selectedChat ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b border-gray-700 bg-gray-800">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleSelectChat(chat)}
            className="p-4 cursor-pointer border-b border-gray-700 hover:bg-gray-700 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-medium">{chat.name}</h3>
              <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
            </div>
            <div className={`h-3 w-3 rounded-full ${chat.online ? 'bg-green-500' : 'bg-gray-500'}`}></div>
          </div>
        ))}
      </div>

      {selectedChat && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col bg-gray-900"
        >
          <div className="p-4 border-b border-gray-700 bg-gray-800 flex justify-between">
            <h2 className="text-xl font-medium">{selectedChat.name}</h2>
            <X className="text-red-500 cursor-pointer" onClick={handleCloseChat} size={24} />
          </div>
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 bg-gray-900">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "Admin" ? "justify-start" : "justify-end"} mb-4`}>
                <div className={`p-4 rounded-lg shadow-md ${msg.sender === "Admin" ? "bg-gray-100 text-black" : "bg-green-600 text-white"}`}>
                  <p>{msg.text}</p>
                  {msg.file && <p className="text-sm text-gray-400">📎 {msg.file.name}</p>}
                </div>
              </div>
            ))}
            {isTyping && <p className="text-gray-400">Admin is typing...</p>}
          </div>
          <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center">
            <Smile className="cursor-pointer mr-3 text-yellow-500" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
            {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
            <Paperclip className="cursor-pointer text-blue-400" onClick={() => document.querySelector('input[type=file]').click()} />
            <input
              type="text"
              className="flex-1 mx-2 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <Send className="cursor-pointer text-green-400" onClick={handleSendMessage} />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ChatApp;
