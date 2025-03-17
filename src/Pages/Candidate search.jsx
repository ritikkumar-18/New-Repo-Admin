// import React, { useState, useEffect } from "react";
// import Header from "../components/Common/Header";
// import { motion } from "framer-motion";
// import { Search, X } from "lucide-react";

// const Candidate = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [filteredCandidates, setFilteredCandidates] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterSidebar, setFilterSidebar] = useState(false);
//   const [filters, setFilters] = useState({ skills: [], location: "", availability: "" });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     const mockData = [
//       { id: 1, name: "John Doe", location: "New York", skills: ["React", "Node.js"], available: true },
//       { id: 2, name: "Jane Smith", location: "San Francisco", skills: ["Python", "Django"], available: false },
//       { id: 3, name: "Alice Johnson", location: "Austin", skills: ["Figma", "UI/UX"], available: true },
//       { id: 4, name: "Bob Brown", location: "Seattle", skills: ["AWS", "Docker"], available: true },
//       { id: 5, name: "Michael Lee", location: "Chicago", skills: ["Angular", "TypeScript"], available: false },
//       { id: 6, name: "Sophia Green", location: "Los Angeles", skills: ["Java", "Spring"], available: true },
//       { id: 7, name: "Daniel White", location: "Miami", skills: ["PHP", "Laravel"], available: false },
//       { id: 8, name: "Emily Davis", location: "Boston", skills: ["HTML", "CSS"], available: true },
//     ];
//     setCandidates(mockData);
//     setFilteredCandidates(mockData);
//   }, []);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = candidates.filter(
//       (candidate) =>
//         candidate.name.toLowerCase().includes(query) ||
//         candidate.location.toLowerCase().includes(query) ||
//         candidate.skills.some((skill) => skill.toLowerCase().includes(query)) ||
//         (candidate.available && "available".includes(query)) ||
//         (!candidate.available && "not available".includes(query))
//     );
//     setFilteredCandidates(filtered);
//     setCurrentPage(1);
//   };

//   const handleFilterChange = (type, value) => {
//     setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
//   };

//   const handleAddSkill = (skill) => {
//     setFilters(prevFilters => ({ ...prevFilters, skills: [...prevFilters.skills, skill] }));
//   };

//   const handleRemoveSkill = (skill) => {
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       skills: prevFilters.skills.filter(s => s !== skill)
//     }));
//   };

//   const handleClearFilters = () => {
//     setFilters({ skills: [], location: "", availability: "" });
//   };

//   const handleApplyFilter = () => {
//     let filtered = candidates;

//     if (filters.skills.length > 0) {
//       filtered = filtered.filter(candidate =>
//         filters.skills.every(skill => candidate.skills.includes(skill))
//       );
//     }

//     if (filters.location) {
//       filtered = filtered.filter(candidate => candidate.location.toLowerCase().includes(filters.location.toLowerCase()));
//     }

//     if (filters.availability) {
//       filtered = filtered.filter(candidate => candidate.available === (filters.availability === 'available'));
//     }

//     setFilteredCandidates(filtered);
//     setFilterSidebar(false);
//     setCurrentPage(1);
//   };

//   const handlePagination = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const paginatedCandidates = filteredCandidates.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
//       <Header title={"Candidate Search"} />
//       <motion.div
//         className=""
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         {/* Search */}
//         <div className="py-6 px-4 mx-auto p-6 rounded-lg">
//           <div className="flex items-center gap-4">
//             <div className=" relative flex-grow">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 placeholder="Search.."
//                 className="py-2 border rounded bg-gray-800 text-white pl-10 sm:w-auto focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             </div>
//             <button
//               onClick={() => setFilterSidebar(!filterSidebar)}
//               className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-indigo-500"
//             >
//               Filters
//             </button>
//           </div>
//         </div>

