import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'recruiter',
    description: '',
    priority: 'low',
  });
  
  const [ticketStatus, setTicketStatus] = useState(null);
  const [adminView, setAdminView] = useState(false);
  const [ticketData, setTicketData] = useState(null); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    const submitToast = toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('Ticket submitted successfully!');
        }, 2000);
      }),
      {
        loading: 'Submitting ticket...',
        success: 'Ticket submitted successfully!',
        error: 'There was an error submitting your ticket!',
      }
    );

  
    setTicketData({ ...formData, status: 'pending' });
    setTicketStatus('pending');
    

    setFormData({ name: '', email: '', type: 'recruiter', description: '', priority: 'low' });
  };

  const handleStatusChange = (newStatus) => {
    setTicketStatus(newStatus);
    toast.success(`Ticket status updated to ${newStatus}!`);
  };

  const renderUserForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg font-medium">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mt-1 border bg-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mt-1 text-white border bg-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-lg font-medium">Ticket Type</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="recruiter">Recruiter</option>
          <option value="candidate">Candidate</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-lg font-medium">Description of Issue</label>
        <textarea
          id="description"
          name="description"
          placeholder="Describe your issue..."
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-2 mt-1 border bg-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="priority" className="block text-lg font-medium">Priority</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Submit Ticket
        </button>
      </div>
    </form>
  );

  const renderAdminView = () => (
    <div>
      <h3 className="text-xl font-semibold mb-4">Admin: Ticket Status Management</h3>
      {ticketData ? (
        <div>
          <h4 className="text-lg font-medium">Ticket Issuer's Details:</h4>
          <p><strong>Name:</strong> {ticketData.name}</p>
          <p><strong>Email:</strong> {ticketData.email}</p>
          <p><strong>Type:</strong> {ticketData.type === 'recruiter' ? 'Recruiter' : 'Candidate'}</p>
          <p><strong>Priority:</strong> {ticketData.priority}</p>

          <h4 className="text-lg font-medium mt-4">Issue Description:</h4>
          <p>{ticketData.description}</p>
        </div>
      ) : (
        <p>No ticket available to display</p>
      )}

      <p className="mt-4 text-lg">Current Ticket Status: {ticketStatus || 'No Status Yet'}</p>
      <div className="mt-4 space-x-4">
        <button
          onClick={() => handleStatusChange('pending')}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Set to Pending
        </button>
        <button
          onClick={() => handleStatusChange('in-progress')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Set to In Progress
        </button>
        <button
          onClick={() => handleStatusChange('resolved')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Set to Resolved
        </button>
      </div>
    </div>
  );

  return (
    <motion.div
      className="max-w-3xl mx-auto py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-3xl font-semibold text-center mb-6">Raise a Support Ticket</h2>


      {!adminView ? renderUserForm() : renderAdminView()}

      {ticketStatus && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Ticket Status</h3>
          <p
            className={`text-lg ${ticketStatus === 'resolved' ? 'text-green-500' : ticketStatus === 'pending' ? 'text-yellow-500' : 'text-blue-500'}`}
          >
            {ticketStatus === 'pending' && 'Your ticket is currently being reviewed.'}
            {ticketStatus === 'resolved' && 'Your issue has been resolved.'}
            {ticketStatus === 'in-progress' && 'Your ticket is being worked on.'}
          </p>
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={() => setAdminView(!adminView)}
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
        >
          {adminView ? 'Go to User View' : 'Go to Admin View'}
        </button>
      </div>
    </motion.div>
  );
};

export default TicketForm;
