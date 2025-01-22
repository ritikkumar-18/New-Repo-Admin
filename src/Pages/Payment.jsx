// import { useState } from 'react';
// import React from 'react';
// import Header from '../components/Common/Header';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlineClose } from 'react-icons/ai';
// import toast from 'react-hot-toast';

// const Payment = () => {
//   const [subscriptionPlans, setSubscriptionPlans] = useState([
//     { id: 1, name: "Monthly", price: 50, subscriptionType: "Recruiter", planType: "Monthly", status: "Active" },
//     { id: 2, name: "Pay Per Post", price: 20, subscriptionType: "Candidate", planType: "Pay-per-post", status: "Inactive" },
//     { id: 3, name: "Premium Listing", price: 30, subscriptionType: "Recruiter", planType: "Monthly", status: "Active" },
//   ]);

//   const [viewingPlan, setViewingPlan] = useState(null);
//   const [editingPlan, setEditingPlan] = useState(null);
//   const [newPlan, setNewPlan] = useState({ name: "", price: "", subscriptionType: "Recruiter", planType: "Monthly", status: "Active" });

//   const handleNewPlanChange = (e) => {
//     const { name, value } = e.target;
//     setNewPlan((prevPlan) => ({
//       ...prevPlan,
//       [name]: value,
//     }));
//   };

//   const addNewPlan = () => {
//     if (newPlan.name && newPlan.price) {
//       setSubscriptionPlans((prevPlans) => [
//         ...prevPlans,
//         { ...newPlan, id: prevPlans.length + 1 },
//       ]);

//       toast.success(`New plan "${newPlan.name}" created successfully.`);

//       setNewPlan({ name: "", price: "", subscriptionType: "Recruiter", planType: "Monthly", status: "Active" });
//     } else {
//       toast.error("Please fill in both fields for the new plan.");
//     }
//   };

//   const toggleStatus = (id) => {
//     setSubscriptionPlans((prevPlans) =>
//       prevPlans.map((plan) =>
//         plan.id === id
//           ? { ...plan, status: plan.status === "Active" ? "Inactive" : "Active" }
//           : plan
//       )
//     );
//   };

//   const handleViewClick = (plan) => {
//     setViewingPlan(plan);
//   };

//   const closeDetailView = () => {
//     setViewingPlan(null);
//   };

//   const handleEditClick = (plan) => {
//     setEditingPlan(plan);
//   };

//   const handleEditPlanChange = (e) => {
//     const { name, value } = e.target;
//     setEditingPlan((prevPlan) => ({
//       ...prevPlan,
//       [name]: value,
//     }));
//   };

