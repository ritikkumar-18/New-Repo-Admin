import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Common/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Jobopening = () => {
  const initialJobs = [
    { id: 1, title: 'Software Engineer', department: 'Engineering', location: 'New York', status: 'active', hiringManager: 'Alice' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco', status: 'closed', hiringManager: 'Bob' },
    { id: 3, title: 'Data Scientist', department: 'Engineering', location: 'Remote', status: 'filled', hiringManager: 'Charlie' },
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [filters, setFilters] = useState({ title: '', department: '', location: '', status: '' });
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    status: 'active',
    hiringManager: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.department || !formData.location || !formData.hiringManager) {
      toast.error('Please fill in all fields!'
      );
      return;
    }

    if (editingJob) {
      setJobs(jobs.map((job) => (job.id === editingJob.id ? { ...formData, id: job.id } : job)));
      toast.success('Job updated successfully!');
    } else {
      setJobs([...jobs, { ...formData, id: Date.now() }]);
      toast.success('Job added successfully!');
    }
    setFormData({ title: '', department: '', location: '', status: 'active', hiringManager: '' });
    setEditingJob(null);
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData(job);
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.department.toLowerCase().includes(filters.department.toLowerCase()) &&
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      job.status.toLowerCase().includes(filters.status.toLowerCase())
    );
  });

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 ">
      <Header title={'Recruiter\'s Dashboard'} />
      <motion.div className='mx-auto px-6 mt-4' 
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.2 }}>
   
      <div className="flex space-x-4 mb-6 ">
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={handleFilterChange}
          placeholder="Search by Title"
          className="px-4 py-2 border border-gray-800 bg-gray-800 rounded w-full sm:w-auto" />
        <input
          type="text"
          name="department"
          value={filters.department}
          onChange={handleFilterChange}
          placeholder="Search by Department"
          className="px-4 py-2 border rounded bg-gray-900 w-full sm:w-auto"/>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Search by Location"
          className="px-4 py-2 border rounded bg-gray-900 w-full sm:w-auto" />
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded w-full sm:w-auto bg-gray-900">
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="closed">Closed</option>
          <option value="filled">Filled</option>
        </select>
      </div>

      <div className="mb-6">
        <button
          onClick={() => {
            setEditingJob(null);
            setFormData({ title: '', department: '', location: '', status: 'active', hiringManager: '' });
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-100 mb-4" >
          Add New Job
        </button>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="px-4 py-2 w-full border rounded bg-gray-900" />
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            className="px-4 py-2 w-full border rounded bg-gray-900" />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="px-4 py-2 w-full border rounded bg-gray-900" />
          <input
            type="text"
            name="hiringManager"
            value={formData.hiringManager}
            onChange={handleChange}
            placeholder="Hiring Manager"
            className="px-4 py-2 w-full border rounded bg-gray-900" />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="px-4 py-2 w-full border rounded bg-gray-900" >
            <option value="active">Active</option>
            <option value="closed">Closed</option>
            <option value="filled">Filled</option>
          </select>
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-100" >
            {editingJob ? 'Edit Job' : 'Add Job'}
          </button>
        </form>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-gray-600 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-100">Department: {job.department}</p>
            <p className="text-gray-100">Location: {job.location}</p>
            <p className="text-gray-100">Hiring Manager: {job.hiringManager}</p>
            <p
              className={`text-sm font-semibold ${
                job.status === 'active'
                  ? 'text-green-500'
                  : job.status === 'closed'
                  ? 'text-red-500'
                  : 'text-yellow-500'
              }`} >
              {job.status}
            </p>
            <button
              onClick={() => handleEdit(job)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-100" >
              Edit
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
      </motion.div>
    </div>
  );
};

export default Jobopening;
