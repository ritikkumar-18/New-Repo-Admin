import React, { useState } from 'react';
import Header from '../components/Common/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const TeamManagementDashboard = () => {
  const [members, setMembers] = useState([
    { id: 1, name: 'Alice', role: 'Recruiter', active: true },
    { id: 2, name: 'Bob', role: 'Interviewer', active: true },
    { id: 3, name: 'Charlie', role: 'Hiring Manager', active: true },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, task: 'Review Candidate A', assignedTo: 'Alice', status: 'In Progress' },
    { id: 2, task: 'Interview Candidate B', assignedTo: 'Bob', status: 'Pending' },
    { id: 3, task: 'Review Job Listing', assignedTo: 'Charlie', status: 'Completed' },
  ]);


  const [newTask, setNewTask] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskData, setEditingTaskData] = useState({
    task: '',
    assignedTo: '',
    status: 'Pending'
  });

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

  const addNewTask = () => {
    if (newTask && assignedTo) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, task: newTask, assignedTo, status: 'Pending' }
      ]);
      toast.success(`New task added successfully!`);
      setNewTask('');
      setAssignedTo('');
    } else {
      toast.error('Please fill in both fields!');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success('Task deleted successfully!');
  };

  const startEditingTask = (task) => {
    setEditingTaskId(task.id);
    setEditingTaskData({ task: task.task, assignedTo: task.assignedTo, status: task.status });
  };

  const saveEditedTask = () => {
    setTasks(tasks.map((task) =>
      task.id === editingTaskId ? { ...task, ...editingTaskData } : task
    ));
    setEditingTaskId(null);
    setEditingTaskData({ task: '', assignedTo: '', status: 'Pending' });
    toast.success('Task updated successfully!');
  };

  const closeModal = () => {
    setEditingTaskId(null);
    setEditingTaskData({ task: '', assignedTo: '', status: 'Pending' });
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Team Management"} />
      < motion.div className="flex-1 p-6"  initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }} >
      
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Manage Hiring Team</h2>
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
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-white">Assign Role</label>
                    <select
                      value={member.role}
                      onChange={(e) => handleRoleChange(member.id, e.target.value)}
                      className="w-full mt-2 border text-black p-2 rounded" >
                      <option value="Recruiter">Recruiter</option>
                      <option value="Interviewer">Interviewer</option>
                      <option value="Hiring Manager">Hiring Manager</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">Task Tracker</h2>
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
                    <button onClick={() => startEditingTask(task)}className="text-blue-500 hover:text-blue-700">Edit</button>
                    <button onClick={() => deleteTask(task.id)}className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Add New Task</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Task Description"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded w-full sm:w-1/2"
            />
            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded w-full sm:w-1/2"
            >
              {members.map((member) => (
                <option key={member.id} value={member.name}>{member.name}</option>
              ))}
            </select>
            <button
              onClick={addNewTask}
              className="px-6 py-2 bg-green-500 text-white rounded"
            >
              Add Task
            </button>
          </div>
        </div>
      </motion.div>

      {editingTaskId && (
        < motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }} >

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-white">Edit Task</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Task Description"
                value={editingTaskData.task}
                onChange={(e) => setEditingTaskData({ ...editingTaskData, task: e.target.value })}
                className="p-2 bg-gray-700 text-white rounded"
              />
              <select
                value={editingTaskData.assignedTo}
                onChange={(e) => setEditingTaskData({ ...editingTaskData, assignedTo: e.target.value })}
                className="p-2 bg-gray-700 text-white rounded"
              >
                {members.map((member) => (
                  <option key={member.id} value={member.name}>{member.name}</option>
                ))}
              </select>
              <select
                value={editingTaskData.status}
                onChange={(e) => setEditingTaskData({ ...editingTaskData, status: e.target.value })}
                className="p-2 bg-gray-700 text-white rounded"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={saveEditedTask}
                  className="px-6 py-2 bg-blue-500 text-white rounded"
                >
                  Save Changes
                </button>
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-600 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <ToastContainer />
    </div>
  );
};

export default TeamManagementDashboard;