//   const saveEditedPlan = () => {
//     setSubscriptionPlans((prevPlans) =>
//       prevPlans.map((plan) =>
//         plan.id === editingPlan.id ? { ...editingPlan } : plan
//       )
//     );
//     setEditingPlan(null);
//     toast.success(`Plan "${editingPlan.name}" updated successfully.`);
//   };

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
//       <Header title={"Subscription Plans"} />
//       <motion.div
//         className="container mx-auto px-6 md:px-8 py-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">Create New Subscription Plan</h2>
//           <div className="flex space-x-4">
//             <input
//               type="text"
//               name="name"
//               value={newPlan.name}
//               onChange={handleNewPlanChange}
//               className="p-3 border border-gray-700 bg-gray-900 rounded w-full md:w-1/3"
//               placeholder="Plan Name"
//             />
//             <input
//               type="number"
//               name="price"
//               value={newPlan.price}
//               onChange={handleNewPlanChange}
//               className="p-3 border border-gray-700 bg-gray-900 rounded w-full md:w-1/3"
//               placeholder="Price"
//             />
//             <select
//               name="subscriptionType"
//               value={newPlan.subscriptionType}
//               onChange={handleNewPlanChange}
//               className="p-3 border border-gray-700 bg-gray-900 rounded w-full md:w-1/3"
//             >
//               <option value="Recruiter">Recruiter</option>
//               <option value="Candidate">Candidate</option>
//             </select>
//             <select
//               name="planType"
//               value={newPlan.planType}
//               onChange={handleNewPlanChange}
//               className="p-3 border border-gray-700 bg-gray-900 rounded w-full md:w-1/3"
//             >
//               <option value="Monthly">Monthly</option>
//               <option value="Pay-per-post">Pay-per-post</option>
//             </select>
//             <button
//               onClick={addNewPlan}
//               className="p-3 bg-blue-600 text-white rounded w-full md:w-auto"
//             >
//               Add Plan
//             </button>
//           </div>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold mb-4">Manage Subscription Plans</h2>
//           <div className="overflow-x-auto text-center ">
//             <table className="table-auto w-full border-collapse text-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 border border-gray-700">ID</th>
//                   <th className="px-6 py-3 border border-gray-700">Name</th>
//                   <th className="px-6 py-3 border border-gray-700">Price</th>
//                   <th className="px-6 py-3 border border-gray-700">Type</th>
//                   <th className="px-6 py-3 border border-gray-700">Subscription For</th>
//                   <th className="px-6 py-3 border border-gray-700">Status</th>
//                   <th className="px-6 py-3 border border-gray-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {subscriptionPlans.map((plan) => (
//                   <tr key={plan.id}>
//                     <td className="px-6 py-3 border border-gray-700">{plan.id}</td>
//                     <td className="px-6 py-3 border border-gray-700">{plan.name}</td>
//                     <td className="px-6 py-3 border border-gray-700">${plan.price}</td>
//                     <td className="px-6 py-3 border border-gray-700">{plan.planType}</td>
//                     <td className="px-6 py-3 border border-gray-700">{plan.subscriptionType}</td>
//                     <td className="px-6 py-3 border border-gray-700">{plan.status}</td>
//                     <td className="px-6 py-3 border border-gray-700 space-x-2">
//                       <button
//                         onClick={() => handleViewClick(plan)}
//                         className="bg-green-500 text-white px-3 py-2 rounded"
//                       >
//                         View
//                       </button>
//                       <button
//                         onClick={() => handleEditClick(plan)}
//                         className="bg-yellow-500 text-white px-4 py-2 rounded"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => toggleStatus(plan.id)}
//                         className={`${
//                           plan.status === "Active"
//                             ? "bg-red-500"
//                             : "bg-blue-500"
//                         } text-white px-2 py-2 mt-4 rounded`}
//                       >
//                         {plan.status === "Active" ? "Deactivate" : "Activate"}
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </motion.div>

//       <AnimatePresence>
//         {viewingPlan && (
//           <motion.div
//             className="fixed inset-0 bg-opacity-30 flex mt-14"
//             onClick={closeDetailView}
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex-1"></div>
//             <motion.div
//               className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 w-1/2 sm:w-1/3 relative shadow-2xl rounded-lg xs:w-auto"
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: "100%" }}
//               transition={{ duration: 0.5 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <AiOutlineClose
//                 className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
//                 size={24}
//                 onClick={closeDetailView}
//               />
//               <div className="flex flex-col items-center space-y-4">
//                 <h2 className="text-2xl font-semibold text-gray-100">
//                   {viewingPlan.name} Details
//                 </h2>
//               </div>

//               <div className="mt-6 space-y-4">
//                 <div className="flex items-center space-x-4">
//                   <p className="text-sm text-gray-400">Price:</p>
//                   <span className="text-sm text-gray-200">${viewingPlan.price}</span>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <p className="text-sm text-gray-400">Type:</p>
//                   <span className="text-sm text-gray-200">{viewingPlan.planType}</span>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <p className="text-sm text-gray-400">Subscription For:</p>
//                   <span className="text-sm text-gray-200">{viewingPlan.subscriptionType}</span>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <p className="text-sm text-gray-400">Status:</p>
//                   <span className="text-sm text-gray-200">{viewingPlan.status}</span>
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-center">
//                 <button
//                   className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
//                   onClick={closeDetailView}
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {editingPlan && (
//           <motion.div
//             className="fixed inset-0 bg-opacity-30 flex mt-14"
//             onClick={() => setEditingPlan(null)}
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex-1"></div>
//             <motion.div
//               className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 w-1/2 sm:w-1/3 relative shadow-2xl rounded-lg xs:w-auto"
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: "100%" }}
//               transition={{ duration: 0.5 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <AiOutlineClose
//                 className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
//                 size={24}
//                 onClick={() => setEditingPlan(null)}
//               />
//               <div className="flex flex-col items-center space-y-4">
//                 <h2 className="text-2xl font-semibold text-gray-100">
//                   Edit Plan: {editingPlan.name}
//                 </h2>
//               </div>

