import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const userData = [
  { id: 1, name: "Will Smith", email: "will@example.com", status: "Active", joined: "2022-01-15", contact: "123-456-7890", address: "123 Main St, Springfield" },
  { id: 2, name: "Lune Paul", email: "paul@example.com", status: "Active", joined: "2021-12-10", contact: "987-654-3210", address: "456 Elm St, Springfield" },
  { id: 3, name: "John Doe", email: "john@example.com", status: "Inactive", joined: "2022-02-20", contact: "555-123-4567", address: "789 Oak St, Springfield" },
  { id: 4, name: "Jane Doe", email: "jane@example.com", status: "Active", joined: "2021-11-30", contact: "444-567-8901", address: "101 Pine St, Springfield" },
  
    { id: 5, name: "Alice Johnson", email: "alice@example.com", status: "Active", joined: "2023-05-01", contact: "111-222-3333", address: "202 Maple St, Springfield" },
    { id: 6, name: "Bob Brown", email: "bob@example.com", status: "Inactive", joined: "2022-09-15", contact: "333-444-5555", address: "303 Birch St, Springfield" },
    { id: 7, name: "Charlie White", email: "charlie@example.com", status: "Active", joined: "2021-08-05", contact: "666-777-8888", address: "404 Cedar St, Springfield" },
    { id: 8, name: "Dave Green", email: "dave@example.com", status: "Pending", joined: "2023-01-20", contact: "222-333-4444", address: "505 Chestnut St, Springfield" },
    { id: 9, name: "Eve Black", email: "eve@example.com", status: "Inactive", joined: "2022-03-10", contact: "888-999-0000", address: "606 Elm St, Springfield" },
    { id: 10, name: "Frank White", email: "frank@example.com", status: "Active", joined: "2020-07-25", contact: "123-789-4567", address: "707 Maple St, Springfield" },
    { id: 11, name: "Grace Lee", email: "grace@example.com", status: "Active", joined: "2023-02-14", contact: "555-333-6666", address: "808 Oak St, Springfield" },
    { id: 12, name: "Hannah Adams", email: "hannah@example.com", status: "Inactive", joined: "2021-10-01", contact: "444-888-9999", address: "909 Pine St, Springfield" }
  
  
];

const Usertable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); 
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const displayedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      className="flex-1 bg-gray-900 "
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
    >
        
        <div className="mb-6 relative flex-grow">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            className="py-2 border rounded bg-gray-800 text-white pl-10 w-auto focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      

      <div className="w-full p-6 ">
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}} >
          {displayedUsers.map((user) => (
            <motion.div
              key={user.id}
              className="bg-gray-900 rounded-lg p-4 flex flex-col justify-between h-full"
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.5}}
            >
              <div>
                {/* <div className="flex items-center space-x-4">
                  <div className="h-10 w-10  bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{user.name}</h3>
                    <p className="text-sm text-gray-300">{user.email}</p>
                  </div>
                </div> */}
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
               <div className="h-10 w-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xl">
               {user.name.charAt(0)}
              </div>
            <div>
            <h3 className="text-lg font-semibold text-gray-100">{user.name}</h3>
            <p className="text-sm text-gray-300">{user.email}</p>
            </div>
           </div>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-400">
                    Status:{" "}
                    <span className={user.status === "Active" ? "text-green-400" : "text-red-400"}>
                      {user.status}
                    </span>
                  </p>
                  {/* <p className="text-sm text-gray-400">
                    Joined: <span className="text-gray-200">{user.joined}</span>
                  </p> */}
                  {/* <p className="text-sm text-gray-400">
                    Contact: <span className="text-gray-200">{user.contact}</span>
                  </p> */}
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={() => openModal(user)}
                >
                  View More
                </button>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-400'} hover:bg-purple-600 hover:text-white`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {isModalOpen && selectedUser && (
        <motion.div
          className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg sm:w-1/3 text-center xs:w-full">
            <h2 className="text-lg font-semibold mb-4">{selectedUser.name}</h2>
            <p className="text-sm text-gray-400 mb-2">
              Email: <span className="text-gray-200">{selectedUser.email}</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Status:{" "}
              <span className={selectedUser.status === "Active" ? "text-green-400" : "text-red-400"}>
                {selectedUser.status}
              </span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Joined: <span className="text-gray-200">{selectedUser.joined}</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Contact: <span className="text-gray-200">{selectedUser.contact}</span>
            </p>
            <p className="text-sm text-gray-400 mb-2">
              Address: <span className="text-gray-200">{selectedUser.address}</span>
            </p>
            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Usertable;
