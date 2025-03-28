// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { CheckCircle, Clock, Search, ToggleLeft, ToggleRight, X, XCircle } from "lucide-react"
// import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai"
// import toast from "react-hot-toast"

// const userData = [
//   {
//     id: 1,
//     name: "Will Smith",
//     email: "will@example.com",
//     status: "Active",
//     joined: "2022-01-15",
//     contact: "123-456-7890",
//     address: "123 Main St, Springfield",
//     verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Tech Solutions", type: "Software Development" },
//     profileHandledBy: "Alice",
//     subscriptionDetails: { plan: "Standard", validUntil: "15th August 2025" },
//     additionalDetails: { pendingDays: 5, lastLoggedIn: "1 day ago", lastActivity: "Conducted Interviews" },
//   },
//   {
//     id: 2,
//     name: "Lune Paul",
//     email: "paul@example.com",
//     status: "Active",
//     joined: "2021-12-10",
//     contact: "987-654-3210",
//     address: "456 Elm St, Springfield",
//     verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "OEX PVT. Ltd.", type: "Operations Management" },
//     profileHandledBy: "None",
//     subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 0, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     email: "john@example.com",
//     status: "Inactive",
//     joined: "2022-02-20",
//     contact: "555-123-4567",
//     address: "789 Oak St, Springfield",
//     verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Amazon PVT. Ltd.", type: "Recruit Management" },
//     profileHandledBy: "Charlie",
//     subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 4, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 4,
//     name: "Jane Doe",
//     email: "jane@example.com",
//     status: "Active",
//     joined: "2021-11-30",
//     contact: "444-567-8901",
//     address: "101 Pine St, Springfield",
//     verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Paytm Ops Ltd", type: "Operations Management" },
//     profileHandledBy: "Paytm",
//     subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 0, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 5,
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     status: "Active",
//     joined: "2023-05-01",
//     contact: "111-222-3333",
//     address: "202 Maple St, Springfield",
//     verificationDocuments: { panCard: true, msmeCertificate: false, gstCertificate: false },
//     companyDetails: { name: "ABC Corp", type: "HR Consulting" },
//     profileHandledBy: "Alice",
//     subscriptionDetails: { plan: "Premium", validUntil: "30th June 2025" },
//     additionalDetails: { pendingDays: 10, lastLoggedIn: "2 days ago", lastActivity: "Updated Job Postings" },
//   },
//   {
//     id: 6,
//     name: "Bob Brown",
//     email: "bob@example.com",
//     status: "Inactive",
//     joined: "2022-09-15",
//     contact: "333-444-5555",
//     address: "303 Birch St, Springfield",
//     verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Phonepay  Ltd", type: "Communication Management" },
//     profileHandledBy: "Charlie",
//     subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 0, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 7,
//     name: "Charlie White",
//     email: "charlie@example.com",
//     status: "Active",
//     joined: "2021-08-05",
//     contact: "666-777-8888",
//     address: "404 Cedar St, Springfield",
//     verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Paytm Ops Ltd", type: "Financial Management" },
//     profileHandledBy: "Charlie",
//     subscriptionDetails: { plan: "Medium", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 0, lastLoggedIn: "1 hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 8,
//     name: "Dave Green",
//     email: "dave@example.com",
//     status: "Pending",
//     joined: "2023-01-20",
//     contact: "222-333-4444",
//     address: "505 Chestnut St, Springfield",
//     verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: false },
//     companyDetails: { name: "Google Ops Ltd", type: "Tech Management" },
//     profileHandledBy: "Bob",
//     subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 0, lastLoggedIn: "half hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 9,
//     name: "Eve Black",
//     email: "eve@example.com",
//     status: "Inactive",
//     joined: "2022-03-10",
//     contact: "888-999-0000",
//     address: "606 Elm St, Springfield",
//     verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Paytm Ops Ltd", type: "Transaction Management" },
//     profileHandledBy: "Charlie",
//     subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 8, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 10,
//     name: "Frank White",
//     email: "frank@example.com",
//     status: "Active",
//     joined: "2020-07-25",
//     contact: "123-789-4567",
//     address: "707 Maple St, Springfield",
//     verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Naukri Ops Ltd", type: "Operations Management" },
//     profileHandledBy: "Charlie",
//     subscriptionDetails: { plan: "Premium", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 10, lastLoggedIn: "6 hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 11,
//     name: "Grace Lee",
//     email: "grace@example.com",
//     status: "Active",
//     joined: "2023-02-14",
//     contact: "555-333-6666",
//     address: "808 Oak St, Springfield",
//     verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Paytm Ops Ltd", type: "Transfer Management" },
//     profileHandledBy: "Charlie",
//     subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 0, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
//   },
//   {
//     id: 12,
//     name: "Hannah Adams",
//     email: "hannah@example.com",
//     status: "Inactive",
//     joined: "2021-10-01",
//     contact: "444-888-9999",
//     address: "909 Pine St, Springfield",
//     verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
//     companyDetails: { name: "Techizons PVT. Ltd.", type: "Operations Management" },
//     profileHandledBy: "Charlie",
//     subscriptionDetails: { plan: "Premium", validUntil: "1st January 2026" },
//     additionalDetails: { pendingDays: 0, lastLoggedIn: "35 minutes ago", lastActivity: "Reviewed Team Performance" },
//   },
// ]

// const Usertable = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage] = useState(10)
//   const [filteredUsers, setFilteredUsers] = useState(userData)
//   const [selectedUser, setSelectedUser] = useState(null)
//   const [isSliderOpen, setIsSliderOpen] = useState(false)
//   const [isEditOpen, setIsEditOpen] = useState(false)
//   const [editUser, setEditUser] = useState(null)
//   const [filterStatus, setFilterStatus] = useState("All")

