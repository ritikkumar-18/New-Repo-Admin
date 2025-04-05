"use client"

import { useState, useRef, useEffect } from "react"
import {
  X,
  Paperclip,
  Smile,
  Send,
  Check,
  CheckCheck,
  Search,
  File,
  ChevronDown,
  MessageSquare,
  User,
  Briefcase,
  FileText,
  Calendar,
  ImageIcon,
} from "lucide-react"
import EmojiPicker from "emoji-picker-react"

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
]

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
]

const ChatApp = () => {
  // State for role selection
  const [userRole, setUserRole] = useState("recruiter") // Default to recruiter
  const [showRoleDropdown, setShowRoleDropdown] = useState(false)

  // Chat states
  const [chats, setChats] = useState(RECRUITER_CHATS) // Default to recruiter chats
  const [selectedChat, setSelectedChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [search, setSearch] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [readReceipts, setReadReceipts] = useState({})
  const [file, setFile] = useState(null)
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false)
  const [showMobileChats, setShowMobileChats] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  // Refs
  const chatContainerRef = useRef(null)
  const fileInputRef = useRef(null)
  const dropdownRef = useRef(null)
  const emojiPickerRef = useRef(null)
  const attachmentOptionsRef = useRef(null)

  // Set chats based on role
  useEffect(() => {
    if (userRole === "recruiter") {
      setChats(RECRUITER_CHATS)
    } else if (userRole === "candidate") {
      setChats(CANDIDATE_CHATS)
    }
    // Reset selected chat when changing roles
    setSelectedChat(null)
    setShowMobileChats(true)
  }, [userRole])

  // Auto scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowRoleDropdown(false)
      }
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        event.target.id !== "emoji-button"
      ) {
        setShowEmojiPicker(false)
      }
      if (
        attachmentOptionsRef.current &&
        !attachmentOptionsRef.current.contains(event.target) &&
        event.target.id !== "attachment-button"
      ) {
        setShowAttachmentOptions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileChats(true)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Filter chats based on search and active tab
  const filteredChats = chats.filter((chat) => {
    const matchesSearch =
      chat.name.toLowerCase().includes(search.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(search.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "unread") return matchesSearch && chat.unread > 0
    return matchesSearch
  })

  const handleSelectChat = (chat) => {
    setSelectedChat(chat)
    setShowMobileChats(false)

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
    ]

    if (userRole === "recruiter") {
      initialMessages.push({
        id: 2,
        sender: "Admin",
        text: "I'm interested in the developer position. Can you tell me more about it?",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      })
    } else {
      initialMessages.push({
        id: 2,
        sender: "User",
        text: "I'm interested in the open positions at your company. Can you tell me more?",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      })
    }

    setMessages(initialMessages)
    setReadReceipts((prev) => ({ ...prev, [chat.id]: "Read" }))

    // Mark as read
    setChats((prevChats) => prevChats.map((c) => (c.id === chat.id ? { ...c, unread: 0 } : c)))
  }

  const handleSendMessage = () => {
    if (newMessage.trim() === "" && !file) return

    const message = {
      id: Date.now(),
      sender: "User",
      text: newMessage,
      timestamp: new Date(),
      file: file,
    }
    setMessages((prev) => [...prev, message])
    setNewMessage("")
    setFile(null)
    setShowEmojiPicker(false)
    setShowAttachmentOptions(false)
    setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Delivered" }))

    // Simulate typing and response
    setIsTyping(true)
    setTimeout(() => {
      const responses = [
        "Thank you for your message. I'll get back to you shortly.",
        "That's great to hear! Let me check and get back to you.",
        "I understand. Let me see what I can do.",
        "Perfect! I'll make a note of that.",
        "Thanks for the update. Is there anything else you need?",
      ]

      const adminResponse = {
        id: Date.now() + 1,
        sender: "Admin",
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, adminResponse])
      setIsTyping(false)
      setReadReceipts((prev) => ({ ...prev, [selectedChat.id]: "Read" }))
    }, 1500)
  }

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  const handleEmojiClick = (emojiData) => {
    setNewMessage((prev) => prev + emojiData.emoji)
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const handleBackToChats = () => {
    setShowMobileChats(true)
  }

  const handleClearChat = () => {
    setMessages([])
  }

  const handleDeleteChat = () => {
    if (selectedChat) {
      setChats((prevChats) => prevChats.filter((c) => c.id !== selectedChat.id))
      setSelectedChat(null)
    }
  }

  const toggleRole = () => {
    setUserRole(userRole === "recruiter" ? "candidate" : "recruiter")
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white overflow-hidden ">
      {/* Chat List Sidebar */}
      {(showMobileChats || window.innerWidth >= 768) && (
        <div
          className={`md:w-1/3 w-full bg-gray-800 border-r border-gray-700 flex flex-col ${
            !showMobileChats && "hidden md:flex"
          } h-full`}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-700 bg-gray-800 flex items-center justify-between">
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 text-xl font-semibold hover:bg-gray-700 p-2 rounded-md transition-colors"
                onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              >
                {userRole === "recruiter" ? "Candidates" : "Recruiters"}
                <ChevronDown
                  className={`transition-transform duration-300 ${showRoleDropdown ? "rotate-180" : ""}`}
                  size={18}
                />
              </button>

              {showRoleDropdown && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${
                      userRole === "recruiter" ? "bg-gray-700" : ""
                    }`}
                    onClick={() => {
                      setUserRole("recruiter")
                      setShowRoleDropdown(false)
                    }}
                  >
                    <Briefcase size={16} />
                    Recruiter Mode
                  </button>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-gray-700 ${
                      userRole === "candidate" ? "bg-gray-700" : ""
                    }`}
                    onClick={() => {
                      setUserRole("candidate")
                      setShowRoleDropdown(false)
                    }}
                  >
                    <User size={16} />
                    Candidate Mode
                  </button>
                </div>
              )}
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
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "all" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`flex-1 py-3 text-sm font-medium ${
                activeTab === "unread" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("unread")}
            >
              Unread
            </button>
          </div>

          {/* Chat List - with hidden scrollbar */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {filteredChats.length === 0 ? (
              <div className="p-4 text-center text-gray-400">No chats found</div>
            ) : (
              filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => handleSelectChat(chat)}
                  className={`p-3 cursor-pointer border-b border-gray-700 hover:bg-gray-700 flex items-center gap-3 transition-colors ${
                    userRole === "recruiter" ? "recruiter-chat-item" : "candidate-chat-item"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
                        userRole === "recruiter" ? "bg-blue-600" : "bg-green-600"
                      }`}
                    >
                      {chat.avatar}
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-gray-800 ${
                        chat.online ? "bg-green-500" : "bg-gray-500"
                      }`}
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
                    <div
                      className={`text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ${
                        userRole === "recruiter" ? "bg-blue-500" : "bg-green-500"
                      }`}
                    >
                      {chat.unread}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Chat Window */}
      {selectedChat ? (
        <div className="flex-1 flex flex-col bg-gray-900 relative h-full">
          {/* Chat Header */}
          <div
            className={`p-3 border-b border-gray-700 bg-gray-800 flex items-center justify-between sticky top-0 z-10 ${
              userRole === "recruiter" ? "recruiter-header" : "candidate-header"
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors"
                onClick={handleBackToChats}
              >
                <ChevronDown size={20} />
              </button>
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    userRole === "recruiter" ? "bg-blue-600" : "bg-green-600"
                  }`}
                >
                  {selectedChat.avatar}
                </div>
                <div
                  className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-gray-800 ${
                    selectedChat.online ? "bg-green-500" : "bg-gray-500"
                  }`}
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
          </div>

          {/* Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 bg-gray-900 scroll-hidden">
            {/* Date separator */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full">Today</div>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "Admin" ? "justify-start" : "justify-end"} mb-4`}>
                {msg.sender === "Admin" && (
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 self-end mb-1 ${
                      userRole === "recruiter" ? "bg-blue-600" : "bg-green-600"
                    }`}
                  >
                    {selectedChat.avatar}
                  </div>
                )}

                <div className="max-w-[75%]">
                  <div
                    className={`p-3 rounded-lg shadow-md ${
                      msg.sender === "Admin"
                        ? "bg-gray-800 text-white rounded-tl-none"
                        : userRole === "recruiter"
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-green-600 text-white rounded-tr-none"
                    }`}
                  >
                    {msg.file && (
                      <div className="mb-2 p-2 bg-gray-700 rounded flex items-center gap-2">
                        <File size={16} />
                        <span className="text-sm truncate">{msg.file.name}</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap break-words text-sm sm:text-base">{msg.text}</p>
                  </div>

                  <div
                    className={`flex items-center mt-1 text-xs text-gray-400 ${
                      msg.sender === "Admin" ? "justify-start" : "justify-end"
                    }`}
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
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 self-end ${
                    userRole === "recruiter" ? "bg-blue-600" : "bg-green-600"
                  }`}
                >
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
                <button className="text-red-400 hover:text-red-300" onClick={() => setFile(null)} title="Remove file">
                  <X size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="p-3 border-t border-gray-700 bg-gray-800 relative">
            {/* Emoji picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-16 left-0 z-10" ref={emojiPickerRef}>
                <div className="max-h-[350px] overflow-y-auto">
                  <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" width={300} height={350} />
                </div>
              </div>
            )}

            {/* Attachment options */}
            {showAttachmentOptions && (
              <div
                className="absolute bottom-16 left-12 bg-gray-800 rounded-lg shadow-lg p-2 z-10 border border-gray-700"
                ref={attachmentOptionsRef}
              >
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                    onClick={() => {
                      fileInputRef.current.click()
                      setShowAttachmentOptions(false)
                    }}
                  >
                    <ImageIcon size={24} className="text-blue-400 mb-1" />
                    <span className="text-xs">Image</span>
                  </button>
                  <button
                    className="flex flex-col items-center p-3 hover:bg-gray-700 rounded-lg transition-colors"
                    onClick={() => {
                      fileInputRef.current.click()
                      setShowAttachmentOptions(false)
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
                  id="attachment-button"
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-gray-200"
                  onClick={() => {
                    setShowEmojiPicker(false)
                    setShowAttachmentOptions(!showAttachmentOptions)
                  }}
                  title="Attach file"
                >
                  <Paperclip size={20} />
                </button>
                <button
                  id="emoji-button"
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-gray-200"
                  onClick={() => {
                    setShowAttachmentOptions(false)
                    setShowEmojiPicker(!showEmojiPicker)
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
                className={`p-2 rounded-full ${
                  newMessage.trim() || file
                    ? userRole === "recruiter"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-green-600 hover:bg-green-700"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                } transition-colors`}
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
    </div>
  )
}

export default ChatApp

