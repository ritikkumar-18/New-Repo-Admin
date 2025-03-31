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
// import { X, Paperclip, Smile, Send } from "lucide-react";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import EmojiPicker from "emoji-picker-react";

// const ChatApp = () => {
//   const [chats, setChats] = useState([
//     { id: 1, name: "Evy", lastMessage: "+111 987 6543", time: "12:12 am", online: true },
//     { id: 2, name: "Emma Johnson", lastMessage: "Available for discussion", time: "11:45 pm", online: false },
//     { id: 3, name: "Bill", lastMessage: "I'll call you tomorrow", time: "10:30 pm", online: true },
//   ]);

//   const [filteredChats, setFilteredChats] = useState(chats);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [search, setSearch] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [readReceipts, setReadReceipts] = useState({});
//   const [file, setFile] = useState(null);

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
//     setMessages([{ sender: "Admin", text: "Welcome to the chat.", timestamp: new Date() }]);
//     setReadReceipts((prev) => ({ ...prev, [chat.id]: "Read" }));
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "" && !file) return;

//     const message = {
//       sender: "User",
//       text: newMessage,
//       timestamp: new Date(),
//       file: file,
//     };
//     setMessages((prev) => [...prev, message]);
//     setNewMessage("");
//     setFile(null);
//     scrollToBottom();
//     setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Delivered" }));

//     setIsTyping(true);
//     setTimeout(() => {
//       const adminResponse = {
//         sender: "Admin",
//         text: "Thank you for your message. We'll respond shortly.",
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, adminResponse]);
//       setIsTyping(false);
//       setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Read" }));
//       scrollToBottom();
//     }, 1500);
//   };

//   const handleCloseChat = () => {
//     setSelectedChat(null);
//     setMessages([]);
//   };

//   const scrollToBottom = () => {
//     setTimeout(() => {
//       if (chatContainerRef.current) {
//         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//       }
//     }, 100);
//   };

//   const handleEmojiClick = (emojiObject) => {
//     setNewMessage((prev) => prev + emojiObject.emoji);
//     setShowEmojiPicker(false);
//   };

//   const handleFileUpload = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <motion.div
//       className="flex h-screen bg-gray-900 text-white"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className={`w-1/3 bg-gray-800 border-r border-gray-700 overflow-y-auto ${selectedChat ? 'hidden md:block' : 'block'}`}>
//         <div className="p-4 border-b border-gray-700 bg-gray-800">
//           <input
//             type="text"
//             placeholder="Search"
//             value={search}
//             onChange={handleSearch}
//             className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
//           />
//         </div>
//         {filteredChats.map((chat) => (
//           <div
//             key={chat.id}
//             onClick={() => handleSelectChat(chat)}
//             className="p-4 cursor-pointer border-b border-gray-700 hover:bg-gray-700 flex justify-between items-center"
//           >
//             <div>
//               <h3 className="text-lg font-medium">{chat.name}</h3>
//               <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
//             </div>
//             <div className={`h-3 w-3 rounded-full ${chat.online ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//           </div>
//         ))}
//       </div>

//       {selectedChat && (
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="flex-1 flex flex-col bg-gray-900"
//         >
//           <div className="p-4 border-b border-gray-700 bg-gray-800 flex justify-between">
//             <h2 className="text-xl font-medium">{selectedChat.name}</h2>
//             <X className="text-red-500 cursor-pointer" onClick={handleCloseChat} size={24} />
//           </div>
//           <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 bg-gray-900">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex ${msg.sender === "Admin" ? "justify-start" : "justify-end"} mb-4`}>
//                 <div className={`p-4 rounded-lg shadow-md ${msg.sender === "Admin" ? "bg-gray-100 text-black" : "bg-green-600 text-white"}`}>
//                   <p>{msg.text}</p>
//                   {msg.file && <p className="text-sm text-gray-400">📎 {msg.file.name}</p>}
//                 </div>
//               </div>
//             ))}
//             {isTyping && <p className="text-gray-400">Admin is typing...</p>}
//           </div>
//           <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center">
//             <Smile className="cursor-pointer mr-3 text-yellow-500" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
//             {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
//             <input
//               type="file"
//               className="hidden"
//               onChange={handleFileUpload}
//             />
//             <Paperclip className="cursor-pointer text-blue-400" onClick={() => document.querySelector('input[type=file]').click()} />
//             <input
//               type="text"
//               className="flex-1 mx-2 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none"
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               placeholder="Type a message..."
//             />
//             <Send className="cursor-pointer text-green-400" onClick={handleSendMessage} />
//           </div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default ChatApp;
// import React, { useState, useRef, useEffect } from "react";
// import { X, Paperclip, Smile, Send, Check, CheckCheck } from "lucide-react";
// import { motion } from "framer-motion";
// import EmojiPicker from "emoji-picker-react";

// const ChatApp = () => {
//   const [chats, setChats] = useState([
//     { id: 1, name: "Evy", lastMessage: "+111 987 6543", time: "12:12 am", online: true },
//     { id: 2, name: "Emma Johnson", lastMessage: "Available for discussion", time: "11:45 pm", online: false },
//     { id: 3, name: "Bill", lastMessage: "I'll call you tomorrow", time: "10:30 pm", online: true },
//   ]);

//   const [selectedChat, setSelectedChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [search, setSearch] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [readReceipts, setReadReceipts] = useState({});
//   const [file, setFile] = useState(null);

//   const chatContainerRef = useRef(null);

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat);
//     setMessages([{ sender: "Admin", text: "Welcome to the chat.", timestamp: new Date() }]);
//     setReadReceipts((prev) => ({ ...prev, [chat.id]: "Read" }));
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "" && !file) return;