//   const openEditModal = (user) => {
//     setEditUser({ ...user })
//     setIsEditOpen(true)
//   }

//   const handleToggleStatus = () => {
//     const nextStatus =
//       filterStatus === "All"
//         ? "Active"
//         : filterStatus === "Active"
//           ? "Inactive"
//           : filterStatus === "Inactive"
//             ? "Pending"
//             : "All"

//     setFilterStatus(nextStatus)

//     const updatedUsers = nextStatus === "All" ? userData : userData.filter((user) => user.status === nextStatus)

//     setFilteredUsers(updatedUsers)
//     setCurrentPage(1)
//   }

//   const closeEditModal = () => {
//     if (editUser) {
//       setFilteredUsers((prevUsers) => prevUsers.map((user) => (user.id === editUser.id ? editUser : user)))
//     }
//     setIsEditOpen(false)
//     setTimeout(() => setEditUser(null), 500)
//   }

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase()
//     setSearchTerm(term)
//     const filtered = userData.filter(
//       (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term),
//     )
//     setFilteredUsers(filtered)
//     setCurrentPage(1)
//   }

//   const deleteUser = (userId) => {
//     setFilteredUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
//     toast.error("Member Deleted Successfully!")
//   }

//   const openSlider = (user) => {
//     setSelectedUser(user)
//     setIsSliderOpen(true)
//   }

//   const closeSlider = () => {
//     setIsSliderOpen(false)
//     setTimeout(() => setSelectedUser(null), 500)
//   }

//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
//   const displayedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber)
//   }

//   return (
//     <motion.div
//       className="flex-1 bg-gray-900 relative overflow-auto sm:p-2 md:p-1"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
      
//       <div className="mb-6 flex flex-col sm:flex-row items-center  justify-between gap-4">
//         <div className="relative w-full md:w-1/3 sm:w-auto">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search by name or email"
//             className="py-2 px-4 border rounded bg-gray-800 text-white pl-10 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//         </div>
//         <button
//           onClick={handleToggleStatus}
//           className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 w-full sm:w-auto justify-center sm:justify-start"
//         >
//           {filterStatus === "Active" ? (
//             <ToggleLeft size={20} />
//           ) : filterStatus === "Inactive" ? (
//             <ToggleRight size={20} />
//           ) : filterStatus === "Pending" ? (
//             <Clock size={20} />
//           ) : (
//             <ToggleRight size={20} />
//           )}
//           {filterStatus}
//         </button>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto rounded-lg border  border-gray-700 ">
//         <table
//           className="w-full table-auto border-collapse bg-gray-900 text-white rounded-lg shadow-md overflow-hidden">
//           <thead className="text-white ">
//             <tr>
//               <th className="px-4 md:px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-b border-gray-700">
//                 Name
//               </th>
//               <th className="px-4 md:px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-b border-gray-700">
//                 Email
//               </th>
//               <th className="px-4 md:px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-b border-gray-700">
//                 Status
//               </th>
//               <th className="px-4 md:px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-b border-gray-700">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayedUsers.map((user) => (
//               <tr key={user.id} className="border-t border-gray-700 transition duration-300 hover:bg-gray-800 cursor-pointer">
//                 <td className="px-4 md:px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{user.name}</td>
//                 <td className="px-4 md:px-6 py-4 text-gray-200 border-r border-gray-700">{user.email}</td>
//                 <td className="px-4 md:px-6 py-4 border-r border-gray-700">
//                   <span
//                     className={`px-2 py-1 flex items-center space-x-1 rounded text-xs ${
//                       user.status === "Active"
//                         ? "bg-green-500 text-white"
//                         : user.status === "Pending"
//                           ? "bg-yellow-500 text-white"
//                           : "bg-red-500 text-white"
//                     }`}
//                   >
//                     {user.status === "Active" ? (
//                       <>
//                         <CheckCircle size={14} className="text-white" />
//                         <span>Active</span>
//                       </>
//                     ) : user.status === "Pending" ? (
//                       <>
//                         <Clock size={14} className="text-white" />
//                         <span>Pending</span>
//                       </>
//                     ) : (
//                       <>
//                         <XCircle size={14} className="text-white" />
//                         <span>Inactive</span>
//                       </>
//                     )}
//                   </span>
//                 </td>
//                 <td className="px-4 md:px-6 py-4">
//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => openSlider(user)}
//                       className="p-2 text-sm rounded bg-blue-500 hover:bg-blue-600 text-white shadow-md"
//                     >
//                       <AiOutlineEye size={16} />
//                     </button>
//                     <button
//                       onClick={() => openEditModal(user)}
//                       className="p-2 text-sm rounded bg-purple-500 hover:bg-purple-600 text-white shadow-md"
//                     >
//                       <AiOutlineEdit size={16} />
//                     </button>
//                     <button
//                       onClick={() => deleteUser(user.id)}
//                       className="p-2 text-sm rounded bg-red-500 hover:bg-red-600 text-white shadow-md"
//                     >
//                       <AiOutlineDelete size={16} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination - Improved for Mobile */}
//       <div className="mt-6 flex justify-center flex-wrap gap-2">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             className={`px-3 py-2 rounded-lg ${
//               currentPage === index + 1 ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-400"
//             } hover:bg-purple-600 hover:text-white`}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       {/* User Detail Slider */}
//       <AnimatePresence>
//         {isSliderOpen && selectedUser && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
//             onClick={closeSlider}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div
//               className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-full ml-auto relative shadow-2xl overflow-y-auto"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <X
//                 className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
//                 size={24}
//                 onClick={closeSlider}
//               />

