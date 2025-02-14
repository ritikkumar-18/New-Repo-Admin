import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { motion } from "framer-motion";
import { FiEye, FiEdit, FiTrash2, FiDownload, FiCheckCircle } from "react-icons/fi";
import { toast } from "react-hot-toast";
import Header from "../components/Common/Header";

const defaultContent = {
  "privacy-policy": "<h2>Privacy Policy</h2><p>Your privacy is important to us...</p>",
  "terms-and-conditions": "<h2>Terms & Conditions</h2><p>By using this website, you agree...</p>",
  "about-us": "<h2>About Us</h2><p>We are a company committed to quality...</p>",
};

const CMS = () => {
  const [selectedTab, setSelectedTab] = useState("privacy-policy");
  const [content, setContent] = useState(() => {
    return JSON.parse(localStorage.getItem("cmsContent")) || defaultContent;
  });
  const [isPreview, setIsPreview] = useState(false);
  const [status, setStatus] = useState("Saved"); // Custom Auto-Save Indicator

  useEffect(() => {
    localStorage.setItem("cmsContent", JSON.stringify(content));
    setStatus("Saved ✅"); // Change status instead of showing a toast
    setTimeout(() => setStatus("Editing... ✍️"), 2000); // Show "Editing..." after a while
  }, [content]);

  const handleChange = (value) => {
    setContent({ ...content, [selectedTab]: value });
    setStatus("Saving... 💾"); // Show saving status
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset? This action cannot be undone.")) {
      setContent(defaultContent);
      toast.success("Content reset to default!");
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content[selectedTab]], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = `${selectedTab}.html`;
    document.body.appendChild(element);
    element.click();
    toast.success("Download started!");
  };

  const handleGenerate = () => {
    setContent({ ...content, [selectedTab]: "" }); 
    toast.success(`${selectedTab.replace("-", " ")} generated successfully!`);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen ">
      <Header title={"CMS"} />
      <motion.div
        className="max-w-4xl mx-auto p-6 bg-gray-900 text-white shadow-xl rounded-lg md:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}

      >
    
        <div className="flex flex-wrap gap-2 mb-4 border-b border-gray-700 pb-2 justify-center">
          {Object.keys(defaultContent).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md text-lg transition-all duration-300 ${
                selectedTab === tab
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="text-right text-sm text-gray-400 mb-2">
          Status: <span className="font-bold">{status}</span>
        </div>

        {/* Content Editor */}
        <div className="p-4 border border-gray-700 rounded bg-gray-800 shadow-md relative">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="px-4 py-2 flex items-center gap-2 bg-gray-600 rounded hover:bg-gray-500 transition-all"
            >
              {isPreview ? <FiEdit /> : <FiEye />} {isPreview ? "Edit Mode" : "Preview Mode"}
            </button>
            <div className="flex gap-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2 hover:bg-green-600 transition-all"
              >
                <FiDownload /> Download
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2 hover:bg-red-600 transition-all"
              >
                <FiTrash2 /> Reset
              </button>
            </div>
          </div>

          {isPreview ? (
            <div
              className="border p-4 bg-gray-700 rounded min-h-[250px] text-lg"
              dangerouslySetInnerHTML={{ __html: content[selectedTab] }}
            />
          ) : (
            <ReactQuill
              value={content[selectedTab]}
              onChange={handleChange}
              className="min-h-[250px] bg-white text-black rounded"
            />
          )}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded text-lg flex justify-center items-center gap-2 hover:bg-blue-700 transition-all"
        >
          <FiCheckCircle /> Generate {selectedTab.replace("-", " ")}
        </button>
      </motion.div>
    </div>
  );
};

export default CMS;
