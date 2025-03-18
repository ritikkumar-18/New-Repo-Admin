// import React from 'react'
// import Header from '../components/Common/Header'
// import { motion } from 'framer-motion'
// import StatCards from '../components/Common/StatCards'
// import { Briefcase, BriefcaseIcon, Calendar, User2Icon } from 'lucide-react'



// const Overviewrecruit = () => {
//   return (
//     <div className='flex-1 overflow-auto z-10 relative'>
//         <Header title="Overview"/>
//         <main className='w-full py-6 px-4 mx-auto lg:px-8'>
//             <motion.div className="w-full grid grid-cols-1 gap-5 sm-grid-cols-2 lg:grid-cols-3 mb-8"
//             initial={{opacity:0,y:20}}
//             animate={{opacity:1,y:0}}
//             transition={{duration:0.5}}>
//                 <StatCards
//                 name="Active Jobs" icon={BriefcaseIcon} value="12,354" color="#6366F1"/>
//                 <StatCards
//                 name="Inactive jobs" icon={Briefcase} value="34,567" color="#10B981"/>
//                 <StatCards
//                 name="Closed Jobs"  value="23,123" icon={Briefcase} color="#EC4899"/>
                


//             </motion.div>
//             <div className='grid grid-cols-1  gap-8 lg:grid-cols-2'>
                
//             </div>
//         </main>
//     </div>
//   )
// }

// export default Overviewrecruit
import React, { useState } from 'react';
import Header from '../components/Common/Header';
import { motion, AnimatePresence } from 'framer-motion';
import StatCards from '../components/Common/StatCards';
import { 
  BriefcaseIcon, Calendar, User2Icon, Bell, Sliders, ChevronRight, 
  CheckCircle, XCircle, Clock, CreditCard, Search, Filter, 
  ArrowUpRight, ArrowDownRight, Settings, PieChart, BarChart, Activity
} from 'lucide-react';

