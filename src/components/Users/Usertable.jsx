import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const userData = [
  { id: 1, name: "Will Smith", email: "will@example.com", role: "Customer", status: "Active" },
  { id: 2, name: "Lune Paul", email: "paul@example.com", role: "Admin", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
  { id: 4, name: "Alice", email: "alice@example.com", role: "Customer", status: "Active" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Developer", status: "Active" },
  { id: 6, name: "Eve Adams", email: "eve@example.com", role: "Manager", status: "Active" },
  { id: 7, name: "Jake Long", email: "jake@example.com", role: "Customer", status: "Inactive" },
  { id: 8, name: "Mia Taylor", email: "mia@example.com", role: "Developer", status: "Active" },
  { id: 9, name: "Sophia Brown", email: "sophia@example.com", role: "Admin", status: "Inactive" },
  { id: 10, name: "Daniel Green", email: "daniel@example.com", role: "Customer", status: "Active" },
  { id: 11, name: "Oliver King", email: "oliver@example.com", role: "Developer", status: "Active" },
  { id: 12, name: "Lily White", email: "lily@example.com", role: "Manager", status: "Inactive" },
  { id: 13, name: "Jack Davis", email: "jack@example.com", role: "Customer", status: "Active" },
  { id: 14, name: "Emma Lewis", email: "emma@example.com", role: "Admin", status: "Active" },
  { id: 15, name: "Michael Carter", email: "michael@example.com", role: "Customer", status: "Inactive" },
  { id: 16, name: "Olivia Martinez", email: "olivia@example.com", role: "Developer", status: "Active" },
  { id: 17, name: "Lucas Harris", email: "lucas@example.com", role: "Admin", status: "Inactive" },
  { id: 18, name: "Isabella Robinson", email: "isabella@example.com", role: "Manager", status: "Active" },
  { id: 19, name: "Benjamin Young", email: "benjamin@example.com", role: "Customer", status: "Active" },
  { id: 20, name: "Charlotte Clark", email: "charlotte@example.com", role: "Developer", status: "Inactive" },
  { id: 21, name: "James Scott", email: "james@example.com", role: "Admin", status: "Active" },
  { id: 22, name: "Amelia Walker", email: "amelia@example.com", role: "Customer", status: "Inactive" },
  { id: 23, name: "Henry Allen", email: "henry@example.com", role: "Developer", status: "Active" },
  { id: 24, name: "Ava Nelson", email: "ava@example.com", role: "Manager", status: "Active" },
  { id: 25, name: "William King", email: "william@example.com", role: "Customer", status: "Inactive" }
];

const Usertable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData.slice(0, 5)); // Start with a few items
  const [isLoading, setIsLoading] = useState(false);
  const tableRef = useRef(null); // Reference to the table container

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = userData.filter(
      (user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered.slice(0, 5)); 
  };

  const loadMoreData = () => {
    if (isLoading) return;
    setIsLoading(true);

    // Simulate loading more data (in real cases, fetch more from an API)
    setTimeout(() => {
      setFilteredUsers((prevUsers) => [
        ...prevUsers,
        ...userData.slice(prevUsers.length, prevUsers.length + 5), // Load 5 more users
      ]);
      setIsLoading(false);
    }); 
  };

  const handleScroll = () => {
    const table = tableRef.current;
    if (table.scrollTop + table.clientHeight === table.scrollHeight) {
      loadMoreData();
    }
  };

  useEffect(() => {
    const table = tableRef.current;
    table.addEventListener('scroll', handleScroll);

    return () => {
      table.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }} >
      <div className='flex justify-between items-center mb-6 sm:w-full'>
        <h2 className='text-xl font-semibold text-gray-100 '>Users</h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search users...'
            className='bg-gray-700 text-white placeholder-gray-400 xs:w-10 sm:w-full rounded-lg  pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
            value={searchTerm}
            onChange={handleSearch} />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-y-auto' ref={tableRef} style={{ maxHeight: '400px' }}>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Email</th>
              
    
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-700'>
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0 h-10 w-10'>
                      <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-gray-100'>{user.name}</div>
                    </div>
                  </div>
                </td>

                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-300'>{user.email}</div>
                </td>
                

                
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  <button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
                  <button className='text-red-400 hover:text-red-300'>Delete</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Usertable;
