import React, { useState } from 'react';
import Header from '../components/Common/Header';

const TeamManagementDashboard = () => {
    const [members, setMembers] = useState([
        { id: 1, name: 'Alice', role: 'Recruiter', active: true },
        { id: 2, name: 'Bob', role: 'Interviewer', active: true },
        { id: 3, name: 'Charlie', role: 'Hiring Manager', active: true },
      ]);
    
      // State for tasks
      const [tasks, setTasks] = useState([
        { id: 1, task: 'Review Candidate A', assignedTo: 'Alice', status: 'In Progress' },
        { id: 2, task: 'Interview Candidate B', assignedTo: 'Bob', status: 'Pending' },
        { id: 3, task: 'Review Job Listing', assignedTo: 'Charlie', status: 'Completed' },
      ]);
      const handleRoleChange = (id, newRole) => {
        setMembers(members.map((member) =>
          member.id === id ? { ...member, role: newRole } : member
        ));
      };
    return(
        <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Team Management"} />
      <div className="flex-1 p-6">
        {/* Team Management Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Manage Hiring Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div key={member.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.active ? 'Active' : 'Inactive'}</p>
                <div className="mb-4">
                  <label className="block text-sm font-medium">Assign Role</label>
                  <select
                    value={member.role}
                    onChange={(e) => handleRoleChange(member.id, e.target.value)}
                    className="w-full mt-2 border text-black hover:cursor-pointer border-gray-300 p-2 rounded">
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

        {/* Task Tracker Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Task Tracker</h2>
          <table className="min-w-full bg-gray-800 border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Task</th>
                <th className="px-6 py-3 text-left">Assigned To</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-3">{task.task}</td>
                  <td className="px-6 py-3">{task.assignedTo}</td>
                  <td className="px-6 py-3">{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      </div>
  
  );
};

export default TeamManagementDashboard;