//     const message = {
//       sender: "User",
//       text: newMessage,
//       timestamp: new Date(),
//       file: file,
//     };
//     setMessages((prev) => [...prev, message]);
//     setNewMessage("");
//     setFile(null);
//     scrollToBottom();
//     setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Delivered" }));

//     setIsTyping(true);
//     setTimeout(() => {
//       const adminResponse = {
//         sender: "Admin",
//         text: "Thank you for your message. We'll respond shortly.",
//         timestamp: new Date(),
//       };
//       setMessages((prev) => [...prev, adminResponse]);
//       setIsTyping(false);
//       setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Read" }));
//       scrollToBottom();
//     }, 1500);
//   };

//   const scrollToBottom = () => {
//     setTimeout(() => {
//       if (chatContainerRef.current) {
//         chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//       }
//     }, 100);
//   };

//   return (
//     <motion.div
//       className="flex h-screen bg-gray-900 text-white"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}>
      
//       <div className={`md:w-1/3 sm:w-full bg-gray-800 border-r border-gray-700 overflow-y-auto ${selectedChat ? 'hidden md:block' : 'block'}`}>
//         <div className="p-4 border-b border-gray-700 bg-gray-800">
//           <input
//             type="text"
//             placeholder="Search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none"/>
//         </div>
//         {chats.map((chat) => (
//           <div
//             key={chat.id}
//             onClick={() => handleSelectChat(chat)}
//             className="p-4 cursor-pointer border-b border-gray-700 hover:bg-gray-700 flex justify-between items-center"
//           >
//             <div>
//               <h3 className="text-lg font-medium">{chat.name}</h3>
//               <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
//             </div>
//             <div className={`h-3 w-3 rounded-full ${chat.online ? 'bg-green-500' : 'bg-gray-500'}`}></div>
//           </div>
//         ))}
//       </div>

//       {/* Chat Window */}
//       {selectedChat && (
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="flex-1 flex flex-col bg-gray-900"
//         >
//           <div className="p-4 border-b border-gray-700 bg-gray-800 flex justify-between">
//             <h2 className="text-xl font-medium">{selectedChat.name}</h2>
//             <X className="text-red-500 cursor-pointer" onClick={() => setSelectedChat(null)} size={24} />
//           </div>
//           <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 bg-gray-900">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex ${msg.sender === "Admin" ? "justify-start" : "justify-end"} mb-4`}>
//                 <div className={`p-4 rounded-lg shadow-md ${msg.sender === "Admin" ? "bg-gray-100 text-black" : "bg-green-600 text-white"}`}>
//                   <p>{msg.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="p-4 border-t border-gray-700 bg-gray-800 flex items-center">
//             <Smile className="cursor-pointer mr-3 text-yellow-500" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
//             <input
//               type="text"
//               className="flex-1 mx-2 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none"
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               placeholder="Type a message..."
//             />
//             <Send className="cursor-pointer text-green-400" onClick={handleSendMessage} />
//           </div>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default ChatApp;


// import { useState, useRef, useEffect } from "react"
// import {
//   X,
//   Paperclip,
//   Smile,
//   Send,
//   Check,
//   CheckCheck,
//   ArrowLeft,
//   Search,
//   MoreVertical,
//   Phone,
//   Video,
//   User,
//   Briefcase,
//   FileText,
//   Calendar,
//   Image,
//   File,
//   ChevronLeft,
//   MessageSquare,
// } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import EmojiPicker from "emoji-picker-react"

// // Mock data for chats
// const RECRUITER_CHATS = [
//   {
//     id: 1,
//     name: "John Smith",
//     lastMessage: "I'm interested in the developer position",
//     time: "12:12 am",
//     online: true,
//     unread: 2,
//     avatar: "JS",
//     role: "Frontend Developer",
//   },
//   {
//     id: 2,
//     name: "Emma Johnson",
//     lastMessage: "When is the next interview?",
//     time: "11:45 pm",
//     online: false,
//     unread: 0,
//     avatar: "EJ",
//     role: "UX Designer",
//   },
//   {
//     id: 3,
//     name: "Michael Brown",
//     lastMessage: "Thank you for the opportunity",
//     time: "10:30 pm",
//     online: true,
//     unread: 0,
//     avatar: "MB",
//     role: "Backend Developer",
//   },
//   {
//     id: 4,
//     name: "Sarah Wilson",
//     lastMessage: "I've submitted my portfolio",
//     time: "Yesterday",
//     online: false,
//     unread: 1,
//     avatar: "SW",
//     role: "Product Manager",
//   },
//   {
//     id: 5,
//     name: "David Lee",
//     lastMessage: "Is the position still open?",
//     time: "Yesterday",
//     online: true,
//     unread: 0,
//     avatar: "DL",
//     role: "Data Scientist",
//   },
// ]

// const CANDIDATE_CHATS = [
//   {
//     id: 1,
//     name: "Tech Innovations Inc.",
//     lastMessage: "We'd like to schedule an interview",
//     time: "12:30 pm",
//     online: true,
//     unread: 1,
//     avatar: "TI",
//     role: "Recruiter",
//   },
//   {
//     id: 2,
//     name: "Global Solutions",
//     lastMessage: "Your application has been received",
//     time: "10:15 am",
//     online: false,
//     unread: 0,
//     avatar: "GS",
//     role: "HR Manager",
//   },
//   {
//     id: 3,
//     name: "Future Systems",
//     lastMessage: "Please submit your portfolio",
//     time: "Yesterday",
//     online: true,
//     unread: 0,
//     avatar: "FS",
//     role: "Talent Acquisition",
//   },
// ]