//               {/* User Profile Header */}
//               <div className="flex flex-col items-center space-y-4 mb-6">
//                 <div className="h-20 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-2xl">
//                   {selectedUser.name.charAt(0)}
//                 </div>
//                 <h2 className="text-2xl font-semibold text-gray-100">{selectedUser.name}</h2>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     selectedUser.status === "Active"
//                       ? "bg-green-500/20 text-green-400"
//                       : selectedUser.status === "Pending"
//                         ? "bg-yellow-500/20 text-yellow-400"
//                         : "bg-red-500/20 text-red-400"
//                   }`}
//                 >
//                   {selectedUser.status}
//                 </span>
//               </div>

              
//               <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
//                 <h3 className="text-lg font-semibold text-gray-100 mb-3">Basic Information</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <div>
//                     <p className="text-sm text-gray-400">Email</p>
//                     <p className="text-sm text-gray-200">{selectedUser.email}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Joined</p>
//                     <p className="text-sm text-gray-200">{selectedUser.joined}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Contact</p>
//                     <p className="text-sm text-gray-200">{selectedUser.contact}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Address</p>
//                     <p className="text-sm text-gray-200">{selectedUser.address}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Verification Documents */}
//               <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
//                 <h3 className="text-lg font-semibold text-gray-100 mb-3">Verification Documents</h3>
//                 <div className="grid grid-cols-1 gap-2">
//                   <div className="flex items-center">
//                     <div
//                       className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.panCard ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
//                     >
//                       {selectedUser.verificationDocuments?.panCard ? "✓" : "✗"}
//                     </div>
//                     <p className="text-sm text-gray-300">PAN Card</p>
//                   </div>
//                   <div className="flex items-center">
//                     <div
//                       className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.msmeCertificate ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
//                     >
//                       {selectedUser.verificationDocuments?.msmeCertificate ? "✓" : "✗"}
//                     </div>
//                     <p className="text-sm text-gray-300">MSME Certificate</p>
//                   </div>
//                   <div className="flex items-center">
//                     <div
//                       className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.gstCertificate ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
//                     >
//                       {selectedUser.verificationDocuments?.gstCertificate ? "✓" : "✗"}
//                     </div>
//                     <p className="text-sm text-gray-300">GST Certificate</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Company Details */}
//               <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
//                 <h3 className="text-lg font-semibold text-gray-100 mb-3">Company Details</h3>
//                 <div className="grid grid-cols-1 gap-3">
//                   <div>
//                     <p className="text-sm text-gray-400">Company Name</p>
//                     <p className="text-sm text-gray-200">{selectedUser.companyDetails?.name || "N/A"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Company Type</p>
//                     <p className="text-sm text-gray-200">{selectedUser.companyDetails?.type || "N/A"}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Profile & Subscription */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div className="bg-gray-800/50 rounded-lg p-4">
//                   <h3 className="text-lg font-semibold text-gray-100 mb-3">Profile Management</h3>
//                   <p className="text-sm text-gray-400">Managed By</p>
//                   <p className="text-sm text-gray-200">{selectedUser.profileHandledBy || "N/A"}</p>
//                 </div>

