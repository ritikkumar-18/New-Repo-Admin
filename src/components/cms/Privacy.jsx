import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiPlusCircle, FiTrash2, FiEdit2, FiSave, FiDownload, FiSearch } from "react-icons/fi";
import { toast } from "react-hot-toast";
import Header from "../Common/Header";

const Privacy = () => {
  
  const [privacyPolicies, setPrivacyPolicies] = useState(() =>
    JSON.parse(localStorage.getItem("privacyPolicies")) || []
  );
  const [content, setContent] = useState(
    "<h2>Privacy Policy</h2><p>Your privacy is important to us...</p>"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  
  useEffect(() => {
    localStorage.setItem("privacyPolicies", JSON.stringify(privacyPolicies));
  }, [privacyPolicies]);

  
  const handleChange = (value) => setContent(value);

  
  const handleCreatePolicy = () => {
    const cleanContent = content.trim();
    if (!cleanContent || cleanContent === "<p><br></p>") {
      toast.error("Privacy policy content cannot be empty!");
      return;
    }

    const newPolicy = { content, date: new Date().toLocaleString() };
    const sortedPolicies = sortOrder === "newest"
      ? [newPolicy, ...privacyPolicies]
      : [...privacyPolicies, newPolicy];

    setPrivacyPolicies(sortedPolicies);
    setContent("");
    toast.success("Privacy policy created successfully!");
  };

  
  const handleDeletePolicy = (index) => {
    const updatedPolicies = privacyPolicies.filter((_, i) => i !== index);
    setPrivacyPolicies(updatedPolicies);
    toast.success("Privacy policy deleted successfully.");
  };

  
  const handleEditPolicy = (index) => {
    setEditingIndex(index);
    setEditedContent(privacyPolicies[index].content);
  };

  
  const handleSaveEdit = (index) => {
    const updatedPolicies = [...privacyPolicies];
    updatedPolicies[index].content = editedContent.trim();
    setPrivacyPolicies(updatedPolicies);
    setEditingIndex(null);
    toast.success("Privacy policy updated successfully!");
  };

  
  const handleExport = () => {
    const data = privacyPolicies
      .map((policy, index) => `# Entry ${index + 1}\n${policy.content}\n---`)
      .join("\n\n");

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Privacy_Policy_Backup.txt";
    link.click();

    toast.success("Backup downloaded successfully!");
  };

  
  const filteredPolicies = privacyPolicies.filter((policy) =>
    policy.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const characterCount = content.replace(/<[^>]*>/g, "").length;

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
      <Header title="Privacy Policy" />

      <div className="p-6 space-y-6">

        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <ReactQuill
            value={content}
            onChange={handleChange}
            className="min-h-[250px] bg-white text-black rounded-lg shadow-md"
          />
          <p className="text-right text-sm text-gray-400 mt-2">
            Character Count: {characterCount}/2000
          </p>

          <button
            onClick={handleCreatePolicy}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-700 transition-all"
          >
            <FiPlusCircle /> Create Privacy Policy
          </button>
        </div>

        
        <div className="flex justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Search Privacy Policy..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
          >
            <FiDownload /> Export
          </button>
        </div>

        {/* Privacy Policy List */}
        <div className="mt-6 space-y-4">
          {filteredPolicies.length > 0 ? (
            <ul>
              {filteredPolicies.map((policy, index) => (
                <li
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-start"
                >
                  <div>
                    <p className="text-sm text-gray-300">{policy.date}</p>
                    {editingIndex === index ? (
                      <ReactQuill
                        value={editedContent}
                        onChange={setEditedContent}
                        className="min-h-[100px] bg-white text-black rounded-lg shadow-md"
                      />
                    ) : (
                      <div
                        className="mt-2 text-white text-sm overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: policy.content }}
                      />
                    )}
                  </div>

                  <div className="flex gap-2">
                    {editingIndex === index ? (
                      <button
                        onClick={() => handleSaveEdit(index)}
                        className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600"
                      >
                        <FiSave />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditPolicy(index)}
                        className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600"
                      >
                        <FiEdit2 />
                      </button>
                    )}

                    <button
                      onClick={() => handleDeletePolicy(index)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center">No privacy policies created yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