//         {/* Filter Sidebar */}
//         {filterSidebar && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-gray-800 p-6 rounded-lg w-96 max-h-full overflow-hidden">
//               <div className="flex justify-end mb-4">
//                 <button onClick={() => setFilterSidebar(false)} className="text-gray-400 hover:text-white">
//                   <X size={24} />
//                 </button>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Skills:</label>
//                 <select
//                   multiple
//                   value={filters.skills}
//                   onChange={(e) => handleFilterChange('skills', Array.from(e.target.selectedOptions, option => option.value))}
//                   className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   style={{ height: 'auto' }} // Removing scrollbar
//                 >
//                   {["React", "Node.js", "Python", "Django", "UI/UX", "AWS", "Docker"].map(skill => (
//                     <option key={skill} value={skill}>{skill}</option>
//                   ))}
//                 </select>
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {filters.skills.map(skill => (
//                     <span key={skill} className="bg-indigo-500 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
//                       {skill} <button onClick={() => handleRemoveSkill(skill)} className="text-white text-xs ml-1">&times;</button>
//                     </span>
//                   ))}
//                 </div>
                
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Location:</label>
//                 <input
//                   type="text"
//                   value={filters.location}
//                   onChange={(e) => handleFilterChange('location', e.target.value)}
//                   placeholder="Enter Location"
//                   className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Availability:</label>
//                 <select
//                   value={filters.availability}
//                   onChange={(e) => handleFilterChange('availability', e.target.value)}
//                   className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 >
//                   <option value="">Select Availability</option>
//                   <option value="available">Available</option>
//                   <option value="not_available">Not Available</option>
//                 </select>
//               </div>
//               <button
//                 onClick={handleApplyFilter}
//                 className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
//               >
//                 Apply Filter
//               </button>
//               <button
//                 onClick={handleClearFilters}
//                 className="w-full mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Candidate Results */}
//         <div className="px-4 py-6 max-w-5xl mx-auto">
//           {paginatedCandidates.length === 0 ? (
//             <div className="bg-gray-800 p-6 rounded-lg text-center">
//               <p className="text-gray-400">No candidates found.</p>
//             </div>
//           ) : (
//             <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {paginatedCandidates.map((candidate) => (
//                 <motion.div
//                   key={candidate.id}
//                   className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//                  initial={{ opacity: 0, y: 20 }}
//                  animate={{ opacity: 1, y: 0 }}
//                  transition={{ delay: 0.2 }} >
//                   <h3 className="text-xl font-bold mb-2">{candidate.name}</h3>
//                   <p className="text-gray-400">{candidate.location}</p>
//                   <p className="mt-2"><strong>Skills:</strong> {candidate.skills.join(", ")}</p>
//                   <p className="mt-2">
//                     <strong>Availability:</strong>{" "}
//                     <span
//                       className={candidate.available ? "text-green-400" : "text-red-400"}
//                     >
//                       {candidate.available ? "Available" : "Not Available"}
//                     </span>
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center space-x-2 my-4">
//           {Array.from(
//             { length: Math.ceil(filteredCandidates.length / itemsPerPage) },
//             (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePagination(index + 1)}
//                 className={`px-4 py-2 rounded-md ${
//                   currentPage === index + 1
//                     ? "bg-indigo-500 text-white"
//                     : "bg-gray-700 text-gray-300"
//                 } hover:bg-indigo-600`}
//               >
//                 {index + 1}
//               </button>
//             )
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Candidate;
// import React, { useState, useEffect } from "react";
// import Header from "../components/Common/Header";
// import { motion } from "framer-motion";
// import { Search, X } from "lucide-react";
// import { CheckCircle, XCircle } from "lucide-react";


// const Candidate = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [filteredCandidates, setFilteredCandidates] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterSidebar, setFilterSidebar] = useState(false);
//   const [filters, setFilters] = useState({ skills: [], location: "", availability: "" });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     const mockData = [
//       { id: 1, name: "John Doe", location: "New York", skills: ["React", "Node.js"],phone:9080989, available: true, salary:"$12345",email:"r.@gmail.com" },
//       { id: 2, name: "Jane Smith", location: "San Francisco", skills: ["Python", "Django"], phone:9080989,available: false, salary:"$12345",email:"r.@gmail.com" },
//       { id: 3, name: "Alice Johnson", location: "Austin", skills: ["Figma", "UI/UX"], phone:9080989,available: true, salary:"$12345",email:"r.@gmail.com" },
//       { id: 4, name: "Bob Brown", location: "Seattle", skills: ["AWS", "Docker"], phone:9080989,available: true, salary:"$12345",email:"r.@gmail.com" },
//       { id: 5, name: "Michael Lee", location: "Chicago", skills: ["Angular", "TypeScript"],phone:9080989, available: false, salary:"$12345",email:"r.@gmail.com" },
//       { id: 6, name: "Sophia Green", location: "Los Angeles", skills: ["Java", "Spring"], phone:9080989,available: true, salary:"$12345",email:"r.@gmail.com" },
//       { id: 7, name: "Daniel White", location: "Miami", skills: ["PHP", "Laravel"], phone:9080989,available: false, salary:"$12345",email:"r.@gmail.com" },
//       { id: 8, name: "Emily Davis", location: "Boston", skills: ["HTML", "CSS"],phone:9080989, available: true, salary:"$12345",email:"r.@gmail.com" },
//     ];
//     setCandidates(mockData);
//     setFilteredCandidates(mockData);
//   }, []);
//   const handleSearch = (e) => {
//         const query = e.target.value.toLowerCase();
//         setSearchQuery(query);
    
//         const filtered = candidates.filter(
//           (candidate) =>
//             candidate.name.toLowerCase().includes(query) ||
//             candidate.location.toLowerCase().includes(query) ||
//             candidate.skills.some((skill) => skill.toLowerCase().includes(query)) ||
//             (candidate.available && "available".includes(query)) ||
//             (!candidate.available && "not available".includes(query))
//         );
//         setFilteredCandidates(filtered);
//         setCurrentPage(1);
//       };
    
//       const handleFilterChange = (type, value) => {
//         setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
//       };
    
//       const handleAddSkill = (skill) => {
//         setFilters(prevFilters => ({ ...prevFilters, skills: [...prevFilters.skills, skill] }));
//       };
    
//       const handleRemoveSkill = (skill) => {
//         setFilters(prevFilters => ({
//           ...prevFilters,
//           skills: prevFilters.skills.filter(s => s !== skill)
//         }));
//       };
    
//       const handleClearFilters = () => {
//         setFilters({ skills: [], location: "", availability: "" });
//       };
    
//       const handleApplyFilter = () => {
//         let filtered = candidates;
    
//         if (filters.skills.length > 0) {
//           filtered = filtered.filter(candidate =>
//             filters.skills.every(skill => candidate.skills.includes(skill))
//           );
//         }
    
//         if (filters.location) {
//           filtered = filtered.filter(candidate => candidate.location.toLowerCase().includes(filters.location.toLowerCase()));
//         }
    
//         if (filters.availability) {
//           filtered = filtered.filter(candidate => candidate.available === (filters.availability === 'available'));
//         }
    
//         setFilteredCandidates(filtered);
//         setFilterSidebar(false);
//         setCurrentPage(1);
//       };
    
//       const handlePagination = (pageNumber) => {
//         setCurrentPage(pageNumber);
//       };
    

//   const paginatedCandidates = filteredCandidates.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
//       <Header title={"Candidate Search"} />
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <div className=" mx-auto p-4 rounded-lg">
//            <div className="flex items-center gap-4">
//              <div className=" relative flex-grow">
//                <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 placeholder="Search.."
//                 className="py-2 border rounded bg-gray-800 text-white pl-10 sm:w-auto focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             </div>
//             <button
//               onClick={() => setFilterSidebar(!filterSidebar)}
//               className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-indigo-500"
//             >
//               Filters
//             </button>
//           </div>
//         </div>
//         {/* Filter Sidebar */}
//         {filterSidebar && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-gray-800 p-6 rounded-lg w-96 max-h-full overflow-hidden">
//               <div className="flex justify-end mb-4">
//                 <button onClick={() => setFilterSidebar(false)} className="text-gray-400 hover:text-white">
//                   <X size={24} />
//                 </button>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Skills:</label>
//                 <select
//                   multiple
//                   value={filters.skills}
//                   onChange={(e) => handleFilterChange('skills', Array.from(e.target.selectedOptions, option => option.value))}
//                   className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   style={{ height: 'auto' }} >
//                   {["React", "Node.js", "Python", "Django", "UI/UX", "AWS", "Docker"].map(skill => (
//                     <option key={skill} value={skill}>{skill}</option>
//                   ))}
//                 </select>
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {filters.skills.map(skill => (
//                     <span key={skill} className="bg-indigo-500 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
//                       {skill} <button onClick={() => handleRemoveSkill(skill)} className="text-white text-xs ml-1">&times;</button>
//                     </span>
//                   ))}
//                 </div>
                
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Location:</label>
//                 <input
//                   type="text"
//                   value={filters.location}
//                   onChange={(e) => handleFilterChange('location', e.target.value)}
//                   placeholder="Enter Location"
//                   className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-white">Availability:</label>
//                 <select
//                   value={filters.availability}
//                   onChange={(e) => handleFilterChange('availability', e.target.value)}
//                   className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 >
//                   <option value="">Select Availability</option>
//                   <option value="available">Available</option>
//                   <option value="not_available">Not Available</option>
//                 </select>
//               </div>
//               <button
//                 onClick={handleApplyFilter}
//                 className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
//               >
//                 Apply Filter
//               </button>
//               <button
//                 onClick={handleClearFilters}
//                 className="w-full mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           </div>
//         )}


//         {/* Candidate Table */}
//   <div className=" max-w-5xl mx-auto w-full overflow-x-auto">
//   {paginatedCandidates.length === 0 ? (
//     <div className="bg-gray-800  rounded-lg text-center">
//       <p className="text-gray-400">No candidates found.</p>
//     </div>
//   ) : (
//     <div className="bg-gray-900  rounded-lg shadow-xl overflow-x-auto">
//       <table className="w-full text-white border border-gray-700 min-w-[600px]">
//         <thead>
//           <tr className="bg-gray-700 text-left text-sm md:text-base">
//             <th className="py-3 px-5 border border-gray-600">Name</th>
//             <th className="py-3 px-5 border border-gray-600">Location</th>
//             <th className="py-3 px-5 border border-gray-600">Email</th>
//             <th className="py-3 px-5 border border-gray-600">Contact</th>
//             <th className="py-3 px-5 border border-gray-600">Salary</th>
//             <th className="py-3 px-5 border border-gray-600">Skills</th>
//             <th className="py-3 px-5 text-center border border-gray-600">Availability</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedCandidates.map((candidate, index) => (
//             <tr key={candidate.id} className="bg-gray-800  transition-all duration-300">
//               <td className="py-4 px-6 border border-gray-600 font-medium whitespace-nowrap">{candidate.name}</td>
//               <td className="py-4 px-6 border border-gray-600 whitespace-nowrap">{candidate.location}</td>
//               <td className="py-4 px-6 border border-gray-600 whitespace-nowrap">{candidate.email}</td>
//               <td className="py-4 px-6 border border-gray-600 whitespace-nowrap">{candidate.phone}</td>
//               <td className="py-4 px-6 border border-gray-600 whitespace-nowrap">{candidate.salary}</td>
//               <td className="py-4 px-6 border border-gray-600 whitespace-nowrap">{candidate.skills.join(", ")}</td>
//               <td className="py-4 px-6 text-center border border-gray-600">
//                 <span className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold ${candidate.available ? "text-green-400 bg-green-900/40" : "text-red-400 bg-red-900/40"}`}>
//                   {candidate.available ? <CheckCircle size={20} /> : <XCircle size={20} />}
//                   {candidate.available ? "Available" : "Not Available"}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )}
//      </div>
//         {/* Pagination */}
//         <div className="flex justify-center space-x-2 my-4">
//            {Array.from(
//             { length: Math.ceil(filteredCandidates.length / itemsPerPage) },
//             (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePagination(index + 1)}
//                 className={`px-4 py-2 rounded-md ${
//                   currentPage === index + 1
//                     ? "bg-indigo-500 text-white"
//                     : "bg-gray-700 text-gray-300"
//                 } hover:bg-indigo-600`}
//               >
//                 {index + 1}
//               </button>
//             )
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Candidate;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, X, Edit2, Trash2, Eye, Filter, Mail, Phone,
  Building, Calendar, GraduationCap, Briefcase, MapPin,
  DollarSign, Clock, Award, Save, AlertCircle, User, Folder, Info, Users
} from "lucide-react";
import Header from "../components/Common/Header";

function Candidate() {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSidebar, setFilterSidebar] = useState(false);
  const [detailsSidebar, setDetailsSidebar] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [filters, setFilters] = useState({
    skills: "",
    location: "",
    experience: "",
    department: "",
    jobType: ""
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
        phone: "+1 (908) 098-9890",
        location: "New York, USA",
        skills: ["React", "Node.js", "TypeScript", "AWS"],
        experience: "5 years",
        department: "Engineering",
        education: {
          degree: "MS Computer Science",
          university: "Stanford University",
          year: "2019"
        },
        jobType: "Remote",
        lastPosition: "Senior Developer",
        company: "Tech Corp",
        joinDate: "2024-01-15",
        salary: "$120,000",
        projects: ["E-commerce Platform", "CRM System", "Mobile Candidate"],
        certifications: ["AWS Solutions Architect", "React Native Specialist"],
        languages: ["English", "Spanish"],
        availability: "2 weeks",
        notice: "30 days",
        references: [
          {
            name: "Sarah Johnson",
            position: "Tech Lead",
            company: "Previous Corp",
            contact: "sarah@email.com"
          }
        ]
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@gmail.com",
        phone: "+1 (415) 555-0123",
        location: "San Francisco, USA",
        skills: ["UI/UX", "Figma", "Adobe XD", "HTML/CSS"],
        experience: "4 years",
        department: "Design",
        education: {
          degree: "BFA Design",
          university: "Rhode Island School of Design",
          year: "2020"
        },
        jobType: "Remote",
        lastPosition: "Senior UI Designer",
        company: "Design Studio",
        joinDate: "2024-02-01",
        salary: "$95,000",
        projects: ["Brand Redesign", "Mobile Candidate UI", "Web Platform"],
        certifications: ["Google UX Design", "Figma Advanced"],
        languages: ["English", "French"],
        availability: "Immediate",
        notice: "2 weeks",
        references: [
          {
            name: "Mike Wilson",
            position: "Design Director",
            company: "Creative Co",
            contact: "mike@email.com"
          }
        ]
      },
      {
        id: 3,
        name: "Joe",
        email: "joe.@gmail.com",
        phone: "+1 (415) 555-0123",
        location: "San Francisco, USA",
        skills: ["UI/UX", "Figma", "Adobe XD"],
        experience: "8 years",
        department: "Design",
        education: {
          degree: "BFA Design",
          university: "Rhode Island School of Design",
          year: "2020"
        },
        jobType: "Remote",
        lastPosition: "Senior UI Designer",
        company: "Design Studio",
        joinDate: "2024-02-01",
        salary: "$95,000",
        projects: ["Brand Redesign", "Mobile Candidate UI", "Web Platform"],
        certifications: ["Google UX Design", "Figma Advanced"],
        languages: ["English", "French"],
        availability: "Immediate",
        notice: "2 weeks",
        references: [
          {
            name: "Mike Wilson",
            position: "Design Director",
            company: "Creative Co",
            contact: "mike@email.com"
          }
        ]
      },
      {
        id: 4,
        name: "Smith",
        email: "smith@gmail.com",
        phone: "+1 (415) 555-0123",
        location: "San Francisco, USA",
        skills: ["UI/UX", "Figma", "HTML/CSS"],
        experience: "1.5 years",
        department: "Design",
        education: {
          degree: "BFA Design",
          university: "Rhode Island School of Design",
          year: "2020"
        },
        jobType: "Remote",
        lastPosition: "Senior UI Designer",
        company: "Design Studio",
        joinDate: "2024-02-01",
        salary: "$95,000",
        projects: ["Brand Redesign", "Mobile Candidate UI", "Web Platform"],
        certifications: ["Google UX Design", "Figma Advanced"],
        languages: ["English", "French"],
        availability: "Immediate",
        notice: "2 weeks",
        references: [
          {
            name: "Mike Wilson",
            position: "Design Director",
            company: "Creative Co",
            contact: "mike@email.com"
          }
        ]
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@gmail.com",
        phone: "+1 (415) 555-0123",
        location: "San Francisco, USA",
        skills: ["UI/UX", "Figma", "Adobe XD", "HTML/CSS"],
        experience: "4 years",
        department: "Design",
        education: {
          degree: "BFA Design",
          university: "Rhode Island School of Design",
          year: "2020"
        },
        jobType: "Remote",
        lastPosition: "Senior UI Designer",
        company: "Design Studio",
        joinDate: "2024-02-01",
        salary: "$95,000",
        projects: ["Brand Redesign", "Mobile Candidate UI", "Web Platform"],
        certifications: ["Google UX Design", "Figma Advanced"],
        languages: ["English", "French"],
        availability: "Immediate",
        notice: "2 weeks",
        references: [
          {
            name: "Mike Wilson",
            position: "Design Director",
            company: "Creative Co",
            contact: "mike@email.com"
          }
        ]
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@gmail.com",
        phone: "+1 (415) 555-0123",
        location: "San Francisco, USA",
        skills: ["UI/UX", "Figma", "Adobe XD", "HTML/CSS"],
        experience: "4 years",
        department: "Design",
        education: {
          degree: "BFA Design",
          university: "Rhode Island School of Design",
          year: "2020"
        },
        jobType: "Remote",
        lastPosition: "Senior UI Designer",
        company: "Design Studio",
        joinDate: "2024-02-01",
        salary: "$95,000",
        projects: ["Brand Redesign", "Mobile Candidate UI", "Web Platform"],
        certifications: ["Google UX Design", "Figma Advanced"],
        languages: ["English", "French"],
        availability: "Immediate",
        notice: "2 weeks",
        references: [
          {
            name: "Mike Wilson",
            position: "Design Director",
            company: "Creative Co",
            contact: "mike@email.com"
          }
        ]
      },
      {
        id: 2,
        name: "kane",
        email: "kane@gmail.com",
        phone: "+1 (415) 555-0123",
        location: "San Francisco, USA",
        skills: ["UI/UX", "Figma", "Adobe XD", "HTML/CSS"],
        experience: "4 years",
        department: "Design",
        education: {
          degree: "BFA Design",
          university: "Rhode Island School of Design",
          year: "2020"
        },
        jobType: "Remote",
        lastPosition: "Senior UI Designer",
        company: "Design Studio",
        joinDate: "2024-02-01",
        salary: "$95,000",
        projects: ["Brand Redesign", "Mobile Candidate UI", "Web Platform"],
        certifications: ["Google UX Design", "Figma Advanced"],
        languages: ["English", "French"],
        availability: "Immediate",
        notice: "2 weeks",
        references: [
          {
            name: "Wilson",
            position: "Design Director",
            company: "Creative Co",
            contact: "wilson@email.com"
          }
        ]
      },
    ];
    setCandidates(mockData);
    setFilteredCandidates(mockData);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    applyFilters(query, filters);
  };

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    applyFilters(searchQuery, newFilters);
  };

  const applyFilters = (query, currentFilters) => {
    let filtered = candidates.filter((candidate) => {
      const matchesSearch =
        candidate.name.toLowerCase().includes(query) ||
        candidate.email.toLowerCase().includes(query) ||
        candidate.department.toLowerCase().includes(query) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(query));

      const matchesSkills = !currentFilters.skills ||
        candidate.skills.some(skill =>
          skill.toLowerCase().includes(currentFilters.skills.toLowerCase())
        );

      const matchesLocation = !currentFilters.location ||
        candidate.location.toLowerCase().includes(currentFilters.location.toLowerCase());

      const matchesExperience = !currentFilters.experience ||
        candidate.experience.toLowerCase().includes(currentFilters.experience.toLowerCase());

      const matchesDepartment = !currentFilters.department ||
        candidate.department.toLowerCase().includes(currentFilters.department.toLowerCase());

      const matchesJobType = !currentFilters.jobType ||
        candidate.jobType.toLowerCase().includes(currentFilters.jobType.toLowerCase());

      return matchesSearch && matchesSkills && matchesLocation &&
        matchesExperience && matchesDepartment && matchesJobType;
    });

    setFilteredCandidates(filtered);
    setCurrentPage(1);
  };

  const handleAction = (action, candidate) => {
    setSelectedCandidate(candidate);

    switch (action) {
      case 'view':
        setEditMode(false);
        setDetailsSidebar(true);
        break;
      case 'edit':
        setEditMode(true);
        setDetailsSidebar(true);
        break;
      case 'delete':
        if (window.confirm('Are you sure you want to delete this candidate?')) {
          const updatedCandidates = candidates.filter(c => c.id !== candidate.id);
          setCandidates(updatedCandidates);
          setFilteredCandidates(updatedCandidates);
        }
        break;
    }
  };

  const handleSave = () => {
    if (selectedCandidate) {
      const updatedCandidates = candidates.map(c =>
        c.id === selectedCandidate.id ? selectedCandidate : c
      );
      setCandidates(updatedCandidates);
      setFilteredCandidates(updatedCandidates);
      setEditMode(false);
      setDetailsSidebar(false);
    }
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedCandidates = filteredCandidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Shortlisted Candidates" />

        <motion.div className="p-6"
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.5}}>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search candidates..."
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button
            onClick={() => setFilterSidebar(true)}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Filter Sidebar */}
        <AnimatePresence>
          {filterSidebar && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setFilterSidebar(false)}
                className="fixed inset-0 bg-black z-40"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                className="fixed right-0 top-0 h-full w-96 bg-gray-800 p-6 shadow-xl z-50 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-white">Filters</h2>
                  <button
                    onClick={() => setFilterSidebar(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Skills</label>
                    <input
                      type="text"
                      value={filters.skills}
                      onChange={(e) => handleFilterChange('skills', e.target.value)}
                      placeholder="Search skills..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Experience</label>
                    <input
                      type="text"
                      value={filters.experience}
                      onChange={(e) => handleFilterChange('experience', e.target.value)}
                      placeholder="Filter by experience..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Department</label>
                    <input
                      type="text"
                      value={filters.department}
                      onChange={(e) => handleFilterChange('department', e.target.value)}
                      placeholder="Filter by department..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Job Type</label>
                    <input
                      type="text"
                      value={filters.jobType}
                      onChange={(e) => handleFilterChange('jobType', e.target.value)}
                      placeholder="Filter by job type..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Location</label>
                    <input
                      type="text"
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      placeholder="Filter by location..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Details Sidebar */}
        <AnimatePresence>
          {detailsSidebar && selectedCandidate && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setDetailsSidebar(false)}
                className="fixed inset-0 bg-black z-40"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                className="fixed right-0 top-0 h-full w-[600px] bg-gray-800 shadow-xl z-50 overflow-y-auto"
              >
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-white">
                      {editMode ? "Edit Candidate" : "Candidate Details"}
                    </h2>
                    <div className="flex gap-2">
                      {editMode && (
                        <button
                          onClick={handleSave}
                          className="p-2 text-green-400 hover:text-green-300 transition-colors"
                          title="Save Changes"
                        >
                          <Save size={20} />
                        </button>
                      )}
                      <button
                        onClick={() => setDetailsSidebar(false)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <User size={20} /> Basic Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400">Name</label>
                        <input
                          type="text"
                          value={selectedCandidate.name}
                          readOnly={!editMode}
                          className="w-full bg-gray-700 text-white rounded p-2 mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Email</label>
                        <div className="flex items-center gap-2 text-white mt-1">
                          <Mail size={16} className="text-gray-400" />
                          <span>{selectedCandidate.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Briefcase size={20} /> Professional Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400">Current Position</label>
                        <div className="text-white mt-1">{selectedCandidate.lastPosition}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Company</label>
                        <div className="text-white mt-1">{selectedCandidate.company}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Experience</label>
                        <div className="text-white mt-1">{selectedCandidate.experience}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Department</label>
                        <div className="text-white mt-1">{selectedCandidate.department}</div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Award size={20} /> Skills & Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCandidate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm bg-purple-900/40 text-purple-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <GraduationCap size={20} /> Education
                    </h3>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="text-white">{selectedCandidate.education.degree}</div>
                      <div className="text-gray-400">{selectedCandidate.education.university}</div>
                      <div className="text-gray-400">Graduated: {selectedCandidate.education.year}</div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Folder size={20} /> Projects
                    </h3>
                    <ul className="space-y-2">
                      {selectedCandidate.projects.map((project, index) => (
                        <li key={index} className="text-white">{project}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Info size={20} /> Additional Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400">Availability</label>
                        <div className="text-white mt-1">{selectedCandidate.availability}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Notice Period</label>
                        <div className="text-white mt-1">{selectedCandidate.notice}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Languages</label>
                        <div className="text-white mt-1">{selectedCandidate.languages.join(", ")}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Expected Salary</label>
                        <div className="text-white mt-1">{selectedCandidate.salary}</div>
                      </div>
                    </div>
                  </div>

                  {/* References */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Users size={20} /> References
                    </h3>
                    {selectedCandidate.references.map((reference, index) => (
                      <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                        <div className="text-white font-medium">{reference.name}</div>
                        <div className="text-gray-400">{reference.position}</div>
                        <div className="text-gray-400">{reference.company}</div>
                        <div className="text-gray-400">{reference.contact}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Candidate Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-700">
          {paginatedCandidates.length === 0 ? (
            <div className="bg-gray-800 p-8 text-center rounded-lg">
              <p className="text-gray-400">No candidates found.</p>
            </div>
          ) : (
            <table className="w-full text-white">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Experience</th>
                  <th className="p-4 text-left">Location</th>
                  <th className="p-4 text-left">Job Type</th>
                  <th className="p-4 text-left">Skills</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCandidates.map((candidate) => (
                  <tr key={candidate.id} className="border-t border-gray-700 hover:bg-gray-800/50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-sm text-gray-400">{candidate.email}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{candidate.department}</div>
                      <div className="text-sm text-gray-400">{candidate.lastPosition}</div>
                    </td>
                    <td className="p-4">{candidate.experience}</td>
                    <td className="p-4">{candidate.location}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-purple-900/40 text-purple-400">
                        {candidate.jobType}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 rounded-full text-xs bg-gray-700 text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleAction('view', candidate)}
                          className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleAction('edit', candidate)}
                          className="p-1 text-green-400 hover:text-green-300 transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleAction('delete', candidate)}
                          className="p-1 text-red-400 hover:text-red-300 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {Array.from(
              { length: Math.ceil(filteredCandidates.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePagination(index + 1)}
                  className={`
                    px-4 py-2 rounded-lg transition-colors
                    ${currentPage === index + 1
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }
                  `}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Candidate;