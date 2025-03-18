import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  X,
  Trash2,
  Eye,
  Filter,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  MapPin,
  Award,
  CheckCircle,
  User,
  Folder,
  Info,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Header from "../components/Common/Header"
import toast from "react-hot-toast"

function Candidate() {
  const [candidates, setCandidates] = useState([])
  const [filteredCandidates, setFilteredCandidates] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filterSidebar, setFilterSidebar] = useState(false)
  const [detailsSidebar, setDetailsSidebar] = useState(false)
  const [recruitModal, setRecruitModal] = useState(false)
  const [interviewModal, setInterviewModal] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [filters, setFilters] = useState({
    skills: "",
    location: "",
    department: "",
    jobType: "",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [jobOpenings, setJobOpenings] = useState([])
  const [selectedJob, setSelectedJob] = useState("")
  const [recruitmentRemark, setRecruitmentRemark] = useState("")
  const [interviewDate, setInterviewDate] = useState("")
  const [interviewTime, setInterviewTime] = useState("")
  const [interviewType, setInterviewType] = useState("video")
  const [interviewNotes, setInterviewNotes] = useState("")
  const itemsPerPage = 5

  useEffect(() => {
    // Mock candidate data
    const mockCandidates = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@gmail.com",
        phone: "+1 (908) 098-9890",
        location: "New York, USA",
        skills: ["React", "Node.js", "TypeScript", "AWS"],
        experience: "5 years",
        department: "Engineering",
        profession: "Software Developer",
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
        references: [
          {
            name: "Sarah Johnson",
            position: "Tech Lead",
            company: "Previous Corp",
            contact: "sarah@email.com",
          },
        ],
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
        references: [
          {
            name: "Mike Wilson",
            position: "Design Director",
            company: "Creative Co",
            contact: "mike@email.com",
          },
        ],
      },
      {
        id: 3,
        name: "Michael Johnson",
        email: "michael@example.com",
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
        jobType: "Remote",
        lastPosition: "Lead Data Scientist",
        company: "Data Insights Inc",
        joinDate: "2023-11-15",
        salary: "$135,000",
        projects: ["Predictive Analytics Tool", "Customer Segmentation", "Recommendation Engine"],
        certifications: ["TensorFlow Developer", "AWS Machine Learning"],
        languages: ["English", "German"],
        availability: "1 month",
        notice: "45 days",
        references: [
          {
            name: "Emily Chen",
            position: "VP of Analytics",
            company: "Previous Data Co",
            contact: "emily@email.com",
          },
        ],
      },
      {
        id: 4,
        name: "Sarah Williams",
        email: "sarah@example.com",
        phone: "+1 (555) 987-6543",
        location: "Austin, USA",
        skills: ["Project Management", "Agile", "Scrum", "JIRA"],
        experience: "8 years",
        department: "Product",
        profession: "Product Manager",
        education: {
          degree: "MBA",
          university: "University of Texas",
          year: "2016",
        },
        jobType: "Remote",
        lastPosition: "Senior Product Manager",
        company: "Tech Solutions",
        joinDate: "2023-09-01",
        salary: "$125,000",
        projects: ["SaaS Platform Launch", "Mobile App Redesign", "Enterprise Solution"],
        certifications: ["Certified Scrum Master", "Product Management Professional"],
        languages: ["English"],
        availability: "2 months",
        notice: "60 days",
        references: [
          {
            name: "David Brown",
            position: "Director of Product",
            company: "Previous Tech",
            contact: "david@email.com",
          },
        ],
      },
      {
        id: 5,
        name: "Robert Chen",
        email: "robert@example.com",
        phone: "+1 (555) 234-5678",
        location: "Seattle, USA",
        skills: ["DevOps", "AWS", "Docker", "Kubernetes", "CI/CD"],
        experience: "7 years",
        department: "Engineering",
        profession: "DevOps Engineer",
        education: {
          degree: "BS Computer Science",
          university: "University of Washington",
          year: "2017",
        },
        jobType: "Remote",
        lastPosition: "DevOps Lead",
        company: "Cloud Systems",
        joinDate: "2023-10-15",
        salary: "$130,000",
        projects: ["Infrastructure Automation", "Cloud Migration", "Monitoring System"],
        certifications: ["AWS Solutions Architect", "Kubernetes Administrator"],
        languages: ["English", "Mandarin"],
        availability: "3 weeks",
        notice: "30 days",
        references: [
          {
            name: "Lisa Park",
            position: "CTO",
            company: "Previous Cloud Co",
            contact: "lisa@email.com",
          },
        ],
      },
      {
        id: 6,
        name: "Robert Chen",
        email: "robert@example.com",
        phone: "+1 (555) 234-5678",
        location: "Seattle, USA",
        skills: ["DevOps", "AWS", "Docker", "Kubernetes", "CI/CD"],
        experience: "7 years",
        department: "Engineering",
        profession: "DevOps Engineer",
        education: {
          degree: "BS Computer Science",
          university: "University of Washington",
          year: "2017",
        },
        jobType: "Remote",
        lastPosition: "DevOps Lead",
        company: "Cloud Systems",
        joinDate: "2023-10-15",
        salary: "$130,000",
        projects: ["Infrastructure Automation", "Cloud Migration", "Monitoring System"],
        certifications: ["AWS Solutions Architect", "Kubernetes Administrator"],
        languages: ["English", "Mandarin"],
        availability: "3 weeks",
        notice: "30 days",
        references: [
          {
            name: "Lisa Park",
            position: "CTO",
            company: "Previous Cloud Co",
            contact: "lisa@email.com",
          },
        ],
      },
    ]

    // Mock job openings
    const mockJobs = [
      { id: 1, title: "Senior Frontend Developer", department: "Engineering" },
      { id: 2, title: "UX Designer", department: "Design" },
      { id: 3, title: "Data Scientist", department: "Data Science" },
      { id: 4, title: "Product Manager", department: "Product" },
      { id: 5, title: "DevOps Engineer", department: "Engineering" },
    ]

    setCandidates(mockCandidates)
    setFilteredCandidates(mockCandidates)
    setJobOpenings(mockJobs)
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

      const matchesDepartment =
        !currentFilters.department ||
        candidate.department.toLowerCase().includes(currentFilters.department.toLowerCase())

      const matchesJobType =
        !currentFilters.jobType || candidate.jobType.toLowerCase().includes(currentFilters.jobType.toLowerCase())

      return matchesSearch && matchesSkills && matchesLocation && matchesDepartment && matchesJobType
    })

    setFilteredCandidates(filtered)
    setCurrentPage(1)
  }

  const handleAction = (action, candidate) => {
    setSelectedCandidate(candidate)

    switch (action) {
      case "view":
        setDetailsSidebar(true)
        break
      
      case "delete":
  const updatedCandidates = candidates.filter((c) => c.id !== candidate.id);
  setCandidates(updatedCandidates);
  setFilteredCandidates(updatedCandidates);
  toast.success("Candidate deleted successfully!"); 
  break;
    }
  }

  const handleRecruitCandidate = () => {
    setRecruitModal(true)
  }

  const handleScheduleInterview = () => {
    setInterviewModal(true)
  }

  const submitRecruitment = () => {
    // In a real app, this would send data to the backend
    toast.success(
      `Candidate ${selectedCandidate.name} has been moved to recruitment for the position: ${
        jobOpenings.find((job) => job.id === Number.parseInt(selectedJob))?.title
      }`,
    )
    setRecruitModal(false)
    setRecruitmentRemark("")
    setSelectedJob("")
  }

  const submitInterview = () => {
    // In a real app, this would send data to the backend and update the calendar
    toast.success(`Interview scheduled with ${selectedCandidate.name} on ${interviewDate} at ${interviewTime}`)
    setInterviewModal(false)
    setInterviewDate("")
    setInterviewTime("")
    setInterviewType("video")
    setInterviewNotes("")
  }

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const paginatedCandidates = filteredCandidates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
      <Header title="Shortlisted" />

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

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setFilters({
                          skills: "",
                          location: "",
                          department: "",
                          jobType: "",
                        })
                        applyFilters(searchQuery, {
                          skills: "",
                          location: "",
                          department: "",
                          jobType: "",
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
                      <div className="font-medium">{candidate.name}</div>
                    </td>
                    <td className="p-4 hidden md:table-cell">{candidate.phone}</td>
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
                          onClick={() => handleAction("delete", candidate)}
                          className="p-1 text-red-400 hover:text-red-300 transition-colors"
                          title="Remove"
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
                    <button
                      onClick={() => setDetailsSidebar(false)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <User size={20} /> Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400">Name</label>
                        <div className="text-white mt-1">{selectedCandidate.name}</div>
                      </div>
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
                      <div>
                        <label className="block text-sm text-gray-400">Profession</label>
                        <div className="text-white mt-1">{selectedCandidate.profession}</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400">Job Type</label>
                        <div className="text-white mt-1">{selectedCandidate.jobType}</div>
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

                  {/* Projects */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Folder size={20} /> Projects
                    </h3>
                    <ul className="space-y-2">
                      {selectedCandidate.projects.map((project, index) => (
                        <li key={index} className="text-white">
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Info size={20} /> Additional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={handleRecruitCandidate}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={18} />
                      Move to Recruitment
                    </button>
                    <button
                      onClick={handleScheduleInterview}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                    >
                      <Calendar size={18} />
                      Schedule Interview
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Recruit Modal */}
        <AnimatePresence>
          {recruitModal && selectedCandidate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 rounded-lg p-6 w-full max-w-md"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Move to Recruitment</h3>
                <p className="text-gray-300 mb-4">
                  Move <span className="font-semibold">{selectedCandidate.name}</span> to the recruitment process for a
                  specific job opening.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Select Job Opening</label>
                    <select
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select a job opening</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.id}>
                          {job.title} - {job.department}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Recruitment Remarks</label>
                    <textarea
                      value={recruitmentRemark}
                      onChange={(e) => setRecruitmentRemark(e.target.value)}
                      placeholder="Add any notes about this recruitment..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setRecruitModal(false)}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submitRecruitment}
                    disabled={!selectedJob}
                    className={`px-4 py-2 rounded-lg ${
                      !selectedJob
                        ? "bg-green-700/50 text-green-300/50 cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                  >
                    Confirm
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interview Modal */}
        <AnimatePresence>
          {interviewModal && selectedCandidate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800 rounded-lg p-6 w-full max-w-md"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Schedule Interview</h3>
                <p className="text-gray-300 mb-4">
                  Schedule an interview with <span className="font-semibold">{selectedCandidate.name}</span>.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Interview Date</label>
                    <input
                      type="date"
                      value={interviewDate}
                      onChange={(e) => setInterviewDate(e.target.value)}
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Interview Time</label>
                    <input
                      type="time"
                      value={interviewTime}
                      onChange={(e) => setInterviewTime(e.target.value)}
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Interview Type</label>
                    <select
                      value={interviewType}
                      onChange={(e) => setInterviewType(e.target.value)}
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="video">Video Call</option>
                      <option value="phone">Phone Call</option>
                      <option value="in-person">In-Person</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Notes</label>
                    <textarea
                      value={interviewNotes}
                      onChange={(e) => setInterviewNotes(e.target.value)}
                      placeholder="Add any notes about this interview..."
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setInterviewModal(false)}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submitInterview}
                    disabled={!interviewDate || !interviewTime}
                    className={`px-4 py-2 rounded-lg ${
                      !interviewDate || !interviewTime
                        ? "bg-blue-700/50 text-blue-300/50 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Schedule
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Candidate

