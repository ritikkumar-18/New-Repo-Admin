import React, { useState, useEffect } from "react";
import Header from "../components/Common/Header";
import { motion } from "framer-motion";

const Candidate = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Mock candidate data
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
    setCurrentPage(1); // Reset to first page
  };

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);

    const sorted = [...filteredCandidates].sort((a, b) => {
      if (option === "name") return a.name.localeCompare(b.name);
      if (option === "availability") return a.available === b.available ? 0 : a.available ? -1 : 1;
      return 0;
    });

    setFilteredCandidates(sorted);
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
    <motion.div className=""
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>

      {/* Search and Sort */}
      <div className="py-6 px-4 max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="p-4 rounded-lg w-auto bg-gray-700 placeholder-gray-400 focus:ring-4 ring-indigo-500 shadow-md flex-grow"
            placeholder="Search by name, location, skills, availability..." />
          <select
            value={sortOption}
            onChange={handleSort}
            className="p-4 rounded-lg bg-gray-700 placeholder-gray-400 focus:ring-4 ring-indigo-500 shadow-md" >
            <option value="name">Sort by Name</option>
            <option value="availability">Sort by Availability</option>
          </select>
        </div>
      </div>
      <div className="px-4 py-6 max-w-5xl mx-auto">
        {paginatedCandidates.length === 0 ? (
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <p className="text-gray-400">No candidates found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCandidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">
                  {candidate.name}
                  {searchQuery && (
                    <span className="text-indigo-400">
                      {" "}
                      ({searchQuery.includes(candidate.name.toLowerCase()) && "Matched!"})
                    </span>
                  )}
                </h3>
                <p className="text-gray-400">{candidate.location}</p>
                <p className="mt-2">
                  <strong>Skills:</strong> {candidate.skills.join(", ")}
                </p>
                <p className="mt-2">
                  <strong>Availability:</strong>{" "}
                  <span
                    className={
                      candidate.available ? "text-green-400" : "text-red-400"
                    }>
                    {candidate.available ? "Available" : "Not Available"}
                  </span>
                </p>
              </div>
            ))}
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
              } hover:bg-indigo-600`}>
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
