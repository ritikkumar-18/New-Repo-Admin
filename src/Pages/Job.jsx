import React from 'react'
import Header from '../components/Common/Header'
import  { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '', date: '' });
  const [editingJob, setEditingJob] = useState(null);

  // Handle adding new job
  const handleAddJob = () => {
    if (!newJob.title || !newJob.description || !newJob.date) {
      toast.error("All fields are required!");
      return;
    }
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
    setNewJob({ title: '', description: '', date: '' });
    toast.success("Job added successfully!");
  };

  // Handle editing an existing job
  const handleEditJob = (job) => {
    setEditingJob(job);
    setNewJob({ title: job.title, description: job.description, date: job.date });
  };

  // Handle updating the job after editing
  const handleUpdateJob = () => {
    if (!newJob.title || !newJob.description || !newJob.date) {
      toast.error("All fields are required!");
      return;
    }
    setJobs(jobs.map(job => (job.id === editingJob.id ? { ...job, ...newJob } : job)));
    setEditingJob(null);
    setNewJob({ title: '', description: '', date: '' });
    toast.success("Job updated successfully!");
  };

  // Handle deleting a job
  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
    toast.success("Job deleted successfully!");
  };
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Job Management"} />
      < motion.div className="min-h-screen bg-gray-900 text-white p-8"initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
      <h1 className="text-4xl font-bold text-center mb-8">Job Management System</h1>
      <ToastContainer/>

        <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Job Form */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{editingJob ? 'Edit Job' : 'Add New Job'}</h2>
          <input
            type="text"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Job Title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          />
          <textarea
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Job Description"
            value={newJob.description}
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            rows="4"
          />
          <input
            type="date"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newJob.date}
            onChange={(e) => setNewJob({ ...newJob, date: e.target.value })}
          />
        </div>

        <div className="flex justify-between">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            onClick={editingJob ? handleUpdateJob : handleAddJob}
          >
            {editingJob ? 'Update Job' : 'Add Job'}
          </button>
          {editingJob && (
            <button
              className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
              onClick={() => setEditingJob(null)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Jobs List */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">All Jobs</h2>
        <div className="space-y-4">
          {jobs.length === 0 ? (
            <p className="text-center text-gray-400">No jobs available</p>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow-md">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p>{job.description}</p>
                  <p className="text-sm text-gray-400">{job.date}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEditJob(job)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDeleteJob(job.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
    </motion.div>

      </div>

  )
}

export default Job