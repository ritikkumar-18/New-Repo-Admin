import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Common/Header';
import { motion } from 'framer-motion';

const Logout = ({ onLogout }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const navigate = useNavigate();

  // Function to handle logout confirmation
  const handleConfirmLogout = () => {
    onLogout();
    navigate('/login'); 
  };
  const Cancel=()=>{
    navigate('/')

  }

  const handleCancelLogout = () => {
    setIsModalVisible(false);
     // Close the modal without logging out
  };

  const handleLogoutClick = () => {
    setIsModalVisible(true); // Show the modal when user clicks logout
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 ">
      <Header title={"Logout"} />
      <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border  md:mx-72 border-gray-700 mt-32 '
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}>
            <h2 className='font-bold text-white sm:text-2xl text-center xs:text-sm'> Do you want to Logout ? </h2>
            <img src="https://cdn2.iconfinder.com/data/icons/network-and-internet-3d-illustration-pack/128/Logout_3D_Illustration_Icon.png" className="absolute sm:left-20 sm:top-6 xs:left-5 xs:top-4  " 
          style={{ width: '40px' }} 
          alt="Login Icon"  />
	
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 flex justify-evenly mt-10 ">
        <button 
          onClick={handleLogoutClick}
          className="bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
        <button onClick={Cancel}className='bg-gray-400 text-white py-2 px-4 rounded-md'>Cancel</button>
        {isModalVisible && (
          <motion.div className="fixed inset-0 flex justify-center items-center rounded-xl bg-gray-800 bg-opacity-50 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}>
            <div className="bg-red-700 p-6 rounded-lg shadow-xl max-w-sm w-full sm:text-xs">
              <h3 className="sm:text-xl xs:text-sm font-bold mb-10">Are you sure you want to Log Out ?</h3>
              <div className="flex justify-between">
                <button
                  onClick={handleConfirmLogout}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded-md"
                >
                  Yes, Logout
                </button>
                <button
                  onClick={handleCancelLogout}
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
      </motion.div>
    </div>
  );
};

export default Logout;

