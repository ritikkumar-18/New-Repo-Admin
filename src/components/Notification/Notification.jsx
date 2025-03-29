// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Briefcase, CheckCircle, Calendar, FileText, Info } from "lucide-react";
// import Header from "../Common/Header";

// const initialNotifications = [
//   {
//     id: 1,
//     title: "Interview Scheduled",
//     sender: "HR - Tech Solutions",
//     date: "March 20, 2025",
//     time: "11:00 AM",
//     description: "Your interview for the Frontend Developer role is scheduled for March 20 at 11 AM.",
//     type: "interview",
//     isRead: false,
//   },
//   {
//     id: 2,
//     title: "Job Application Approved",
//     sender: "Hiring Team - XYZ Pvt Ltd",
//     date: "March 15, 2025",
//     time: "2:00 PM",
//     description: "Congratulations! Your application for the React Developer role has been approved.",
//     type: "approval",
//     isRead: true,
//   },
//   {
//     id: 3,
//     title: "Urgent: Document Submission",
//     sender: "Recruiter - Alpha Inc.",
//     date: "March 14, 2025",
//     time: "4:00 PM",
//     description: "Please submit your experience certificates before March 18 to proceed further.",
//     type: "document",
//     isRead: false,
//   },
// ];

// const Notification = () => {
//   const [notifications, setNotifications] = useState(() => {
//     const savedNotifications = localStorage.getItem("notifications");
//     return savedNotifications ? JSON.parse(savedNotifications) : initialNotifications;
//   });

//   const [selectedNotification, setSelectedNotification] = useState(null);
//   const [filter, setFilter] = useState("all"); // "all", "unread"

//   // Save notifications in localStorage to persist read status
//   useEffect(() => {
//     localStorage.setItem("notifications", JSON.stringify(notifications));
//   }, [notifications]);

//   // Handle "Mark as Read"
//   const markAsRead = (id) => {
//     setNotifications((prevNotifications) =>
//       prevNotifications.map((notification) =>
//         notification.id === id ? { ...notification, isRead: true } : notification
//       )
//     );
//   };

//   // Handle "Mark All as Read"
//   const markAllAsRead = () => {
//     setNotifications((prevNotifications) =>
//       prevNotifications.map((notification) => ({ ...notification, isRead: true }))
//     );
//   };

//   // Handle "View Details"
//   const handleViewDetails = (notification) => {
//     setSelectedNotification(notification);
//     markAsRead(notification.id);
//   };

//   // Filter notifications based on the selected filter
//   const filteredNotifications = notifications.filter((notification) => {
//     if (filter === "unread") return !notification.isRead;
//     return true;
//   });

//   // Group notifications by date
//   const groupedNotifications = filteredNotifications.reduce((acc, notification) => {
//     const date = notification.date;
//     if (!acc[date]) acc[date] = [];
//     acc[date].push(notification);
//     return acc;
//   }, {});

//   return (
//     <div className="flex-1 overflow-auto relative bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen text-white">
//       <Header title="Notifications" />