// // Mock job listings
// const JOB_LISTINGS = [
//   {
//     id: 1,
//     title: "Senior Frontend Developer",
//     company: "Tech Innovations Inc.",
//     location: "Remote",
//     salary: "$120K - $150K",
//   },
//   { id: 2, title: "UX/UI Designer", company: "Global Solutions", location: "New York, NY", salary: "$90K - $110K" },
//   {
//     id: 3,
//     title: "Backend Engineer",
//     company: "Future Systems",
//     location: "San Francisco, CA",
//     salary: "$130K - $160K",
//   },
// ]

// // Mock candidate profiles
// const CANDIDATE_PROFILES = [
//   {
//     id: 1,
//     name: "John Smith",
//     role: "Frontend Developer",
//     experience: "5 years",
//     skills: ["React", "TypeScript", "CSS"],
//   },
//   {
//     id: 2,
//     name: "Emma Johnson",
//     role: "UX Designer",
//     experience: "3 years",
//     skills: ["Figma", "User Research", "Prototyping"],
//   },
//   {
//     id: 3,
//     name: "Michael Brown",
//     role: "Backend Developer",
//     experience: "7 years",
//     skills: ["Node.js", "Python", "MongoDB"],
//   },
// ]

// const ChatApp = () => {
//   // State for role selection
//   const [userRole, setUserRole] = useState(null)

//   // Chat states
//   const [chats, setChats] = useState([])
//   const [selectedChat, setSelectedChat] = useState(null)
//   const [messages, setMessages] = useState([])
//   const [newMessage, setNewMessage] = useState("")
//   const [search, setSearch] = useState("")
//   const [isTyping, setIsTyping] = useState(false)
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false)
//   const [readReceipts, setReadReceipts] = useState({})
//   const [file, setFile] = useState(null)
//   const [showAttachmentOptions, setShowAttachmentOptions] = useState(false)
//   const [showMobileChats, setShowMobileChats] = useState(true)

//   // Refs
//   const chatContainerRef = useRef(null)
//   const fileInputRef = useRef(null)

//   // Set chats based on role
//   useEffect(() => {
//     if (userRole === "recruiter") {
//       setChats(RECRUITER_CHATS)
//     } else if (userRole === "candidate") {
//       setChats(CANDIDATE_CHATS)
//     }
//   }, [userRole])

//   // Auto scroll to bottom when messages change
//   useEffect(() => {
//     scrollToBottom()
//   }, [messages])

//   // Filter chats based on search
//   const filteredChats = chats.filter(
//     (chat) =>
//       chat.name.toLowerCase().includes(search.toLowerCase()) ||
//       chat.lastMessage.toLowerCase().includes(search.toLowerCase()),
//   )

//   const handleSelectChat = (chat) => {
//     setSelectedChat(chat)
//     setShowMobileChats(false)

//     // Initialize messages based on the chat
//     const initialMessages = [
//       {
//         sender: userRole === "recruiter" ? "User" : "Admin",
//         text:
//           userRole === "recruiter"
//             ? `Hello ${chat.name}, thank you for your interest in our positions.`
//             : `Hello, I'm a recruiter from ${chat.name}. How can I help you today?`,
//         timestamp: new Date(Date.now() - 86400000), // 1 day ago
//       },
//     ]

//     if (userRole === "recruiter") {
//       initialMessages.push({
//         sender: "Admin",
//         text: "I'm interested in the developer position. Can you tell me more about it?",
//         timestamp: new Date(Date.now() - 3600000), // 1 hour ago
//       })
//     } else {
//       initialMessages.push({
//         sender: "User",
//         text: "I'm interested in the open positions at your company. Can you tell me more?",
//         timestamp: new Date(Date.now() - 3600000), // 1 hour ago
//       })
//     }

//     setMessages(initialMessages)
//     setReadReceipts((prev) => ({ ...prev, [chat.id]: "Read" }))

//     // Mark as read
//     setChats((prevChats) => prevChats.map((c) => (c.id === chat.id ? { ...c, unread: 0 } : c)))
//   }

//   const handleSendMessage = () => {
//     if (newMessage.trim() === "" && !file) return

//     const message = {
//       sender: "User",
//       text: newMessage,
//       timestamp: new Date(),
//       file: file,
//     }
//     setMessages((prev) => [...prev, message])
//     setNewMessage("")
//     setFile(null)
//     setShowEmojiPicker(false)
//     setShowAttachmentOptions(false)
//     setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Delivered" }))

//     // Simulate typing and response
//     setIsTyping(true)
//     setTimeout(() => {
//       const responses = [
//         "Thank you for your message. I'll get back to you shortly.",
//         "That's great to hear! Let me check and get back to you.",
//         "I understand. Let me see what I can do.",
//         "Perfect! I'll make a note of that.",
//         "Thanks for the update. Is there anything else you need?",
//       ]

//       const adminResponse = {
//         sender: "Admin",
//         text: responses[Math.floor(Math.random() * responses.length)],
//         timestamp: new Date(),
//       }
//       setMessages((prev) => [...prev, adminResponse])
//       setIsTyping(false)
//       setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Read" }))
//     }, 1500)
//   }

//   const scrollToBottom = () => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
//     }
//   }

//   const handleEmojiClick = (emojiData) => {
//     setNewMessage((prev) => prev + emojiData.emoji)
//   }

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0])
//     }
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault()
//       handleSendMessage()
//     }
//   }

//   const formatTime = (date) => {
//     return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
//   }

//   const handleBackToChats = () => {
//     setShowMobileChats(true)
//   }