//                 <div className="bg-gray-800/50 rounded-lg p-4">
//                   <h3 className="text-lg font-semibold text-gray-100 mb-3">Subscription</h3>
//                   <div className="grid grid-cols-1 gap-3">
//                     <div>
//                       <p className="text-sm text-gray-400">Plan</p>
//                       <p className="text-sm text-gray-200">{selectedUser.subscriptionDetails?.plan || "N/A"}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400">Valid Until</p>
//                       <p className="text-sm text-gray-200">{selectedUser.subscriptionDetails?.validUntil || "N/A"}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Details */}
//               <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
//                 <h3 className="text-lg font-semibold text-gray-100 mb-3">Activity Information</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <div>
//                     <p className="text-sm text-gray-400">Pending Days</p>
//                     <p className="text-sm text-gray-200">{selectedUser.additionalDetails?.pendingDays || "0"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-400">Last Logged In</p>
//                     <p className="text-sm text-gray-200">{selectedUser.additionalDetails?.lastLoggedIn || "N/A"}</p>
//                   </div>
//                   <div className="md:col-span-2">
//                     <p className="text-sm text-gray-400">Last Activity</p>
//                     <p className="text-sm text-gray-200">{selectedUser.additionalDetails?.lastActivity || "N/A"}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Close Button */}
//               <div className="flex justify-between">
//               <button
//                     onClick={() => {
//                       closeSlider()
//                       openEditModal(selectedUser)}}
//                       className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300" >
//                       Edit Details </button>
//                 <button
//                   className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
//                   onClick={closeSlider}
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Edit Modal  */}
//       <AnimatePresence>
//         {isEditOpen && editUser && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//             onClick={closeEditModal}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.div
//               className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
//                 <h2 className="text-xl md:text-2xl font-semibold text-gray-100">Edit User Profile</h2>
//                 <button onClick={closeEditModal} className="text-gray-400 hover:text-white transition-colors">
//                   <X size={24} />
//                 </button>
//               </div>

              
//               <div className="space-y-6">
                
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-200 mb-3">Basic Information</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
//                       <input
//                         type="text"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.name}
//                         onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
//                       <input
//                         type="email"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.email}
//                         onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Contact</label>
//                       <input
//                         type="text"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.contact}
//                         onChange={(e) => setEditUser({ ...editUser, contact: e.target.value })}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
//                       <input
//                         type="text"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.address}
//                         onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Status and Dates */}
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-200 mb-3">Status & Dates</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
//                       <select
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.status}
//                         onChange={(e) => setEditUser({ ...editUser, status: e.target.value })}
//                       >
//                         <option value="Active">Active</option>
//                         <option value="Inactive">Inactive</option>
//                         <option value="Pending">Pending</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Join Date</label>
//                       <input
//                         type="date"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.joined}
//                         onChange={(e) => setEditUser({ ...editUser, joined: e.target.value })}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Pending Days</label>
//                       <input
//                         type="number"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.additionalDetails?.pendingDays || 0}
//                         onChange={(e) =>
//                           setEditUser({
//                             ...editUser,
//                             additionalDetails: {
//                               ...editUser.additionalDetails,
//                               pendingDays: e.target.value,
//                             },
//                           })
//                         }
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Company Details */}
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-200 mb-3">Company Details</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
//                       <input
//                         type="text"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.companyDetails?.name || ""}
//                         onChange={(e) =>
//                           setEditUser({
//                             ...editUser,
//                             companyDetails: {
//                               ...editUser.companyDetails,
//                               name: e.target.value,
//                             },
//                           })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Company Type</label>
//                       <input
//                         type="text"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.companyDetails?.type || ""}
//                         onChange={(e) =>
//                           setEditUser({
//                             ...editUser,
//                             companyDetails: {
//                               ...editUser.companyDetails,
//                               type: e.target.value,
//                             },
//                           })
//                         }
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Subscription Details */}
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-200 mb-3">Subscription Details</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Plan</label>
//                       <select
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.subscriptionDetails?.plan || "Standard"}
//                         onChange={(e) =>
//                           setEditUser({
//                             ...editUser,
//                             subscriptionDetails: {
//                               ...editUser.subscriptionDetails,
//                               plan: e.target.value,
//                             },
//                           })
//                         }
//                       >
//                         <option value="Standard">Standard</option>
//                         <option value="Premium">Premium</option>
//                         <option value="Enterprise">Enterprise</option>
//                         <option value="Medium">Medium</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-400 mb-1">Valid Until</label>
//                       <input
//                         type="text"
//                         className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                         value={editUser.subscriptionDetails?.validUntil || ""}
//                         onChange={(e) =>
//                           setEditUser({
//                             ...editUser,
//                             subscriptionDetails: {
//                               ...editUser.subscriptionDetails,
//                               validUntil: e.target.value,
//                             },
//                           })
//                         }
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Verification Documents */}
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-200 mb-3">Verification Documents</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="panCard"
//                         className="mr-2 h-4 w-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
//                         checked={editUser.verificationDocuments?.panCard || false}
//                         onChange={(e) =>
//                           setEditUser({
//                             ...editUser,
//                             verificationDocuments: {
//                               ...editUser.verificationDocuments,
//                               panCard: e.target.checked,
//                             },
//                           })
//                         }
//                       />
//                       <label htmlFor="panCard" className="text-sm font-medium text-gray-400">
//                         PAN Card
//                       </label>
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="msmeCertificate"
//                         className="mr-2 h-4 w-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
//                         checked={editUser.verificationDocuments?.msmeCertificate || false}
//                         onChange={(e) =>
//                           setEditUser({
//                             ...editUser,
//                             verificationDocuments: {
//                               ...editUser.verificationDocuments,
//                               msmeCertificate: e.target.checked,
//                             },
//                           })
//                         }
//                       />
//                       <label htmlFor="msmeCertificate" className="text-sm font-medium text-gray-400">
//                         MSME Certificate
//                       </label>
//                     </div>
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id="gstCertificate"
//                         className="mr-2 h-4 w-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
//                         checked={editUser.verificationDocuments?.gstCertificate || false}
//                         onChange={(e) =>
//                           setEditUser({
//                             ...editUser,
//                             verificationDocuments: {
//                               ...editUser.verificationDocuments,
//                               gstCertificate: e.target.checked,
//                             },
//                           })
//                         }
//                       />
//                       <label htmlFor="gstCertificate" className="text-sm font-medium text-gray-400">
//                         GST Certificate
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Profile Management */}
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-200 mb-3">Profile Management</h3>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-400 mb-1">Managed By</label>
//                     <input
//                       type="text"
//                       className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                       value={editUser.profileHandledBy || ""}
//                       onChange={(e) => setEditUser({ ...editUser, profileHandledBy: e.target.value })}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-700 pt-4">
//                 <button
//                   onClick={closeEditModal}
//                   className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={closeEditModal}
//                   className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-colors"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// export default Usertable

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Filter, Mail, Phone, Calendar, CheckCircle, XCircle, Clock, Building, User, ChevronLeft, ChevronRight, AlertTriangle, ToggleRight, Shield, Briefcase, MapPin, CreditCard, Clock4, FileText } from 'lucide-react'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai"
import { toast, Toaster } from "react-hot-toast"

