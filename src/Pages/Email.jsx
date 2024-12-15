import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Common/Header';
import { FaEnvelope } from 'react-icons/fa';

const emailData = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Project Update",
    preview: "Hey, just wanted to give you an update on the project...",
    date: "2024-12-08",
    isRead: false,
    content: "Full email content for Project Update. Please review the attached files for the project and provide your feedback.",
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Meeting Tomorrow",
    preview: "We have a meeting scheduled for tomorrow at 10 AM...",
    date: "2024-12-07",
    isRead: true,
    content: "Full email content for Meeting Tomorrow. Let's discuss the new project agenda in the meeting.",
  },
  {
    id: 3,
    sender: "Michael Brown",
    subject: "Invoice #12345",
    preview: "Attached is the invoice for the recent project...",
    date: "2024-12-06",
    isRead: false,
    content: "Full email content for Invoice #12345. Please make sure to review and confirm payment.",
  },
];

const Email = () => {
  const [emails, setEmails] = useState(emailData);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectEmail = (email) => {
    setSelectedEmail(email);
    setEmails(emails.map((e) =>
      e.id === email.id ? { ...e, isRead: true } : e
    ));
  };

  const handleMarkAsRead = (emailId) => {
    setEmails(emails.map((e) => 
      e.id === emailId ? { ...e, isRead: true } : e
    ));
  };

  const handleDeleteEmail = (emailId) => {
    setEmails(emails.filter((e) => e.id !== emailId));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter emails based on the search query
  const filteredEmails = emails.filter((email) =>
    email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    email.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Count read and unread emails
  const totalEmails = emails.length;
  const unreadEmails = emails.filter((email) => !email.isRead).length;
  const readEmails = totalEmails - unreadEmails;

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Emails"} />
      <motion.div
        className="min-h-screen bg-gray-900 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }} >
    
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <div className="relative">
            <FaEnvelope className="text-white text-3xl" />
            <div className="absolute top-0 right-0  bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {unreadEmails}
            </div>
          </div>
          <div className="ml-2 text-white">
            <p className="text-sm">Total: {totalEmails}</p>
            <p className="text-sm">Read: {readEmails}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto  shadow-md rounded-lg">
          <div className="p-4 border-b">
            <input
              type="text"
              className="w-full p-3 rounded-md border bg-gray-700 border-gray-900 text-black"
              placeholder="Search emails..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <div className="overflow-y-auto max-h-96">
            {filteredEmails.length > 0 ? (
              filteredEmails.map((email) => (
                <div
                  key={email.id}
                  className={`flex items-center p-4 border-b cursor-pointer ${
                    email.isRead ? "bg-gray-800" : "bg-gray-900"
                  }`}
                  onClick={() => handleSelectEmail(email)}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-white">{email.sender}</div>
                    <div className="text-gray-500">{email.subject}</div>
                    <div className="text-gray-400 text-sm">{email.preview}</div>
                  </div>
                  <div className="text-gray-300 text-sm">{email.date}</div>
                  <div
                    className={`ml-4 p-2 rounded-full text-white ${
                      email.isRead ? "bg-green-500" : "bg-blue-500"
                    }`}
                  >
                    {email.isRead ? "Read" : "Unread"}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">No emails found</div>
            )}
          </div>
        </div>

        {/* Email Detail Modal */}
        {selectedEmail && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-4xl">
              <div className="flex justify-between items-center mb-6">
                <div className="text-white">
                  <h2 className="text-3xl font-semibold">{selectedEmail.subject}</h2>
                  <p className="text-lg text-gray-400">From: {selectedEmail.sender}</p>
                  <p className="text-sm text-gray-500">{selectedEmail.date}</p>
                </div>
                <button
                  className="text-red-600"
                  onClick={() => handleDeleteEmail(selectedEmail.id)}
                >
                  Delete
                </button>
              </div>
              <div className="mb-6">
                <p className="text-white">{selectedEmail.content}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleMarkAsRead(selectedEmail.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Mark as Read
                </button>
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Close
                </button>
              </div>
              <div className="mt-4 flex justify-between space-x-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  Reply
                </button>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
                  Forward
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Email;