//   // Render role selection screen
//   if (!userRole) {
//     return (
//       <motion.div
//         className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-3xl font-bold mb-8 text-center">Select Your Role</h1>
//         <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
//           <motion.button
//             className="flex-1 p-6 bg-blue-600 rounded-xl flex flex-col items-center justify-center hover:bg-blue-700 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setUserRole("recruiter")}
//           >
//             <Briefcase size={48} className="mb-4" />
//             <span className="text-xl font-semibold">Recruiter</span>
//             <p className="text-sm text-center mt-2 text-blue-200">Manage candidates and job applications</p>
//           </motion.button>

//           <motion.button
//             className="flex-1 p-6 bg-green-600 rounded-xl flex flex-col items-center justify-center hover:bg-green-700 transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setUserRole("candidate")}
//           >
//             <User size={48} className="mb-4" />
//             <span className="text-xl font-semibold">Candidate</span>
//             <p className="text-sm text-center mt-2 text-green-200">Apply for jobs and chat with recruiters</p>
//           </motion.button>
//         </div>
//       </motion.div>
//     )
//   }

//   return (
//     <motion.div
//       className="flex h-screen bg-gray-900 text-white overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Chat List Sidebar */}
//       <AnimatePresence>
//         {(showMobileChats || window.innerWidth >= 768) && (
//           <motion.div
//             className={`md:w-1/3 w-full bg-gray-800 border-r border-gray-700 flex flex-col ${!showMobileChats && "hidden md:flex"}`}
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -20, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Header */}
//             <div className="p-4 border-b border-gray-700 bg-gray-800 flex items-center justify-between">
//               <h2 className="text-xl font-semibold">{userRole === "recruiter" ? "Candidates" : "Recruiters"}</h2>
//               <div className="flex items-center gap-2">
//                 <button
//                   className="p-2 rounded-full hover:bg-gray-700 transition-colors"
//                   onClick={() => setUserRole(null)}
//                 >
//                   <ArrowLeft size={20} />
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//                   <MoreVertical size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Search */}
//             <div className="p-4 border-b border-gray-700 bg-gray-800 sticky top-0 z-10">
//               <div className="relative">
//                 <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search chats"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             {/* Chat List */}
//             <div className="flex-1 overflow-y-auto">
//               {filteredChats.length === 0 ? (
//                 <div className="p-4 text-center text-gray-400">No chats found</div>
//               ) : (
//                 filteredChats.map((chat) => (
//                   <div
//                     key={chat.id}
//                     onClick={() => handleSelectChat(chat)}
//                     className="p-3 cursor-pointer border-b border-gray-700 hover:bg-gray-700 flex items-center gap-3 transition-colors"
//                   >
//                     <div className="relative">
//                       <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-semibold">
//                         {chat.avatar}
//                       </div>
//                       <div
//                         className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-gray-800 ${chat.online ? "bg-green-500" : "bg-gray-500"}`}
//                       ></div>
//                     </div>

//                     <div className="flex-1 min-w-0">
//                       <div className="flex justify-between items-center">
//                         <h3 className="text-base font-medium truncate">{chat.name}</h3>
//                         <span className="text-xs text-gray-400">{chat.time}</span>
//                       </div>
//                       <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
//                       <p className="text-xs text-gray-500">{chat.role}</p>
//                     </div>

//                     {chat.unread > 0 && (
//                       <div className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                         {chat.unread}
//                       </div>
//                     )}
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Footer */}
//             <div className="p-4 border-t border-gray-700 bg-gray-800">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
//                     {userRole === "recruiter" ? "R" : "C"}
//                   </div>
//                   <div>
//                     <p className="font-medium">{userRole === "recruiter" ? "Recruiter" : "Candidate"}</p>
//                     <p className="text-xs text-green-500">Online</p>
//                   </div>
//                 </div>
//                 <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//                   <MoreVertical size={20} />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {selectedChat && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="flex-1 flex flex-col bg-gray-900 relative"
//           >
//             {/* Chat Header */}
//             <div className="p-3 border-b border-gray-700 bg-gray-800 flex items-center justify-between sticky top-0 z-10">
//               <div className="flex items-center gap-3">
//                 <button
//                   className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors"
//                   onClick={handleBackToChats}
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <div className="relative">
//                   <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
//                     {selectedChat.avatar}
//                   </div>
//                   <div
//                     className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-gray-800 ${selectedChat.online ? "bg-green-500" : "bg-gray-500"}`}
//                   ></div>
//                 </div>
//                 <div>
//                   <h2 className="text-base font-medium">{selectedChat.name}</h2>
//                   <p className="text-xs text-gray-400">
//                     {selectedChat.online ? "Online" : "Offline"}
//                     <span className="mx-1">•</span>
//                     {selectedChat.role}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//                   <Phone size={18} />
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//                   <Video size={18} />
//                 </button>
//                 <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
//                   <MoreVertical size={18} />
//                 </button>
//               </div>
//             </div>

//             {/* Messages */}
//             <div
//               ref={chatContainerRef}
//               className="flex-1 overflow-y-auto p-4 bg-gray-900 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
//             >
//               {/* Date separator */}
//               <div className="flex justify-center mb-4">
//                 <div className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full">Today</div>
//               </div>

//               {messages.map((msg, index) => (
//                 <div key={index} className={`flex ${msg.sender === "Admin" ? "justify-start" : "justify-end"} mb-4`}>
//                   {msg.sender === "Admin" && (
//                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 self-end mb-1">
//                       {selectedChat.avatar}
//                     </div>
//                   )}

//                   <div className="max-w-[75%]">
//                     <div
//                       className={`p-3 rounded-lg shadow-md ${
//                         msg.sender === "Admin"
//                           ? "bg-gray-800 text-white rounded-tl-none"
//                           : "bg-blue-600 text-white rounded-tr-none"
//                       }`}
//                     >
//                       {msg.file && (
//                         <div className="mb-2 p-2 bg-gray-700 rounded flex items-center gap-2">
//                           <File size={16} />
//                           <span className="text-sm truncate">{msg.file.name}</span>
//                         </div>
//                       )}
//                       <p className="whitespace-pre-wrap break-words">{msg.text}</p>
//                     </div>