const userData = [
  {
    id: 1,
    name: "Will Smith",
    email: "will@example.com",
    status: "Active",
    joined: "2022-01-15",
    contact: "123-456-7890",
    address: "123 Main St, Springfield",
    verificationDocuments: { 
      panCard: true, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Tech Solutions", type: "Software Development" },
    profileHandledBy: "Alice",
    subscriptionDetails: { plan: "Standard", validUntil: "15th August 2025" },
    additionalDetails: { pendingDays: 5, lastLoggedIn: "1 day ago", lastActivity: "Conducted Interviews" },
  },
  {
    id: 2,
    name: "Lune Paul",
    email: "paul@example.com",
    status: "Active",
    joined: "2021-12-10",
    contact: "987-654-3210",
    address: "456 Elm St, Springfield",
    verificationDocuments: { 
      panCard: false, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "OEX PVT. Ltd.", type: "Operations Management" },
    profileHandledBy: "None",
    subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 0, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    status: "Inactive",
    joined: "2022-02-20",
    contact: "555-123-4567",
    address: "789 Oak St, Springfield",
    verificationDocuments: { 
      panCard: false, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Amazon PVT. Ltd.", type: "Recruit Management" },
    profileHandledBy: "Charlie",
    subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 4, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 4,
    name: "Jane Doe",
    email: "jane@example.com",
    status: "Active",
    joined: "2021-11-30",
    contact: "444-567-8901",
    address: "101 Pine St, Springfield",
    verificationDocuments: { 
      panCard: true, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Paytm Ops Ltd", type: "Operations Management" },
    profileHandledBy: "Paytm",
    subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 0, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 5,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
    joined: "2023-05-01",
    contact: "111-222-3333",
    address: "202 Maple St, Springfield",
    verificationDocuments: { 
      panCard: true, 
      msmeCertificate: false, 
      gstCertificate: false,
      panCardUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      msmeCertificateUrl: "",
      gstCertificateUrl: ""
    },
    companyDetails: { name: "ABC Corp", type: "HR Consulting" },
    profileHandledBy: "Alice",
    subscriptionDetails: { plan: "Premium", validUntil: "30th June 2025" },
    additionalDetails: { pendingDays: 10, lastLoggedIn: "2 days ago", lastActivity: "Updated Job Postings" },
  },
  {
    id: 6,
    name: "Bob Brown",
    email: "bob@example.com",
    status: "Inactive",
    joined: "2022-09-15",
    contact: "333-444-5555",
    address: "303 Birch St, Springfield",
    verificationDocuments: { 
      panCard: false, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Phonepay  Ltd", type: "Communication Management" },
    profileHandledBy: "Charlie",
    subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 0, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 7,
    name: "Charlie White",
    email: "charlie@example.com",
    status: "Active",
    joined: "2021-08-05",
    contact: "666-777-8888",
    address: "404 Cedar St, Springfield",
    verificationDocuments: { 
      panCard: true, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Paytm Ops Ltd", type: "Financial Management" },
    profileHandledBy: "Charlie",
    subscriptionDetails: { plan: "Medium", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 0, lastLoggedIn: "1 hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 8,
    name: "Dave Green",
    email: "dave@example.com",
    status: "Pending",
    joined: "2023-01-20",
    contact: "222-333-4444",
    address: "505 Chestnut St, Springfield",
    verificationDocuments: { 
      panCard: false, 
      msmeCertificate: true, 
      gstCertificate: false,
      panCardUrl: "",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: ""
    },
    companyDetails: { name: "Google Ops Ltd", type: "Tech Management" },
    profileHandledBy: "Bob",
    subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 0, lastLoggedIn: "half hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 9,
    name: "Eve Black",
    email: "eve@example.com",
    status: "Inactive",
    joined: "2022-03-10",
    contact: "888-999-0000",
    address: "606 Elm St, Springfield",
    verificationDocuments: { 
      panCard: false, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Paytm Ops Ltd", type: "Transaction Management" },
    profileHandledBy: "Charlie",
    subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 8, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 10,
    name: "Frank White",
    email: "frank@example.com",
    status: "Active",
    joined: "2020-07-25",
    contact: "123-789-4567",
    address: "707 Maple St, Springfield",
    verificationDocuments: { 
      panCard: true, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Naukri Ops Ltd", type: "Operations Management" },
    profileHandledBy: "Charlie",
    subscriptionDetails: { plan: "Premium", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 10, lastLoggedIn: "6 hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 11,
    name: "Grace Lee",
    email: "grace@example.com",
    status: "Active",
    joined: "2023-02-14",
    contact: "555-333-6666",
    address: "808 Oak St, Springfield",
    verificationDocuments: { 
      panCard: true, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Paytm Ops Ltd", type: "Transfer Management" },
    profileHandledBy: "Charlie",
    subscriptionDetails: { plan: "Enterprise", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 0, lastLoggedIn: "3 hours ago", lastActivity: "Reviewed Team Performance" },
  },
  {
    id: 12,
    name: "Hannah Adams",
    email: "hannah@example.com",
    status: "Inactive",
    joined: "2021-10-01",
    contact: "444-888-9999",
    address: "909 Pine St, Springfield",
    verificationDocuments: { 
      panCard: false, 
      msmeCertificate: true, 
      gstCertificate: true,
      panCardUrl: "",
      msmeCertificateUrl: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      gstCertificateUrl: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg"
    },
    companyDetails: { name: "Techizons PVT. Ltd.", type: "Operations Management" },
    profileHandledBy: "Charlie",
    subscriptionDetails: { plan: "Premium", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 0, lastLoggedIn: "35 minutes ago", lastActivity: "Reviewed Team Performance" },
  },
]

const Usertable = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)
  const [filteredUsers, setFilteredUsers] = useState(userData)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isSliderOpen, setIsSliderOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editUser, setEditUser] = useState(null)
  const [filterStatus, setFilterStatus] = useState("All")
  const [filterSidebar, setFilterSidebar] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)
  const [filters, setFilters] = useState({
    company: "",
    subscription: "",
    verification: "",
  })
  const [activeTab, setActiveTab] = useState("All")

  const openEditModal = (user) => {
    setEditUser({ ...user })
    setIsEditOpen(true)
  }

  const handleToggleStatus = () => {
    const nextStatus =
      filterStatus === "All"
        ? "Active"
        : filterStatus === "Active"
          ? "Inactive"
          : filterStatus === "Inactive"
            ? "Pending"
            : "All"

    setFilterStatus(nextStatus)
    setActiveTab(nextStatus)

    const updatedUsers = nextStatus === "All" ? userData : userData.filter((user) => user.status === nextStatus)

    setFilteredUsers(updatedUsers)
    setCurrentPage(1)
  }

  const closeEditModal = () => {
    if (editUser) {
      setFilteredUsers((prevUsers) => prevUsers.map((user) => (user.id === editUser.id ? editUser : user)))
      toast.success("User updated successfully!")
    }
    setIsEditOpen(false)
    setTimeout(() => setEditUser(null), 500)
  }

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    applyFilters(term, filters)
  }

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value }
    setFilters(newFilters)
    applyFilters(searchTerm, newFilters)
  }

  const handleTabChange = (status) => {
    setActiveTab(status)
    setFilterStatus(status)
    
    const updatedUsers = status === "All" ? userData : userData.filter((user) => user.status === status)
    setFilteredUsers(updatedUsers)
    setCurrentPage(1)
  }

  const applyFilters = (query, currentFilters) => {
    const filtered = userData.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.contact.toLowerCase().includes(query) ||
        user.companyDetails.name.toLowerCase().includes(query)

      const matchesCompany =
        !currentFilters.company ||
        user.companyDetails.name.toLowerCase().includes(currentFilters.company.toLowerCase()) ||
        user.companyDetails.type.toLowerCase().includes(currentFilters.company.toLowerCase())

      const matchesSubscription =
        !currentFilters.subscription ||
        user.subscriptionDetails.plan.toLowerCase().includes(currentFilters.subscription.toLowerCase())

      const matchesVerification =
        !currentFilters.verification ||
        (currentFilters.verification.toLowerCase() === "verified" &&
          user.verificationDocuments.panCard &&
          user.verificationDocuments.msmeCertificate &&
          user.verificationDocuments.gstCertificate) ||
        (currentFilters.verification.toLowerCase() === "unverified" &&
          (!user.verificationDocuments.panCard ||
            !user.verificationDocuments.msmeCertificate ||
            !user.verificationDocuments.gstCertificate))

      const matchesStatus = filterStatus === "All" || user.status === filterStatus

      return matchesSearch && matchesCompany && matchesSubscription && matchesVerification && matchesStatus
    })

    setFilteredUsers(filtered)
    setCurrentPage(1)
  }

  const deleteUser = (userId) => {
    setUserToDelete(userData.find((user) => user.id === userId))
    setDeleteModal(true)
  }

  const confirmDelete = () => {
    if (userToDelete) {
      setFilteredUsers((prevUsers) => prevUsers.filter((user) => user.id !== userToDelete.id))
      toast.success(`${userToDelete.name} has been removed successfully!`)
      setDeleteModal(false)
      setUserToDelete(null)
    }
  }

  const openSlider = (user) => {
    setSelectedUser(user)
    setIsSliderOpen(true)
  }

  const closeSlider = () => {
    setIsSliderOpen(false)
    setTimeout(() => setSelectedUser(null), 500)
  }

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const displayedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleAction = (action, user) => {
    switch (action) {
      case "view":
        openSlider(user)
        break
      case "edit":
        openEditModal(user)
        break
      case "delete":
        deleteUser(user.id)
        break
    }
  }

  return (
    <motion.div
      className="flex-1 bg-gray-900 relative overflow-auto p-4 md:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search users by name, email, or company..."
            className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <div className="flex gap-2">  
        <button
            onClick={() => setFilterSidebar(true)}
            className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      
      <div className="flex justify-center mb-6">
        <div className="bg-gray-800 rounded-lg p-1 flex flex-wrap">
          <button
            onClick={() => handleTabChange("All")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "All"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            All Users
          </button>
          <button
            onClick={() => handleTabChange("Active")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "Active"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            Active Users
          </button>
          <button
            onClick={() => handleTabChange("Inactive")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "Inactive"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            Inactive Users
          </button>
          <button
            onClick={() => handleTabChange("Pending")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "Pending"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                : "text-gray-300 hover:text-white hover:bg-gray-700"
            }`}
          >
            Pending Users
          </button>
        </div>
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {filterSidebar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterSidebar(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed right-0 top-0 h-full w-full md:w-96 bg-gray-800 p-6 shadow-xl z-50 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Filters</h2>
                <button
                  onClick={() => setFilterSidebar(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Company</label>
                  <input
                    type="text"
                    value={filters.company}
                    onChange={(e) => handleFilterChange("company", e.target.value)}
                    placeholder="Filter by company name or type..."
                    className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Subscription Plan</label>
                  <input
                    type="text"
                    value={filters.subscription}
                    onChange={(e) => handleFilterChange("subscription", e.target.value)}
                    placeholder="Filter by subscription plan..."
                    className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Verification Status</label>
                  <select
                    value={filters.verification}
                    onChange={(e) => handleFilterChange("verification", e.target.value)}
                    className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">All Verification Statuses</option>
                    <option value="verified">Fully Verified</option>
                    <option value="unverified">Incomplete Verification</option>
                  </select>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => {
                      setFilters({
                        company: "",
                        subscription: "",
                        verification: "",
                      })
                      applyFilters(searchTerm, {
                        company: "",
                        subscription: "",
                        verification: "",
                      })
                    }}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 mr-2"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setFilterSidebar(false)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* User Cards */}
      {displayedUsers.length === 0 ? (
        <div className="bg-gray-800 p-8 text-center rounded-lg">
          <p className="text-gray-400">No users found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedUsers.map((user) => (
            <motion.div
              key={user.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              
            >
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                    <p className="text-purple-400 text-sm">{user.companyDetails.name}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-lg font-bold">
                    {user.name.charAt(0)}
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-300 truncate">{user.email}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-300">{user.contact}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-300">{user.companyDetails.type}</p>
                </div>

                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-300">Plan: {user.subscriptionDetails.plan}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-300">Joined: {user.joined}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Clock4 className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-300">Last active: {user.additionalDetails.lastLoggedIn}</p>
                </div>

                <div className="mt-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : user.status === "Inactive"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.status === "Active" ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : user.status === "Inactive" ? (
                      <XCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {user.status}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-700 p-3 flex justify-between items-center">
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("view", user);
                    }}
                    className="p-1.5 bg-gray-700 rounded-full text-blue-400 hover:text-blue-300 transition-colors"
                    title="View Details"
                  >
                    <AiOutlineEye size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("edit", user);
                    }}
                    className="p-1.5 bg-gray-700 rounded-full text-purple-400 hover:text-purple-300 transition-colors"
                    title="Edit User"
                  >
                    <AiOutlineEdit size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction("delete", user);
                    }}
                    className="p-1.5 bg-gray-700 rounded-full text-red-400 hover:text-red-300 transition-colors"
                    title="Delete User"
                  >
                    <AiOutlineDelete size={16} />
                  </button>
                </div>
                <div className="flex items-center">
                  {Object.values(user.verificationDocuments).slice(0, 3).every(Boolean) ? (
                    <span className="text-xs text-green-400 flex items-center">
                      <Shield size={14} className="mr-1" /> Verified
                    </span>
                  ) : (
                    <span className="text-xs text-yellow-400 flex items-center">
                      <Shield size={14} className="mr-1" /> Incomplete
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {filteredUsers.length > itemsPerPage && (
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPage === 1
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`
                  px-4 py-2 rounded-lg transition-colors
                  ${
                    currentPage === index + 1
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }
                `}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                handlePageChange(Math.min(Math.ceil(filteredUsers.length / itemsPerPage), currentPage + 1))
              }
              disabled={currentPage === Math.ceil(filteredUsers.length / itemsPerPage)}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPage === Math.ceil(filteredUsers.length / itemsPerPage)
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* User Detail Slider */}
      <AnimatePresence>
        {isSliderOpen && selectedUser && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
            onClick={closeSlider}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-900 shadow-xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 z-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-white">User Profile</h2>
                  <button
                    onClick={closeSlider}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                      {selectedUser.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{selectedUser.name}</h3>
                      <p className="text-purple-400">{selectedUser.companyDetails.name}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 rounded-full text-sm bg-purple-900/40 text-purple-400 border border-purple-800/50">
                          {selectedUser.companyDetails.type}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedUser.status === "Active"
                              ? "bg-green-900/40 text-green-400 border border-green-800/50"
                              : selectedUser.status === "Inactive"
                                ? "bg-red-900/40 text-red-400 border border-red-800/50"
                                : "bg-yellow-900/40 text-yellow-400 border border-yellow-800/50"
                          }`}
                        >
                          {selectedUser.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information Card */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <User size={20} className="text-purple-400" /> Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-900/20">
                        <Mail size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a
                          href={`mailto:${selectedUser.email}`}
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          {selectedUser.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-900/20">
                        <Phone size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <a
                          href={`tel:${selectedUser.contact}`}
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          {selectedUser.contact}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-900/20">
                        <MapPin size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Address</p>
                        <p className="text-white">{selectedUser.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-purple-900/20">
                        <Calendar size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Joined Date</p>
                        <p className="text-white">{selectedUser.joined}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <Briefcase size={20} className="text-purple-400" /> Company Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Company Name</p>
                      <p className="text-white">{selectedUser.companyDetails.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Company Type</p>
                      <p className="text-white">{selectedUser.companyDetails.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Profile Handled By</p>
                      <p className="text-white">{selectedUser.profileHandledBy || "N/A"}</p>
                    </div>
                  </div>
                </div>

                {/* Verification Documents */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <Shield size={20} className="text-purple-400" /> Verification Documents
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.panCard ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
                      >
                        {selectedUser.verificationDocuments?.panCard ? "✓" : "✗"}
                      </div>
                      <p className="text-sm text-gray-300">PAN Card</p>
                    </div>
                    {selectedUser.verificationDocuments?.panCard && selectedUser.verificationDocuments?.panCardUrl && (
                      <div className="mb-4">
                        <img
                          src={selectedUser.verificationDocuments.panCardUrl || "/placeholder.svg"}
                          alt="PAN Card"
                          className="w-full h-auto rounded-md object-cover border border-gray-700"
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.msmeCertificate ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
                      >
                        {selectedUser.verificationDocuments?.msmeCertificate ? "✓" : "✗"}
                      </div>
                      <p className="text-sm text-gray-300">MSME Certificate</p>
                    </div>
                    {selectedUser.verificationDocuments?.msmeCertificate && selectedUser.verificationDocuments?.msmeCertificateUrl && (
                      <div className="mb-4">
                        <img
                          src={selectedUser.verificationDocuments.msmeCertificateUrl || "/placeholder.svg"}
                          alt="MSME Certificate"
                          className="w-full h-auto rounded-md object-cover border border-gray-700"
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.gstCertificate ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
                      >
                        {selectedUser.verificationDocuments?.gstCertificate ? "✓" : "✗"}
                      </div>
                      <p className="text-sm text-gray-300">GST Certificate</p>
                    </div>
                    {selectedUser.verificationDocuments?.gstCertificate && selectedUser.verificationDocuments?.gstCertificateUrl && (
                      <div>
                        <img
                          src={selectedUser.verificationDocuments.gstCertificateUrl || "/placeholder.svg"}
                          alt="GST Certificate"
                          className="w-full h-auto rounded-md object-cover border border-gray-700"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Subscription Details */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <CreditCard size={20} className="text-purple-400" /> Subscription Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Plan</p>
                      <p className="text-white">{selectedUser.subscriptionDetails.plan}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Valid Until</p>
                      <p className="text-white">{selectedUser.subscriptionDetails.validUntil}</p>
                    </div>
                  </div>
                </div>

                {/* Activity Information */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <Clock4 size={20} className="text-purple-400" /> Activity Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Pending Days</p>
                      <p className="text-white">{selectedUser.additionalDetails.pendingDays}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Last Logged In</p>
                      <p className="text-white">{selectedUser.additionalDetails.lastLoggedIn}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-400">Last Activity</p>
                      <p className="text-white">{selectedUser.additionalDetails.lastActivity}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={() => {
                      closeSlider()
                      openEditModal(selectedUser)
                    }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    <AiOutlineEdit size={18} />
                    Edit User
                  </button>
                  <button
                    onClick={closeSlider}
                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Modal - Styled like team-management-dashboard.tsx */}
      <AnimatePresence>
        {isEditOpen && editUser && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
            onClick={closeEditModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-900 shadow-xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 z-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-white">Edit User Profile</h2>
                  <button
                    onClick={closeEditModal}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    closeEditModal()
                  }}
                  className="space-y-6"
                >
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-3">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.name}
                          onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                          type="email"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.email}
                          onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Contact</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.contact}
                          onChange={(e) => setEditUser({ ...editUser, contact: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.address}
                          onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Status and Dates */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-3">Status & Dates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                        <select
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.status}
                          onChange={(e) => setEditUser({ ...editUser, status: e.target.value })}
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Join Date</label>
                        <input
                          type="date"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.joined}
                          onChange={(e) => setEditUser({ ...editUser, joined: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Pending Days</label>
                        <input
                          type="number"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.additionalDetails?.pendingDays || 0}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              additionalDetails: {
                                ...editUser.additionalDetails,
                                pendingDays: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Details */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-3">Company Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.companyDetails?.name || ""}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              companyDetails: {
                                ...editUser.companyDetails,
                                name: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Company Type</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.companyDetails?.type || ""}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              companyDetails: {
                                ...editUser.companyDetails,
                                type: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Profile Handled By</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.profileHandledBy || ""}
                          onChange={(e) => setEditUser({ ...editUser, profileHandledBy: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subscription Details */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-3">Subscription Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Plan</label>
                        <select
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.subscriptionDetails?.plan || "Standard"}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              subscriptionDetails: {
                                ...editUser.subscriptionDetails,
                                plan: e.target.value,
                              },
                            })
                          }
                        >
                          <option value="Standard">Standard</option>
                          <option value="Premium">Premium</option>
                          <option value="Enterprise">Enterprise</option>
                          <option value="Medium">Medium</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Valid Until</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editUser.subscriptionDetails?.validUntil || ""}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              subscriptionDetails: {
                                ...editUser.subscriptionDetails,
                                validUntil: e.target.value,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Verification Documents */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-200 mb-3">Verification Documents</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="panCard"
                          className="mr-2 h-4 w-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
                          checked={editUser.verificationDocuments?.panCard || false}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              verificationDocuments: {
                                ...editUser.verificationDocuments,
                                panCard: e.target.checked,
                              },
                            })
                          }
                        />
                        <label htmlFor="panCard" className="text-sm font-medium text-gray-400">
                          PAN Card
                        </label>
                      </div>
                      
                      {editUser.verificationDocuments?.panCard && (
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">PAN Card URL</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editUser.verificationDocuments?.panCardUrl || ""}
                            onChange={(e) =>
                              setEditUser({
                                ...editUser,
                                verificationDocuments: {
                                  ...editUser.verificationDocuments,
                                  panCardUrl: e.target.value,
                                },
                              })
                            }
                          />
                          {editUser.verificationDocuments?.panCardUrl && (
                            <div className="mt-2">
                              <img 
                                src={editUser.verificationDocuments.panCardUrl || "/placeholder.svg"} 
                                alt="PAN Card" 
                                className="w-full h-auto max-h-40 object-contain rounded-md border border-gray-700" 
                              />
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="msmeCertificate"
                          className="mr-2 h-4 w-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
                          checked={editUser.verificationDocuments?.msmeCertificate || false}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              verificationDocuments: {
                                ...editUser.verificationDocuments,
                                msmeCertificate: e.target.checked,
                              },
                            })
                          }
                        />
                        <label htmlFor="msmeCertificate" className="text-sm font-medium text-gray-400">
                          MSME Certificate
                        </label>
                      </div>
                      
                      {editUser.verificationDocuments?.msmeCertificate && (
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">MSME Certificate URL</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editUser.verificationDocuments?.msmeCertificateUrl || ""}
                            onChange={(e) =>
                              setEditUser({
                                ...editUser,
                                verificationDocuments: {
                                  ...editUser.verificationDocuments,
                                  msmeCertificateUrl: e.target.value,
                                },
                              })
                            }
                          />
                          {editUser.verificationDocuments?.msmeCertificateUrl && (
                            <div className="mt-2">
                              <img 
                                src={editUser.verificationDocuments.msmeCertificateUrl || "/placeholder.svg"} 
                                alt="MSME Certificate" 
                                className="w-full h-auto max-h-40 object-contain rounded-md border border-gray-700" 
                              />
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="gstCertificate"
                          className="mr-2 h-4 w-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
                          checked={editUser.verificationDocuments?.gstCertificate || false}
                          onChange={(e) =>
                            setEditUser({
                              ...editUser,
                              verificationDocuments: {
                                ...editUser.verificationDocuments,
                                gstCertificate: e.target.checked,
                              },
                            })
                          }
                        />
                        <label htmlFor="gstCertificate" className="text-sm font-medium text-gray-400">
                          GST Certificate
                        </label>
                      </div>
                      
                      {editUser.verificationDocuments?.gstCertificate && (
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">GST Certificate URL</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editUser.verificationDocuments?.gstCertificateUrl || ""}
                            onChange={(e) =>
                              setEditUser({
                                ...editUser,
                                verificationDocuments: {
                                  ...editUser.verificationDocuments,
                                  gstCertificateUrl: e.target.value,
                                },
                              })
                            }
                          />
                          {editUser.verificationDocuments?.gstCertificateUrl && (
                            <div className="mt-2">
                              <img 
                                src={editUser.verificationDocuments.gstCertificateUrl || "/placeholder.svg"} 
                                alt="GST Certificate" 
                                className="w-full h-auto max-h-40 object-contain rounded-md border border-gray-700" 
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-700 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsEditOpen(false)}
                      className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteModal && userToDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-6 w-full max-w-md"
            >
              <div className="flex items-center gap-3 text-red-400 mb-4">
                <AlertTriangle size={24} />
                <h3 className="text-xl font-semibold">Confirm Deletion</h3>
              </div>

              <p className="text-gray-300 mb-6">
                Are you sure you want to remove <span className="font-semibold">{userToDelete.name}</span> from the
                users list? This action cannot be undone.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteModal(false)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Usertable