//       {/* Filter and Mark All as Read */}
//       <div className="flex justify-between items-center p-6">
//         <div className="flex gap-4">
//           <button
//             className={`px-4 py-2 rounded-md ${
//               filter === "all" ? "bg-blue-500" : "bg-gray-700"
//             }`}
//             onClick={() => setFilter("all")}
//           >
//             All
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md ${
//               filter === "unread" ? "bg-blue-500" : "bg-gray-700"
//             }`}
//             onClick={() => setFilter("unread")}
//           >
//             Unread
//           </button>
//         </div>
//         <button
//           className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
//           onClick={markAllAsRead}
//         >
//           Mark All as Read
//         </button>
//       </div>

//       {/* Notification List */}
//       <div className="space-y-6 p-6">
//         {Object.entries(groupedNotifications).map(([date, notifications]) => (
//           <div key={date}>
//             <h3 className="text-lg font-bold mb-4">{date}</h3>
//             {notifications.map((notification) => (
//               <motion.div
//                 key={notification.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.03 }}
//                 className={`p-5 rounded-xl shadow-lg cursor-pointer mb-4 ${
//                   notification.isRead ? "bg-gray-700" : "bg-blue-700 border border-blue-400"
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   {notification.type === "interview" && <Briefcase className="text-blue-400" />}
//                   {notification.type === "approval" && <CheckCircle className="text-green-400" />}
//                   {notification.type === "document" && <FileText className="text-yellow-400" />}
//                   <div className="flex-1">
//                     <h2 className="text-lg font-bold">{notification.title}</h2>
//                     <p className="text-sm text-gray-400">
//                       {notification.date} - {notification.time}
//                     </p>
//                   </div>
//                   {!notification.isRead && (
//                     <span className="text-xs bg-red-500 px-2 py-1 rounded-full text-white">
//                       New
//                     </span>
//                   )}
//                 </div>

//                 <div className="mt-3 flex gap-3">
//                   <button
//                     className="bg-blue-500 px-3 py-2 text-sm rounded-md hover:bg-blue-600"
//                     onClick={() => handleViewDetails(notification)}
//                   >
//                     View Details
//                   </button>
//                   {!notification.isRead && (
//                     <button
//                       className="bg-gray-600 px-3 py-2 text-sm rounded-md hover:bg-gray-700"
//                       onClick={() => markAsRead(notification.id)}
//                     >
//                       Mark as Read
//                     </button>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* Detailed Modal */}
//       <AnimatePresence>
//         {selectedNotification && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
//             onClick={() => setSelectedNotification(null)}
//           >
//             <div
//               className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <h2 className="text-2xl font-bold mb-2">{selectedNotification.title}</h2>
//               <p className="text-sm text-gray-400">
//                 Sent by: {selectedNotification.sender}
//               </p>
//               <p className="text-sm text-gray-400">
//                 Date: {selectedNotification.date} | Time: {selectedNotification.time}
//               </p>
//               <p className="mt-4">{selectedNotification.description}</p>

//               <button
//                 className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
//                 onClick={() => setSelectedNotification(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </motion.div> 
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Notification;


import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, BriefcaseIcon, CheckCircle2, AlertCircle, MessageSquare, Building2, UserCheck, X } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import Header from "../Common/Header"