//                     <div
//                       className={`flex items-center mt-1 text-xs text-gray-400 ${msg.sender === "Admin" ? "justify-start" : "justify-end"}`}
//                     >
//                       <span>{formatTime(msg.timestamp)}</span>
//                       {msg.sender === "User" && (
//                         <span className="ml-1">
//                           {readReceipts[selectedChat.id] === "Read" ? (
//                             <CheckCheck size={14} className="text-blue-400" />
//                           ) : (
//                             <Check size={14} />
//                           )}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Typing indicator */}
//               {isTyping && (
//                 <div className="flex justify-start mb-4">
//                   <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 self-end">
//                     {selectedChat.avatar}
//                   </div>
//                   <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none">
//                     <div className="flex space-x-1">
//                       <div
//                         className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                         style={{ animationDelay: "0ms" }}
//                       ></div>
//                       <div
//                         className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                         style={{ animationDelay: "150ms" }}
//                       ></div>
//                       <div
//                         className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
//                         style={{ animationDelay: "300ms" }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* File preview */}
//             {file && (
//               <div className="p-2 border-t border-gray-700 bg-gray-800">
//                 <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
//                   <div className="flex items-center">
//                     <File size={16} className="mr-2" />
//                     <span className="text-sm truncate max-w-[200px]">{file.name}</span>
//                   </div>
//                   <button className="text-red-400 hover:text-red-300" onClick={() => setFile(null)}>
//                     <X size={16} />
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Input area */}
//             <div className="p-3 border-t border-gray-700 bg-gray-800 relative">
//               {/* Emoji picker */}
//               <AnimatePresence>
//                 {showEmojiPicker && (
//                   <motion.div
//                     className="absolute bottom-16 left-0 z-10"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                   >
//                     <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Attachment options */}
//               <AnimatePresence>
//                 {showAttachmentOptions && (
//                   <motion.div
//                     className="absolute bottom-16 left-12 bg-gray-800 rounded-lg shadow-lg p-2 z-10 border border-gray-700"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                   >
//                     <div className="grid grid-cols-2 gap-2">
//                       <button
//                         className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
//                         onClick={() => {
//                           fileInputRef.current.click()
//                           setShowAttachmentOptions(false)
//                         }}
//                       >
//                         <Image size={24} className="text-blue-400 mb-1" />
//                         <span className="text-xs">Image</span>
//                       </button>
//                       <button
//                         className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
//                         onClick={() => {
//                           fileInputRef.current.click()
//                           setShowAttachmentOptions(false)
//                         }}
//                       >
//                         <File size={24} className="text-green-400 mb-1" />
//                         <span className="text-xs">Document</span>
//                       </button>
//                       {userRole === "recruiter" && (
//                         <>
//                           <button className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors">
//                             <FileText size={24} className="text-yellow-400 mb-1" />
//                             <span className="text-xs">Job Listing</span>
//                           </button>
//                           <button className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors">
//                             <Calendar size={24} className="text-purple-400 mb-1" />
//                             <span className="text-xs">Schedule</span>
//                           </button>
//                         </>
//                       )}
//                       {userRole === "candidate" && (
//                         <>
//                           <button className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors">
//                             <FileText size={24} className="text-yellow-400 mb-1" />
//                             <span className="text-xs">Resume</span>
//                           </button>
//                           <button className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors">
//                             <Briefcase size={24} className="text-purple-400 mb-1" />
//                             <span className="text-xs">Portfolio</span>
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <div className="flex items-center">
//                 <div className="flex gap-2">
//                   <button
//                     className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-gray-200"
//                     onClick={() => {
//                       setShowEmojiPicker(false)
//                       setShowAttachmentOptions(!showAttachmentOptions)
//                     }}
//                   >
//                     <Paperclip size={20} />
//                   </button>
//                   <button
//                     className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-gray-200"
//                     onClick={() => {
//                       setShowAttachmentOptions(false)
//                       setShowEmojiPicker(!showEmojiPicker)
//                     }}
//                   >
//                     <Smile size={20} />
//                   </button>
//                 </div>

//                 <input
//                   type="text"
//                   className="flex-1 mx-2 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyDown={handleKeyPress}
//                   placeholder="Type a message..."
//                 />

//                 <button
//                   className={`p-2 rounded-full ${newMessage.trim() || file ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 text-gray-500 cursor-not-allowed"} transition-colors`}
//                   onClick={handleSendMessage}
//                   disabled={!newMessage.trim() && !file}
//                 >
//                   <Send size={20} />
//                 </button>

//                 <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Empty state when no chat is selected */}
//       {!selectedChat && !showMobileChats && (
//         <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 p-4 text-center">
//           <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-4">
//             <MessageSquare size={32} className="text-gray-500" />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Select a conversation</h3>
//           <p className="text-gray-400 max-w-md">Choose a chat from the list to start messaging</p>
//         </div>
//       )}
//     </motion.div>
//   )
// }

// export default ChatApp

import React, { useState, useRef, useEffect } from "react";
import { X, Paperclip, Smile, Send, Check, CheckCheck, ArrowLeft, Search, MoreVertical, Phone, Video, User, Briefcase, FileText, Calendar, ImageIcon, File, ChevronLeft, MessageSquare, ChevronDown } from 'lucide-react';
import EmojiPicker from "emoji-picker-react";

