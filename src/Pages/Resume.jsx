import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import Header from "../components/Common/Header";

const candidates = [
  { 
    id: 1, 
    name: "John Doe", 
    role: "Software Engineer", 
    avatar: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png", 
    resume: "John Doe's detailed resume content. He has 5 years of experience in software engineering, specializing in web development with React, Node.js, and MongoDB." 
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    role: "UI/UX Designer", 
    avatar: "https://cdn-icons-png.flaticon.com/128/1999/1999625.png", 
    resume: "Jane Smith's detailed resume content. She specializes in user-centered design, prototyping, and interaction design, with 3 years of experience in the field." 
  },
  { 
    id: 3, 
    name: "Samuel Green", 
    role: "Data Scientist", 
    avatar: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png", 
    resume: "Samuel Green's detailed resume content. With a background in machine learning and AI, he has 4 years of experience in data analytics and predictive modeling." 
  },
  { 
    id: 4, 
    name: "Emily Brown", 
    role: "DevOps Engineer", 
    avatar: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png", 
    resume: "Emily Brown's detailed resume content. She has 6 years of experience managing infrastructure, automating deployments, and ensuring system reliability using Docker, Kubernetes, and AWS." 
  },
];

const offerTemplates = [
  { id: 1, name: "Standard Offer", content: "Dear [Name],\n\nWe are excited to offer you the position of [Role] at our company..." },
  { id: 2, name: "Internship Offer", content: "Dear [Name],\n\nWe are pleased to offer you an internship opportunity as [Role]..." },
  { id: 3, name: "Contract Offer", content: "Dear [Name],\n\nWe are happy to offer you a contractual role as [Role] for [Duration]..." },
];

const Resume = () => {
  const [viewingResume, setViewingResume] = useState(null);
  const [offerModal, setOfferModal] = useState({ open: false, candidate: null });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customNote, setCustomNote] = useState("");

  const handleIssueOffer = () => {
    if (!selectedTemplate) {
      toast.error("Please select a template to issue an offer.");
      return;
    }
    const offerContent = selectedTemplate.content
      .replace("[Name]", offerModal.candidate.name)
      .replace("[Role]", offerModal.candidate.role);

    toast.success("Offer letter issued!");
    console.log("Generated Offer:", offerContent);
    setOfferModal({ open: false, candidate: null });
    setSelectedTemplate(null);
    setCustomNote("");
  };

  const downloadResume = (resume, name) => {
    const blob = new Blob([resume], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${name}_Resume.txt`;
    link.click();
  };

  return (
    <div className="flex-1 overflow-auto z-10 relative">
      <Header title="Resume" />

      <table className="w-full text-left table-auto bg-gray-800 rounded-lg overflow-hidden mt-3 ">
        <thead className="bg-gray-700 ">
          <tr>
            <th className="px-4 py-2" >Avatar</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id} className="hover:bg-gray-700 transition ">
              <td className="px-4 py-2">
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="w-12 h-12 rounded-full"
                />
              </td>
              <td className="px-4 py-2">{candidate.name}</td>
              <td className="px-4 py-2">{candidate.role}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  className="md:px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 "
                  onClick={() => setViewingResume(candidate)}
                >
                  View Resume
                </button>
                <button
                  className="px-3 py-1 bg-green-500 rounded hover:bg-green-600  sm:px-2"
                  onClick={() => setOfferModal({ open: true, candidate })}
                >
                  Issue Offer
                </button>
                <button
                  className="px-3 py-1 bg-teal-500 rounded hover:bg-teal-600  sm:px-2 "
                  onClick={() => downloadResume(candidate.resume, candidate.name)}
                >
                  Download Resume
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AnimatePresence>
        {viewingResume && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewingResume(null)}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4">
                {viewingResume.name}'s Resume
              </h2>
              <p className="whitespace-pre-line">{viewingResume.resume}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                onClick={() => setViewingResume(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster />
      {offerModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">
              Issue Offer to {offerModal.candidate.name}
            </h2>
            <div className="mb-4 space-y-2">
              {offerTemplates.map((template) => (
                <div key={template.id}>
                  <button
                    className={`w-full p-3 text-left rounded ${
                      selectedTemplate?.id === template.id
                        ? "bg-gray-600"
                        : "bg-gray-700"
                    }`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    {template.name}
                  </button>
                </div>
              ))}
            </div>
            {selectedTemplate && (
              <div className="p-3 bg-gray-700 rounded mb-4">
                <pre className="whitespace-pre-wrap text-sm">
                  {selectedTemplate.content
                    .replace("[Name]", offerModal.candidate.name)
                    .replace("[Role]", offerModal.candidate.role)}
                </pre>
              </div>
            )}
            <textarea
              className="w-full p-3 bg-gray-700 rounded mb-4"
              placeholder="Add custom note (optional)"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
                onClick={() => setOfferModal({ open: false, candidate: null })}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
                onClick={handleIssueOffer}
              >
                Generate Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
