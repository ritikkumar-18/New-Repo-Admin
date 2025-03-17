import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle, Calendar, FileText, Info } from "lucide-react";
import Header from "../Common/Header";

const initialNotifications = [
  {
    id: 1,
    title: "Interview Scheduled",
    sender: "HR - Tech Solutions",
    date: "March 20, 2025",
    time: "11:00 AM",
    description: "Your interview for the Frontend Developer role is scheduled for March 20 at 11 AM.",
    type: "interview",
    isRead: false,
  },
  {
    id: 2,
    title: "Job Application Approved",
    sender: "Hiring Team - XYZ Pvt Ltd",
    date: "March 15, 2025",
    time: "2:00 PM",
    description: "Congratulations! Your application for the React Developer role has been approved.",
    type: "approval",
    isRead: true,
  },
  {
    id: 3,
    title: "Urgent: Document Submission",
    sender: "Recruiter - Alpha Inc.",
    date: "March 14, 2025",
    time: "4:00 PM",
    description: "Please submit your experience certificates before March 18 to proceed further.",
    type: "document",
    isRead: false,
  },
];

const Notification = () => {
  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem("notifications");
    return savedNotifications ? JSON.parse(savedNotifications) : initialNotifications;
  });

  const [selectedNotification, setSelectedNotification] = useState(null);
  const [filter, setFilter] = useState("all"); // "all", "unread"

  // Save notifications in localStorage to persist read status
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  // Handle "Mark as Read"
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  // Handle "Mark All as Read"
  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  // Handle "View Details"
  const handleViewDetails = (notification) => {
    setSelectedNotification(notification);
    markAsRead(notification.id);
  };

  // Filter notifications based on the selected filter
  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "unread") return !notification.isRead;
    return true;
  });

  // Group notifications by date
  const groupedNotifications = filteredNotifications.reduce((acc, notification) => {
    const date = notification.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(notification);
    return acc;
  }, {});

  return (
    <div className="flex-1 overflow-auto relative bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen text-white">
      <Header title="Notifications" />

      {/* Filter and Mark All as Read */}
      <div className="flex justify-between items-center p-6">
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-md ${
              filter === "all" ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              filter === "unread" ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setFilter("unread")}
          >
            Unread
          </button>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={markAllAsRead}
        >
          Mark All as Read
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-6 p-6">
        {Object.entries(groupedNotifications).map(([date, notifications]) => (
          <div key={date}>
            <h3 className="text-lg font-bold mb-4">{date}</h3>
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                className={`p-5 rounded-xl shadow-lg cursor-pointer mb-4 ${
                  notification.isRead ? "bg-gray-700" : "bg-blue-700 border border-blue-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  {notification.type === "interview" && <Briefcase className="text-blue-400" />}
                  {notification.type === "approval" && <CheckCircle className="text-green-400" />}
                  {notification.type === "document" && <FileText className="text-yellow-400" />}
                  <div className="flex-1">
                    <h2 className="text-lg font-bold">{notification.title}</h2>
                    <p className="text-sm text-gray-400">
                      {notification.date} - {notification.time}
                    </p>
                  </div>
                  {!notification.isRead && (
                    <span className="text-xs bg-red-500 px-2 py-1 rounded-full text-white">
                      New
                    </span>
                  )}
                </div>

                <div className="mt-3 flex gap-3">
                  <button
                    className="bg-blue-500 px-3 py-2 text-sm rounded-md hover:bg-blue-600"
                    onClick={() => handleViewDetails(notification)}
                  >
                    View Details
                  </button>
                  {!notification.isRead && (
                    <button
                      className="bg-gray-600 px-3 py-2 text-sm rounded-md hover:bg-gray-700"
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setSelectedNotification(null)}
          >
            <div
              className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-2">{selectedNotification.title}</h2>
              <p className="text-sm text-gray-400">
                Sent by: {selectedNotification.sender}
              </p>
              <p className="text-sm text-gray-400">
                Date: {selectedNotification.date} | Time: {selectedNotification.time}
              </p>
              <p className="mt-4">{selectedNotification.description}</p>

              <button
                className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setSelectedNotification(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;