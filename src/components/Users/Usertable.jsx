import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Clock, Search, ToggleLeft, ToggleRight, X, XCircle } from "lucide-react"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai"
import toast from "react-hot-toast"

const userData = [
  {
    id: 1,
    name: "Will Smith",
    email: "will@example.com",
    status: "Active",
    joined: "2022-01-15",
    contact: "123-456-7890",
    address: "123 Main St, Springfield",
    verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: true, msmeCertificate: false, gstCertificate: false },
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
    verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: false },
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
    verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },
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
    verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true },
    companyDetails: { name: "Techizons PVT. Ltd.", type: "Operations Management" },
    profileHandledBy: "Charlie",
    subscriptionDetails: { plan: "Premium", validUntil: "1st January 2026" },
    additionalDetails: { pendingDays: 0, lastLoggedIn: "35 minutes ago", lastActivity: "Reviewed Team Performance" },
  },
]

const Usertable = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [filteredUsers, setFilteredUsers] = useState(userData)
  const [selectedUser, setSelectedUser] = useState(null)
  const [isSliderOpen, setIsSliderOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editUser, setEditUser] = useState(null)
  const [filterStatus, setFilterStatus] = useState("All")

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

    const updatedUsers = nextStatus === "All" ? userData : userData.filter((user) => user.status === nextStatus)

    setFilteredUsers(updatedUsers)
    setCurrentPage(1)
  }

  const closeEditModal = () => {
    if (editUser) {
      setFilteredUsers((prevUsers) => prevUsers.map((user) => (user.id === editUser.id ? editUser : user)))
    }
    setIsEditOpen(false)
    setTimeout(() => setEditUser(null), 500)
  }

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = userData.filter(
      (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term),
    )
    setFilteredUsers(filtered)
    setCurrentPage(1)
  }

  const deleteUser = (userId) => {
    setFilteredUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
    toast.error("Member Deleted Successfully!")
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

  return (
    <motion.div
      className="flex-1 bg-gray-900 relative overflow-auto sm:p-2 md:p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      <div className="mb-6 flex flex-col sm:flex-row items-center  justify-between gap-4">
        <div className="relative w-full md:w-1/3 sm:w-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name or email"
            className="py-2 px-4 border rounded bg-gray-800 text-white pl-10 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <button
          onClick={handleToggleStatus}
          className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 w-full sm:w-auto justify-center sm:justify-start"
        >
          {filterStatus === "Active" ? (
            <ToggleLeft size={20} />
          ) : filterStatus === "Inactive" ? (
            <ToggleRight size={20} />
          ) : filterStatus === "Pending" ? (
            <Clock size={20} />
          ) : (
            <ToggleRight size={20} />
          )}
          {filterStatus}
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-lg border  border-gray-700 ">
        <table
          className="w-full table-auto border-collapse bg-gray-900 text-white rounded-lg shadow-md overflow-hidden">
          <thead className="text-white ">
            <tr>
              <th className="px-4 md:px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-b border-gray-700">
                Name
              </th>
              <th className="px-4 md:px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-b border-gray-700">
                Email
              </th>
              <th className="px-4 md:px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-b border-gray-700">
                Status
              </th>
              <th className="px-4 md:px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-b border-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user) => (
              <tr key={user.id} className="border-t border-gray-700 transition duration-300 hover:bg-gray-800 cursor-pointer">
                <td className="px-4 md:px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{user.name}</td>
                <td className="px-4 md:px-6 py-4 text-gray-200 border-r border-gray-700">{user.email}</td>
                <td className="px-4 md:px-6 py-4 border-r border-gray-700">
                  <span
                    className={`px-2 py-1 flex items-center space-x-1 rounded text-xs ${
                      user.status === "Active"
                        ? "bg-green-500 text-white"
                        : user.status === "Pending"
                          ? "bg-yellow-500 text-white"
                          : "bg-red-500 text-white"
                    }`}
                  >
                    {user.status === "Active" ? (
                      <>
                        <CheckCircle size={14} className="text-white" />
                        <span>Active</span>
                      </>
                    ) : user.status === "Pending" ? (
                      <>
                        <Clock size={14} className="text-white" />
                        <span>Pending</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={14} className="text-white" />
                        <span>Inactive</span>
                      </>
                    )}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => openSlider(user)}
                      className="p-2 text-sm rounded bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                    >
                      <AiOutlineEye size={16} />
                    </button>
                    <button
                      onClick={() => openEditModal(user)}
                      className="p-2 text-sm rounded bg-purple-500 hover:bg-purple-600 text-white shadow-md"
                    >
                      <AiOutlineEdit size={16} />
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="p-2 text-sm rounded bg-red-500 hover:bg-red-600 text-white shadow-md"
                    >
                      <AiOutlineDelete size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Improved for Mobile */}
      <div className="mt-6 flex justify-center flex-wrap gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-2 rounded-lg ${
              currentPage === index + 1 ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-400"
            } hover:bg-purple-600 hover:text-white`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

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
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-full ml-auto relative shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <X
                className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
                size={24}
                onClick={closeSlider}
              />

              {/* User Profile Header */}
              <div className="flex flex-col items-center space-y-4 mb-6">
                <div className="h-20 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                  {selectedUser.name.charAt(0)}
                </div>
                <h2 className="text-2xl font-semibold text-gray-100">{selectedUser.name}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedUser.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : selectedUser.status === "Pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {selectedUser.status}
                </span>
              </div>

              
              <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-sm text-gray-200">{selectedUser.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Joined</p>
                    <p className="text-sm text-gray-200">{selectedUser.joined}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Contact</p>
                    <p className="text-sm text-gray-200">{selectedUser.contact}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-sm text-gray-200">{selectedUser.address}</p>
                  </div>
                </div>
              </div>

              {/* Verification Documents */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Verification Documents</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.panCard ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
                    >
                      {selectedUser.verificationDocuments?.panCard ? "✓" : "✗"}
                    </div>
                    <p className="text-sm text-gray-300">PAN Card</p>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.msmeCertificate ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
                    >
                      {selectedUser.verificationDocuments?.msmeCertificate ? "✓" : "✗"}
                    </div>
                    <p className="text-sm text-gray-300">MSME Certificate</p>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full mr-2 ${selectedUser.verificationDocuments?.gstCertificate ? "bg-green-500" : "bg-red-500"} flex items-center justify-center`}
                    >
                      {selectedUser.verificationDocuments?.gstCertificate ? "✓" : "✗"}
                    </div>
                    <p className="text-sm text-gray-300">GST Certificate</p>
                  </div>
                </div>
              </div>

              {/* Company Details */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Company Details</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-sm text-gray-400">Company Name</p>
                    <p className="text-sm text-gray-200">{selectedUser.companyDetails?.name || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Company Type</p>
                    <p className="text-sm text-gray-200">{selectedUser.companyDetails?.type || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Profile & Subscription */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Profile Management</h3>
                  <p className="text-sm text-gray-400">Managed By</p>
                  <p className="text-sm text-gray-200">{selectedUser.profileHandledBy || "N/A"}</p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-100 mb-3">Subscription</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <p className="text-sm text-gray-400">Plan</p>
                      <p className="text-sm text-gray-200">{selectedUser.subscriptionDetails?.plan || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Valid Until</p>
                      <p className="text-sm text-gray-200">{selectedUser.subscriptionDetails?.validUntil || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Activity Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-gray-400">Pending Days</p>
                    <p className="text-sm text-gray-200">{selectedUser.additionalDetails?.pendingDays || "0"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Last Logged In</p>
                    <p className="text-sm text-gray-200">{selectedUser.additionalDetails?.lastLoggedIn || "N/A"}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-400">Last Activity</p>
                    <p className="text-sm text-gray-200">{selectedUser.additionalDetails?.lastActivity || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex justify-between">
              <button
                    onClick={() => {
                      closeSlider()
                      openEditModal(selectedUser)}}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300" >
                      Edit Details </button>
                <button
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                  onClick={closeSlider}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Modal  */}
      <AnimatePresence>
        {isEditOpen && editUser && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeEditModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-100">Edit User Profile</h2>
                <button onClick={closeEditModal} className="text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              
              <div className="space-y-6">
                
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  </div>
                </div>

                {/* Profile Management */}
                <div>
                  <h3 className="text-lg font-medium text-gray-200 mb-3">Profile Management</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Managed By</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                      value={editUser.profileHandledBy || ""}
                      onChange={(e) => setEditUser({ ...editUser, profileHandledBy: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-700 pt-4">
                <button
                  onClick={closeEditModal}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={closeEditModal}
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-colors"
                >
                  Save Changes
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

