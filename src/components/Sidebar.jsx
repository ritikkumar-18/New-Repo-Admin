import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiBarChart2, FiLogOut } from 'react-icons/fi';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {  MessageSquare } from 'lucide-react';
import {  FaRupeeSign, FaTeamspeak, FaUser } from 'react-icons/fa';

const SIDEBAR = [
  { name: "Overview", icon: FiBarChart2, color: "#8B5CF6", href: "/" },
  { name: "Recruiters", icon: FaUser, color: "#8B5CF6", href: "/users" },
  { name: "Team Management", icon: FaTeamspeak, color: "#8B5CF6", href: '/team' },
  { name: "Subscription Plan", icon: FaRupeeSign, color: "#8B5CF6", href: '/payment' },
  { name: "Queries", icon: MessageSquare, color: "#8B5CF6", href: '/help' },
  { name: "Logout", icon: FiLogOut, color: "#8B5CF6", href: "/logout" },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [activeTab, setActiveTab] = useState("/"); // Default active tab

  // Handle window resize
  const handleResize = () => {
    setIsSidebarOpen(window.innerWidth > 768);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
    >
      <div className="h-full bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(prevState => !prevState)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <BiMenu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow overflow-y-auto max-h-[calc(100vh-100px)] custom-scrollbar">
          {SIDEBAR.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div
                className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all mb-2 relative cursor-pointer`}
                initial={{ opacity: 0, x: isSidebarOpen ? -10 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isSidebarOpen ? 10 : 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveTab(item.href)} // Update active tab on click
              >
                {/* Remove the rotation and special effects */}
                <motion.div
                  className={`relative transition-all duration-300 ${activeTab === item.href ? 'text-teal-500' : 'text-gray-400'}`}
                >
                  <item.icon size={20} style={{ minWidth: "20px" }} />
                </motion.div>

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Special Mark or Indicator with Smooth Animation */}
                {activeTab === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
