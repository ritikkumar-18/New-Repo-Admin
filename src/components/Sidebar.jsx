import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiBarChart2, FiLogOut } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftRight, Axis3D, CopyMinus, MessageSquare } from "lucide-react";
import { FaRupeeSign, FaTeamspeak, FaUser } from "react-icons/fa";

const SIDEBAR = [
  { name: "Overview", icon: FiBarChart2, href: "/", active: true },
  { name: "Recruiters", icon: FaUser, href: "/users", active: true },
  { name: "Team Management", icon: FaTeamspeak, href: "/team", active: false },
  { name: "SubAdmin", icon: Axis3D, href: "/sub", active: true },
  { name: "Subscription Plan", icon: FaRupeeSign, href: "/payment", active: false },
  { name: "Transaction", icon: ArrowLeftRight, href: "/transaction", active: true },
  { name: "Queries", icon: MessageSquare, href: "/help", active: true },
  { name: "CMS", icon: CopyMinus, href: "/cms", active: false },
  { name: "Logout", icon: FiLogOut, href: "/logout", active: true },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); 
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const filteredItems = SIDEBAR.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || (filter === "active" && item.active) || (filter === "inactive" && !item.active))
  );

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="h-full bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 flex-col border-r border-gray-700">
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <BiMenu size={24} />
        </motion.button>

        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`mt-4 ${isSidebarOpen ? "w-full" : "w-14"}`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`px-3 py-2 rounded-md bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-gray-500 transition-all ${
              isSidebarOpen ? "w-full" : "w-14"
            }`}
          />
        </motion.div>

        
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 flex gap-2 text-gray-400 text-sm"
          >
            <button
              className={`px-3 py-1 rounded-md transition ${
                filter === "all" ? "bg-gray-700 text-white" : "hover:bg-gray-700"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-3 py-1 rounded-md transition ${
                filter === "active" ? "bg-green-600 text-white" : "hover:bg-green-600"
              }`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`px-3 py-1 rounded-md transition ${
                filter === "inactive" ? "bg-red-600 text-white" : "hover:bg-red-600"
              }`}
              onClick={() => setFilter("inactive")}
            >
              Inactive
            </button>
          </motion.div>
        )}

        {/* Sidebar Navigation */}
        <nav className="mt-4 flex-grow overflow-y-auto max-h-[calc(100vh-150px)] custom-scrollbar">
          {filteredItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div
                className={`flex items-center p-4 text-sm font-medium rounded-lg transition-all mb-2 relative cursor-pointer ${
                  location.pathname === item.href ? "bg-gray-700" : ""
                }`}
                initial={{ opacity: 0, x: isSidebarOpen ? -10 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isSidebarOpen ? 10 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Icon (Always Visible) */}
                <motion.div
                  className={`relative transition-all duration-300 ${
                    location.pathname === item.href ? "text-teal-500" : "text-gray-400"
                  }`}
                >
                  <item.icon size={20} style={{ minWidth: "20px" }} />
                </motion.div>

                {/* Text (Only visible when expanded) */}
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

                {/* Active Tab Indicator */}
                {location.pathname === item.href && (
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