const Notification = () => {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [visibleNotifications, setVisibleNotifications] = useState([])
  const [selectedNotification, setSelectedNotification] = useState(null)
  const [filter, setFilter] = useState("all") // "all", "unread"

  // Simulate fetching notifications from an API
  const fetchNotifications = (pageNumber) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const now = new Date()
        const notifications = []

        const companies = [
          {
            name: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png",
          },
          {
            name: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png",
          },
          {
            name: "Amazon",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/120px-Amazon_logo.svg.png",
          },
          {
            name: "Meta",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/120px-Meta_Platforms_Inc._logo.svg.png",
          },
        ]

        const jobTitles = [
          "Senior Frontend Developer",
          "Full Stack Engineer",
          "React Developer",
          "Software Architect",
          "UI/UX Developer",
        ]

        // Generate notifications for the last 7 days
        for (let i = 0; i < 10; i++) {
          const randomHours = Math.floor(Math.random() * 168) // 7 days in hours
          const timestamp = new Date(now.getTime() - randomHours * 60 * 60 * 1000)

          const types = ["application", "interview", "recommendation", "profile", "message", "company", "shortlist"]
          const randomType = types[Math.floor(Math.random() * types.length)]
          const randomCompany = companies[Math.floor(Math.random() * companies.length)]
          const randomJob = jobTitles[Math.floor(Math.random() * jobTitles.length)]

          const notification = {
            id: pageNumber * 100 + i,
            type: randomType,
            user: {
              name: randomCompany.name,
              avatar: randomCompany.logo,
            },
            content: "",
            timestamp,
            companyLogo: randomCompany.logo,
            jobTitle: randomJob,
            isRead: Math.random() > 0.5,
          }

          // Set content based on notification type
          switch (randomType) {
            case "application":
              notification.content = `Your application for ${randomJob} position has been received`
              notification.status = "Under Review"
              break
            case "interview":
              notification.content = `Interview scheduled for ${randomJob} position`
              notification.status = "Scheduled"
              break
            case "recommendation":
              notification.content = `New job recommendation: ${randomJob}`
              break
            case "profile":
              notification.content = "Your profile has been viewed 15 times this week"
              break
            case "message":
              notification.content = `HR team has sent you a message regarding ${randomJob} position`
              break
            case "company":
              notification.content = `${randomCompany.name} has posted a new job that matches your profile`
              break
            case "shortlist":
              notification.content = `You've been shortlisted for ${randomJob} position`
              notification.status = "Shortlisted"
              break
          }

          notifications.push(notification)
        }

        // Sort by timestamp
        notifications.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
        resolve(notifications)
      }, 1000)
    })
  }

  useEffect(() => {
    loadMoreNotifications()
  }, [])

  const loadMoreNotifications = async () => {
    if (loading) return

    setLoading(true)
    try {
      const newNotifications = await fetchNotifications(page)
      if (newNotifications.length > 0) {
        setVisibleNotifications((prev) => [...prev, ...newNotifications])
        setPage((prev) => prev + 1)
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error("Error loading notifications:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    if (scrollHeight - scrollTop <= clientHeight * 1.5 && hasMore && !loading) {
      loadMoreNotifications()
    }
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case "application":
        return <BriefcaseIcon className="w-6 h-6 text-blue-400" />
      case "interview":
        return <CheckCircle2 className="w-6 h-6 text-green-400" />
      case "recommendation":
        return <AlertCircle className="w-6 h-6 text-purple-400" />
      case "profile":
        return <UserCheck className="w-6 h-6 text-indigo-400" />
      case "message":
        return <MessageSquare className="w-6 h-6 text-orange-400" />
      case "company":
        return <Building2 className="w-6 h-6 text-gray-400" />
      case "shortlist":
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-900/60 text-yellow-300 border border-yellow-500"
      case "Scheduled":
        return "bg-green-900/60 text-green-300 border border-green-500"
      case "Shortlisted":
        return "bg-blue-900/60 text-blue-300 border border-blue-500"
      default:
        return "bg-gray-900/60 text-gray-300 border border-gray-500"
    }
  }

  const groupNotificationsByDate = (notifications) => {
    const groups = {}

    notifications.forEach((notification) => {
      const date = notification.timestamp.toDateString()
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(notification)
    })

    return groups
  }

  const getDateHeader = (dateStr) => {
    const date = new Date(dateStr)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    if (date.toDateString() === today.toDateString()) {
      return "Today"
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday"
    } else {
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    }
  }

  // Filter notifications based on the selected filter
  const filteredNotifications = visibleNotifications.filter((notification) => {
    if (filter === "unread") return !notification.isRead
    return true
  })

  const groupedNotifications = groupNotificationsByDate(filteredNotifications)

  // Handle "Mark as Read"
  const markAsRead = (id) => {
    setVisibleNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification,
      ),
    )
  }

  // Handle "Mark All as Read"
  const markAllAsRead = () => {
    setVisibleNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, isRead: true })),
    )
  }

  // Handle "View Details"
  const handleViewDetails = (notification) => {
    setSelectedNotification(notification)
    markAsRead(notification.id)
  }

  return (
    <div className="flex-1 overflow-auto relative bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen text-white">
      <Header title="Notifications" />

      {/* Filter and Mark All as Read */}
      <div className="flex justify-between items-center p-4 md:p-6 flex-wrap gap-3">
        <div className="flex gap-2 md:gap-4">
          <button
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base ${
              filter === "all" ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base ${
              filter === "unread" ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setFilter("unread")}
          >
            Unread
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-500 rounded-md hover:bg-blue-600 text-sm md:text-base"
            onClick={markAllAsRead}
          >
            Mark All as Read
          </button>
          <div className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded-full">
            <Bell className="text-blue-400 w-4 h-4" />
            <span className="text-xs font-semibold">{visibleNotifications.filter((n) => !n.isRead).length}</span>
          </div>
        </div>
      </div>

      {/* Notification List */}
      <div className="h-[calc(100vh-10rem)] overflow-y-auto px-4 md:px-6" onScroll={handleScroll}>
        {Object.entries(groupedNotifications).length > 0 ? (
          Object.entries(groupedNotifications).map(([date, notifications]) => (
            <div key={date} className="mb-6">
              <h3 className="text-lg font-bold mb-4 sticky top-0 bg-gradient-to-r from-gray-800 to-gray-900 py-2 z-10">
                {getDateHeader(date)}
              </h3>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-4 rounded-xl shadow-lg cursor-pointer ${
                      notification.isRead
                        ? "bg-gray-700 hover:bg-gray-650"
                        : "bg-blue-700/30 border border-blue-500/50 hover:bg-blue-700/40"
                    }`}
                    onClick={() => handleViewDetails(notification)}
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={notification.companyLogo || "/placeholder.svg"}
                        alt={notification.user.name}
                        className="w-10 h-10 rounded-lg object-cover bg-gray-600 flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-white">{notification.user.name}</span>
                          {!notification.isRead && (
                            <span className="text-xs bg-red-500 px-2 py-0.5 rounded-full text-white">New</span>
                          )}
                          {notification.status && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(notification.status)}`}>
                              {notification.status}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mt-1 break-words">{notification.content}</p>
                        {notification.jobTitle && (
                          <p className="text-sm text-blue-300 mt-1 font-medium">{notification.jobTitle}</p>
                        )}
                        <p className="text-sm text-gray-400 mt-2">
                          {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                        </p>
                      </div>

                      <div className="flex-shrink-0">{getNotificationIcon(notification.type)}</div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <button
                        className="bg-blue-500 px-3 py-1.5 text-sm rounded-md hover:bg-blue-600"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleViewDetails(notification)
                        }}
                      >
                        View Details
                      </button>
                      {!notification.isRead && (
                        <button
                          className="bg-gray-600 px-3 py-1.5 text-sm rounded-md hover:bg-gray-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            markAsRead(notification.id)
                          }}
                        >
                          Mark as Read
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full py-10">
            <Bell className="w-16 h-16 text-gray-500 mb-4" />
            <p className="text-gray-400 text-lg">No notifications to display</p>
            {filter === "unread" && <p className="text-gray-500 mt-2">Try switching to "All" notifications</p>}
          </div>
        )}

        {loading && (
          <div className="flex justify-center py-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        )}

        {!hasMore && visibleNotifications.length > 0 && (
          <div className="text-center py-6 text-gray-400">You're all caught up with notifications!</div>
        )}
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedNotification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedNotification(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {getNotificationIcon(selectedNotification.type)}
                  <h2 className="text-xl font-bold">{selectedNotification.user.name}</h2>
                </div>
                <button onClick={() => setSelectedNotification(null)} className="text-gray-400 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={selectedNotification.companyLogo || "/placeholder.svg"}
                  alt={selectedNotification.user.name}
                  className="w-12 h-12 rounded-lg object-cover bg-gray-700"
                />
                <div>
                  {selectedNotification.jobTitle && (
                    <p className="text-blue-300 font-medium">{selectedNotification.jobTitle}</p>
                  )}
                  <p className="text-sm text-gray-400">
                    {formatDistanceToNow(selectedNotification.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>

              {selectedNotification.status && (
                <div className="mb-4">
                  <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(selectedNotification.status)}`}>
                    {selectedNotification.status}
                  </span>
                </div>
              )}

              <p className="text-gray-200 mb-6 text-lg">{selectedNotification.content}</p>

              <div className="bg-gray-700/50 p-4 rounded-lg mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">What to do next:</h3>
                {selectedNotification.type === "application" && (
                  <p className="text-gray-300">Check your application status regularly for updates.</p>
                )}
                {selectedNotification.type === "interview" && (
                  <p className="text-gray-300">Prepare for your interview and be ready 10 minutes early.</p>
                )}
                {selectedNotification.type === "recommendation" && (
                  <p className="text-gray-300">Review this job recommendation and apply if interested.</p>
                )}
                {selectedNotification.type === "profile" && (
                  <p className="text-gray-300">Update your profile to increase visibility to recruiters.</p>
                )}
                {selectedNotification.type === "message" && (
                  <p className="text-gray-300">Respond to the message promptly to show your interest.</p>
                )}
                {selectedNotification.type === "company" && (
                  <p className="text-gray-300">Check out the new job posting and apply if it matches your skills.</p>
                )}
                {selectedNotification.type === "shortlist" && (
                  <p className="text-gray-300">Prepare for the next steps in the hiring process.</p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={() => setSelectedNotification(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Notification

