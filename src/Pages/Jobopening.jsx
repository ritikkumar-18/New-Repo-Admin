import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Common/Header';
import { toast, Toaster } from 'react-hot-toast'; 
import { Search, Plus, X } from 'lucide-react';

const Jobopening = () => {
  const initialJobs = [
    { id: 1, title: 'Software Engineer', department: 'Engineering', location: 'New York', status: 'active', hiringManager: 'Alice' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco', status: 'closed', hiringManager: 'Bob' },
    { id: 3, title: 'Data Scientist', department: 'Engineering', location: 'Remote', status: 'filled', hiringManager: 'Charlie' },
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    status: 'active',
    hiringManager: '',
  });

  const openModal = (job = null) => {
    setEditingJob(job);
    setFormData(job || { title: '', department: '', location: '', status: 'active', hiringManager: '' });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingJob(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.department || !formData.location || !formData.hiringManager) {
      toast.error('Please fill in all fields!');
      return;
    }
    
    if (editingJob) {
      setJobs(jobs.map((job) => (job.id === editingJob.id ? { ...formData, id: job.id } : job)));
      toast.success('Job updated successfully!');
    } else {
      setJobs([...jobs, { ...formData, id: Date.now() }]);
      toast.success('Job added successfully!');
    }
    setFormData({
      title: '',
      department: '',
      location: '',
      status: 'active',
      hiringManager: '',
    });
  
    closeModal();
  
  };

  const filteredJobs = jobs.filter((job) =>
    Object.values(job).some((value) => value.toString().toLowerCase().includes(searchTerm))
  );

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen ">
      <Header title={"Job Openings"} />
      <motion.div className="p-6"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <div className="flex justify-between items-center mb-6 ">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className="py-2 border rounded sm:w-40 bg-gray-800 text-white pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
          </div>
          <button onClick={() => openModal()} className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600">
            <Plus size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white">{job.title}</h2>
              <p className="text-gray-300">Department: {job.department}</p>
              <p className="text-gray-300">Location: {job.location}</p>
              <p className="text-gray-300">Hiring Manager: {job.hiringManager}</p>
              <p className={`text-sm font-semibold ${job.status === 'active' ? 'text-green-500' : job.status === 'closed' ? 'text-red-500' : 'text-yellow-500'}`}>{job.status}</p>
              <button onClick={() => openModal(job)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
            </div>
          ))}
        </div>
        <Toaster />
      </motion.div>

      {modalOpen && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xl font-semibold">{editingJob ? 'Edit Job' : 'Add Job'}</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

    <form onSubmit={handleSubmit} className="space-y-4">
  <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" className="px-4 py-2 w-full border rounded bg-gray-800 text-white"/>
  <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="px-4 py-2 w-full border rounded bg-gray-800 text-white"/>
  <input type="text" name="location"value={formData.location} onChange={handleChange} placeholder="Location" className="px-4 py-2 w-full border rounded bg-gray-800 text-white"/>
  <input type="text"name="hiringManager" value={formData.hiringManager} onChange={handleChange} placeholder="Hiring Manager" className="px-4 py-2 w-full border rounded bg-gray-800 text-white"/>

  <div className="flex items-center space-x-4">

    <label className="text-white flex items-center space-x-2">

      <input type="radio" name="status" value="active" checked={formData.status === "active"} onChange={handleChange} className="w-4 h-4"/>
      <span>Active</span>
    </label>

    <label className="text-white flex items-center space-x-2">
      <input type="radio" name="status" value="inactive" checked={formData.status === "inactive"} onChange={handleChange} className="w-4 h-4"/>
      <span>Inactive</span>
    </label>
    
    <label className="text-white flex items-center space-x-2">
      <input type="radio" name="status" value="closed" checked={formData.status === "closed"} onChange={handleChange} className="w-4 h-4"/>
      <span>Closed</span>
    </label>
  </div>

  <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
    {editingJob ? "Update Job" : "Add Job"}
  </button>
</form>

          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Jobopening;