// Mock data for chats
const RECRUITER_CHATS = [
  {
    id: 1,
    name: "John Smith",
    lastMessage: "I'm interested in the developer position",
    time: "12:12 am",
    online: true,
    unread: 2,
    avatar: "JS",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Emma Johnson",
    lastMessage: "When is the next interview?",
    time: "11:45 pm",
    online: false,
    unread: 0,
    avatar: "EJ",
    role: "UX Designer",
  },
  {
    id: 3,
    name: "Michael Brown",
    lastMessage: "Thank you for the opportunity",
    time: "10:30 pm",
    online: true,
    unread: 0,
    avatar: "MB",
    role: "Backend Developer",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    lastMessage: "I've submitted my portfolio",
    time: "Yesterday",
    online: false,
    unread: 1,
    avatar: "SW",
    role: "Product Manager",
  },
  {
    id: 5,
    name: "David Lee",
    lastMessage: "Is the position still open?",
    time: "Yesterday",
    online: true,
    unread: 0,
    avatar: "DL",
    role: "Data Scientist",
  },
];

const CANDIDATE_CHATS = [
  {
    id: 1,
    name: "Tech Innovations Inc.",
    lastMessage: "We'd like to schedule an interview",
    time: "12:30 pm",
    online: true,
    unread: 1,
    avatar: "TI",
    role: "Recruiter",
  },
  {
    id: 2,
    name: "Global Solutions",
    lastMessage: "Your application has been received",
    time: "10:15 am",
    online: false,
    unread: 0,
    avatar: "GS",
    role: "HR Manager",
  },
  {
    id: 3,
    name: "Future Systems",
    lastMessage: "Please submit your portfolio",
    time: "Yesterday",
    online: true,
    unread: 0,
    avatar: "FS",
    role: "Talent Acquisition",
  },
];

// Mock job listings
const JOB_LISTINGS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "Remote",
    salary: "$120K - $150K",
  },
  { id: 2, title: "UX/UI Designer", company: "Global Solutions", location: "New York, NY", salary: "$90K - $110K" },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Future Systems",
    location: "San Francisco, CA",
    salary: "$130K - $160K",
  },
];

// Mock candidate profiles
const CANDIDATE_PROFILES = [
  {
    id: 1,
    name: "John Smith",
    role: "Frontend Developer",
    experience: "5 years",
    skills: ["React", "TypeScript", "CSS"],
  },
  {
    id: 2,
    name: "Emma Johnson",
    role: "UX Designer",
    experience: "3 years",
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Backend Developer",
    experience: "7 years",
    skills: ["Node.js", "Python", "MongoDB"],
  },
];

