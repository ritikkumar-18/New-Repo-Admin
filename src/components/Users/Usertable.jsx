import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Clock, Filter, Search, ToggleLeft, ToggleRight, X, XCircle } from "lucide-react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

const userData = [
  { id: 1, name: "Will Smith", email: "will@example.com", status: "Active", joined: "2022-01-15", contact: "123-456-7890", address: "123 Main St, Springfield",verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true },companyDetails: { name: 'Tech Solutions', type: 'Software Development' },profileHandledBy: 'Alice',subscriptionDetails: { plan: 'Standard', validUntil: '15th August 2025' },additionalDetails: { pendingDays: 5, lastLoggedIn: '1 day ago', lastActivity: 'Conducted Interviews' } },
  { id: 2, name: "Lune Paul", email: "paul@example.com", status: "Active", joined: "2021-12-10", contact: "987-654-3210", address: "456 Elm St, Springfield",verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'OEX PVT. Ltd.', type: 'Operations Management' },profileHandledBy: 'None',subscriptionDetails: { plan: 'Enterprise', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 0, lastLoggedIn: '3 hours ago', lastActivity: 'Reviewed Team Performance' } },
  { id: 3, name: "John Doe", email: "john@example.com", status: "Inactive", joined: "2022-02-20", contact: "555-123-4567", address: "789 Oak St, Springfield",verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'Amazon PVT. Ltd.', type: 'Recruit Management' },profileHandledBy: 'Charlie',subscriptionDetails: { plan: 'Enterprise', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 4, lastLoggedIn: '3 hours ago', lastActivity: 'Reviewed Team Performance' }  },
  { id: 4, name: "Jane Doe", email: "jane@example.com", status: "Active", joined: "2021-11-30", contact: "444-567-8901", address: "101 Pine St, Springfield",verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'Paytm Ops Ltd', type: 'Operations Management' },profileHandledBy: 'Paytm',subscriptionDetails: { plan: 'Enterprise', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 0, lastLoggedIn: '3 hours ago', lastActivity: 'Reviewed Team Performance' } },
  { id: 5, name: "Alice Johnson", email: "alice@example.com", status: "Active", joined: "2023-05-01", contact: "111-222-3333", address: "202 Maple St, Springfield",verificationDocuments: { panCard: true, msmeCertificate: false, gstCertificate: false }, companyDetails: { name: 'ABC Corp', type: 'HR Consulting' },profileHandledBy: 'Alice',subscriptionDetails: { plan: 'Premium', validUntil: '30th June 2025' },additionalDetails: { pendingDays: 10, lastLoggedIn: '2 days ago', lastActivity: 'Updated Job Postings' } },
  { id: 6, name: "Bob Brown", email: "bob@example.com", status: "Inactive", joined: "2022-09-15", contact: "333-444-5555", address: "303 Birch St, Springfield" ,verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'Phonepay  Ltd', type: 'Communication Management' },profileHandledBy: 'Charlie',subscriptionDetails: { plan: 'Enterprise', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 0, lastLoggedIn: '3 hours ago', lastActivity: 'Reviewed Team Performance' } },
  { id: 7, name: "Charlie White", email: "charlie@example.com", status: "Active", joined: "2021-08-05", contact: "666-777-8888", address: "404 Cedar St, Springfield" ,verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'Paytm Ops Ltd', type: 'Financial Management' },profileHandledBy: 'Charlie',subscriptionDetails: { plan: 'Medium', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 0, lastLoggedIn: '1 hours ago', lastActivity: 'Reviewed Team Performance' } },
  { id: 8, name: "Dave Green", email: "dave@example.com", status: "Pending", joined: "2023-01-20", contact: "222-333-4444", address: "505 Chestnut St, Springfield",verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate:false}, companyDetails: { name: 'Google Ops Ltd', type: 'Tech Management' },profileHandledBy: 'Bob',subscriptionDetails: { plan: 'Enterprise', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 0, lastLoggedIn: 'half hours ago', lastActivity: 'Reviewed Team Performance' } },
  { id: 9, name: "Eve Black", email: "eve@example.com", status: "Inactive", joined: "2022-03-10", contact: "888-999-0000", address: "606 Elm St, Springfield" ,verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'Paytm Ops Ltd', type: 'Transaction Management' },profileHandledBy: 'Charlie',subscriptionDetails: { plan: 'Enterprise', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 8, lastLoggedIn: '3 hours ago', lastActivity: 'Reviewed Team Performance' } },
  { id: 10, name: "Frank White", email: "frank@example.com", status: "Active", joined: "2020-07-25", contact: "123-789-4567", address: "707 Maple St, Springfield" ,verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'Naukri Ops Ltd', type: 'Operations Management' },profileHandledBy: 'Charlie',subscriptionDetails: { plan: 'Premium', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 10, lastLoggedIn: '6 hours ago', lastActivity: 'Reviewed Team Performance' } },
  { id: 11, name: "Grace Lee", email: "grace@example.com", status: "Active", joined: "2023-02-14", contact: "555-333-6666", address: "808 Oak St, Springfield" ,verificationDocuments: { panCard: true, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'Paytm Ops Ltd', type: 'Transfer Management' },profileHandledBy: 'Charlie',subscriptionDetails: { plan: 'Enterprise', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 0, lastLoggedIn: '3 hours ago', lastActivity: 'Reviewed Team Performance' } },
  { id: 12, name: "Hannah Adams", email: "hannah@example.com", status: "Inactive", joined: "2021-10-01", contact: "444-888-9999", address: "909 Pine St, Springfield" ,verificationDocuments: { panCard: false, msmeCertificate: true, gstCertificate: true }, companyDetails: { name: 'Techizons PVT. Ltd.', type: 'Operations Management' },profileHandledBy: 'Charlie',subscriptionDetails: { plan: 'Premium', validUntil: '1st January 2026' },additionalDetails: { pendingDays: 0, lastLoggedIn: '35 minutes ago', lastActivity: 'Reviewed Team Performance' } },
];

