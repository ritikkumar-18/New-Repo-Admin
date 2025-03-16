import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiBarChart2, FiLogOut, FiSettings } from 'react-icons/fi';
import { BiMenu } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom'; 
import { BookOpen, BookTemplate, Briefcase, CalendarHeart, Download, Mail,  MessagesSquareIcon, UserSearch } from 'lucide-react';

const SIDEBAR = [
  { name: 'Overview', icon: FiBarChart2, color: '#8B5CF6', href: '/' },
  { name: 'Recruit', icon: Briefcase, color: '#8B5CF6', href: '/recruit' },
  { name: 'Shortlisted', icon: UserSearch, color: '#8B5CF6', href: '/candidate' },
  { name: 'Job Opening', icon: BookOpen, color: '#8B5CF6', href: '/jobopening' },
  { name: 'Calendar', icon: CalendarHeart, color: '#8B5CF6', href: '/calender' },
  { name: 'Resume', icon: Download, color: '#8B5CF6', href: '/resume' },
  {name:'Template',icon:BookTemplate,color:'#8B5CF6',href:'/template'},
  { name: 'Email', icon: Mail, color: '#8B5CF6', href: '/email' },
  { name: 'Feedback & Review', icon: MessagesSquareIcon, color: '#8B5CF6', href: '/feedback' },
  { name: 'Settings', icon: FiSettings, color: '#8B5CF6', href: '/settings' },
  { name: 'Logout', icon: FiLogOut, color: '#8B5CF6', href: '/logout' },
];

const RecruiterSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);  // Open if screen width is larger than 768px
  const location = useLocation();  // Get the current location (pathname)

  // Handle window resize
  const handleResize = () => {
    setIsSidebarOpen(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
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
                className={`flex items-center p-4 text-sm font-medium rounded-lg transition-all mb-2 relative cursor-pointer ${
                  location.pathname === item.href ? 'bg-gray-700' : ''
                }`}
                initial={{ opacity: 0, x: isSidebarOpen ? -10 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isSidebarOpen ? 10 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`relative transition-all duration-300 ${
                    location.pathname === item.href ? 'text-teal-500' : 'text-gray-400'
                  }`}
                >
                  <item.icon size={20} style={{ minWidth: '20px' }} />
                </motion.div>

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Underline for the active item */}
                {location.pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
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

export default RecruiterSidebar;
