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
import React, { useState, useEffect } from "react";
import Header from "../components/Common/Header";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { CheckCircle, XCircle } from "lucide-react";


const Candidate = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSidebar, setFilterSidebar] = useState(false);
  const [filters, setFilters] = useState({ skills: [], location: "", availability: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const mockData = [
      { id: 1, name: "John Doe", location: "New York", skills: ["React", "Node.js"], available: true },
      { id: 2, name: "Jane Smith", location: "San Francisco", skills: ["Python", "Django"], available: false },
      { id: 3, name: "Alice Johnson", location: "Austin", skills: ["Figma", "UI/UX"], available: true },
      { id: 4, name: "Bob Brown", location: "Seattle", skills: ["AWS", "Docker"], available: true },
      { id: 5, name: "Michael Lee", location: "Chicago", skills: ["Angular", "TypeScript"], available: false },
      { id: 6, name: "Sophia Green", location: "Los Angeles", skills: ["Java", "Spring"], available: true },
      { id: 7, name: "Daniel White", location: "Miami", skills: ["PHP", "Laravel"], available: false },
      { id: 8, name: "Emily Davis", location: "Boston", skills: ["HTML", "CSS"], available: true },
    ];
    setCandidates(mockData);
    setFilteredCandidates(mockData);
  }, []);
  const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        const filtered = candidates.filter(
          (candidate) =>
            candidate.name.toLowerCase().includes(query) ||
            candidate.location.toLowerCase().includes(query) ||
            candidate.skills.some((skill) => skill.toLowerCase().includes(query)) ||
            (candidate.available && "available".includes(query)) ||
            (!candidate.available && "not available".includes(query))
        );
        setFilteredCandidates(filtered);
        setCurrentPage(1);
      };
    
      const handleFilterChange = (type, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
      };
    
      const handleAddSkill = (skill) => {
        setFilters(prevFilters => ({ ...prevFilters, skills: [...prevFilters.skills, skill] }));
      };
    
      const handleRemoveSkill = (skill) => {
        setFilters(prevFilters => ({
          ...prevFilters,
          skills: prevFilters.skills.filter(s => s !== skill)
        }));
      };
    
      const handleClearFilters = () => {
        setFilters({ skills: [], location: "", availability: "" });
      };
    
      const handleApplyFilter = () => {
        let filtered = candidates;
    
        if (filters.skills.length > 0) {
          filtered = filtered.filter(candidate =>
            filters.skills.every(skill => candidate.skills.includes(skill))
          );
        }
    
        if (filters.location) {
          filtered = filtered.filter(candidate => candidate.location.toLowerCase().includes(filters.location.toLowerCase()));
        }
    
        if (filters.availability) {
          filtered = filtered.filter(candidate => candidate.available === (filters.availability === 'available'));
        }
    
        setFilteredCandidates(filtered);
        setFilterSidebar(false);
        setCurrentPage(1);
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
      <Header title={"Candidate Search"} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="py-6 px-4 mx-auto p-6 rounded-lg">
           <div className="flex items-center gap-4">
             <div className=" relative flex-grow">
               <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search.."
                className="py-2 border rounded bg-gray-800 text-white pl-10 sm:w-auto focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button
              onClick={() => setFilterSidebar(!filterSidebar)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-indigo-500"
            >
              Filters
            </button>
          </div>
        </div>
        {/* Filter Sidebar */}
        {filterSidebar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-96 max-h-full overflow-hidden">
              <div className="flex justify-end mb-4">
                <button onClick={() => setFilterSidebar(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-white">Skills:</label>
                <select
                  multiple
                  value={filters.skills}
                  onChange={(e) => handleFilterChange('skills', Array.from(e.target.selectedOptions, option => option.value))}
                  className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  style={{ height: 'auto' }} >
                  {["React", "Node.js", "Python", "Django", "UI/UX", "AWS", "Docker"].map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
                <div className="mt-2 flex flex-wrap gap-2">
                  {filters.skills.map(skill => (
                    <span key={skill} className="bg-indigo-500 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                      {skill} <button onClick={() => handleRemoveSkill(skill)} className="text-white text-xs ml-1">&times;</button>
                    </span>
                  ))}
                </div>
                
              </div>
              <div className="mb-4">
                <label className="block text-white">Location:</label>
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  placeholder="Enter Location"
                  className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Availability:</label>
                <select
                  value={filters.availability}
                  onChange={(e) => handleFilterChange('availability', e.target.value)}
                  className="w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Availability</option>
                  <option value="available">Available</option>
                  <option value="not_available">Not Available</option>
                </select>
              </div>
              <button
                onClick={handleApplyFilter}
                className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
              >
                Apply Filter
              </button>
              <button
                onClick={handleClearFilters}
                className="w-full mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}


        {/* Candidate Table */}
  <div className="px-4 py-6 max-w-5xl mx-auto w-full overflow-x-auto">
  {paginatedCandidates.length === 0 ? (
    <div className="bg-gray-800  rounded-lg text-center">
      <p className="text-gray-400">No candidates found.</p>
    </div>
  ) : (
    <div className="bg-gray-900  rounded-lg shadow-xl overflow-x-auto">
      <table className="w-full text-white border border-gray-700 min-w-[600px]">
        <thead>
          <tr className="bg-gray-700 text-left text-sm md:text-base">
            <th className="py-3 px-5 border border-gray-600">Serial No.</th>
            <th className="py-3 px-5 border border-gray-600">Name</th>
            <th className="py-3 px-5 border border-gray-600">Location</th>
            <th className="py-3 px-5 border border-gray-600">Skills</th>
            <th className="py-3 px-5 text-center border border-gray-600">Availability</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCandidates.map((candidate, index) => (
            <tr key={candidate.id} className="bg-gray-800  transition-all duration-300">
              <td className="py-4 px-6 border border-gray-600 text-center">{index + 1}</td>
              <td className="py-4 px-6 border border-gray-600 font-medium whitespace-nowrap">{candidate.name}</td>
              <td className="py-4 px-6 border border-gray-600 whitespace-nowrap">{candidate.location}</td>
              <td className="py-4 px-6 border border-gray-600 whitespace-nowrap">{candidate.skills.join(", ")}</td>
              <td className="py-4 px-6 text-center border border-gray-600">
                <span className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold ${candidate.available ? "text-green-400 bg-green-900/40" : "text-red-400 bg-red-900/40"}`}>
                  {candidate.available ? <CheckCircle size={20} /> : <XCircle size={20} />}
                  {candidate.available ? "Available" : "Not Available"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
     </div>
        {/* Pagination */}
        <div className="flex justify-center space-x-2 my-4">
           {Array.from(
            { length: Math.ceil(filteredCandidates.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePagination(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-700 text-gray-300"
                } hover:bg-indigo-600`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Candidate;