// Enhanced mock data
const applications = [
  { id: 1, name: "John Doe", position: "Frontend Developer", status: "pending", date: "2024-03-15", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face", details: "John has 5 years of experience in frontend development and specializes in React and TypeScript." },
  { id: 2, name: "Jane Smith", position: "UX Designer", status: "shortlisted", date: "2024-03-14", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face", details: "Jane is a creative UX designer with a strong portfolio in user-centered design." },
  { id: 3, name: "Mike Wilson", position: "Backend Developer", status: "rejected", date: "2024-03-13", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face", details: "Mike has expertise in Node.js and MongoDB, with a focus on scalable backend systems." },
];

const interviews = [
  { 
    id: 1, 
    name: "Alice Johnson", 
    position: "React Developer", 
    time: "10:00 AM", 
    status: "upcoming",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    duration: "45 min",
    details: "Alice has a strong background in React and Redux, with experience in building large-scale applications."
  },
  { 
    id: 2, 
    name: "Bob Wilson", 
    position: "UI Designer", 
    time: "2:30 PM", 
    status: "completed",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    duration: "60 min",
    details: "Bob specializes in creating intuitive and visually appealing user interfaces."
  },
];

const messages = [
  { 
    id: 1, 
    title: "System Update", 
    content: "New features available in the recruitment dashboard", 
    priority: "high",
    timestamp: "2 hours ago",
    unread: true,
    details: "The new features include advanced analytics, candidate tracking, and improved reporting."
  },
  { 
    id: 2, 
    title: "Maintenance Notice", 
    content: "Scheduled maintenance on March 20th, 2024", 
    priority: "normal",
    timestamp: "5 hours ago",
    unread: false,
    details: "The maintenance window is from 12:00 AM to 4:00 AM. During this time, the system will be unavailable."
  },
];

const subscriptionData = {
  plan: "Premium",
  status: "active",
  expiryDate: "March 25, 2024",
  jobsPosted: 15,
  totalJobs: 20,
  features: ["Unlimited applications", "Advanced analytics", "Priority support"],
  usage: {
    interviews: { used: 25, total: 50 },
    storage: { used: 75, total: 100 }
  }
};

const Overviewrecruit = () => {
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [expandedApplicationId, setExpandedApplicationId] = useState(null);
  const [expandedInterviewId, setExpandedInterviewId] = useState(null);
  const [expandedMessageId, setExpandedMessageId] = useState(null);

  const toggleApplicationDetails = (id) => {
    setExpandedApplicationId(expandedApplicationId === id ? null : id);
  };

  const toggleInterviewDetails = (id) => {
    setExpandedInterviewId(expandedInterviewId === id ? null : id);
  };

  const toggleMessageDetails = (id) => {
    setExpandedMessageId(expandedMessageId === id ? null : id);
  };

  return (
    <div className='flex-1 overflow-auto z-10 relative bg-gray-900 text-gray-100'>
      <Header title="Overview" />
      <main className='w-full py-6 px-4 mx-auto lg:px-8 max-w-7xl'>
        {/* Stats Cards */}
        <motion.div 
          className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5}}
        >
          <StatCards
            name="Active Jobs" 
            icon={BriefcaseIcon} 
            value="12,354"
            color="#6366F1"
          />
          <StatCards
            name="Total Applications" 
            icon={User2Icon} 
            value="34,567"
            color="#10B981"
          />
          <StatCards
            name="Interviews Today"  
            value="23"
            icon={Calendar}
            color="#EC4899"
          />
          <StatCards
            name="Unread Messages"  
            value="8"
            icon={Bell}
            color="#F59E0B"
          />
        </motion.div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {/* Applications Section */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700"
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.2}}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Recent Applications</h2>
                <p className="text-sm text-gray-400 mt-1">Last 7 days activity</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  className="p-2 hover:bg-gray-700 rounded-lg"
                  onClick={() => setFilter("all")}
                >
                  <Sliders className="w-5 h-5 text-gray-400" />
                </button>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1">
                  View all <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {applications.map(app => (
                <div key={app.id}>
                  <div 
                    className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                    onClick={() => toggleApplicationDetails(app.id)}
                  >
                    <div className="flex items-center gap-3">
                      <img src={app.avatar} alt={app.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <h3 className="font-medium">{app.name}</h3>
                        <p className="text-sm text-gray-400">{app.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        app.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                        app.status === 'shortlisted' ? 'bg-green-500/10 text-green-500' :
                        'bg-red-500/10 text-red-500'
                      }`}>
                        {app.status}
                      </span>
                      <motion.button 
                        className="text-gray-400 hover:text-gray-200"
                        animate={{ rotate: expandedApplicationId === app.id ? 90 : 0 }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedApplicationId === app.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pl-12 bg-gray-700/50 rounded-b-lg">
                          <p className="text-sm text-gray-300">{app.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interviews Section */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700"
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.4}}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Upcoming Interviews</h2>
                <p className="text-sm text-gray-400 mt-1">Today's schedule</p>
              </div>
              <button className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {interviews.map(interview => (
                <div key={interview.id}>
                  <div 
                    className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                    onClick={() => toggleInterviewDetails(interview.id)}
                  >
                    <div className="flex items-center gap-3">
                      <img src={interview.avatar} alt={interview.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <h3 className="font-medium">{interview.name}</h3>
                        <p className="text-sm text-gray-400">{interview.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        interview.status === 'upcoming' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-green-500/10 text-green-500'
                      }`}>
                        {interview.status}
                      </span>
                      <motion.button 
                        className="text-gray-400 hover:text-gray-200"
                        animate={{ rotate: expandedInterviewId === interview.id ? 90 : 0 }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedInterviewId === interview.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pl-12 bg-gray-700/50 rounded-b-lg">
                          <p className="text-sm text-gray-300">{interview.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Messages Section */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700"
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.6}}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Messages</h2>
                <p className="text-sm text-gray-400 mt-1">Unread messages</p>
              </div>
              <button 
                className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1"
                onClick={() => setShowAllMessages(!showAllMessages)}
              >
                {showAllMessages ? "Show less" : "View all"} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {(showAllMessages ? messages : messages.slice(0, 2)).map(message => (
                <div key={message.id}>
                  <div 
                    className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                    onClick={() => toggleMessageDetails(message.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        message.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'
                      }`} />
                      <div>
                        <h3 className="font-medium">{message.title}</h3>
                        <p className="text-sm text-gray-400">{message.content}</p>
                      </div>
                    </div>
                    <motion.button 
                      className="text-gray-400 hover:text-gray-200"
                      animate={{ rotate: expandedMessageId === message.id ? 90 : 0 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <AnimatePresence>
                    {expandedMessageId === message.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pl-12 bg-gray-700/50 rounded-b-lg">
                          <p className="text-sm text-gray-300">{message.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Overviewrecruit;