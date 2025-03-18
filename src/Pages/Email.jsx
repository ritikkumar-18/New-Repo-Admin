import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Common/Header";
import {
  FaEnvelope, FaReply, FaShare, FaTrash, FaCheck, FaTimes,
  FaStar, FaArchive, FaPaperclip, FaEdit, FaArrowLeft, FaSpinner, FaInbox, FaExclamationCircle
} from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";

const emailData = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Project Update",
    preview: "Hey, just wanted to give you an update on the project...",
    date: "2024-12-08",
    isRead: false,
    isStarred: false,
    isArchived: false,
    labels: ["Work", "Important"],
    attachments: ["project_update.pdf"],
    content: "Full email content for Project Update. Please review the attached files for the project and provide your feedback.",
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Meeting Tomorrow",
    preview: "We have a meeting scheduled for tomorrow at 10 AM...",
    date: "2024-12-07",
    isRead: true,
    isStarred: true,
    isArchived: false,
    labels: ["Meeting"],
    attachments: [],
    content: "Full email content for Meeting Tomorrow. Let's discuss the new project agenda in the meeting.",
  }
];

const Email = () => {
  const [emails, setEmails] = useState(emailData);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const [newEmailContent, setNewEmailContent] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [forwardContent, setForwardContent] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const [isForwarding, setIsForwarding] = useState(false);

  const handleSelectEmail = (email) => {
    setSelectedEmail(email);
    if (!email.isRead) {
      setEmails((emails) =>
        emails.map((e) => (e.id === email.id ? { ...e, isRead: true } : e))
      );
    }
  };

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const toggleStar = (id) => {
    setEmails((emails) =>
      emails.map((email) =>
        email.id === id ? { ...email, isStarred: !email.isStarred } : email
      )
    );
  };

  const deleteEmail = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
    toast.success("Email deleted successfully!")
  };

  const archiveEmail = (id) => {
    setEmails((emails) =>
      emails.map((email) =>
        email.id === id ? { ...email, isArchived: true } : email
      )
    );
  };

  const markAsUnread = (id) => {
    setEmails((emails) =>
      emails.map((email) =>
        email.id === id ? { ...email, isRead: false } : email
      )
    );
    toast.success("Email marked as unread")
  };

  const moveToSpam = (id) => {
    setEmails((emails) =>
      emails.map((email) =>
        email.id === id ? { ...email, labels: [...email.labels, "Spam"] } : email
      )
    );
    toast.success("Email moved to Spam folder")
  };

  const handleComposeEmail = () => {
    setIsComposing(true);
  };

  const handleSendEmail = () => {
    // Logic to send email
    setIsComposing(false);
    setNewEmailContent("");
    toast.success("Email sent successfully!")
  };

  const handleReply = () => {
    setIsReplying(true);
    setReplyContent(`\n\n---\n> ${selectedEmail.content}`);
    toast.success("Replying to email...")
  };

  const handleForward = () => {
    setIsForwarding(true);
    setForwardContent(`\n\n---\n> ${selectedEmail.content}`);
    toast.success("Forwarding email...")
  };

  const filteredEmails = emails.filter(
    (email) =>
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Emails"} />

      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      >
        {/* Search Bar and Compose Button */}
        <div className="max-w-6xl mx-auto mb-6 flex justify-between items-center">
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search emails..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button
            onClick={handleComposeEmail}
            className="ml-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Compose
          </button>
        </div>

        {/* Email List */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-2 rounded-lg bg-gray-800 shadow-lg">
          {filteredEmails.length > 0 ? (
            filteredEmails.map((email) => (
              <div
                key={email.id}
                className={`flex items-center p-4 border-b border-gray-700 cursor-pointer  transition-all rounded-md ${
                  email.isRead ? "bg-gray-800" : "bg-gray-900"
                }`}
                onClick={() => handleSelectEmail(email)}
              >
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">{email.sender}</div>
                    <div className="flex gap-3">
                      <FaStar
                        className={`cursor-pointer ${
                          email.isStarred ? "text-yellow-400" : "text-gray-500"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStar(email.id);
                        }}
                      />
                      <FaArchive
                        className="cursor-pointer text-gray-500 hover:text-blue-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          archiveEmail(email.id);
                        }}
                      />
                      <FaTrash
                        className="cursor-pointer text-red-500 hover:text-red-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteEmail(email.id);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-gray-400">{email.subject}</div>
                  <div className="text-gray-500 text-sm">{email.preview}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {email.labels.map((label, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{email.date}</div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">No emails found</div>
          )}
        </div>

        {/* Email Detail Modal */}
        {selectedEmail && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-4xl">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedEmail.subject}</h2>
                  <p className="text-sm text-gray-400">
                    From: {selectedEmail.sender} | {selectedEmail.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="mb-6">
                <p>{selectedEmail.content}</p>
                {selectedEmail.attachments.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white">Attachments</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedEmail.attachments.map((attachment, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 bg-gray-700 rounded-lg"
                        >
                          <a
                            href={`/${attachment}`}
                            download
                            className="text-blue-400 hover:text-blue-300"
                          >
                            {attachment}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => markAsUnread(selectedEmail.id)}
                  className="flex items-center gap-2 p-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  <FaEnvelope /> Mark as Unread
                </button>
                <button
                  onClick={handleReply}
                  className="flex items-center gap-2 p-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  <FaReply /> Reply
                </button>
                <button
                  onClick={handleForward}
                  className="flex items-center gap-2 p-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  <FaShare /> Forward
                </button>
                <button
                  onClick={() => moveToSpam(selectedEmail.id)}
                  className="flex items-center gap-2 p-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  <FaExclamationCircle /> Spam
                </button>
              </div>

              {/* Reply Modal */}
              {isReplying && (
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-4xl">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Reply</h2>
                      <button
                        onClick={() => setIsReplying(false)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>
                    <ReactQuill
                      theme='snow'
                      value={replyContent}
                      onChange={setReplyContent}
                      className="bg-white text-black rounded-lg"
                    />
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => {
                          setIsReplying(false);
                          setReplyContent("");
                        }}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Send Reply
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Forward Modal */}
              {isForwarding && (
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-4xl">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">Forward</h2>
                      <button
                        onClick={() => setIsForwarding(false)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>
                    <ReactQuill
                      theme="snow"
                      value={forwardContent}
                      onChange={setForwardContent}
                      className="bg-white text-black rounded-lg"
                    />
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => {
                          setIsForwarding(false);
                          setForwardContent("");
                        }}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Send Forward
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Compose Email Modal */}
        {isComposing && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-4xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Compose Email</h2>
                <button
                  onClick={() => setIsComposing(false)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <ReactQuill
                theme="snow"
                value={newEmailContent}
                onChange={setNewEmailContent}
                className="bg-white text-black rounded-lg"
              />

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleSendEmail}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Email;