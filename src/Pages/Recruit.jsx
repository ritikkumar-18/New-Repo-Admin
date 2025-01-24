import React from 'react'
import { useState } from 'react';
import Header from '../components/Common/Header';
import { motion } from 'framer-motion';

const Recruit = () => {
    const [applicants, setApplicants] = useState([
        { id: 1, name: "John", position: "Software Engineer", status: "Interview Sch." },
        { id: 2, name: "Jane ", position: "Product Manager", status: "Applied" },
        { id: 3, name: "Alex ", position: "Data Scientist", status: "Hired" },
      ]);
    
      // Function to change applicant status
      const updateStatus = (id, newStatus) => {
        setApplicants(applicants.map(applicant =>
          applicant.id === id ? { ...applicant, status: newStatus } : applicant
        ));
      };
    
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
    <Header title={"Recruiter's Dashboard"} />
    <motion.div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto px-6 mt-3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}>
    
          {applicants.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold text-white">{applicant.name}</h3>
                <span className={`px-4 py-1 text-white text-sm font-semibold rounded-full ${getStatusColor(applicant.status)}`}>
                  {applicant.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{applicant.position}</p>
              <p className="text-gray-500 text-xs mb-4">Email: {applicant.email}</p>
              <p className="text-gray-500 text-xs mb-4">Phone: {applicant.phone}</p>

              {/* Status Update Section */}
              <div className="mt-4">
                <label htmlFor="status" className="block text-sm font-medium text-gray-300">
                  Update Status
                </label>
                <select
                  id="status"
                  value={applicant.status}
                  onChange={(e) => updateStatus(applicant.id, e.target.value)}
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500  text-white"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview Sch..">Interview Sch..</option>
                  <option value="Hired">Hired</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
          ))}
        </motion.div>
    </div>

    
  )
}
const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-yellow-500";
      case "Interview Sch..":
        return "bg-blue-500";
      case "Hired":
        return "bg-green-500";
      case "Rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

export default Recruit