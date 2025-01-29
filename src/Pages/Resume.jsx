import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Header from "../components/Common/Header";
import { AiOutlineEye } from "react-icons/ai";
import { Download, Paperclip, Search, X } from "lucide-react";



const candidates = [
  { id: 1, name: "John Doe", role: "Software Engineer", avatar: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png" },
  { id: 2, name: "Jane Smith", role: "UI/UX Designer", avatar: "https://cdn-icons-png.flaticon.com/128/1999/1999625.png" },
  { id: 3, name: "Samuel Green", role: "Data Scientist", avatar: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png" },
  { id: 4, name: "Emily Brown", role: "DevOps Engineer", avatar: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png" },
  { id: 5, name: " S.Doe", role: "Mobile Engineer", avatar: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png"},
  { id: 6, name: "Gian Smith", role: "Blockchain Developer", avatar: "https://cdn-icons-png.flaticon.com/128/18663/18663695.png"},
  { id: 7, name: "Sam Wilson", role: "Backend Developer", avatar: "https://cdn-icons-png.flaticon.com/128/4140/4140061.png"},
  { id: 8, name: "MR. Brown", role: "Manual Tester", avatar: "https://cdn-icons-png.flaticon.com/128/4140/4140039.png"},
  { id: 9, name: "Jhonny", role: "Content Writer", avatar: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png"},
  { id: 10, name: "Steve Smith", role: "SEO Developer", avatar: "https://cdn-icons-png.flaticon.com/128/924/924874.png"},
  { id: 11, name: "Camron Green", role: "Java Developer", avatar: "https://cdn-icons-png.flaticon.com/128/4205/4205906.png" },
  { id: 12, name: "BrathWate ", role: "DevOps Engineer", avatar: "https://cdn-icons-png.flaticon.com/128/18743/18743396.png"},
];

const offerTemplates = [
  { id: 1, name: "Standard Offer", content: "Dear [Name],\n\nWe are excited to offer you the position of [Role] at our company..." },
  { id: 2, name: "Internship Offer", content: "Dear [Name],\n\nWe are pleased to offer you an internship as [Role]..." },
  { id: 3, name: "Contract Offer", content: "Dear [Name],\n\nWe are happy to offer you a contract as [Role] for [Duration]..." },
];

const Resume = () => {
  const [viewingResume, setViewingResume] = useState(null);
  const [offerModal, setOfferModal] = useState({ open: false, candidate: null });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [editedTemplateContent, setEditedTemplateContent] = useState("");
  const [templatePreview, setTemplatePreview] = useState("");  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState(""); 
  const [sortedCandidates, setSortedCandidates] = useState([...candidates]);
  const membersPerPage = 10;

  useEffect(() => {
    setSortedCandidates([...candidates]);
  }, []);

  const filteredCandidates = sortedCandidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (roleFilter === "" || candidate.role === roleFilter)
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTemplateChange = (e) => {
    const template = offerTemplates.find(template => template.id === parseInt(e.target.value));
    setSelectedTemplate(template);
    const previewContent = template.content
      .replace("[Name]", offerModal.candidate.name)
      .replace("[Role]", offerModal.candidate.role)
      .replace("[Duration]", offerModal.candidate.role === "Internship" ? "3 months" : "[Duration]");
    setTemplatePreview(previewContent);
    setEditedTemplateContent(previewContent); 
  };

  const handleTemplateTextChange = (e) => {
    setEditedTemplateContent(e.target.value);
    setTemplatePreview(e.target.value); 
  };

  const isTemplateValid = () => {
    return !editedTemplateContent.includes("[Name]") && !editedTemplateContent.includes("[Role]");
  };

  const handleIssueOffer = () => {
    if (!selectedTemplate) {
      toast.error("Please select a template to issue an offer.");
      return;
    }

    if (!isTemplateValid()) {
      toast.error("Please fill all the placeholders.");
      return;
    }

    const offerContent = editedTemplateContent
      .replace("[Name]", offerModal.candidate.name)
      .replace("[Role]", offerModal.candidate.role)
      .replace("[Duration]", offerModal.candidate.role === "Internship" ? "3 months" : "[Duration]");

    toast.success("Offer letter issued!");
    console.log("Generated Offer:", offerContent);
    setOfferModal({ open: false, candidate: null });
    setSelectedTemplate(null);
    setEditedTemplateContent(""); 
  };

  const handleViewResume = (candidate) => {
    setViewingResume(candidate);
  };

  const handleCloseResume = () => {
    setViewingResume(null);
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-900 text-white">
      <Header title="Resume" />
      <div className="flex justify-between relative items-center mb-4 mt-5 px-4">
        <input
          type="text"
          placeholder="Search candidates..."
          className="px-2 py-2 pl-10 xs:w-20  md:w-auto bg-gray-800 text-white border rounded  focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-8 top-3 text-gray-400" size={18} />
        <select
          className="p-2 rounded bg-gray-800 text-white w-auto"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
        </select>
      </div>

      <div className="overflow-x-auto p-6">
        <table className="w-full text-left table-auto border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2">Avatar</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">For Applied</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates
              .slice((currentPage - 1) * membersPerPage, currentPage * membersPerPage)
              .map((candidate) => (
                <tr key={candidate.id} className="hover:bg-gray-800">
                  <td className="px-4 py-2">
                    <img
                      src={candidate.avatar}
                      alt={candidate.name}
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">{candidate.name}</td>
                  <td className="px-4 py-2">{candidate.role}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => setOfferModal({ open: true, candidate })}
                      className="text-blue-500 hover:text-blue-700"
                    >
                        <Paperclip size={16}/>
                    </button>
                    <button
                      onClick={() => handleViewResume(candidate)}
                      className="ml-2 text-green-500 hover:text-green-700"
                    >
                      <AiOutlineEye size={16}/>
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(Math.ceil(filteredCandidates.length / membersPerPage)).keys()].map(index => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${currentPage === index + 1 ? 'bg-purple-500 text-white shadow-md' : 'bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {viewingResume && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full md:w-96 sm:w-64 sm:ml-20 mt-20 ">
            <h2 className="text-xl font-bold text-white mb-4">Resume of {viewingResume.name}</h2>
            <iframe
              src="https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf"
              className="w-full h-96  border border-gray-700"
              title="Resume"
            />
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleCloseResume}
                className="px-6 py-2 bg-gray-600 rounded text-white"
              >
                <X/>
              </button>
              <a
                href=''
                download
                className="px-6 py-2   bg-blue-500 rounded text-white"
              >
                <Download/>
              </a>
            </div>
          </div>
        </div>
      )}

    
      {offerModal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full sm:w-64 md:w-96 sm:ml-20 mt-20">
            <h2 className="text-xl font-bold text-white mb-4">Issue Offer Letter</h2>
            <select
              className="mt-4 p-2 rounded bg-gray-700 text-white w-full"
              onChange={handleTemplateChange}
            >
              <option value="">Select Offer Template</option>
              {offerTemplates.map(template => (
                <option key={template.id} value={template.id}>{template.name}</option>
              ))}
            </select>

          
            {selectedTemplate && (
              <div className="mt-4">
                <h3 className="text-white text-lg">Preview:</h3>
                <textarea
                  value={editedTemplateContent}
                  onChange={handleTemplateTextChange}
                  className="w-full h-40 mt-2 p-2 bg-gray-700 text-white border border-gray-600 rounded"
                />
                <div className="bg-gray-700 p-4 rounded text-white mt-4">
                  <h3>Offer Preview</h3>
                  <p>{templatePreview}</p>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleIssueOffer}
                className="md:px-6 md:py-2 bg-blue-500 sm:py-3 sm:px-1.5 rounded text-white"
              >
                Issue Offer
              </button>
              <button
                onClick={() => setOfferModal({ open: false, candidate: null })}
                className="px-6 py-2 bg-gray-600 rounded text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default Resume;
