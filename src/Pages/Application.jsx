import React, { useState } from 'react';
import Header from '../components/Common/Header';
import { motion } from 'framer-motion';

const Application = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "John Doe",
      jobTitle: "Software Engineer",
      status: "Under Review",
      resume: "This is the resume  for John Doe. It contains a list of skills, experience, and education.",
      skills: ["React", "Node.js", "JavaScript"],
    },
    {
      id: 2,
      name: "Jane Smith",
      jobTitle: "Product Manager",
      status: "Shortlisted",
      resume: "This is the resume  for Jane Smith. It contains leadership skills, product design experience, and more.",
      skills: ["Leadership", "Agile", "Product Design"],
    },
    {
      id: 3,
      name: "Alex Johnson",
      jobTitle: "UI/UX Designer",
      status: "Interview Scheduled",
      resume: "This is the resume  for Alex Johnson. It highlights UI/UX design experience and wireframing skills.",
      skills: ["Figma", "UI/UX", "Wireframing"],
    },
  ]);

  const [filter, setFilter] = useState({
    status: "",
    search: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState("");

  const filteredApplications = applications.filter((app) => {
    return (
      (filter.status === "" || app.status === filter.status) &&
      (app.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        app.skills.some((skill) =>
          skill.toLowerCase().includes(filter.search.toLowerCase())
        ))
    );
  });

  const handleStatusChange = (id, newStatus) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const openResumeModal = (resume) => {
    setSelectedResume(resume);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Application"} />
      <motion.div className= ""initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }} >
     <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search by name or skill"
          className="p-2 border text-black border-gray-700 rounded"
          value={filter.search}
          onChange={(e) =>
            setFilter({ ...filter, search: e.target.value })
          }/>
        <select
          className="p-2 border text-black border-gray-700 rounded"
          value={filter.status}
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
          <option value="">All Statuses</option>
          <option value="Under Review">Under Review</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((application) => (
            <div
              key={application.id}
              className="border border-gray-700 p-4 rounded-lg shadow-md bg-gray-900">
              <h2 className="text-xl font-semibold text-white">{application.name}</h2>
              <p className="text-sm text-gray-300">{application.jobTitle}</p>
              <p className="mt-2 text-gray-300">
                <strong>Status:</strong> {application.status}
              </p>
              <p className="mt-2 text-gray-300">
                <strong>Skills:</strong> {application.skills.join(", ")}
              </p>
              <div className="mt-4">
                <label htmlFor="status" className="block text-sm text-gray-300 mb-2">
                  Update Status:
                </label>
                <select
                  id="status"
                  className="p-2 border text-black border-gray-700 rounded"
                  value={application.status}
                  onChange={(e) =>
                    handleStatusChange(application.id, e.target.value)
                  }>
                  <option value="Under Review">Under Review</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                  <option value="Rejected">Rejected</option>
                </select>

                <button
                  onClick={() => openResumeModal(application.resume)}
                  className="text-blue-500 mt-2 block">
                  View Resume
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No applications found</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-gray-900 p-6 rounded-lg w-2/3 max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Resume </h3>
            <p>{selectedResume}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500  rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}
      </motion.div>
    </div>
  );
};

export default Application;
