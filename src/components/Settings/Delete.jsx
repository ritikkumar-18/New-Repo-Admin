import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const Danger = () => {
	const [isModalVisible, setIsModalVisible] = useState(false); 
	
	const handleCancelLogout = () => {
		setIsModalVisible(false); // Close the modal without logging out
	  };
	
	  const handleLogoutClick = () => {
		setIsModalVisible(true); // Show the modal when user clicks logout
	  };
	return (
		<motion.div
			className='bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className='flex items-center mb-4'>
				<Trash2 className='text-red-400 mr-3' size={24} />
				<h2 className='text-xl font-semibold text-gray-100'>Danger Zone</h2>
			</div>
			<p className='text-gray-300 mb-4'>Permanently delete your account and all of your content.</p>
			<button onClick={handleLogoutClick}
				className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded 
      transition duration-200'
			>
				Delete Account
			</button>
			{isModalVisible && (
          <motion.div className="fixed inset-0 flex justify-center items-center rounded-xl bg-gray-800 bg-opacity-50 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}>
            <div className="bg-red-700 p-6 rounded-lg shadow-xl max-w-sm w-full sm:text-xs text-center mb-96 ">
              <h3 className="text-xl font-bold mb-10">Are you sure you want to Delete Your Account ? <br/> This Action is not Reversible</h3>
              <div className="flex justify-between">
                <button
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded-md"
                >
                  Yes, Delete
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

		</motion.div>
	);
};
export default Danger;
