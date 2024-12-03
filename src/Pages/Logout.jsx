// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Logic to handle logout (e.g., clear tokens)
//     toast.success("Successfully logged out!");
//     navigate("/"); // Redirect to the home page
//   };

//   const handleCancel = () => {
//     setIsOpen(false);
//     toast.info("Logout cancelled!");
//   };

//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//       >
//         Logout
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//           <motion.div
//             className="bg-white rounded-lg shadow-lg p-6 w-96"
//             initial={{ y: "-50%", opacity: 0 }}
//             animate={{ y: "0%", opacity: 1 }}
//             exit={{ y: "-50%", opacity: 0 }}
//           >
//             <h2 className="text-lg font-bold mb-4">Confirm Logout</h2>
//             <p className="text-gray-700 mb-6">Are you sure you want to log out?</p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//               >
//                 Logout
//               </button>
//               <button
//                 onClick={handleCancel}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       <ToastContainer />
//     </>
//   );
// };

// export default Logout;