const Usertable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

const openEditModal = (user) => {
  setEditUser(user);
  setIsEditOpen(true);
};
const filteredAdmins = userData.filter(
  (member) =>
    
    (filterStatus === "All" || member.status === filterStatus)
);

const closeEditModal = () => {
  if (editUser) {
    setFilteredUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === editUser.id ? editUser : user))
    );
  }
  setIsEditOpen(false);
  setTimeout(() => setEditUser(null), 500);
};
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };
  const deleteUser = (userId) => {
    setFilteredUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  
  };
  

  const openSlider = (user) => {
    setSelectedUser(user);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
    setTimeout(() => setSelectedUser(null), 500);
  };

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const displayedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      className="flex-1 bg-gray-900 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      
    
      <div className="mb-6 flex items-center justify-between">
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            className="py-2 border rounded bg-gray-800 text-white pl-10 w-auto focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          
        </div>
        <button
          onClick={() =>
            setFilterStatus(filterStatus === "All" ? "Active" : filterStatus === "Active" ? "Inactive" : "All")}
          className="flex items-center gap-2  bg-gray-700 px-4 py-2 rounded hover:bg-gray-600" >
          {filterStatus === "Active" ? <ToggleLeft size={20} /> : <ToggleRight size={20} />}
          {filterStatus}
        </button>

      </div>

      
      <div className="overflow-x-auto  rounded-lg border border-gray-700">
        <motion.table
          className="w-full table-auto border-collapse bg-gray-900 text-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <thead className="text-white">
            <tr>
              
              <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-b border-gray-700">Name</th>
              <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-b border-gray-700">Email</th>
              <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-b  border-gray-700">Status</th>
              <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-b  border-gray-700">Details</th>
            </tr>
          </thead>
          <tbody>
          {filteredAdmins.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((user, index) => (
              <tr key={user.id} className="border-t border-gray-700 transition duration-300 hover:cursor-pointer">
                
                <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{user.name}</td>
                <td className="px-6 py-4 text-gray-200 border-r border-gray-700">{user.email}</td>
                <td className="px-6 py-4 border-r border-gray-700">
                  
                  <span className={`px-2 py-1 flex items-center space-x-1 rounded text-xs ${
                    user.status === "Active"
                    ? "bg-green-500 text-white"
                    : user.status === "Pending"
                    ? "bg-yellow-500 text-white"
                    : "bg-red-500 text-white"}`}>
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
                <td className="px-6 py-4 flex items-center space-x-2">
                  <button
                    onClick={() => openSlider(user)}
                    className="px-4 py-2 text-sm rounded bg-blue-500 hover:bg-blue-600 text-white shadow-md">
                    <AiOutlineEye />
                  </button>
                  <button className="px-4 py-2 text-sm rounded bg-purple-500 hover:bg-purple-600 text-white shadow-md">
                    <AiOutlineEdit   onClick={() => openEditModal(user)}
                    />                  
                    </button>
                    <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                      <AiOutlineDelete/>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>

      
      <div className="mt-6 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1 ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-400"
            } hover:bg-purple-600 hover:text-white`}
            onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>  
      <AnimatePresence>
        {isSliderOpen && selectedUser && (
          <motion.div
            className="fixed inset-0 bg-opacity-30 flex mt-14"
            onClick={closeSlider}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}>
            <div className="flex-1"></div>
            <motion.div
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 w-1/2 relative shadow-2xl rounded-lg md:w-1/3 sm:w-auto max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}>
              <X
                className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
                size={24}
                onClick={closeSlider}
              />
              <div className="flex flex-col items-center space-y-4">
                <div className="h-20 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                  {selectedUser.name.charAt(0)}
                </div>
                <h2 className="text-2xl font-semibold text-gray-100">{selectedUser.name}</h2>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Email:</p>
                  <span className="text-sm text-gray-200">{selectedUser.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Status:</p>
                  <span
                    className={`text-sm font-semibold ${
                      selectedUser.status === "Active"
                        ? "text-green-400"
                        : selectedUser.status === "Pending"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}>
                    {selectedUser.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Joined:</p>
                  <span className="text-sm text-gray-200">{selectedUser.joined}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Contact:</p>
                  <span className="text-sm text-gray-200">{selectedUser.contact}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Address:</p>
                  <span className="text-sm text-gray-200">{selectedUser.address}</span>
                </div>
              </div>
               {/* Verification Documents */}
        <div className="border-t border-gray-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-100">Verification Documents</h3>
          <div className="mt-2 space-y-2 text-gray-300">
            <p>PAN Card: {selectedUser.verificationDocuments?.panCard ? "✅ Available" : "❌ Not Available"}</p>
            <p>MSME Certificate: {selectedUser.verificationDocuments?.msmeCertificate ? "✅ Available" : "❌ Not Available"}</p>
            <p>GST Certificate: {selectedUser.verificationDocuments?.gstCertificate ? "✅ Available" : "❌ Not Available"}</p>
          </div>
        </div>

        {/* Company Details */}
        <div className="border-t border-gray-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-100">Company Details</h3>
          <p className="text-gray-300">Company Name: {selectedUser.companyDetails?.name || "Techizons PVT. LTD."}</p>
          <p className="text-gray-300">Company Type: {selectedUser.companyDetails?.type || "IT"}</p>
        </div>

        {/* Profile Managed By */}
        <div className="border-t border-gray-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-100">Profile Managed By</h3>
          <p className="text-gray-300">{selectedUser.profileHandledBy || "N/A"}</p>
        </div>

        {/* Subscription Details */}
        <div className="border-t border-gray-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-100">Subscription Details</h3>
          <p className="text-gray-300">Plan: {selectedUser.subscriptionDetails?.plan || "N/A"}</p>
          <p className="text-gray-300">Valid Until: {selectedUser.subscriptionDetails?.validUntil || "N/A"}</p>
        </div>

        {/* Additional Details */}
        <div className="border-t border-gray-600 pt-4">
          <h3 className="text-lg font-semibold text-gray-100">Additional Details</h3>
          <p className="text-gray-300">Status: {selectedUser.active ? "✅ Active" : "❌ Inactive"}</p>
          <p className="text-gray-300">Pending Days: {selectedUser.additionalDetails?.pendingDays || "N/A"}</p>
          <p className="text-gray-300">Last Logged In: {selectedUser.additionalDetails?.lastLoggedIn || "N/A"}</p>
          <p className="text-gray-300">Last Activity: {selectedUser.additionalDetails?.lastActivity || "N/A"}</p>
        </div>


              <div className="mt-6 flex justify-center">
                <button
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                  onClick={closeSlider}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
  {isEditOpen && editUser && (
    <motion.div
      className="fixed inset-0 bg-opacity-30 flex mt-14"
      onClick={closeEditModal}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.5 }}>
      <div className="flex-1"></div>
      <motion.div
        className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 w-1/2 relative shadow-2xl rounded-lg md:w-1/3 sm:w-auto"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}>
        <X
          className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
          size={24}
          onClick={closeEditModal}
        />
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Edit User</h2>

        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Name"
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
          />
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Email"
            value={editUser.email}
            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
          />
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Contact"
            value={editUser.contact}
            onChange={(e) => setEditUser({ ...editUser, contact: e.target.value })}
          />
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            placeholder="Address"
            value={editUser.address}
            onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
          />
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:opacity-90 transition"
            onClick={closeEditModal}>
            Save
          </button>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:opacity-90 transition"
            onClick={closeEditModal}>
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </motion.div>
  );
};

export default Usertable;
