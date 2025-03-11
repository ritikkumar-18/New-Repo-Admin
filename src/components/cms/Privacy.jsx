// import React, { useState, useEffect } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { motion } from "framer-motion";
// import { FiEye, FiEdit, FiTrash2, FiDownload, FiCheckCircle } from "react-icons/fi";
// import { toast } from "react-hot-toast";
// import Header from "../Common/Header";
// const defaultContent = {
//     "privacy-policy": "<h2>Privacy Policy</h2><p>Your privacy is important to us...</p>",
//     "terms-and-conditions": "<h2>Terms & Conditions</h2><p>By using this website, you agree...</p>",
//     "about-us": "<h2>About Us</h2><p>We are a company committed to quality...</p>",
//   };

// const Privacy = () => {
//     const [selectedTab, setSelectedTab] = useState("privacy-policy");
//     const [content, setContent] = useState(() => {
//       return JSON.parse(localStorage.getItem("cmsContent")) || defaultContent;
//     });
//     const [isPreview, setIsPreview] = useState(false);
//     const [status, setStatus] = useState("Saved"); 
  
//     useEffect(() => {
//       localStorage.setItem("cmsContent", JSON.stringify(content));
//       setStatus("Saved ✅"); 
//       setTimeout(() => setStatus("Editing... ✍️"), 2000); 
//     }, [content]);
  
//     const handleChange = (value) => {
//       setContent({ ...content, [selectedTab]: value });
//       setStatus("Saving... 💾"); 
//     };
  
//     const handleReset = () => {
//       if (window.confirm("Are you sure you want to reset? This action cannot be undone.")) {
//         setContent(defaultContent);
//         toast.success("Content reset to default!");
//       }
//     };
  
//     const handleDownload = () => {
//       const element = document.createElement("a");
//       const file = new Blob([content[selectedTab]], { type: "text/html" });
//       element.href = URL.createObjectURL(file);
//       element.download = `${selectedTab}.html`;
//       document.body.appendChild(element);
//       element.click();
//       toast.success("Download started!");
//     };
  
//     const handleGenerate = () => {
//       setContent({ ...content, [selectedTab]: "" }); 
//       toast.success(`${selectedTab.replace("-", " ")} generated successfully!`);
//     };
  
//     return (
//       <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen ">
//         <Header title={"CMS"} />
//         <motion.div
//           className="max-w-4xl mx-auto p-6 bg-gray-900 text-white shadow-xl rounded-lg md:p-6"
//         >
      
//           <div className="flex flex-wrap gap-2 mb-4 border-b border-gray-700 pb-2 justify-center">
//             {Object.keys(defaultContent).map((tab) => (
//               <button
//                 key={tab}
//                 className={`px-4 py-2 rounded-md text-lg transition-all duration-300 ${
//                   selectedTab === tab
//                     ? "bg-blue-500 text-white shadow-md"
//                     : "bg-gray-700 hover:bg-blue-400 hover:text-white"
//                 }`}
//                 onClick={() => setSelectedTab(tab)}
//               >
//                 {tab.replace("-", " ").toUpperCase()}
//               </button>
//             ))}
//           </div>
  
          
//           <div className="text-right text-sm text-gray-400 mb-2">
//             Status: <span className="font-bold">{status}</span>
//           </div>
  
          
//           <div className="p-4 border border-gray-700 rounded bg-gray-800 shadow-md relative">
//             <div className="flex justify-between mb-4">
//               <button
//                 onClick={() => setIsPreview(!isPreview)}
//                 className="px-4 py-2 flex items-center gap-2 bg-gray-600 rounded hover:bg-gray-500 transition-all"
//               >
//                 {isPreview ? <FiEdit /> : <FiEye />} {isPreview ? "Edit Mode" : "Preview Mode"}
//               </button>
//               <div className="flex gap-2">
//                 <button
//                   onClick={handleDownload}
//                   className="px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2 hover:bg-green-600 transition-all"
//                 >
//                   <FiDownload /> Download
//                 </button>
//                 <button
//                   onClick={handleReset}
//                   className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2 hover:bg-red-600 transition-all"
//                 >
//                   <FiTrash2 /> Reset
//                 </button>
//               </div>
//             </div>
  
//             {isPreview ? (
//               <div
//                 className="border p-4 bg-gray-700 rounded min-h-[250px] text-lg"
//                 dangerouslySetInnerHTML={{ __html: content[selectedTab] }}
//               />
//             ) : (
//               <ReactQuill
//                 value={content[selectedTab]}
//                 onChange={handleChange}
//                 className="min-h-[250px] bg-white text-black rounded"
//               />
//             )}
//           </div>
  
          
//           <button
//             onClick={handleGenerate}
//             className="mt-4 w-full bg-blue-600 text-white py-3 rounded text-lg flex justify-center items-center gap-2 hover:bg-blue-700 transition-all"
//           >
//             <FiCheckCircle /> Generate {selectedTab.replace("-", " ")}
//           </button>
//         </motion.div>
//       </div>
//     );
//   };
// export default Privacy
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { toast } from "react-hot-toast";
import Header from "../Common/Header";

const Privacy = () => {
  const [privacyPolicies, setPrivacyPolicies] = useState(() => {
    return JSON.parse(localStorage.getItem("privacyPolicies")) || [];
  });
  const [content, setContent] = useState("<h2>Privacy Policy</h2><p>Your privacy is important to us...</p>");

  useEffect(() => {
    localStorage.setItem("privacyPolicies", JSON.stringify(privacyPolicies));
  }, [privacyPolicies]);

  const handleChange = (value) => {
    setContent(value);
  };

  const handleCreatePolicy = () => {
    if (!content.trim()) {
      toast.error("Privacy policy cannot be empty!");
      return;
    }
    const newPolicy = { content, date: new Date().toLocaleString() };
    setPrivacyPolicies([newPolicy, ...privacyPolicies]);
    setContent("");
    toast.success("Privacy policy created successfully!");
  };

  const handleDeletePolicy = (index) => {
    const updatedPolicies = privacyPolicies.filter((_, i) => i !== index);
    setPrivacyPolicies(updatedPolicies);
    toast.success("Privacy policy deleted!");
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen ">
      <Header title="Privacy Policy" />
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
          <FiPlusCircle /> Create Privacy Policy
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
          <p className="text-gray-400 text-center">No privacy policies created yet.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Privacy;