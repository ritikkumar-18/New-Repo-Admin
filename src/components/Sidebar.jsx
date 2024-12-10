
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiBarChart2, FiDollarSign, FiLogOut, FiSettings, FiTrendingUp } from 'react-icons/fi'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CalendarHeart, Container, HelpCircle, Mail } from 'lucide-react'
import { FaTeamspeak, FaUser } from 'react-icons/fa'

const SIDEBAR = [
  { name: "Overview", icon: FiBarChart2, color: "#8B5CF6", href: "/" },

  { name: "Users", icon: FaUser, color: "#8B5CF6", href: "/users" },

  { name: "Income", icon: FiDollarSign, color: "#8B5CF6", href: "/income" },

  { name: "Analytics", icon: FiTrendingUp, color: "#8B5CF6", href: "/analytics" },

  { name: "Job Management", icon: Container, color: "#8B5CF6", href: '/job' },

  { name: "Calendar", icon: CalendarHeart, color: "#8B5CF6", href: "/calender" },

  { name: "Email", icon: Mail, color: "#8B5CF6", href: '/email' },

  { name: "Team Management", icon:FaTeamspeak, color:"#8B5CF6",href:'/team'},

  { name: "Settings", icon: FiSettings, color: "#8B5CF6", href: "/settings" },

  { name: "Support and Help", icon: HelpCircle, color: "#8B5CF6", href: '/help' },

  { name: "Logout", icon: FiLogOut, color: "#8B5CF6", href: "/logout" },
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}>
      <div className="h-full bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit">
          <BiMenu size={24} />
        </motion.button>


        <nav className="mt-8 flex-grow overflow-y-auto max-h-[calc(100vh-100px)] custom-scrollbar">
          {SIDEBAR.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }} >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

export default Sidebar;

