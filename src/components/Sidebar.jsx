// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiBarChart2, FiLogOut } from "react-icons/fi";
// import { BiMenu } from "react-icons/bi";
// import { Link, useLocation } from "react-router-dom";
// import { ArrowLeftRight, Axis3D, CopyMinus, MessageSquare } from "lucide-react";
// import { FaRupeeSign, FaTeamspeak, FaUser } from "react-icons/fa";

// const SIDEBAR = [
//   { name: "Overview", icon: FiBarChart2, href: "/"  },
//   { name: "Recruiters", icon: FaUser, href: "/users"  },
//   { name: "Team Management", icon: FaTeamspeak, href: "/team"  },
//   { name: "SubAdmin", icon: Axis3D, href: "/sub"  },
//   { name: "Subscription Plan", icon: FaRupeeSign, href: "/payment" },
//   { name: "Transaction", icon: ArrowLeftRight, href: "/transaction" },
//   { name: "Queries", icon: MessageSquare, href: "/help" },
//   { name: "CMS", icon: CopyMinus, href: "/cms" },
//   { name: "Logout", icon: FiLogOut, href: "/logout"  },
// ];

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
//   const location = useLocation();

//   useEffect(() => {
//     const handleResize = () => setIsSidebarOpen(window.innerWidth > 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <motion.div
//       className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
//         isSidebarOpen ? "w-64" : "w-20"
//       }`}
//     >
//       <div className="h-full bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 flex-col border-r border-gray-700">
//         {/* Toggle Button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsSidebarOpen((prev) => !prev)}
//           className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
//         >
//           <BiMenu size={24} />
//         </motion.button>

//         {/* Sidebar Navigation */}
//         <nav className="mt-4 flex-grow overflow-y-auto max-h-[calc(100vh-100px)] custom-scrollbar">
//           {SIDEBAR.map((item) => (
//             <Link key={item.href} to={item.href}>
//               <motion.div
//                 className={`flex items-center p-4 text-sm font-medium rounded-lg transition-all mb-2 relative cursor-pointer ${
//                   location.pathname === item.href ? "bg-gray-700" : ""
//                 }`}
//                 initial={{ opacity: 0, x: isSidebarOpen ? -10 : 0 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: isSidebarOpen ? 10 : 0 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {/* Icon (Always Visible) */}
//                 <motion.div
//                   className={`relative transition-all duration-300 ${
//                     location.pathname === item.href ? "text-teal-500" : "text-gray-400"
//                   }`}
//                 >
//                   <item.icon size={20} style={{ minWidth: "20px" }} />
//                 </motion.div>

//                 {/* Text (Only visible when expanded) */}
//                 <AnimatePresence>
//                   {isSidebarOpen && (
//                     <motion.span
//                       className="ml-4 whitespace-nowrap"
//                       initial={{ opacity: 0, width: 0 }}
//                       animate={{ opacity: 1, width: "auto" }}
//                       exit={{ opacity: 0, width: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {item.name}
//                     </motion.span>
//                   )}
//                 </AnimatePresence>

//                 {/*  Tab Indicator */}
//                 {location.pathname === item.href && (
//                   <motion.div
//                     className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 rounded-full"
//                     initial={{ width: 0 }}
//                     animate={{ width: "100%" }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 )}
//               </motion.div>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </motion.div>
//   );
// };

// export default Sidebar;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBarChart2, FiLogOut } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeftRight, Axis3D, CopyMinus, FileText, Info, LockKeyhole, MessageSquare, ShieldCheck } from "lucide-react";
import { FaRupeeSign, FaTeamspeak, FaUser } from "react-icons/fa";

const SIDEBAR = [
  { name: "Overview", icon: FiBarChart2, href: "/" },
  { name: "Recruiters", icon: FaUser, href: "/users" },
  { name: "Staff Management", icon: FaTeamspeak, href: "/team" },
  // { name: "SubAdmin", icon: Axis3D, href: "/sub" },
  { name: "Subscription Plan", icon: FaRupeeSign, href: "/payment" },
  { name: "Transaction", icon: ArrowLeftRight, href: "/transaction" },
  { name: "Queries", icon: MessageSquare, href: "/help" },
  {
    name: "CMS",
    icon: CopyMinus,
    href: "#",
    subMenu: [
      { name: "Privacy Policy",icon: LockKeyhole, href: "/cms/privacy-policy" },
      {name: "Payment Policy", icon: ArrowLeftRight, href:"/cms/payment-policy"},
      { name: "Terms & Conditions", icon :ShieldCheck, href: "/cms/terms-and-conditions" },
      { name: "About Us", icon: Info, href: "/cms/about-us" }
    ]
  },
  { name: "Logout", icon: FiLogOut, href: "/logout" }
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsSidebarOpen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}>
      <div className="h-full bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <BiMenu size={24} />
        </motion.button>

        <nav className="mt-4 flex-grow overflow-y-auto max-h-[calc(100vh-100px)] custom-scrollbar">
          {SIDEBAR.map((item, index) => (
            <div key={index}>
              <Link to={item.href} onClick={() => setOpenDropdown(item.subMenu ? (openDropdown === index ? null : index) : null)}>
                <motion.div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg transition-all mb-2 relative cursor-pointer ${location.pathname === item.href ? "bg-gray-700" : ""}`}
                  initial={{ opacity: 0, x: isSidebarOpen ? -10 : 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isSidebarOpen ? 10 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div className={`relative transition-all duration-300 ${location.pathname === item.href ? "text-teal-500" : "text-gray-400"}`}>
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
              {item.subMenu && openDropdown === index && (
                <motion.div
                  className="ml-6 mt-2 space-y-2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}>
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                    key={subIndex}
                    to={subItem.href}
                    className="flex items-center gap-2 p-2 text-gray-400 hover:text-white transition-all">
                    {React.createElement(subItem.icon, { size: 18, className: "text-gray-500" })}
                   <span>{subItem.name}</span>
                   </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
