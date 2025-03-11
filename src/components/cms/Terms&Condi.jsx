import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { toast } from "react-hot-toast";
import Header from "../Common/Header";

const Terms = () => {
  const [privacyPolicies, setPrivacyPolicies] = useState(() => {
    return JSON.parse(localStorage.getItem("privacyPolicies")) || [];
  });
  const [content, setContent] = useState("<h2>Terms & Conditions</h2><p>Your Terms & Conditions is important to us...</p>");

  useEffect(() => {
    localStorage.setItem("privacyPolicies", JSON.stringify(privacyPolicies));
  }, [privacyPolicies]);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleCreatePolicy = () => {
    if (!content.trim()) {
      toast.error("Terms & Conditions cannot be empty!");
      return;
    }
    const newPolicy = { content, date: new Date().toLocaleString() };
    setPrivacyPolicies([newPolicy, ...privacyPolicies]);
    setContent("");
    toast.success("Terms & Conditions created successfully!");
  };

  const handleDeletePolicy = (index) => {
    const updatedPolicies = privacyPolicies.filter((_, i) => i !== index);
    setPrivacyPolicies(updatedPolicies);
    toast.success("Terms & Conditions deleted!");
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen ">
      <Header title="Terms & Conditions" />
      <div className="p-6">
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <ReactQuill
          value={content}
          onChange={handleChange}
          className="min-h-[250px] bg-white text-black rounded-lg shadow-md"
        />
        
        <button
          onClick={handleCreatePolicy}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-700 transition-all"
        >
          <FiPlusCircle /> Create Terms & Conditions
        </button>
      </div>
      
      <div className="mt-6">
        {privacyPolicies.length > 0 ? (
          <ul className="space-y-4">
            {privacyPolicies.map((policy, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-300">{policy.date}</p>
                  <div
                    className="mt-2 text-white text-sm overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: policy.content }}
                  />
                </div>
                <button
                  onClick={() => handleDeletePolicy(index)}
                  className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-all"
                >
                  <FiTrash2 />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No Terms & Conditions created yet.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Terms;