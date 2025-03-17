import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast, Toaster } from "react-hot-toast"
import { Search, Plus, X, Trash2, Filter, Calendar, DollarSign, Users, Briefcase, MapPin } from "lucide-react"
import Header from "../components/Common/Header"

const Jobopening = () => {
  const initialJobs = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "New York",
      status: "active",
      hiringManager: "Alice",
      salary: "120,000 - 150,000",
      experience: "3-5 years",
      jobType: "Full-time",
      postedDate: "2023-05-15",
      deadline: "2023-06-15",
      requirements: "React, Node.js, TypeScript",
      responsibilities: "Develop and maintain web applications",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      status: "closed",
      hiringManager: "Bob",
      salary: "130,000 - 160,000",
      experience: "4-6 years",
      jobType: "Full-time",
      postedDate: "2023-04-10",
      deadline: "2023-05-10",
      requirements: "Product management, Agile, JIRA",
      responsibilities: "Define product roadmap and features",
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Engineering",
      location: "Remote",
      status: "filled",
      hiringManager: "Charlie",
      salary: "110,000 - 140,000",
      experience: "2-4 years",
      jobType: "Full-time",
      postedDate: "2023-03-20",
      deadline: "2023-04-20",
      requirements: "Python, SQL, Machine Learning",
      responsibilities: "Analyze data and build predictive models",
    },
  ]

  const [jobs, setJobs] = useState(initialJobs)
  const [searchTerm, setSearchTerm] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [jobToDelete, setJobToDelete] = useState(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    department: "",
    location: "",
    status: "",
    jobType: "",
    hiringManager: "",
    salary: "",
    experience: "",
  })

  
  useEffect(() => {
    if (modalOpen || deleteModalOpen || filterOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [modalOpen, deleteModalOpen, filterOpen])

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    status: "active",
    hiringManager: "",
    salary: "",
    experience: "",
    jobType: "Full-time",
    postedDate: "",
    deadline: "",
    requirements: "",
    responsibilities: "",
  })

  const openModal = () => {
    setFormData({
      title: "",
      department: "",
      location: "",
      status: "active",
      hiringManager: "",
      salary: "",
      experience: "",
      jobType: "Full-time",
      postedDate: new Date().toISOString().split("T")[0],
      deadline: "",
      requirements: "",
      responsibilities: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }))
  }

  const toggleFilter = () => {
    setFilterOpen(!filterOpen)
  }

  const resetFilters = () => {
    setFilters({
      department: "",
      location: "",
      status: "",
      jobType: "",
      hiringManager: "",
      salary: "",
      experience: "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.department || !formData.location || !formData.hiringManager) {
      toast.error("Please fill in all required fields!")
      return
    }

    setJobs([...jobs, { ...formData, id: Date.now() }])
    toast.success("Job added successfully!")

    setFormData({
      title: "",
      department: "",
      location: "",
      status: "active",
      hiringManager: "",
      salary: "",
      experience: "",
      jobType: "Full-time",
      postedDate: "",
      deadline: "",
      requirements: "",
      responsibilities: "",
    })

    closeModal()
  }

  const handleDelete = () => {
    if (jobToDelete) {
      setJobs(jobs.filter((job) => job.id !== jobToDelete.id))
      toast.success("Job deleted successfully!")
      closeDeleteModal()
    }
  }

  const filteredJobs = jobs.filter((job) => {
    
    const matchesSearch = Object.values(job).some(
      (value) => value && value.toString().toLowerCase().includes(searchTerm),
    )

    
    const matchesDepartment =
      !filters.department || job.department.toLowerCase().includes(filters.department.toLowerCase())

    const matchesLocation = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())

    const matchesStatus = !filters.status || job.status.toLowerCase().includes(filters.status.toLowerCase())

    const matchesJobType = !filters.jobType || job.jobType.toLowerCase().includes(filters.jobType.toLowerCase())

    const matchesHiringManager =
      !filters.hiringManager || job.hiringManager.toLowerCase().includes(filters.hiringManager.toLowerCase())

    const matchesSalary =
      !filters.salary || (job.salary && job.salary.toLowerCase().includes(filters.salary.toLowerCase()))

    const matchesExperience =
      !filters.experience || (job.experience && job.experience.toLowerCase().includes(filters.experience.toLowerCase()))

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesLocation &&
      matchesStatus &&
      matchesJobType &&
      matchesHiringManager &&
      matchesSalary &&
      matchesExperience
    )
  })

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
      <Header title={"Job Openings"} />
      <motion.div className="p-6" 
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search"
                className=" py-2 border rounded sm:w-40 bg-gray-800 text-white pl-10 md:w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            <motion.button
              onClick={toggleFilter}
              className="bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Filter size={20} />
            </motion.button>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              // whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)" }}
              
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-white">{job.title}</h2>
                <motion.button
                  onClick={() => openDeleteModal(job)}
                  className="text-red-400 hover:text-red-500 p-1 rounded-full hover:bg-red-500/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trash2 size={18} />
                </motion.button>
              </div>
              <div className="mt-3 space-y-2">
                <p className="text-gray-300 flex items-center text-sm">
                  <Briefcase size={14} className="mr-2 text-purple-400" /> {job.department}
                </p>
                <p className="text-gray-300 flex items-center text-sm">
                  <MapPin size={14} className="mr-2 text-purple-400" /> {job.location}
                </p>
                <p className="text-gray-300 flex items-center text-sm">
                  <Users size={14} className="mr-2 text-purple-400" /> {job.hiringManager}
                </p>
                {job.salary && (
                  <p className="text-gray-300 flex items-center text-sm">
                    <DollarSign size={14} className="mr-2 text-purple-400" /> {job.salary}
                  </p>
                )}
                {job.deadline && (
                  <p className="text-gray-300 flex items-center text-sm">
                    <Calendar size={14} className="mr-2 text-purple-400" /> Deadline: {job.deadline}
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    job.status === "active"
                      ? "bg-green-900/60 text-green-300 border border-green-500"
                      : job.status === "closed"
                        ? "bg-red-900/60 text-red-300 border border-red-500"
                        : "bg-yellow-900/60 text-yellow-300 border border-yellow-500"
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
            {(searchTerm || Object.values(filters).some((v) => v)) && (
              <button
                onClick={() => {
                  setSearchTerm("")
                  resetFilters()
                }}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Clear all filters
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
              transition={{ type: "spring", damping: 30, stiffness: 300 }}>
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
                        required/>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Department*</label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="e.g. Engineering"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
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
                      <label className="block text-gray-300 mb-2 font-medium">Hiring Manager*</label>
                      <input
                        type="text"
                        name="hiringManager"
                        value={formData.hiringManager}
                        onChange={handleChange}
                        placeholder="e.g. John Smith"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required />
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
                      <label className="block text-gray-300 mb-2 font-medium">Experience Required</label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="e.g. 3-5 years"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Job Type</label>
                      <input
                        type="text"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        placeholder="e.g. Full-time, Part-time, Contract"
                        className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Status</label>
                      <div className="flex flex-wrap items-center gap-4">
                        <label className="text-white flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="status"
                            value="active"
                            checked={formData.status === "active"}
                            onChange={handleChange}
                            className="w-4 h-4 accent-purple-500"
                          />
                          <span>Active</span>
                        </label>

                        <label className="text-white flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="status"
                            value="filled"
                            checked={formData.status === "filled"}
                            onChange={handleChange}
                            className="w-4 h-4 accent-purple-500"
                          />
                          <span>Filled</span>
                        </label>

                        <label className="text-white flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="status"
                            value="closed"
                            checked={formData.status === "closed"}
                            onChange={handleChange}
                            className="w-4 h-4 accent-purple-500"
                          />
                          <span>Closed</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Posted Date</label>
                        <input
                          type="date"
                          name="postedDate"
                          value={formData.postedDate}
                          onChange={handleChange}
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Application Deadline</label>
                        <input
                          type="date"
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleChange}
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
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

      {/* Filter Panel - Right to Left Half Screen Slider */}
      <AnimatePresence>
        {filterOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full md:w-1/2 ml-auto flex">
              <motion.div
                className="w-full bg-gray-900 h-full overflow-y-auto border-l border-gray-700"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
                  <h2 className="text-white text-xl font-bold">Filter Jobs</h2>
                  <motion.button
                    onClick={toggleFilter}
                    className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Department</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="department"
                          value={filters.department}
                          onChange={handleFilterChange}
                          placeholder="Filter by department"
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-3 text-gray-400">
                          <Search size={18} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Location</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="location"
                          value={filters.location}
                          onChange={handleFilterChange}
                          placeholder="Filter by location"
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-3 text-gray-400">
                          <Search size={18} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Status</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="status"
                          value={filters.status}
                          onChange={handleFilterChange}
                          placeholder="active, filled, closed"
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-3 text-gray-400">
                          <Search size={18} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Job Type</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="jobType"
                          value={filters.jobType}
                          onChange={handleFilterChange}
                          placeholder="Full-time, Part-time, Contract"
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-3 text-gray-400">
                          <Search size={18} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Hiring Manager</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="hiringManager"
                          value={filters.hiringManager}
                          onChange={handleFilterChange}
                          placeholder="Filter by hiring manager"
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-3 text-gray-400">
                          <Search size={18} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Salary Range</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="salary"
                          value={filters.salary}
                          onChange={handleFilterChange}
                          placeholder="Filter by salary range"
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-3 text-gray-400">
                          <Search size={18} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Experience</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="experience"
                          value={filters.experience}
                          onChange={handleFilterChange}
                          placeholder="Filter by experience required"
                          className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <div className="absolute right-3 top-3 text-gray-400">
                          <Search size={18} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col gap-4">
                    <div className="text-gray-300">
                      <h3 className="font-medium mb-2">Active Filters</h3>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(filters).map(([key, value]) =>
                          value ? (
                            <div
                              key={key}
                              className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-700 flex items-center"
                            >
                              {key}: {value}
                              <button
                                onClick={() => setFilters((prev) => ({ ...prev, [key]: "" }))}
                                className="ml-2 text-purple-300 hover:text-white"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          ) : null,
                        )}
                        {!Object.values(filters).some((v) => v) && (
                          <p className="text-gray-500 text-sm">No active filters</p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <motion.button
                        onClick={resetFilters}
                        className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Reset All
                      </motion.button>
                      <motion.button
                        onClick={toggleFilter}
                        className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Apply Filters
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="hidden md:block flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleFilter}
              />
            </div>
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