//               <div className="mt-6 space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={editingPlan.name}
//                   onChange={handleEditPlanChange}
//                   className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
//                   placeholder="Plan Name"
//                 />
//                 <input
//                   type="number"
//                   name="price"
//                   value={editingPlan.price}
//                   onChange={handleEditPlanChange}
//                   className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
//                   placeholder="Price"
//                 />
//                 <select
//                   name="subscriptionType"
//                   value={editingPlan.subscriptionType}
//                   onChange={handleEditPlanChange}
//                   className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
//                 >
//                   <option value="Recruiter">Recruiter</option>
//                   <option value="Candidate">Candidate</option>
//                 </select>
//                 <select
//                   name="planType"
//                   value={editingPlan.planType}
//                   onChange={handleEditPlanChange}
//                   className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
//                 >
//                   <option value="Monthly">Monthly</option>
//                   <option value="Pay-per-post">Pay-per-post</option>
//                 </select>

//                 <div className="mt-6 flex justify-center">
//                   <button
//                     className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
//                     onClick={saveEditedPlan}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Payment;

import { useState } from 'react';
import React from 'react';
import Header from '../components/Common/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import toast from 'react-hot-toast';

const Payment = () => {
  const [subscriptionPlans, setSubscriptionPlans] = useState([
    { id: 1, name: "Monthly", price: 50, subscriptionType: "Recruiter", planType: "Monthly", status: "Active" },
    { id: 2, name: "Pay Per Post", price: 20, subscriptionType: "Candidate", planType: "Pay-per-post", status: "Inactive" },
    { id: 3, name: "Premium Listing", price: 30, subscriptionType: "Recruiter", planType: "Monthly", status: "Active" },
  ]);

  const [viewingPlan, setViewingPlan] = useState(null);
  const [editingPlan, setEditingPlan] = useState(null);
  const [newPlan, setNewPlan] = useState({ name: "", price: "", subscriptionType: "Recruiter", planType: "Monthly", status: "Active" });

  const handleNewPlanChange = (e) => {
    const { name, value } = e.target;
    setNewPlan((prevPlan) => ({
      ...prevPlan,
      [name]: value,
    }));
  };

  const addNewPlan = () => {
    if (newPlan.name && newPlan.price) {
      setSubscriptionPlans((prevPlans) => [
        ...prevPlans,
        { ...newPlan, id: prevPlans.length + 1 },
      ]);

      toast.success(`New plan "${newPlan.name}" created successfully.`);

      setNewPlan({ name: "", price: "", subscriptionType: "Recruiter", planType: "Monthly", status: "Active" });
    } else {
      toast.error("Please fill in both fields for the new plan.");
    }
  };

  const toggleStatus = (id) => {
    setSubscriptionPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === id
          ? { ...plan, status: plan.status === "Active" ? "Inactive" : "Active" }
          : plan
      )
    );
  };

  const handleViewClick = (plan) => {
    setViewingPlan(plan);
  };

  const closeDetailView = () => {
    setViewingPlan(null);
  };

  const handleEditClick = (plan) => {
    setEditingPlan(plan);
  };

  const handleEditPlanChange = (e) => {
    const { name, value } = e.target;
    setEditingPlan((prevPlan) => ({
      ...prevPlan,
      [name]: value,
    }));
  };

  const saveEditedPlan = () => {
    setSubscriptionPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === editingPlan.id ? { ...editingPlan } : plan
      )
    );
    setEditingPlan(null);
    toast.success(`Plan "${editingPlan.name}" updated successfully.`);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Subscription Plans"} />
      <motion.div
        className="container mx-auto px-6 md:px-8 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New Subscription Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newPlan.name}
              onChange={handleNewPlanChange}
              className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
              placeholder="Plan Name"
            />
            <input
              type="number"
              name="price"
              value={newPlan.price}
              onChange={handleNewPlanChange}
              className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
              placeholder="Price"
            />
            <select
              name="subscriptionType"
              value={newPlan.subscriptionType}
              onChange={handleNewPlanChange}
              className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
            >
              <option value="Recruiter">Recruiter</option>
              <option value="Candidate">Candidate</option>
            </select>
            <select
              name="planType"
              value={newPlan.planType}
              onChange={handleNewPlanChange}
              className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
            >
              <option value="Monthly">Monthly</option>
              <option value="Pay-per-post">Pay-per-post</option>
            </select>
            
          </div>
        </div>
        <div className='md:text-center xs:text-center xs:mb-8'>
            <button
              onClick={addNewPlan}
              className="p-3 bg-blue-600 text-white rounded md:w-[400px]"> Add Plan
            </button>
            </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Manage Subscription Plans</h2>
          <div className="overflow-x-auto text-center ">
            <table className="table-auto w-full border-collapse text-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 border border-gray-700">ID</th>
                  <th className="px-6 py-3 border border-gray-700">Name</th>
                  <th className="px-6 py-3 border border-gray-700">Price</th>
                  <th className="px-6 py-3 border border-gray-700">Type</th>
                  <th className="px-6 py-3 border border-gray-700">Subscription For</th>
                  <th className="px-6 py-3 border border-gray-700">Status</th>
                  <th className="px-6 py-3 border border-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscriptionPlans.map((plan) => (
                  <tr key={plan.id}>
                    <td className="px-6 py-3 border border-gray-700">{plan.id}</td>
                    <td className="px-6 py-3 border border-gray-700">{plan.name}</td>
                    <td className="px-6 py-3 border border-gray-700">${plan.price}</td>
                    <td className="px-6 py-3 border border-gray-700">{plan.planType}</td>
                    <td className="px-6 py-3 border border-gray-700">{plan.subscriptionType}</td>
                    <td className="px-6 py-3 border border-gray-700">{plan.status}</td>
                    <td className="px-6 py-3 border border-gray-700 space-x-2">
                      <button
                        onClick={() => handleViewClick(plan)}
                        className="bg-green-500 text-white px-3 py-2 md:mb-0 xs:mb-5 rounded">
                        View
                      </button>
                      <button
                        onClick={() => handleEditClick(plan)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded">
                        Edit
                      </button>
                      <button
                        onClick={() => toggleStatus(plan.id)}
                        className={`${
                          plan.status === "Active"
                            ? "bg-red-500"
                            : "bg-blue-500"
                        } text-white px-2 py-2 mt-4 rounded`} >
                        {plan.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {viewingPlan && (
          <motion.div
            className="fixed inset-0 bg-opacity-30 flex mt-14"
            onClick={closeDetailView}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1"></div>
            <motion.div
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 w-1/2 sm:w-1/3 relative shadow-2xl rounded-lg xs:w-auto"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineClose
                className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
                size={24}
                onClick={closeDetailView}
              />
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">
                  {viewingPlan.name} 
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Price:</p>
                  <span className="text-sm text-gray-200">${viewingPlan.price}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Type:</p>
                  <span className="text-sm text-gray-200">{viewingPlan.planType}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Subscription For:</p>
                  <span className="text-sm text-gray-200">{viewingPlan.subscriptionType}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm text-gray-400">Status:</p>
                  <span className="text-sm text-gray-200">{viewingPlan.status}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                  onClick={closeDetailView}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {editingPlan && (
          <motion.div
            className="fixed inset-0 bg-opacity-30 flex mt-14"
            onClick={() => setEditingPlan(null)}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1"></div>
            <motion.div
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 w-1/2 sm:w-1/3 relative shadow-2xl rounded-lg xs:w-auto"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineClose
                className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
                size={24}
                onClick={() => setEditingPlan(null)}
              />
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-2xl font-semibold text-gray-100">
                  Edit Plan: {editingPlan.name}
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  value={editingPlan.name}
                  onChange={handleEditPlanChange}
                  className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
                  placeholder="Plan Name"
                />
                <input
                  type="number"
                  name="price"
                  value={editingPlan.price}
                  onChange={handleEditPlanChange}
                  className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
                  placeholder="Price"
                />
                <select
                  name="subscriptionType"
                  value={editingPlan.subscriptionType}
                  onChange={handleEditPlanChange}
                  className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
                >
                  <option value="Recruiter">Recruiter</option>
                  <option value="Candidate">Candidate</option>
                </select>
                <select
                  name="planType"
                  value={editingPlan.planType}
                  onChange={handleEditPlanChange}
                  className="p-3 border border-gray-700 bg-gray-900 rounded w-full"
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Pay-per-post">Pay-per-post</option>
                </select>

                <div className="mt-6 flex justify-center">
                  <button
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                    onClick={saveEditedPlan}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Payment;
