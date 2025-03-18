import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Common/Header';

const SupportChat = () => {
  const [messages, setMessages] = useState([]); 
  const [newMessage, setNewMessage] = useState('');
  const [isWaitingForReply, setIsWaitingForReply] = useState(false); 
  const [isSupportTyping, setIsSupportTyping] = useState(false); 
  const chatContainerRef = useRef(null); 

  
  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: Date.now(),
      text: newMessage,
      sender: 'recruiter',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage('');
    setIsWaitingForReply(true);

    
    setIsSupportTyping(true);
    setTimeout(() => {
      const supportReply = {
        id: Date.now() + 1,
        text: 'Thank you for your message. Our support team will get back to you shortly.',
        sender: 'support',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, supportReply]);
      setIsWaitingForReply(false);
      setIsSupportTyping(false);
    }, 3000); 
  };

  
  const clearChat = () => {
    setMessages([]);
    setIsWaitingForReply(false);
    setIsSupportTyping(false);
  };

  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header title={'Support Chat'} />
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 max-w-4xl mx-auto w-full">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${
              msg.sender === 'recruiter' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[70%] p-4 rounded-lg ${
                msg.sender === 'recruiter'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-400 block mt-1">
                {msg.timestamp}
              </span>
            </div>
          </motion.div>
        ))}

        
        <AnimatePresence>
          {isSupportTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Message Input (Fixed at the Bottom) */}
      <div className="sticky bottom-0 bg-gray-900 p-4 border-t border-gray-800">
        <div className="max-w-full mx-auto w-full flex space-x-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            disabled={isWaitingForReply} // Disable input while waiting for a reply
          />
          <button
            onClick={sendMessage}
            disabled={isWaitingForReply || newMessage.trim() === ''}
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            Send
          </button>
          <button
            onClick={clearChat}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportChat;