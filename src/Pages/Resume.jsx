import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast, Toaster } from "react-hot-toast"
import {
  Search,
  X,
  Eye,
  Filter,
  Download,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Building,
  GraduationCap,
  FileText,
  Calendar,
  Award,
  Clock,
} from "lucide-react"
import Header from "../components/Common/Header"

const ResumeSearch = () => {
  
  const [candidates, setCandidates] = useState([])
  const [filteredCandidates, setFilteredCandidates] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [filterSidebar, setFilterSidebar] = useState(false)
  const [detailsSidebar, setDetailsSidebar] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const itemsPerPage = 5

  
  const [filters, setFilters] = useState({
    skills: "",
    location: "",
    experience: "",
    department: "",
    jobType: "",
    education: "",
  })

  
  useEffect(() => {
    const mockCandidates = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 (908) 098-9890",
        location: "New York, USA",
        skills: ["React", "Node.js", "TypeScript", "AWS"],
        experience: "5 years",
        department: "Engineering",
        profession: "Software Engineer",
        education: {
          degree: "MS Computer Science",
          university: "Stanford University",
          year: "2019",
        },
        jobType: "Remote",
        lastPosition: "Senior Developer",
        company: "Tech Corp",
        joinDate: "2024-01-15",
        salary: "$120,000",
        projects: ["E-commerce Platform", "CRM System", "Mobile App"],
        certifications: ["AWS Solutions Architect", "React Native Specialist"],
        languages: ["English", "Spanish"],
        availability: "2 weeks",
        notice: "30 days",
        bookmarked: false,
        profile: "https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
        resumeUrl: "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1 (415) 555-0123",
        location: "San Francisco, USA",
        skills: ["UI/UX", "Figma", "Adobe XD", "HTML/CSS"],
        experience: "4 years",
        department: "Design",
        profession: "UI/UX Designer",
        education: {
          degree: "BFA Design",
          university: "Rhode Island School of Design",
          year: "2020",
        },
        jobType: "Remote",
        lastPosition: "Senior UI Designer",
        company: "Design Studio",
        joinDate: "2024-02-01",
        salary: "$95,000",
        projects: ["Brand Redesign", "Mobile App UI", "Web Platform"],
        certifications: ["Google UX Design", "Figma Advanced"],
        languages: ["English", "French"],
        availability: "Immediate",
        notice: "2 weeks",
        bookmarked: true,
        profile: "https://cdn-icons-png.flaticon.com/128/1999/1999625.png",
        resumeUrl: "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
      },
      {
        id: 3,
        name: "Samuel Green",
        email: "samuel.green@example.com",
        phone: "+1 (555) 123-4567",
        location: "Chicago, USA",
        skills: ["Python", "Data Analysis", "Machine Learning", "SQL"],
        experience: "6 years",
        department: "Data Science",
        profession: "Data Scientist",
        education: {
          degree: "PhD Statistics",
          university: "University of Chicago",
          year: "2018",
        },
        jobType: "Full-time",
        lastPosition: "Lead Data Scientist",
        company: "Data Insights Inc",
        joinDate: "2023-11-15",
        salary: "$135,000",
        projects: ["Predictive Analytics Tool", "Customer Segmentation", "Recommendation Engine"],
        certifications: ["TensorFlow Developer", "AWS Machine Learning"],
        languages: ["English", "German"],
        availability: "1 month",
        notice: "45 days",
        bookmarked: false,
        profile: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
        resumeUrl: "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
      },
      {
        id: 4,
        name: "Emily Brown",
        email: "emily.brown@example.com",
        phone: "+1 (555) 987-6543",
        location: "Austin, USA",
        skills: ["Project Management", "Agile", "Scrum", "JIRA"],
        experience: "8 years",
        department: "Product",
        profession: "DevOps Engineer",
        education: {
          degree: "MBA",
          university: "University of Texas",
          year: "2016",
        },
        jobType: "Full-time",
        lastPosition: "Senior Product Manager",
        company: "Tech Solutions",
        joinDate: "2023-09-01",
        salary: "$125,000",
        projects: ["SaaS Platform Launch", "Mobile App Redesign", "Enterprise Solution"],
        certifications: ["Certified Scrum Master", "Product Management Professional"],
        languages: ["English"],
        availability: "2 months",
        notice: "60 days",
        bookmarked: false,
        profile: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
        resumeUrl: "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
      },
      {
        id: 5,
        name: "S. Doe",
        email: "s.doe@example.com",
        phone: "+1 (555) 234-5678",
        location: "Seattle, USA",
        skills: ["Swift", "Kotlin", "React Native", "Flutter"],
        experience: "7 years",
        department: "Engineering",
        profession: "Mobile Engineer",
        education: {
          degree: "BS Computer Science",
          university: "University of Washington",
          year: "2017",
        },
        jobType: "Remote",
        lastPosition: "Mobile Lead",
        company: "App Systems",
        joinDate: "2023-10-15",
        salary: "$130,000",
        projects: ["iOS App", "Android App", "Cross-platform Solution"],
        certifications: ["Apple Developer", "Google Developer"],
        languages: ["English", "Mandarin"],
        availability: "3 weeks",
        notice: "30 days",
        bookmarked: true,
        profile: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png",
        resumeUrl: "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
      },
      {
        id: 6,
        name: "Gian Smith",
        email: "gian.smith@example.com",
        phone: "+1 (555) 345-6789",
        location: "Miami, USA",
        skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js"],
        experience: "3 years",
        department: "Engineering",
        profession: "Blockchain Developer",
        education: {
          degree: "MS Cryptography",
          university: "MIT",
          year: "2021",
        },
        jobType: "Contract",
        lastPosition: "Blockchain Engineer",
        company: "Crypto Innovations",
        joinDate: "2023-08-01",
        salary: "$140,000",
        projects: ["DeFi Platform", "NFT Marketplace", "Smart Contract System"],
        certifications: ["Ethereum Developer", "Blockchain Security"],
        languages: ["English", "Italian"],
        availability: "Immediate",
        notice: "2 weeks",
        bookmarked: false,
        profile: "https://cdn-icons-png.flaticon.com/128/18663/18663695.png",
        resumeUrl: "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
      },
      {
        id: 7,
        name: "Sam Wilson",
        email: "sam.wilson@example.com",
        phone: "+1 (555) 456-7890",
        location: "Denver, USA",
        skills: ["Java", "Spring Boot", "Microservices", "Kafka"],
        experience: "6 years",
        department: "Engineering",
        profession: "Backend Developer",
        education: {
          degree: "BS Software Engineering",
          university: "Colorado State University",
          year: "2018",
        },
        jobType: "Full-time",
        lastPosition: "Senior Backend Developer",
        company: "Enterprise Solutions",
        joinDate: "2023-07-15",
        salary: "$115,000",
        projects: ["API Gateway", "Payment Processing System", "Data Pipeline"],
        certifications: ["AWS Developer", "Spring Professional"],
        languages: ["English"],
        availability: "1 month",
        notice: "30 days",
        bookmarked: false,
        profile: "https://cdn-icons-png.flaticon.com/128/4140/4140061.png",
        resumeUrl: "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
      },
      {
        id: 8,
        name: "MR. Brown",
        email: "mr.brown@example.com",
        phone: "+1 (555) 567-8901",
        location: "Portland, USA",
        skills: ["Manual Testing", "Test Cases", "Bug Tracking", "QA"],
        experience: "4 years",
        department: "Quality Assurance",
        profession: "Manual Tester",
        education: {
          degree: "BS Information Technology",
          university: "Portland State University",
          year: "2020",
        },
        jobType: "Full-time",
        lastPosition: "QA Specialist",
        company: "Quality Tech",
        joinDate: "2023-06-01",
        salary: "$85,000",
        projects: ["E-commerce Testing", "Mobile App Testing", "Web Platform QA"],
        certifications: ["ISTQB Foundation", "Agile Testing"],
        languages: ["English", "Portuguese"],
        availability: "2 weeks",
        notice: "2 weeks",
        bookmarked: false,
        profile: "https://cdn-icons-png.flaticon.com/128/4140/4140039.png",
        resumeUrl: "https://writing.colostate.edu/guides/documents/resume/functionalsample.pdf",
      },
    ]

    setCandidates(mockCandidates)
    setFilteredCandidates(mockCandidates)
  }, [])

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    applyFilters(query, filters)
  }

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value }
    setFilters(newFilters)
    applyFilters(searchQuery, newFilters)
  }

  const applyFilters = (query, currentFilters) => {
    const filtered = candidates.filter((candidate) => {
      const matchesSearch =
        candidate.name.toLowerCase().includes(query) ||
        candidate.email.toLowerCase().includes(query) ||
        candidate.phone.toLowerCase().includes(query) ||
        candidate.department.toLowerCase().includes(query) ||
        candidate.profession.toLowerCase().includes(query) ||
        candidate.skills.some((skill) => skill.toLowerCase().includes(query))

      const matchesSkills =
        !currentFilters.skills ||
        candidate.skills.some((skill) => skill.toLowerCase().includes(currentFilters.skills.toLowerCase()))

      const matchesLocation =
        !currentFilters.location || candidate.location.toLowerCase().includes(currentFilters.location.toLowerCase())

      const matchesExperience =
        !currentFilters.experience ||
        candidate.experience.toLowerCase().includes(currentFilters.experience.toLowerCase())

      const matchesDepartment =
        !currentFilters.department ||
        candidate.department.toLowerCase().includes(currentFilters.department.toLowerCase())

      const matchesJobType =
        !currentFilters.jobType || candidate.jobType.toLowerCase().includes(currentFilters.jobType.toLowerCase())

      const matchesEducation =
        !currentFilters.education ||
        candidate.education.degree.toLowerCase().includes(currentFilters.education.toLowerCase()) ||
        candidate.education.university.toLowerCase().includes(currentFilters.education.toLowerCase())

      return (
        matchesSearch &&
        matchesSkills &&
        matchesLocation &&
        matchesExperience &&
        matchesDepartment &&
        matchesJobType &&
        matchesEducation
      )
    })

    setFilteredCandidates(filtered)
    setCurrentPage(1)
  }

  const handleAction = (action, candidate) => {
    switch (action) {
      case "view":
        setSelectedCandidate(candidate)
        setDetailsSidebar(true)
        break
      case "bookmark":
        toggleBookmark(candidate.id)
        break
    }
  }

  const toggleBookmark = (candidateId) => {
    const updatedCandidates = candidates.map((candidate) => {
      if (candidate.id === candidateId) {
        const newBookmarkStatus = !candidate.bookmarked
        toast.success(
          newBookmarkStatus
            ? `${candidate.name} added to shortlisted candidates`
            : `${candidate.name} removed from shortlisted candidates`,
        )
        return { ...candidate, bookmarked: newBookmarkStatus }
      }
      return candidate
    })

    setCandidates(updatedCandidates)
    setFilteredCandidates(
      updatedCandidates.filter((candidate) => {
        
        const matchesSearch =
          candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

        return matchesSearch
      }),
    )
  }

  const handleDownloadResume = (candidate) => {
    // In a real app, this would trigger a download of the resume file
    toast.success(`Downloading resume for ${candidate.name}`)

    // Create a temporary link to download the resume
    const link = document.createElement("a")
    link.href = candidate.resumeUrl
    link.setAttribute("download", `${candidate.name.replace(/\s+/g, "_")}_Resume.pdf`)
    link.setAttribute("target", "_blank")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const paginatedCandidates = filteredCandidates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
      <Header title="Search Candidate" />
      

      <motion.div
        className="p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
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
            className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Filter size={18} />
            <span>Filters</span>
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
                className="fixed right-0 top-0 h-full w-full md:w-96 bg-gray-800 p-6 shadow-xl z-50 overflow-y-auto"
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
                      onChange={(e) => handleFilterChange("skills", e.target.value)}
                      placeholder="Search skills..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Experience</label>
                    <input
                      type="text"
                      value={filters.experience}
                      onChange={(e) => handleFilterChange("experience", e.target.value)}
                      placeholder="Filter by experience..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Department</label>
                    <input
                      type="text"
                      value={filters.department}
                      onChange={(e) => handleFilterChange("department", e.target.value)}
                      placeholder="Filter by department..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Job Type</label>
                    <input
                      type="text"
                      value={filters.jobType}
                      onChange={(e) => handleFilterChange("jobType", e.target.value)}
                      placeholder="Filter by job type..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Location</label>
                    <input
                      type="text"
                      value={filters.location}
                      onChange={(e) => handleFilterChange("location", e.target.value)}
                      placeholder="Filter by location..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Education</label>
                    <input
                      type="text"
                      value={filters.education}
                      onChange={(e) => handleFilterChange("education", e.target.value)}
                      placeholder="Filter by education..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setFilters({
                          skills: "",
                          location: "",
                          experience: "",
                          department: "",
                          jobType: "",
                          education: "",
                        })
                        applyFilters(searchQuery, {
                          skills: "",
                          location: "",
                          experience: "",
                          department: "",
                          jobType: "",
                          education: "",
                        })
                      }}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 mr-2"
                    >
                      Reset
                    </button>
                    <button
                      onClick={() => setFilterSidebar(false)}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                      Apply
                    </button>
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
                  <th className="p-4 text-left">Profile</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left hidden md:table-cell">Phone</th>
                  <th className="p-4 text-left hidden md:table-cell">Email</th>
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left hidden md:table-cell">Profession</th>
                  <th className="p-4 text-left hidden lg:table-cell">Job Type</th>
                  <th className="p-4 text-left hidden lg:table-cell">Location</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCandidates.map((candidate) => (
                  <tr key={candidate.id} className="border-t border-gray-700 hover:bg-gray-800/50">
                    <td className="p-4">
                      <img
                        src={candidate.profile || "/placeholder.svg"}
                        alt={candidate.name}
                        className="w-8 h-8 rounded-full"
                      />
                    </td>
                    <td className="p-4">
                      <div className="font-medium">{candidate.name}</div>
                    </td>
                    <td className="p-4 text-left md:text-center whitespace-nowrap">{candidate.phone}</td>
                    <td className="p-4 hidden md:table-cell">{candidate.email}</td>
                    <td className="p-4">{candidate.department}</td>
                    <td className="p-4 hidden md:table-cell">{candidate.profession}</td>
                    <td className="p-4 hidden lg:table-cell">
                      <span className="px-3 py-1 rounded-full text-sm bg-purple-900/40 text-purple-400">
                        {candidate.jobType}
                      </span>
                    </td>
                    <td className="p-4 hidden lg:table-cell">{candidate.location}</td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleAction("view", candidate)}
                          className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleAction("bookmark", candidate)}
                          className={`p-1 transition-colors ${
                            candidate.bookmarked
                              ? "text-yellow-400 hover:text-yellow-300"
                              : "text-gray-400 hover:text-yellow-300"
                          }`}
                          title={candidate.bookmarked ? "Remove from Shortlist" : "Add to Shortlist"}
                        >
                          {candidate.bookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                        </button>
                        <button
                          onClick={() => handleDownloadResume(candidate)}
                          className="p-1 text-green-400 hover:text-green-300 transition-colors"
                          title="Download Resume"
                        >
                          <Download size={18} />
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
        {filteredCandidates.length > itemsPerPage && (
          <div className="flex justify-center mt-6">
            <div className="flex gap-2">
              <button
                onClick={() => handlePagination(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: Math.ceil(filteredCandidates.length / itemsPerPage) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePagination(index + 1)}
                  className={`
                      px-4 py-2 rounded-lg transition-colors
                      ${
                        currentPage === index + 1
                          ? "bg-purple-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }
                    `}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  handlePagination(Math.min(Math.ceil(filteredCandidates.length / itemsPerPage), currentPage + 1))
                }
                disabled={currentPage === Math.ceil(filteredCandidates.length / itemsPerPage)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === Math.ceil(filteredCandidates.length / itemsPerPage)
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Candidate Details Sidebar */}
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
                className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-800 shadow-xl z-50 overflow-y-auto"
              >
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-white">Candidate Details</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAction("bookmark", selectedCandidate)}
                        className={`p-2 transition-colors ${
                          selectedCandidate.bookmarked
                            ? "text-yellow-400 hover:text-yellow-300"
                            : "text-gray-400 hover:text-yellow-300"
                        }`}
                        title={selectedCandidate.bookmarked ? "Remove from Shortlist" : "Add to Shortlist"}
                      >
                        {selectedCandidate.bookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                      </button>
                      <button
                        onClick={() => handleDownloadResume(selectedCandidate)}
                        className="p-2 text-green-400 hover:text-green-300 transition-colors"
                        title="Download Resume"
                      >
                        <Download size={20} />
                      </button>
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
                  {/* Profile Header */}
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedCandidate.profile || "/placeholder.svg"}
                      alt={selectedCandidate.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedCandidate.name}</h3>
                      <p className="text-gray-300">{selectedCandidate.profession}</p>
                    </div>
                  </div>

                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Briefcase size={20} /> Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400">Email</label>
                        <div className="flex items-center gap-2 text-white mt-1">
                          <Mail size={16} className="text-gray-400" />
                          <span>{selectedCandidate.email}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Phone</label>
                        <div className="flex items-center gap-2 text-white mt-1">
                          <Phone size={16} className="text-gray-400" />
                          <span>{selectedCandidate.phone}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Location</label>
                        <div className="flex items-center gap-2 text-white mt-1">
                          <MapPin size={16} className="text-gray-400" />
                          <span>{selectedCandidate.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Briefcase size={20} /> Professional Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400">Current Position</label>
                        <div className="text-white mt-1">{selectedCandidate.lastPosition}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Company</label>
                        <div className="flex items-center gap-2 text-white mt-1">
                          <Building size={16} className="text-gray-400" />
                          <span>{selectedCandidate.company}</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Experience</label>
                        <div className="text-white mt-1">{selectedCandidate.experience}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Department</label>
                        <div className="text-white mt-1">{selectedCandidate.department}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Job Type</label>
                        <div className="text-white mt-1">{selectedCandidate.jobType}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Joined</label>
                        <div className="flex items-center gap-2 text-white mt-1">
                          <Calendar size={16} className="text-gray-400" />
                          <span>{selectedCandidate.joinDate}</span>
                        </div>
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
                        <span key={index} className="px-3 py-1 rounded-full text-sm bg-purple-900/40 text-purple-400">
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

                  {/* Resume Preview */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <FileText size={20} /> Resume
                    </h3>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <iframe
                        src={selectedCandidate.resumeUrl}
                        className="w-full h-96 border border-gray-600 rounded"
                        title={`${selectedCandidate.name}'s Resume`}
                      />
                      <div className="mt-4 flex justify-end">
                        <button
                          onClick={() => handleDownloadResume(selectedCandidate)}
                          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <Download size={16} />
                          Download Resume
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Clock size={20} /> Availability
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400">Available From</label>
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

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={() => handleAction("bookmark", selectedCandidate)}
                      className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 ${
                        selectedCandidate.bookmarked
                          ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                          : "bg-gray-600 hover:bg-yellow-700 text-white"
                      }`}
                    >
                      {selectedCandidate.bookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                      {selectedCandidate.bookmarked ? "Remove from Shortlist" : "Add to Shortlist"}
                    </button>
                    <button
                      onClick={() => handleDownloadResume(selectedCandidate)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                    >
                      <Download size={18} />
                      Download Resume
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ResumeSearch




  