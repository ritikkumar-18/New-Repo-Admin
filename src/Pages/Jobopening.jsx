import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast, Toaster } from "react-hot-toast"
import {
  Search,
  Plus,
  X,
  Trash2,
  Calendar,
  DollarSign,
  Users,
  Share2,
  Eye,
  ToggleLeft,
  ToggleRight,
  FileText,
  Upload,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Header from "../components/Common/Header"

const Jobopening = () => {
  const initialJobs = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "New York",
      status: "active",
      salary: "120,000 - 150,000",
      jobType: "Full-time",
      postedDate: "2023-05-15",
      deadline: "2023-06-15",
      applications: 12,
      description: "We are looking for a skilled software engineer to join our team.",
      requirements: "React, Node.js, TypeScript",
      responsibilities: "Develop and maintain web applications",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      status: "inactive",
      salary: "130,000 - 160,000",
      jobType: "Full-time",
      postedDate: "2023-04-10",
      deadline: "2023-05-10",
      applications: 8,
      description: "We need a product manager to lead our product development efforts.",
      requirements: "Product management, Agile, JIRA",
      responsibilities: "Define product roadmap and features",
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Engineering",
      location: "Remote",
      status: "active",
      salary: "110,000 - 140,000",
      jobType: "Contract",
      postedDate: "2023-03-20",
      deadline: "2023-04-20",
      applications: 15,
      description: "Join our data science team to build predictive models.",
      requirements: "Python, SQL, Machine Learning",
      responsibilities: "Analyze data and build predictive models",
    },
  ]

  const [jobs, setJobs] = useState(initialJobs)
  const [searchTerm, setSearchTerm] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [jobToDelete, setJobToDelete] = useState(null)
  const [activeTab, setActiveTab] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [jobsPerPage] = useState(6)
  const [viewJobModal, setViewJobModal] = useState(false)
  const [currentJob, setCurrentJob] = useState(null)
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [jobToShare, setJobToShare] = useState(null)
  const [applicationsModalOpen, setApplicationsModalOpen] = useState(false)
  const [selectedJobApplications, setSelectedJobApplications] = useState(null)

  // Mock applications data
  const mockApplications = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      experience: "5 years",
      appliedDate: "2023-05-20",
      status: "New",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      experience: "3 years",
      appliedDate: "2023-05-19",
      status: "Shortlisted",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      experience: "7 years",
      appliedDate: "2023-05-18",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      experience: "4 years",
      appliedDate: "2023-05-17",
      status: "New",
    },
  ]

  useEffect(() => {
    if (modalOpen || deleteModalOpen || viewJobModal || shareModalOpen || applicationsModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [modalOpen, deleteModalOpen, viewJobModal, shareModalOpen, applicationsModalOpen])

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    salary: "",
    jobType: "Full-time",
    description: "",
    requirements: "",
    responsibilities: "",
    screeningQuestions: [""],
    attachments: [],
  })

  const departmentOptions = [
    "Engineering",
    "Product",
    "Marketing",
    "Sales",
    "HR",
    "Finance",
    "Operations",
    "Customer Support",
  ]
  const jobTypeOptions = ["Full-time", "Part-time", "Contract", "Internship", "Temporary", "Remote"]

  const openModal = () => {
    setFormData({
      title: "",
      department: "",
      location: "",
      salary: "",
      jobType: "Full-time",
      description: "",
      requirements: "",
      responsibilities: "",
      screeningQuestions: [""],
      attachments: [],
    })
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const openDeleteModal = (job) => {
    setJobToDelete(job)
    setDeleteModalOpen(true)
  }

  const closeDeleteModal = () => {
    setDeleteModalOpen(false)
    setJobToDelete(null)
  }

  const openShareModal = (job) => {
    setJobToShare(job)
    setShareModalOpen(true)
  }

  const closeShareModal = () => {
    setShareModalOpen(false)
    setJobToShare(null)
  }

  const openViewJobModal = (job) => {
    setCurrentJob(job)
    setViewJobModal(true)
  }

  const closeViewJobModal = () => {
    setViewJobModal(false)
    setCurrentJob(null)
  }

  const openApplicationsModal = (job) => {
    setSelectedJobApplications(job)
    setApplicationsModalOpen(true)
  }

  const closeApplicationsModal = () => {
    setApplicationsModalOpen(false)
    setSelectedJobApplications(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
    setCurrentPage(1)
  }

  const handleAddQuestion = () => {
    setFormData({
      ...formData,
      screeningQuestions: [...formData.screeningQuestions, ""],
    })
  }

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...formData.screeningQuestions]
    updatedQuestions[index] = value
    setFormData({
      ...formData,
      screeningQuestions: updatedQuestions,
    })
  }

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = formData.screeningQuestions.filter((_, i) => i !== index)
    setFormData({
      ...formData,
      screeningQuestions: updatedQuestions,
    })
  }

  const handleFileChange = (e) => {
    // In a real app, you would handle file uploads to a server
    // For this demo, we'll just store the file names
    const files = Array.from(e.target.files)
    setFormData({
      ...formData,
      attachments: [...formData.attachments, ...files.map((file) => file.name)],
    })
  }

  const handleRemoveAttachment = (index) => {
    const updatedAttachments = formData.attachments.filter((_, i) => i !== index)
    setFormData({
      ...formData,
      attachments: updatedAttachments,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.department || !formData.location) {
      toast.error("Please fill in all required fields!")
      return
    }

    // In a real app, these would come from the backend
    const postedDate = new Date().toISOString().split("T")[0]
    const deadline = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

    const newJob = {
      ...formData,
      id: Date.now(),
      status: "active",
      postedDate,
      deadline,
      applications: 0,
    }

    setJobs([...jobs, newJob])
    toast.success("Job added successfully!")
    closeModal()
  }

  const handleDelete = () => {
    if (jobToDelete) {
      setJobs(jobs.filter((job) => job.id !== jobToDelete.id))
      toast.success("Job deleted successfully!")
      closeDeleteModal()
    }
  }

  const toggleJobStatus = (jobId) => {
    setJobs(
      jobs.map((job) => {
        if (job.id === jobId) {
          const newStatus = job.status === "active" ? "inactive" : "active"
          toast.success(`Job marked as ${newStatus}`)
          return { ...job, status: newStatus }
        }
        return job
      }),
    )
  }

  const handleShareJob = (e) => {
    e.preventDefault()
    // In a real app, this would send the job to the specified email
    toast.success("Job shared successfully!")
    closeShareModal()
  }

  // Filter jobs based on search term and active tab
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = Object.values(job).some(
      (value) => value && value.toString().toLowerCase().includes(searchTerm),
    )

    if (activeTab === "all") {
      return matchesSearch
    } else {
      return matchesSearch && job.status === activeTab
    }
  })

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
      <Header title={"Job Openings"} />
      

      <motion.div
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search"
                className="py-2 border rounded sm:w-40 bg-gray-800 text-white pl-10 md:w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          <motion.button
            onClick={openModal}
            className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={24} />
          </motion.button>
        </div>

        {/* Status Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 rounded-lg p-1 flex">
            <button
              onClick={() => {
                setActiveTab("all")
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "all" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              All Jobs
            </button>
            <button
              onClick={() => {
                setActiveTab("active")
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "active" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              Active Jobs
            </button>
            <button
              onClick={() => {
                setActiveTab("inactive")
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "inactive"
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              Inactive Jobs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentJobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-white">{job.title}</h2>
                <div className="flex space-x-1">
                  <motion.button
                    onClick={() => toggleJobStatus(job.id)}
                    className={`p-1 rounded-full ${
                      job.status === "active"
                        ? "text-green-400 hover:text-green-500 hover:bg-green-500/10"
                        : "text-gray-400 hover:text-gray-300 hover:bg-gray-500/10"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={job.status === "active" ? "Mark as Inactive" : "Mark as Active"}
                  >
                    {job.status === "active" ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                  </motion.button>
                  <motion.button
                    onClick={() => openShareModal(job)}
                    className="text-blue-400 hover:text-blue-500 p-1 rounded-full hover:bg-blue-500/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Share Job"
                  >
                    <Share2 size={18} />
                  </motion.button>
                  <motion.button
                    onClick={() => openViewJobModal(job)}
                    className="text-purple-400 hover:text-purple-500 p-1 rounded-full hover:bg-purple-500/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="View Details"
                  >
                    <Eye size={18} />
                  </motion.button>
                  <motion.button
                    onClick={() => openDeleteModal(job)}
                    className="text-red-400 hover:text-red-500 p-1 rounded-full hover:bg-red-500/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Delete Job"
                  >
                    <Trash2 size={18} />
                  </motion.button>
                </div>
              </div>

              <div className="mt-3 space-y-2">
                <p className="text-gray-300 flex items-center text-sm">
                  <Calendar size={14} className="mr-2 text-purple-400" /> Posted: {job.postedDate}
                </p>
                <p className="text-gray-300 flex items-center text-sm">
                  <Calendar size={14} className="mr-2 text-purple-400" /> Expires: {job.deadline}
                </p>
                {job.salary && (
                  <p className="text-gray-300 flex items-center text-sm">
                    <DollarSign size={14} className="mr-2 text-purple-400" /> {job.salary}
                  </p>
                )}
                <button
                  onClick={() => openApplicationsModal(job)}
                  className="text-gray-300 flex items-center text-sm hover:text-white"
                >
                  <Users size={14} className="mr-2 text-purple-400" />
                  <span className="underline">{job.applications} Applications</span>
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    job.status === "active"
                      ? "bg-green-900/60 text-green-300 border border-green-500"
                      : "bg-red-900/60 text-red-300 border border-red-500"
                  }`}
                >
                  {job.status}
                </span>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/60 text-blue-300 border border-blue-500">
                  {job.jobType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-md ${
                  currentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === number ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-md ${
                  currentPage === totalPages ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </nav>
          </div>
        )}

        {filteredJobs.length === 0 && (
          <motion.div
            className="text-center py-16 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 text-purple-400 mb-4">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No job openings found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("")
                  setActiveTab("all")
                }}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Clear search
              </button>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Add Job Modal - Right to Left Slider */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 w-full max-w-2xl h-full overflow-y-auto border-l border-gray-700"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
                <h2 className="text-white text-xl font-bold">Add New Job Opening</h2>
                <motion.button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Job Title*</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Senior React Developer"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Department*</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Department</option>
                        {departmentOptions.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Location*</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. New York or Remote"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Salary Range</label>
                      <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="e.g. $80,000 - $100,000"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Job Type</label>
                      <select
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        {jobTypeOptions.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide a detailed description of the job"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Requirements</label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="List the key requirements for this position"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Responsibilities</label>
                      <textarea
                        name="responsibilities"
                        value={formData.responsibilities}
                        onChange={handleChange}
                        placeholder="Describe the main responsibilities for this role"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-gray-300 font-medium">Screening Questions</label>
                        <button
                          type="button"
                          onClick={handleAddQuestion}
                          className="text-purple-400 hover:text-purple-300 text-sm"
                        >
                          + Add Question
                        </button>
                      </div>
                      {formData.screeningQuestions.map((question, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                          <input
                            type="text"
                            value={question}
                            onChange={(e) => handleQuestionChange(index, e.target.value)}
                            placeholder="Enter a screening question"
                            className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                          {formData.screeningQuestions.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveQuestion(index)}
                              className="text-red-400 hover:text-red-300"
                            >
                              <X size={20} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Attachments</label>
                      <div className="mb-2">
                        <label className="flex items-center justify-center w-full px-4 py-3 border border-gray-700 border-dashed rounded-md bg-gray-800 text-gray-300 cursor-pointer hover:bg-gray-750">
                          <Upload className="mr-2" size={18} />
                          <span>Upload Files</span>
                          <input type="file" multiple onChange={handleFileChange} className="hidden" />
                        </label>
                      </div>
                      {formData.attachments.length > 0 && (
                        <div className="space-y-2 mt-2">
                          {formData.attachments.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-750 p-2 rounded-md">
                              <div className="flex items-center">
                                <FileText size={16} className="mr-2 text-purple-400" />
                                <span className="text-sm text-gray-300">{file}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveAttachment(index)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-4">
                    <motion.button
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add Job
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View Job Modal */}
      <AnimatePresence>
        {viewJobModal && currentJob && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 w-full max-w-2xl h-full overflow-y-auto border-l border-gray-700"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
                <h2 className="text-white text-xl font-bold">Job Details</h2>
                <motion.button
                  onClick={closeViewJobModal}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentJob.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        currentJob.status === "active"
                          ? "bg-green-900/60 text-green-300 border border-green-500"
                          : "bg-red-900/60 text-red-300 border border-red-500"
                      }`}
                    >
                      {currentJob.status}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/60 text-blue-300 border border-blue-500">
                      {currentJob.jobType}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p>{currentJob.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p>{currentJob.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Posted Date</p>
                    <p>{currentJob.postedDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p>{currentJob.deadline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Salary</p>
                    <p>{currentJob.salary || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Applications</p>
                    <p>{currentJob.applications}</p>
                  </div>
                </div>

                {currentJob.description && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                    <p className="text-gray-300">{currentJob.description}</p>
                  </div>
                )}

                {currentJob.requirements && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
                    <p className="text-gray-300">{currentJob.requirements}</p>
                  </div>
                )}

                {currentJob.responsibilities && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Responsibilities</h4>
                    <p className="text-gray-300">{currentJob.responsibilities}</p>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  <motion.button
                    onClick={() => {
                      closeViewJobModal()
                      openApplicationsModal(currentJob)
                    }}
                    className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium flex items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users size={18} className="mr-2" />
                    View Applications
                  </motion.button>
                  <motion.button
                    onClick={() => toggleJobStatus(currentJob.id)}
                    className={`px-6 py-3 rounded-md font-medium flex items-center ${
                      currentJob.status === "active"
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentJob.status === "active" ? "Mark Inactive" : "Mark Active"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Job Modal */}
      <AnimatePresence>
        {shareModalOpen && jobToShare && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/30 text-blue-400 mb-4">
                  <Share2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Share Job Opening</h3>
                <p className="text-gray-300">
                  Share the job opening for <span className="font-semibold">{jobToShare.title}</span> with others.
                </p>
              </div>

              <form onSubmit={handleShareJob} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message (Optional)</label>
                  <textarea
                    placeholder="Add a personal message"
                    className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
                  />
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={closeShareModal}
                    className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Share
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Applications Modal */}
      <AnimatePresence>
        {applicationsModalOpen && selectedJobApplications && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 w-full max-w-2xl h-full overflow-y-auto border-l border-gray-700"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
                <h2 className="text-white text-xl font-bold">Applications for {selectedJobApplications.title}</h2>
                <motion.button
                  onClick={closeApplicationsModal}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="p-6">
                {mockApplications.length > 0 ? (
                  <div className="space-y-4">
                    {mockApplications.map((application) => (
                      <div key={application.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold text-white">{application.name}</h3>
                          <span
                            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                              application.status === "Shortlisted"
                                ? "bg-green-900/60 text-green-300 border border-green-500"
                                : application.status === "Rejected"
                                  ? "bg-red-900/60 text-red-300 border border-red-500"
                                  : "bg-blue-900/60 text-blue-300 border border-blue-500"
                            }`}
                          >
                            {application.status}
                          </span>
                        </div>
                        <div className="mt-2 space-y-1 text-sm text-gray-300">
                          <p>Email: {application.email}</p>
                          <p>Experience: {application.experience}</p>
                          <p>Applied: {application.appliedDate}</p>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                            View Profile
                          </button>
                          <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                            Contact
                          </button>
                          {application.status !== "Shortlisted" && (
                            <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                              Shortlist
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 text-gray-400 mb-4">
                      <Users size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No applications yet</h3>
                    <p className="text-gray-400">There are no applications for this job opening yet.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/30 text-red-400 mb-4">
                  <Trash2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Confirm Deletion</h3>
                <p className="text-gray-300">
                  Are you sure you want to delete the job opening for{" "}
                  <span className="font-semibold">{jobToDelete?.title}</span>? This action cannot be undone.
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <motion.button
                  onClick={closeDeleteModal}
                  className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={handleDelete}
                  className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Delete
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Jobopening

