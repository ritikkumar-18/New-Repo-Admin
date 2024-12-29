// import React, { useState } from 'react';
// import Header from '../components/Common/Header';
// import { toast, Toaster } from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';
// import { motion } from 'framer-motion';

// const TeamManagementDashboard = () => {
//   const [members, setMembers] = useState([
//     { id: 1, name: 'Alice', role: 'Recruiter', active: true, details: 'Detailed info about Alice', contact: 'alice@example.com', address: '123 Main St, City' },
//     { id: 2, name: 'Bob', role: 'Interviewer', active: true, details: 'Detailed info about Bob', contact: 'bob@example.com', address: '456 Second St, City' },
//     { id: 3, name: 'Charlie', role: 'Hiring Manager', active: true, details: 'Detailed info about Charlie', contact: 'charlie@example.com', address: '789 Third St, City' },
//   ]);

//   const [tasks, setTasks] = useState([
//     { id: 1, task: 'Review Candidate A', assignedTo: 'Alice', status: 'In Progress', details: 'Detailed info about task 1' },
//     { id: 2, task: 'Interview Candidate B', assignedTo: 'Bob', status: 'Pending', details: 'Detailed info about task 2' },
//     { id: 3, task: 'Review Job Listing', assignedTo: 'Charlie', status: 'Completed', details: 'Detailed info about task 3' },
//   ]);

//   const [viewingMember, setViewingMember] = useState(null);
//   const [viewingTask, setViewingTask] = useState(null);

//   const handleRoleChange = (id, newRole) => {
//     setMembers(members.map((member) =>
//       member.id === id ? { ...member, role: newRole } : member
//     ));
//     toast.success(`Role updated successfully!`);
//   };

//   const toggleMemberStatus = (id) => {
//     setMembers(members.map((member) =>
//       member.id === id ? { ...member, active: !member.active } : member
//     ));
//     toast.success(`Member status updated!`);
//   };

//   const handleTaskStatusChange = (id, newStatus) => {
//     setTasks(tasks.map((task) =>
//       task.id === id ? { ...task, status: newStatus } : task
//     ));
//     toast.success(`Task status updated!`);
//   };


//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//     toast.success('Task deleted successfully!');
//   };

//   const openDetailView = (item, type) => {
//     if (type === 'member') {
//       setViewingMember(item);
//     } else {
//       setViewingTask(item);
//     }
//   };

//   const closeDetailView = () => {
//     setViewingMember(null);
//     setViewingTask(null);
//   };

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
//       <Header title={"Team Management"} />
//       <motion.div className="flex-1 p-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }} >

