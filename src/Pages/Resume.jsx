import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Common/Header";

// Candidate and Offer Data
const candidates = [
  { id: 1, name: "John Doe", role: "Software Engineer", avatar: "https://via.placeholder.com/100", resume: "John's detailed resume content..." },
  { id: 2, name: "Jane Smith", role: "UI/UX Designer", avatar: "https://via.placeholder.com/100", resume: "Jane's detailed resume content..." },
  // Add more candidates as needed
];

const offerTemplates = [
  { id: 1, name: "Standard Offer", content: "Dear [Name],\n\nWe are excited to offer you the position of [Role] at our company..." },
  { id: 2, name: "Internship Offer", content: "Dear [Name],\n\nWe are pleased to offer you an internship opportunity as [Role]..." },
  { id: 3, name: "Contract Offer", content: "Dear [Name],\n\nWe are happy to offer you a contractual role as [Role] for [Duration]..." },
  // Add more templates as needed
];

const Resume = () => {
  const [viewingCandidate, setViewingCandidate] = useState(null);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customNote, setCustomNote] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  // Filter candidates based on search query
  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginated Candidates
  const paginatedCandidates = filteredCandidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleGenerateOffer = () => {
    if (!selectedTemplate) {
      toast.error("Please select a template before generating an offer.");
      return;
    }
    toast.success(`Offer letter generated using: ${selectedTemplate.name}`);
    setShowOfferModal(false);
    setCustomNote("");
    setSelectedTemplate(null);
  };

  const closeOfferModal = () => {
    setShowOfferModal(false);
    setCustomNote("");
    setSelectedTemplate(null);
  };

  // Handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < Math.ceil(filteredCandidates.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Resume"} />
      <Toaster />

      {/* Search Bar */}
      <div className="mb-4 w-full max-w-md mx-auto">
        <input
          type="text"
          className="p-2 w-full rounded-md bg-gray-800 text-gray-300 placeholder-gray-500"
          placeholder="Search candidates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Candidate Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-md mx-auto max-w-4xl">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-700 text-gray-300">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCandidates.map((candidate) => (
              <tr key={candidate.id} className="border-b border-gray-700 hover:bg-gray-700 transition">
                <td className="px-4 py-2">{candidate.name}</td>
                <td className="px-4 py-2">{candidate.role}</td>
                <td className="px-4 py-2">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => setViewingCandidate(candidate)}
                  >
                    View Resume
                  </button>
                  <button
                    className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    onClick={() => setShowOfferModal(true)}
                  >
                    Issue Offer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4 mx-auto max-w-4xl">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          onClick={() => handlePageChange("prev")}
        >
          Prev
        </button>
        <span className="text-gray-400">Page {currentPage} of {Math.ceil(filteredCandidates.length / itemsPerPage)}</span>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          onClick={() => handlePageChange("next")}
        >
          Next
        </button>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {viewingCandidate && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex"
            onClick={() => setViewingCandidate(null)}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gray-900 p-6 w-full lg:w-1/2 max-w-2xl mx-auto shadow-2xl rounded-lg overflow-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <AiOutlineClose
                className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
                size={24}
                onClick={() => setViewingCandidate(null)}
              />
              <div className="flex items-center mb-4">
                <img
                  src={viewingCandidate.avatar}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{viewingCandidate.name}</h2>
                  <p className="text-sm text-gray-400">{viewingCandidate.role}</p>
                </div>
              </div>
              <p className="mb-4 whitespace-pre-line">{viewingCandidate.resume}</p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => {
                  const element = document.createElement("a");
                  const file = new Blob([viewingCandidate.resume], { type: "text/plain" });
                  element.href = URL.createObjectURL(file);
                  element.download = `${viewingCandidate.name}_Resume.txt`;
                  document.body.appendChild(element);
                  element.click();
                  toast.success("Resume downloaded successfully!");
                }}
              >
                Download Resume
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Offer Letter Modal */}
      {showOfferModal && (
        <OfferModal
          templates={offerTemplates}
          onGenerateOffer={handleGenerateOffer}
          onCancel={closeOfferModal}
          customNote={customNote}
          setCustomNote={setCustomNote}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}
    </div>
  );
};

// Offer Modal Component
const OfferModal = ({ templates, onGenerateOffer, onCancel, customNote, setCustomNote, selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold mb-4">Select Offer Template</h2>
        {templates.map((template) => (
          <div key={template.id} className="mb-2">
            <button
              className={`w-full px-4 py-2 rounded-md text-left ${selectedTemplate && selectedTemplate.id === template.id ? 'bg-gray-600' : 'bg-gray-800'}`}
              onClick={() => setSelectedTemplate(template)}
            >
              {template.name}
            </button>
            <p className="text-sm text-gray-400 mt-1">{template.content}</p>
          </div>
        ))}
        <textarea
          className="mt-4 w-full p-2 bg-gray-800 border border-gray-700 rounded-md placeholder-gray-400"
          placeholder="Add custom note (optional)"
          value={customNote}
          onChange={(e) => setCustomNote(e.target.value)}
        ></textarea>

        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={onCancel}>Cancel</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={onGenerateOffer}>Generate Offer</button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
