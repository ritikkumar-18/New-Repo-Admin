import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <motion.div className="max-w-3xl mx-auto py-8 px-4" initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>

      <h2 className="text-3xl font-semibold text-center mb-6">Contact Support</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium ">Name</label>
          <input
            type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required
            className="w-full px-4 py-2 mt-1 border  bg-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"/>
        </div>


        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}required
            className="w-full px-4 py-2 mt-1 text-white border bg-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"/>
        </div>


        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message" name="message"  placeholder='Message' value={formData.message} onChange={handleChange} required rows="4"
            className="w-full px-4 py-2 mt-1 border bg-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
          </textarea>
        </div>


        <div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </div>


        {status && <div className="mt-4 text-center text-gray-700">{status}</div>}
      </form>
    </motion.div>
  );
};

export default SupportForm;