//         <div className="mt-4">
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {members.map((member) => (
//               <div key={member.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl">
//                 <h3 className="text-xl font-semibold text-white">{member.name}</h3>
//                 <p className="text-gray-500 mb-4">{member.active ? 'Active' : 'Inactive'}</p>
//                 <div className="flex justify-between items-center mb-4">
//                   <button
//                     onClick={() => toggleMemberStatus(member.id)}
//                     className={`px-4 py-2 text-sm rounded ${member.active ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
//                     {member.active ? 'Deactivate' : 'Activate'}
//                   </button>
//                   <button
//                     onClick={() => openDetailView(member, 'member')}
//                     className="px-4 py-2 text-sm rounded bg-blue-500 hover:bg-blue-600 text-white">
//                     View
//                   </button>
//                   <div className="w-20">
//                     <label className="block text-sm font-medium text-white">Assign Role</label>
//                     <select
//                       value={member.role}
//                       onChange={(e) => handleRoleChange(member.id, e.target.value)}
//                       className="w-full mt-2 border text-white bg-gray-800 p-2 rounded" >
//                       <option value="Recruiter">Recruiter</option>
//                       <option value="Interviewer">Interviewer</option>
//                       <option value="Hiring Manager">Hiring Manager</option>
//                       <option value="Admin">Admin</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2 className="sm:text-3xl xs:text-2xl font-bold mb-6 text-white">Task Tracker</h2>
//           <table className="min-w-full bg-gray-800 border border-gray-300 rounded-lg shadow-md">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 text-left text-white">Task</th>
//                 <th className="px-6 py-3 text-left text-white">Assigned To</th>
//                 <th className="px-6 py-3 text-left text-white">Status</th>
//                 <th className="px-6 py-3 text-left text-white">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((task) => (
//                 <tr key={task.id}>
//                   <td className="px-6 py-3 text-white">{task.task}</td>
//                   <td className="px-6 py-3 text-white">{task.assignedTo}</td>
//                   <td className="px-6 py-3">
//                     <select
//                       value={task.status}
//                       onChange={(e) => handleTaskStatusChange(task.id, e.target.value)}
//                       className="bg-gray-700 text-white border border-gray-600 p-2 rounded" >
//                       <option value="Pending">Pending</option>
//                       <option value="In Progress">In Progress</option>
//                       <option value="Completed">Completed</option>
//                     </select>
//                   </td>
//                   <td className="px-6 py-3 flex space-x-2">
//                     <button onClick={() => openDetailView(task, 'task')} className="text-green-500 hover:text-green-700">View</button>
//                     <button onClick={() => startEditingTask(task)} className="text-blue-500 hover:text-blue-700">Edit</button>
//                     <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </motion.div>

//       {/* Member Detail Modal */}
//       {viewingMember && (
//         <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }} >

//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
//             <h2 className="text-3xl font-bold mb-6 text-white">{viewingMember.name} - Details</h2>
//             <p className="text-white">Role: {viewingMember.role}</p>
//             <p className="text-white">Contact: {viewingMember.contact}</p>
//             <p className="text-white">Address: {viewingMember.address}</p>
//             <p className="text-white">{viewingMember.details}</p>
//             <div className="flex space-x-4 mt-4">
//               <button
//                 onClick={closeDetailView}
//                 className="px-6 py-2 bg-red-600 text-white rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       )}

//       {/* Task Detail Modal */}
//       {viewingTask && (
//         <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }} >

//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
//             <h2 className="text-3xl font-bold mb-6 text-white">{viewingTask.task} - Details</h2>
//             <p className="text-white">{viewingTask.details}</p>
//             <div className="flex space-x-4 mt-4">
//               <button
//                 onClick={closeDetailView}
//                 className="px-6 py-2 bg-gray-600 text-white rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       )}
//       <Toaster />
//     </div>
//   );
// };

// export default TeamManagementDashboard;
import React, { useState } from 'react';
import Header from '../components/Common/Header';
import { toast, Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const TeamManagementDashboard = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'Alice', role: 'Recruiter', active: true, details: 'Detailed info about Alice', contact: 'alice@example.com', address: '123 Main St, City' },
    { id: 2, name: 'Bob', role: 'Interviewer', active: true, details: 'Detailed info about Bob', contact: 'bob@example.com', address: '456 Second St, City' },
    { id: 3, name: 'Charlie', role: 'Hiring Manager', active: true, details: 'Detailed info about Charlie', contact: 'charlie@example.com', address: '789 Third St, City' },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, task: 'Review Candidate A', assignedTo: 'Alice', status: 'In Progress', details: 'Detailed info about task 1' },
    { id: 2, task: 'Interview Candidate B', assignedTo: 'Bob', status: 'Pending', details: 'Detailed info about task 2' },
    { id: 3, task: 'Review Job Listing', assignedTo: 'Charlie', status: 'Completed', details: 'Detailed info about task 3' },
  ]);

  const [viewingMember, setViewingMember] = useState(null);
  const [viewingTask, setViewingTask] = useState(null);

  const handleRoleChange = (id, newRole) => {
    setMembers(members.map((member) =>
      member.id === id ? { ...member, role: newRole } : member
    ));
    toast.success(`Role updated successfully!`);
  };

  const toggleMemberStatus = (id) => {
    setMembers(members.map((member) =>
      member.id === id ? { ...member, active: !member.active } : member
    ));
    toast.success(`Member status updated!`);
  };

  const handleTaskStatusChange = (id, newStatus) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
    toast.success(`Task status updated!`);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success('Task deleted successfully!');
  };

  const openDetailView = (item, type) => {
    if (type === 'member') {
      setViewingMember(item);
    } else {
      setViewingTask(item);
    }
  };

  const closeDetailView = () => {
    setViewingMember(null);
    setViewingTask(null);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Team Management"} />
      <motion.div className="flex-1 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }} >

        <div className="mt-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div key={member.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.active ? 'Active' : 'Inactive'}</p>

                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => toggleMemberStatus(member.id)}
                    className={`px-4 py-2 text-sm rounded ${member.active ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                    {member.active ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    onClick={() => openDetailView(member, 'member')}
                    className="px-4 py-2 text-sm rounded bg-blue-500 hover:bg-blue-600 text-white">
                    View
                  </button>
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium text-white">Assign Role</label>
                  <select
                    value={member.role}
                    onChange={(e) => handleRoleChange(member.id, e.target.value)}
                    className="w-full mt-2 border text-white bg-gray-800 p-2 rounded" >
                    <option value="Recruiter">Recruiter</option>
                    <option value="Interviewer">Interviewer</option>
                    <option value="Hiring Manager">Hiring Manager</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="sm:text-3xl xs:text-2xl font-bold mb-6 text-white">Task Tracker</h2>
          <table className="min-w-full bg-gray-800 border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-white">Task</th>
                <th className="px-6 py-3 text-left text-white">Assigned To</th>
                <th className="px-6 py-3 text-left text-white">Status</th>
                <th className="px-6 py-3 text-left text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-3 text-white">{task.task}</td>
                  <td className="px-6 py-3 text-white">{task.assignedTo}</td>
                  <td className="px-6 py-3">
                    <select
                      value={task.status}
                      onChange={(e) => handleTaskStatusChange(task.id, e.target.value)}
                      className="bg-gray-700 text-white border border-gray-600 p-2 rounded" >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-6 py-3 flex space-x-2">
                    <button onClick={() => openDetailView(task, 'task')} className="text-green-500 hover:text-green-700">View</button>
                    <button onClick={() => startEditingTask(task)} className="text-blue-500 hover:text-blue-700">Edit</button>
                    <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </motion.div>

      {/* Member Detail Modal */}
      {viewingMember && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }} >

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-white">{viewingMember.name} - Details</h2>
            <p className="text-white">Role: {viewingMember.role}</p>
            <p className="text-white">Contact: {viewingMember.contact}</p>
            <p className="text-white">Address: {viewingMember.address}</p>
            <p className="text-white">{viewingMember.details}</p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={closeDetailView}
                className="px-6 py-2 bg-red-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Task Detail Modal */}
      {viewingTask && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }} >

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-white">{viewingTask.task} - Details</h2>
            <p className="text-white">{viewingTask.details}</p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={closeDetailView}
                className="px-6 py-2 bg-gray-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
      <Toaster />
    </div>
  );
};

export default TeamManagementDashboard;