const ChatApp = () => {
  // State for role selection
  const [userRole, setUserRole] = useState(null);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  // Chat states
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [readReceipts, setReadReceipts] = useState({});
  const [file, setFile] = useState(null);
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);
  const [showMobileChats, setShowMobileChats] = useState(true);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  // Refs
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  // Set chats based on role
  useEffect(() => {
    if (userRole === "recruiter") {
      setChats(RECRUITER_CHATS);
    } else if (userRole === "candidate") {
      setChats(CANDIDATE_CHATS);
    }
  }, [userRole]);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowContactMenu(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowRoleDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileChats(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter chats based on search and active tab
  const filteredChats = chats.filter((chat) => {
    const matchesSearch = 
      chat.name.toLowerCase().includes(search.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(search.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "unread") return matchesSearch && chat.unread > 0;
    if (activeTab === "groups") return false; // No groups in this demo
    return matchesSearch;
  });

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setShowMobileChats(false);

    // Initialize messages based on the chat
    const initialMessages = [
      {
        id: 1,
        sender: userRole === "recruiter" ? "User" : "Admin",
        text:
          userRole === "recruiter"
            ? `Hello ${chat.name}, thank you for your interest in our positions.`
            : `Hello, I'm a recruiter from ${chat.name}. How can I help you today?`,
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
      },
    ];

    if (userRole === "recruiter") {
      initialMessages.push({
        id: 2,
        sender: "Admin",
        text: "I'm interested in the developer position. Can you tell me more about it?",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      });
    } else {
      initialMessages.push({
        id: 2,
        sender: "User",
        text: "I'm interested in the open positions at your company. Can you tell me more?",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      });
    }

    setMessages(initialMessages);
    setReadReceipts((prev) => ({ ...prev, [chat.id]: "Read" }));

    // Mark as read
    setChats((prevChats) => prevChats.map((c) => (c.id === chat.id ? { ...c, unread: 0 } : c)));
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "" && !file) return;

    const message = {
      id: Date.now(),
      sender: "User",
      text: newMessage,
      timestamp: new Date(),
      file: file,
    };
    setMessages((prev) => [...prev, message]);
    setNewMessage("");
    setFile(null);
    setShowEmojiPicker(false);
    setShowAttachmentOptions(false);
    setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Delivered" }));

    // Simulate typing and response
    setIsTyping(true);
    setTimeout(() => {
      const responses = [
        "Thank you for your message. I'll get back to you shortly.",
        "That's great to hear! Let me check and get back to you.",
        "I understand. Let me see what I can do.",
        "Perfect! I'll make a note of that.",
        "Thanks for the update. Is there anything else you need?",
      ];

      const adminResponse = {
        id: Date.now() + 1,
        sender: "Admin",
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, adminResponse]);
      setIsTyping(false);
      setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Read" }));
    }, 1500);
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleEmojiClick = (emojiData) => {
    setNewMessage((prev) => prev + emojiData.emoji);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleBackToChats = () => {
    setShowMobileChats(true);
  };

  const handleViewProfile = () => {
    setShowProfileModal(true);
    setShowContactMenu(false);
  };

  const handleClearChat = () => {
    setMessages([]);
    setShowContactMenu(false);
  };

  const handleDeleteChat = () => {
    if (selectedChat) {
      setChats((prevChats) => prevChats.filter((c) => c.id !== selectedChat.id));
      setSelectedChat(null);
      setShowContactMenu(false);
    }
  };

  const handleMuteNotifications = () => {
    // Implementation would go here
    alert("Notifications muted for this chat");
    setShowContactMenu(false);
  };

  const handleCall = () => {
    alert("Starting call with " + selectedChat.name);
  };

  const handleVideoCall = () => {
    alert("Starting video call with " + selectedChat.name);
  };

  const handleNewChat = () => {
    alert("Starting a new chat");
  };

  // Render role selection screen with dropdown
  if (!userRole) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Chat App</h1>

        <div className="relative w-full max-w-md mb-8" ref={dropdownRef}>
          <button
            className="w-full p-4 bg-gray-800 rounded-xl flex items-center justify-between hover:bg-gray-700 transition-colors"
            onClick={() => setShowRoleDropdown(!showRoleDropdown)}
          >
            <span className="text-xl font-semibold">Select Your Role</span>
            <ChevronDown className={`transition-transform duration-300 ${showRoleDropdown ? "rotate-180" : ""}`} />
          </button>

          {showRoleDropdown && (
            <div className="absolute w-full mt-2 bg-gray-800 rounded-xl overflow-hidden z-10 shadow-lg">
              <button
                className="w-full p-4 flex items-center gap-4 hover:bg-gray-700 transition-colors"
                onClick={() => {
                  setUserRole("recruiter");
                  setShowRoleDropdown(false);
                }}
              >
                <div className="bg-blue-600 p-3 rounded-full">
                  <Briefcase size={24} />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold">Recruiter</p>
                  <p className="text-sm text-gray-400">Manage candidates and job applications</p>
                </div>
              </button>

              <button
                className="w-full p-4 flex items-center gap-4 hover:bg-gray-700 transition-colors"
                onClick={() => {
                  setUserRole("candidate");
                  setShowRoleDropdown(false);
                }}
              >
                <div className="bg-green-600 p-3 rounded-full">
                  <User size={24} />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold">Candidate</p>
                  <p className="text-sm text-gray-400">Apply for jobs and chat with recruiters</p>
                </div>
              </button>
            </div>
          )}
        </div>

        <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">About This App</h2>
          <p className="text-gray-300 mb-3">
            Connect with recruiters or candidates in real-time. Share files, send messages, and manage your professional
            relationships all in one place.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">Real-time Chat</span>
            <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">File Sharing</span>
            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">Job Matching</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Chat List Sidebar */}
      {(showMobileChats || window.innerWidth >= 768) && (
        <div className={`md:w-1/3 w-full bg-gray-800 border-r border-gray-700 flex flex-col ${!showMobileChats && "hidden md:flex"}`}>
          {/* Header */}
          <div className="p-4 border-b border-gray-700 bg-gray-800 flex items-center justify-between">
            <h2 className="text-xl font-semibold">{userRole === "recruiter" ? "Candidates" : "Recruiters"}</h2>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                onClick={() => setUserRole(null)}
                title="Change role"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handleNewChat}
                title="New chat"
              >
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-700 bg-gray-800 sticky top-0 z-10">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search chats"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-700 bg-gray-800">
            <button
              className={`flex-1 py-3 text-sm font-medium ${activeTab === "all" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`flex-1 py-3 text-sm font-medium ${activeTab === "unread" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"}`}
              onClick={() => setActiveTab("unread")}
            >
              Unread
            </button>
            <button
              className={`flex-1 py-3 text-sm font-medium ${activeTab === "groups" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"}`}
              onClick={() => setActiveTab("groups")}
            >
              Groups
            </button>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {filteredChats.length === 0 ? (
              <div className="p-4 text-center text-gray-400">No chats found</div>
            ) : (
              filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => handleSelectChat(chat)}
                  className="p-3 cursor-pointer border-b border-gray-700 hover:bg-gray-700 flex items-center gap-3 transition-colors"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-semibold">
                      {chat.avatar}
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-gray-800 ${chat.online ? "bg-green-500" : "bg-gray-500"}`}
                    ></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="text-base font-medium truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-400">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                    <p className="text-xs text-gray-500">{chat.role}</p>
                  </div>

                  {chat.unread > 0 && (
                    <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {chat.unread}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700 bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  {userRole === "recruiter" ? "R" : "C"}
                </div>
                <div>
                  <p className="font-medium">{userRole === "recruiter" ? "Recruiter" : "Candidate"}</p>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>
              <button 
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                onClick={() => alert("Settings would open here")}
                title="Settings"
              >
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col bg-gray-900 relative">
          {/* Chat Header */}
          <div className="p-3 border-b border-gray-700 bg-gray-800 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handleBackToChats}
              >
                <ChevronLeft size={20} />
              </button>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
                  {selectedChat.avatar}
                </div>
                <div
                  className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-gray-800 ${selectedChat.online ? "bg-green-500" : "bg-gray-500"}`}
                ></div>
              </div>
              <div>
                <h2 className="text-base font-medium">{selectedChat.name}</h2>
                <p className="text-xs text-gray-400">
                  {selectedChat.online ? "Online" : "Offline"}
                  <span className="mx-1">•</span>
                  {selectedChat.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handleCall}
                title="Call"
              >
                <Phone size={18} />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handleVideoCall}
                title="Video call"
              >
                <Video size={18} />
              </button>
              <div className="relative" ref={menuRef}>
                <button
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                  onClick={() => setShowContactMenu(!showContactMenu)}
                  title="More options"
                >
                  <MoreVertical size={18} />
                </button>
                {showContactMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-700">
                    <button
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full text-left"
                      onClick={handleViewProfile}
                    >
                      View Profile
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full text-left"
                      onClick={handleMuteNotifications}
                    >
                      Mute Notifications
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full text-left"
                      onClick={handleClearChat}
                    >
                      Clear Chat
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full text-left"
                      onClick={handleDeleteChat}
                    >
                      Delete Chat
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 bg-gray-900 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
          >
            {/* Date separator */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full">Today</div>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "Admin" ? "justify-start" : "justify-end"} mb-4`}>
                {msg.sender === "Admin" && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 self-end mb-1">
                    {selectedChat.avatar}
                  </div>
                )}

                <div className="max-w-[75%]">
                  <div
                    className={`p-3 rounded-lg shadow-md ${
                      msg.sender === "Admin"
                        ? "bg-gray-800 text-white rounded-tl-none"
                        : "bg-blue-600 text-white rounded-tr-none"
                    }`}
                  >
                    {msg.file && (
                      <div className="mb-2 p-2 bg-gray-700 rounded flex items-center gap-2">
                        <File size={16} />
                        <span className="text-sm truncate">{msg.file.name}</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                  </div>

                  <div
                    className={`flex items-center mt-1 text-xs text-gray-400 ${msg.sender === "Admin" ? "justify-start" : "justify-end"}`}
                  >
                    <span>{formatTime(msg.timestamp)}</span>
                    {msg.sender === "User" && (
                      <span className="ml-1">
                        {readReceipts[selectedChat.id] === "Read" ? (
                          <CheckCheck size={14} className="text-blue-400" />
                        ) : (
                          <Check size={14} />
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 self-end">
                  {selectedChat.avatar}
                </div>
                <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* File preview */}
          {file && (
            <div className="p-2 border-t border-gray-700 bg-gray-800">
              <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                <div className="flex items-center">
                  <File size={16} className="mr-2" />
                  <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                </div>
                <button 
                  className="text-red-400 hover:text-red-300" 
                  onClick={() => setFile(null)}
                  title="Remove file"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="p-3 border-t border-gray-700 bg-gray-800 relative">
            {/* Emoji picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-16 left-0 z-10">
                <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
              </div>
            )}

            {/* Attachment options */}
            {showAttachmentOptions && (
              <div className="absolute bottom-16 left-12 bg-gray-800 rounded-lg shadow-lg p-2 z-10 border border-gray-700">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                    onClick={() => {
                      fileInputRef.current.click();
                      setShowAttachmentOptions(false);
                    }}
                  >
                    <ImageIcon size={24} className="text-blue-400 mb-1" />
                    <span className="text-xs">Image</span>
                  </button>
                  <button
                    className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                    onClick={() => {
                      fileInputRef.current.click();
                      setShowAttachmentOptions(false);
                    }}
                  >
                    <File size={24} className="text-green-400 mb-1" />
                    <span className="text-xs">Document</span>
                  </button>
                  {userRole === "recruiter" && (
                    <>
                      <button 
                        className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => alert("Job listing would be attached here")}
                      >
                        <FileText size={24} className="text-yellow-400 mb-1" />
                        <span className="text-xs">Job Listing</span>
                      </button>
                      <button 
                        className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => alert("Schedule functionality would be implemented here")}
                      >
                        <Calendar size={24} className="text-purple-400 mb-1" />
                        <span className="text-xs">Schedule</span>
                      </button>
                    </>
                  )}
                  {userRole === "candidate" && (
                    <>
                      <button 
                        className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => alert("Resume would be attached here")}
                      >
                        <FileText size={24} className="text-yellow-400 mb-1" />
                        <span className="text-xs">Resume</span>
                      </button>
                      <button 
                        className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                        onClick={() => alert("Portfolio would be attached here")}
                      >
                        <Briefcase size={24} className="text-purple-400 mb-1" />
                        <span className="text-xs">Portfolio</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center">
              <div className="flex gap-2">
                <button
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-gray-200"
                  onClick={() => {
                    setShowEmojiPicker(false);
                    setShowAttachmentOptions(!showAttachmentOptions);
                  }}
                  title="Attach file"
                >
                  <Paperclip size={20} />
                </button>
                <button
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-gray-200"
                  onClick={() => {
                    setShowAttachmentOptions(false);
                    setShowEmojiPicker(!showEmojiPicker);
                  }}
                  title="Emoji"
                >
                  <Smile size={20} />
                </button>
              </div>

              <input
                type="text"
                className="flex-1 mx-2 px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type a message..."
              />

              <button
                className={`p-2 rounded-full ${newMessage.trim() || file ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 text-gray-500 cursor-not-allowed"} transition-colors`}
                onClick={handleSendMessage}
                disabled={!newMessage.trim() && !file}
                title="Send message"
              >
                <Send size={20} />
              </button>

              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            </div>
          </div>
        </div>
      ) : (
        // Empty state when no chat is selected
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-900 p-4 text-center">
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-4">
            <MessageSquare size={32} className="text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Select a conversation</h3>
          <p className="text-gray-400 max-w-md">Choose a chat from the list to start messaging</p>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && selectedChat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md m-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Profile Details</h3>
              <button 
                className="text-gray-400 hover:text-white" 
                onClick={() => setShowProfileModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-semibold mb-4">
                {selectedChat.avatar}
              </div>
              <h4 className="text-xl font-bold">{selectedChat.name}</h4>
              <p className="text-blue-400">{selectedChat.role}</p>
              <p className="text-sm text-gray-400 mt-1">{selectedChat.online ? "Online" : "Offline"}</p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">{selectedChat.name.toLowerCase().replace(" ", ".")}@example.com</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                onClick={() => setShowProfileModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatApp;