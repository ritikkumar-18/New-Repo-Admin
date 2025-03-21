// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { toast, Toaster } from "react-hot-toast"
// import {
//   Search,
//   Plus,
//   X,
//   Trash2,
//   Calendar,
//   DollarSign,
//   Users,
//   Share2,
//   Eye,
//   ToggleLeft,
//   ToggleRight,
//   FileText,
//   Upload,
//   ChevronLeft,
//   ChevronRight,
//   LocateFixed,
//   LocateOffIcon,
//   MapPin,
//   Briefcase,
// } from "lucide-react"
// import Header from "../components/Common/Header"

// const Jobopening = () => {
//   const initialJobs = [
//     {
//       id: 1,
//       title: "Software Engineer",
//       department: "Engineering",
//       location: "New York",
//       status: "active",
//       salary: "120,000 - 150,000",
//       jobType: "Full-time",
//       postedDate: "2023-05-15",
//       deadline: "2023-06-15",
//       applications: 12,
//       description: "We are looking for a skilled software engineer to join our team.",
//       requirements: "React, Node.js, TypeScript",
//       responsibilities: "Develop and maintain web applications",
//     },
//     {
//       id: 2,
//       title: "Product Manager",
//       department: "Product",
//       location: "San Francisco",
//       status: "inactive",
//       salary: "130,000 - 160,000",
//       jobType: "Full-time",
//       postedDate: "2023-04-10",
//       deadline: "2023-05-10",
//       applications: 8,
//       description: "We need a product manager to lead our product development efforts.",
//       requirements: "Product management, Agile, JIRA",
//       responsibilities: "Define product roadmap and features",
//     },
//     {
//       id: 3,
//       title: "Data Scientist",
//       department: "Engineering",
//       location: "Remote",
//       status: "active",
//       salary: "110,000 - 140,000",
//       jobType: "Contract",
//       postedDate: "2023-03-20",
//       deadline: "2023-04-20",
//       applications: 15,
//       description: "Join our data science team to build predictive models.",
//       requirements: "Python, SQL, Machine Learning",
//       responsibilities: "Analyze data and build predictive models",
//     },
//   ]

//   const [jobs, setJobs] = useState(initialJobs)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [modalOpen, setModalOpen] = useState(false)
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false)
//   const [jobToDelete, setJobToDelete] = useState(null)
//   const [activeTab, setActiveTab] = useState("all")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [jobsPerPage] = useState(6)
//   const [viewJobModal, setViewJobModal] = useState(false)
//   const [currentJob, setCurrentJob] = useState(null)
//   const [shareModalOpen, setShareModalOpen] = useState(false)
//   const [jobToShare, setJobToShare] = useState(null)
//   const [applicationsModalOpen, setApplicationsModalOpen] = useState(false)
//   const [selectedJobApplications, setSelectedJobApplications] = useState(null)

//   // Mock applications data
//   const mockApplications = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john@example.com",
//       experience: "5 years",
//       appliedDate: "2023-05-20",
//       status: "New",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane@example.com",
//       experience: "3 years",
//       appliedDate: "2023-05-19",
//       status: "Shortlisted",
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       email: "mike@example.com",
//       experience: "7 years",
//       appliedDate: "2023-05-18",
//       status: "Rejected",
//     },
//     {
//       id: 4,
//       name: "Sarah Williams",
//       email: "sarah@example.com",
//       experience: "4 years",
//       appliedDate: "2023-05-17",
//       status: "New",
//     },
//   ]

//   useEffect(() => {
//     if (modalOpen || deleteModalOpen || viewJobModal || shareModalOpen || applicationsModalOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [modalOpen, deleteModalOpen, viewJobModal, shareModalOpen, applicationsModalOpen])

//   const [formData, setFormData] = useState({
//     title: "",
//     department: "",
//     location: "",
//     salary: "",
//     jobType: "Full-time",
//     description: "",
//     requirements: "",
//     responsibilities: "",
//     screeningQuestions: [""],
//     attachments: [],
//   })

//   const departmentOptions = [
//     "Engineering",
//     "Product",
//     "Marketing",
//     "Sales",
//     "HR",
//     "Finance",
//     "Operations",
//     "Customer Support",
//   ]
//   const jobTypeOptions = ["Full-time", "Part-time", "Contract", "Internship", "Temporary", "Remote"]

//   const openModal = () => {
//     setFormData({
//       title: "",
//       department: "",
//       location: "",
//       salary: "",
//       jobType: "Full-time",
//       description: "",
//       requirements: "",
//       responsibilities: "",
//       screeningQuestions: [""],
//       attachments: [],
//     })
//     setModalOpen(true)
//   }

//   const closeModal = () => {
//     setModalOpen(false)
//   }

//   const openDeleteModal = (job) => {
//     setJobToDelete(job)
//     setDeleteModalOpen(true)
//   }

//   const closeDeleteModal = () => {
//     setDeleteModalOpen(false)
//     setJobToDelete(null)
//   }

//   const openShareModal = (job) => {
//     setJobToShare(job)
//     setShareModalOpen(true)
//   }

//   const closeShareModal = () => {
//     setShareModalOpen(false)
//     setJobToShare(null)
//   }

//   const openViewJobModal = (job) => {
//     setCurrentJob(job)
//     setViewJobModal(true)
//   }

//   const closeViewJobModal = () => {
//     setViewJobModal(false)
//     setCurrentJob(null)
//   }

//   const openApplicationsModal = (job) => {
//     setSelectedJobApplications(job)
//     setApplicationsModalOpen(true)
//   }

//   const closeApplicationsModal = () => {
//     setApplicationsModalOpen(false)
//     setSelectedJobApplications(null)
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prevData) => ({ ...prevData, [name]: value }))
//   }

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase())
//     setCurrentPage(1)
//   }

//   const handleAddQuestion = () => {
//     setFormData({
//       ...formData,
//       screeningQuestions: [...formData.screeningQuestions, ""],
//     })
//   }

//   const handleQuestionChange = (index, value) => {
//     const updatedQuestions = [...formData.screeningQuestions]
//     updatedQuestions[index] = value
//     setFormData({
//       ...formData,
//       screeningQuestions: updatedQuestions,
//     })
//   }

//   const handleRemoveQuestion = (index) => {
//     const updatedQuestions = formData.screeningQuestions.filter((_, i) => i !== index)
//     setFormData({
//       ...formData,
//       screeningQuestions: updatedQuestions,
//     })
//   }

//   const handleFileChange = (e) => {
//     // In a real app, you would handle file uploads to a server
//     // For this demo, we'll just store the file names
//     const files = Array.from(e.target.files)
//     setFormData({
//       ...formData,
//       attachments: [...formData.attachments, ...files.map((file) => file.name)],
//     })
//   }

//   const handleRemoveAttachment = (index) => {
//     const updatedAttachments = formData.attachments.filter((_, i) => i !== index)
//     setFormData({
//       ...formData,
//       attachments: updatedAttachments,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!formData.title || !formData.department || !formData.location) {
//       toast.error("Please fill in all required fields!")
//       return
//     }

//     // In a real app, these would come from the backend
//     const postedDate = new Date().toISOString().split("T")[0]
//     const deadline = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

//     const newJob = {
//       ...formData,
//       id: Date.now(),
//       status: "active",
//       postedDate,
//       deadline,
//       applications: 0,
//     }

//     setJobs([...jobs, newJob])
//     toast.success("Job added successfully!")
//     closeModal()
//   }

//   const handleDelete = () => {
//     if (jobToDelete) {
//       setJobs(jobs.filter((job) => job.id !== jobToDelete.id))
//       toast.success("Job deleted successfully!")
//       closeDeleteModal()
//     }
//   }

//   const toggleJobStatus = (jobId) => {
//     setJobs(
//       jobs.map((job) => {
//         if (job.id === jobId) {
//           const newStatus = job.status === "active" ? "inactive" : "active"
//           toast.success(`Job marked as ${newStatus}`)
//           return { ...job, status: newStatus }
//         }
//         return job
//       }),
//     )
//   }

//   const handleShareJob = (e) => {
//     e.preventDefault()
//     // In a real app, this would send the job to the specified email
//     toast.success("Job shared successfully!")
//     closeShareModal()
//   }

//   // Filter jobs based on search term and active tab
//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch = Object.values(job).some(
//       (value) => value && value.toString().toLowerCase().includes(searchTerm),
//     )

//     if (activeTab === "all") {
//       return matchesSearch
//     } else {
//       return matchesSearch && job.status === activeTab
//     }
//   })

//   // Pagination
//   const indexOfLastJob = currentPage * jobsPerPage
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

//   const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
//       <Header title={"Job Openings"} />
      

//       <motion.div
//         className="p-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Search"
//                 className="py-2 border rounded sm:w-40 bg-gray-800 text-white pl-10 md:w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             </div>
//           </div>
//           <motion.button
//             onClick={openModal}
//             className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 flex items-center justify-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Plus size={24} />
//           </motion.button>
//         </div>

//         {/* Status Tabs */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-gray-800 rounded-lg p-1 flex">
//             <button
//               onClick={() => {
//                 setActiveTab("all")
//                 setCurrentPage(1)
//               }}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "all" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               All Jobs
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("active")
//                 setCurrentPage(1)
//               }}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "active" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               Active Jobs
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("inactive")
//                 setCurrentPage(1)
//               }}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "inactive"
//                   ? "bg-purple-600 text-white"
//                   : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               Inactive Jobs
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {currentJobs.map((job) => (
//             <motion.div
//               key={job.id}
//               className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700 transition-all duration-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex justify-between items-start">
//                 <h2 className="text-xl font-bold text-white">{job.title}</h2>
//                 <div className="flex space-x-1">
//                   <motion.button
//                     onClick={() => toggleJobStatus(job.id)}
//                     className={`p-1 rounded-full ${
//                       job.status === "active"
//                         ? "text-green-400 hover:text-green-500 hover:bg-green-500/10"
//                         : "text-gray-400 hover:text-gray-300 hover:bg-gray-500/10"
//                     }`}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     title={job.status === "active" ? "Mark as Inactive" : "Mark as Active"}
//                   >
//                     {job.status === "active" ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
//                   </motion.button>
//                   <motion.button
//                     onClick={() => openShareModal(job)}
//                     className="text-blue-400 hover:text-blue-500 p-1 rounded-full hover:bg-blue-500/10"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     title="Share Job"
//                   >
//                     <Share2 size={18} />
//                   </motion.button>
//                   <motion.button
//                     onClick={() => openViewJobModal(job)}
//                     className="text-purple-400 hover:text-purple-500 p-1 rounded-full hover:bg-purple-500/10"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     title="View Details"
//                   >
//                     <Eye size={18} />
//                   </motion.button>
//                   <motion.button
//                     onClick={() => openDeleteModal(job)}
//                     className="text-red-400 hover:text-red-500 p-1 rounded-full hover:bg-red-500/10"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     title="Delete Job"
//                   >
//                     <Trash2 size={18} />
//                   </motion.button>
//                 </div>
//               </div>

//               <div className="mt-3 space-y-2">
//               <p className="text-gray-300 flex items-center text-sm">
//                   <Briefcase size={14} className="mr-2 text-purple-400" />  {job.department}
//                 </p>
//                 <p className="text-gray-300 flex items-center text-sm">
//                   <Calendar size={14} className="mr-2 text-purple-400" /> Posted: {job.postedDate}
//                 </p>
//                 <p className="text-gray-300 flex items-center text-sm">
//                   <MapPin size={14} className="mr-2 text-purple-400"/> {job.location}
//                 </p>
//                 {/* <p className="text-gray-300 flex items-center text-sm">
//                   <Calendar size={14} className="mr-2 text-purple-400" /> Expires: {job.deadline}
//                 </p> */}
//                 {job.salary && (
//                   <p className="text-gray-300 flex items-center text-sm">
//                     <DollarSign size={14} className="mr-2 text-purple-400" /> {job.salary}
//                   </p>
//                 )}
//                 <button
//                   onClick={() => openApplicationsModal(job)}
//                   className="text-gray-300 flex items-center text-sm hover:text-white"
//                 >
//                   <Users size={14} className="mr-2 text-purple-400" />
//                   <span className="underline">{job.applications} Applications</span>
//                 </button>
//               </div>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 <span
//                   className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                     job.status === "active"
//                       ? "bg-green-900/60 text-green-300 border border-green-500"
//                       : "bg-red-900/60 text-red-300 border border-red-500"
//                   }`}
//                 >
//                   {job.status}
//                 </span>
//                 <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/60 text-blue-300 border border-blue-500">
//                   {job.jobType}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {filteredJobs.length > 0 && (
//           <div className="flex justify-center mt-8">
//             <nav className="flex items-center space-x-2">
//               <button
//                 onClick={() => paginate(Math.max(1, currentPage - 1))}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded-md ${
//                   currentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//                 <button
//                   key={number}
//                   onClick={() => paginate(number)}
//                   className={`px-3 py-1 rounded-md ${
//                     currentPage === number ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-700"
//                   }`}
//                 >
//                   {number}
//                 </button>
//               ))}

//               <button
//                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                 disabled={currentPage === totalPages}
//                 className={`p-2 rounded-md ${
//                   currentPage === totalPages ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </nav>
//           </div>
//         )}

//         {filteredJobs.length === 0 && (
//           <motion.div
//             className="text-center py-16 px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 text-purple-400 mb-4">
//               <Search size={32} />
//             </div>
//             <h3 className="text-xl font-bold text-white mb-2">No job openings found</h3>
//             <p className="text-gray-400 max-w-md mx-auto">
//               Try adjusting your search or filter criteria to find what you're looking for.
//             </p>
//             {searchTerm && (
//               <button
//                 onClick={() => {
//                   setSearchTerm("")
//                   setActiveTab("all")
//                 }}
//                 className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
//               >
//                 Clear search
//               </button>
//             )}
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Add Job Modal - Right to Left Slider */}
//       <AnimatePresence>
//         {modalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 w-full max-w-2xl h-full overflow-y-auto border-l border-gray-700"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             >
//               <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
//                 <h2 className="text-white text-xl font-bold">Add New Job Opening</h2>
//                 <motion.button
//                   onClick={closeModal}
//                   className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} />
//                 </motion.button>
//               </div>

//               <div className="p-6">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Job Title*</label>
//                       <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         placeholder="e.g. Senior React Developer"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Department*</label>
//                       <select
//                         name="department"
//                         value={formData.department}
//                         onChange={handleChange}
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                         required
//                       >
//                         <option value="">Select Department</option>
//                         {departmentOptions.map((dept) => (
//                           <option key={dept} value={dept}>
//                             {dept}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Location*</label>
//                       <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                         placeholder="e.g. New York or Remote"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Salary Range</label>
//                       <input
//                         type="text"
//                         name="salary"
//                         value={formData.salary}
//                         onChange={handleChange}
//                         placeholder="e.g. $80,000 - $100,000"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Job Type</label>
//                       <select
//                         name="jobType"
//                         value={formData.jobType}
//                         onChange={handleChange}
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       >
//                         {jobTypeOptions.map((type) => (
//                           <option key={type} value={type}>
//                             {type}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Description</label>
//                       <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         placeholder="Provide a detailed description of the job"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Requirements</label>
//                       <textarea
//                         name="requirements"
//                         value={formData.requirements}
//                         onChange={handleChange}
//                         placeholder="List the key requirements for this position"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Responsibilities</label>
//                       <textarea
//                         name="responsibilities"
//                         value={formData.responsibilities}
//                         onChange={handleChange}
//                         placeholder="Describe the main responsibilities for this role"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
//                       />
//                     </div>

//                     <div>
//                       <div className="flex justify-between items-center mb-2">
//                         <label className="text-gray-300 font-medium">Screening Questions</label>
//                         <button
//                           type="button"
//                           onClick={handleAddQuestion}
//                           className="text-purple-400 hover:text-purple-300 text-sm"
//                         >
//                           + Add Question
//                         </button>
//                       </div>
//                       {formData.screeningQuestions.map((question, index) => (
//                         <div key={index} className="flex items-center gap-2 mb-2">
//                           <input
//                             type="text"
//                             value={question}
//                             onChange={(e) => handleQuestionChange(index, e.target.value)}
//                             placeholder="Enter a screening question"
//                             className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                           />
//                           {formData.screeningQuestions.length > 1 && (
//                             <button
//                               type="button"
//                               onClick={() => handleRemoveQuestion(index)}
//                               className="text-red-400 hover:text-red-300"
//                             >
//                               <X size={20} />
//                             </button>
//                           )}
//                         </div>
//                       ))}
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Attachments</label>
//                       <div className="mb-2">
//                         <label className="flex items-center justify-center w-full px-4 py-3 border border-gray-700 border-dashed rounded-md bg-gray-800 text-gray-300 cursor-pointer hover:bg-gray-750">
//                           <Upload className="mr-2" size={18} />
//                           <span>Upload Files</span>
//                           <input type="file" multiple onChange={handleFileChange} className="hidden" />
//                         </label>
//                       </div>
//                       {formData.attachments.length > 0 && (
//                         <div className="space-y-2 mt-2">
//                           {formData.attachments.map((file, index) => (
//                             <div key={index} className="flex items-center justify-between bg-gray-750 p-2 rounded-md">
//                               <div className="flex items-center">
//                                 <FileText size={16} className="mr-2 text-purple-400" />
//                                 <span className="text-sm text-gray-300">{file}</span>
//                               </div>
//                               <button
//                                 type="button"
//                                 onClick={() => handleRemoveAttachment(index)}
//                                 className="text-red-400 hover:text-red-300"
//                               >
//                                 <X size={16} />
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex justify-end space-x-4 pt-4">
//                     <motion.button
//                       type="button"
//                       onClick={closeModal}
//                       className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       Cancel
//                     </motion.button>
//                     <motion.button
//                       type="submit"
//                       className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 font-medium"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       Add Job
//                     </motion.button>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* View Job Modal */}
//       <AnimatePresence>
//         {viewJobModal && currentJob && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 w-full max-w-2xl h-full overflow-y-auto border-l border-gray-700"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             >
//               <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
//                 <h2 className="text-white text-xl font-bold">Job Details</h2>
//                 <motion.button
//                   onClick={closeViewJobModal}
//                   className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} />
//                 </motion.button>
//               </div>

//               <div className="p-6 space-y-6">
//                 <div>
//                   <h3 className="text-2xl font-bold text-white mb-2">{currentJob.title}</h3>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     <span
//                       className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                         currentJob.status === "active"
//                           ? "bg-green-900/60 text-green-300 border border-green-500"
//                           : "bg-red-900/60 text-red-300 border border-red-500"
//                       }`}
//                     >
//                       {currentJob.status}
//                     </span>
//                     <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/60 text-blue-300 border border-blue-500">
//                       {currentJob.jobType}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 text-gray-300">
//                   <div>
//                     <p className="text-sm text-gray-500">Department</p>
//                     <p>{currentJob.department}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Location</p>
//                     <p>{currentJob.location}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Posted Date</p>
//                     <p>{currentJob.postedDate}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Deadline</p>
//                     <p>{currentJob.deadline}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Salary</p>
//                     <p>{currentJob.salary || "Not specified"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Applications</p>
//                     <p>{currentJob.applications}</p>
//                   </div>
//                 </div>

//                 {currentJob.description && (
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
//                     <p className="text-gray-300">{currentJob.description}</p>
//                   </div>
//                 )}

//                 {currentJob.requirements && (
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
//                     <p className="text-gray-300">{currentJob.requirements}</p>
//                   </div>
//                 )}

//                 {currentJob.responsibilities && (
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Responsibilities</h4>
//                     <p className="text-gray-300">{currentJob.responsibilities}</p>
//                   </div>
//                 )}

//                 <div className="flex justify-between pt-4">
//                   <motion.button
//                     onClick={() => {
//                       closeViewJobModal()
//                       openApplicationsModal(currentJob)
//                     }}
//                     className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium flex items-center"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Users size={18} className="mr-2" />
//                     View Applications
//                   </motion.button>
//                   <motion.button
//                     onClick={() => toggleJobStatus(currentJob.id)}
//                     className={`px-6 py-3 rounded-md font-medium flex items-center ${
//                       currentJob.status === "active"
//                         ? "bg-red-500 text-white hover:bg-red-600"
//                         : "bg-green-500 text-white hover:bg-green-600"
//                     }`}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {currentJob.status === "active" ? "Mark Inactive" : "Mark Active"}
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Share Job Modal */}
//       <AnimatePresence>
//         {shareModalOpen && jobToShare && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             >
//               <div className="text-center mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/30 text-blue-400 mb-4">
//                   <Share2 size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Share Job Opening</h3>
//                 <p className="text-gray-300">
//                   Share the job opening for <span className="font-semibold">{jobToShare.title}</span> with others.
//                 </p>
//               </div>

//               <form onSubmit={handleShareJob} className="space-y-4">
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
//                   <input
//                     type="email"
//                     placeholder="Enter email address"
//                     className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-300 mb-2 font-medium">Message (Optional)</label>
//                   <textarea
//                     placeholder="Add a personal message"
//                     className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
//                   />
//                 </div>

//                 <div className="flex justify-center space-x-4 pt-4">
//                   <motion.button
//                     type="button"
//                     onClick={closeShareModal}
//                     className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Share
//                   </motion.button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Applications Modal */}
//       <AnimatePresence>
//         {applicationsModalOpen && selectedJobApplications && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 w-full max-w-2xl h-full overflow-y-auto border-l border-gray-700"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             >
//               <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
//                 <h2 className="text-white text-xl font-bold">Applications for {selectedJobApplications.title}</h2>
//                 <motion.button
//                   onClick={closeApplicationsModal}
//                   className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} />
//                 </motion.button>
//               </div>

//               <div className="p-6">
//                 {mockApplications.length > 0 ? (
//                   <div className="space-y-4">
//                     {mockApplications.map((application) => (
//                       <div key={application.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
//                         <div className="flex justify-between items-start">
//                           <h3 className="text-lg font-semibold text-white">{application.name}</h3>
//                           <span
//                             className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                               application.status === "Shortlisted"
//                                 ? "bg-green-900/60 text-green-300 border border-green-500"
//                                 : application.status === "Rejected"
//                                   ? "bg-red-900/60 text-red-300 border border-red-500"
//                                   : "bg-blue-900/60 text-blue-300 border border-blue-500"
//                             }`}
//                           >
//                             {application.status}
//                           </span>
//                         </div>
//                         <div className="mt-2 space-y-1 text-sm text-gray-300">
//                           <p>Email: {application.email}</p>
//                           <p>Experience: {application.experience}</p>
//                           <p>Applied: {application.appliedDate}</p>
//                         </div>
//                         <div className="mt-4 flex space-x-2">
//                           <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
//                             View Profile
//                           </button>
//                           <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
//                             Contact
//                           </button>
//                           {application.status !== "Shortlisted" && (
//                             <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
//                               Shortlist
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-12">
//                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 text-gray-400 mb-4">
//                       <Users size={32} />
//                     </div>
//                     <h3 className="text-xl font-bold text-white mb-2">No applications yet</h3>
//                     <p className="text-gray-400">There are no applications for this job opening yet.</p>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Delete Confirmation Modal */}
//       <AnimatePresence>
//         {deleteModalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             >
//               <div className="text-center mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/30 text-red-400 mb-4">
//                   <Trash2 size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Confirm Deletion</h3>
//                 <p className="text-gray-300">
//                   Are you sure you want to delete the job opening for{" "}
//                   <span className="font-semibold">{jobToDelete?.title}</span>? This action cannot be undone.
//                 </p>
//               </div>

//               <div className="flex justify-center space-x-4">
//                 <motion.button
//                   onClick={closeDeleteModal}
//                   className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Cancel
//                 </motion.button>
//                 <motion.button
//                   onClick={handleDelete}
//                   className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 font-medium"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Delete
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Jobopening

// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { toast, Toaster } from "react-hot-toast"
// import {
//   Search,
//   X,
//   Trash2,
//   Calendar,
//   DollarSign,
//   Users,
//   Share2,
//   Eye,
//   ToggleLeft,
//   ToggleRight,
//   FileText,
//   Upload,
//   ChevronLeft,
//   ChevronRight,
//   CheckCircle,
//   Plus,
//   Mail,
//   Briefcase,
// } from "lucide-react"
// import Header from "../components/Common/Header"

// const Jobopening = () => {
//   const initialJobs = [
//     {
//       id: 1,
//       title: "Software Engineer",
//       department: "Engineering",
//       location: "New York",
//       status: "active",
//       salary: "120,000 - 150,000",
//       jobType: "Full-time",
//       postedDate: "2023-05-15",
//       deadline: "2023-06-15",
//       applications: 12,
//       description: "We are looking for a skilled software engineer to join our team.",
//       requirements: "React, Node.js, TypeScript",
//       responsibilities: "Develop and maintain web applications",
//     },
//     {
//       id: 2,
//       title: "Product Manager",
//       department: "Product",
//       location: "San Francisco",
//       status: "inactive",
//       salary: "130,000 - 160,000",
//       jobType: "Full-time",
//       postedDate: "2023-04-10",
//       deadline: "2023-05-10",
//       applications: 8,
//       description: "We need a product manager to lead our product development efforts.",
//       requirements: "Product management, Agile, JIRA",
//       responsibilities: "Define product roadmap and features",
//     },
//     {
//       id: 3,
//       title: "Data Scientist",
//       department: "Engineering",
//       location: "Remote",
//       status: "active",
//       salary: "110,000 - 140,000",
//       jobType: "Contract",
//       postedDate: "2023-03-20",
//       deadline: "2023-04-20",
//       applications: 15,
//       description: "Join our data science team to build predictive models.",
//       requirements: "Python, SQL, Machine Learning",
//       responsibilities: "Analyze data and build predictive models",
//     },
//   ]

//   const [jobs, setJobs] = useState(initialJobs)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [modalOpen, setModalOpen] = useState(false)
//   const [deleteModalOpen, setDeleteModalOpen] = useState(false)
//   const [jobToDelete, setJobToDelete] = useState(null)
//   const [activeTab, setActiveTab] = useState("all")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [jobsPerPage] = useState(6)
//   const [viewJobModal, setViewJobModal] = useState(false)
//   const [currentJob, setCurrentJob] = useState(null)
//   const [shareModalOpen, setShareModalOpen] = useState(false)
//   const [jobToShare, setJobToShare] = useState(null)
//   const [applicationsModalOpen, setApplicationsModalOpen] = useState(false)
//   const [selectedJobApplications, setSelectedJobApplications] = useState(null)
//   const [viewApplicantDetail, setViewApplicantDetail] = useState(false)
//   const [selectedApplicant, setSelectedApplicant] = useState(null)
//   const [contactModalOpen, setContactModalOpen] = useState(false)
//   const [contactMessage, setContactMessage] = useState("")

//   // Mock applications data
//   const mockApplications = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john@example.com",
//       experience: "5 years",
//       appliedDate: "2023-05-20",
//       status: "New",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane@example.com",
//       experience: "3 years",
//       appliedDate: "2023-05-19",
//       status: "Shortlisted",
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       email: "mike@example.com",
//       experience: "7 years",
//       appliedDate: "2023-05-18",
//       status: "Rejected",
//     },
//     {
//       id: 4,
//       name: "Sarah Williams",
//       email: "sarah@example.com",
//       experience: "4 years",
//       appliedDate: "2023-05-17",
//       status: "New",
//     },
//   ]

//   useEffect(() => {
//     if (
//       modalOpen ||
//       deleteModalOpen ||
//       viewJobModal ||
//       shareModalOpen ||
//       applicationsModalOpen ||
//       viewApplicantDetail ||
//       contactModalOpen
//     ) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [
//     modalOpen,
//     deleteModalOpen,
//     viewJobModal,
//     shareModalOpen,
//     applicationsModalOpen,
//     viewApplicantDetail,
//     contactModalOpen,
//   ])

//   const [formData, setFormData] = useState({
//     title: "",
//     department: "",
//     location: "",
//     salary: "",
//     jobType: "Full-time",
//     description: "",
//     requirements: "",
//     responsibilities: "",
//     screeningQuestions: [""],
//     attachments: [],
//   })

//   const departmentOptions = [
//     "Engineering",
//     "Product",
//     "Marketing",
//     "Sales",
//     "HR",
//     "Finance",
//     "Operations",
//     "Customer Support",
//   ]
//   const jobTypeOptions = ["Full-time", "Part-time", "Contract", "Internship", "Temporary", "Remote"]

//   const openModal = () => {
//     setFormData({
//       title: "",
//       department: "",
//       location: "",
//       salary: "",
//       jobType: "Full-time",
//       description: "",
//       requirements: "",
//       responsibilities: "",
//       screeningQuestions: [""],
//       attachments: [],
//     })
//     setModalOpen(true)
//   }

//   const closeModal = () => {
//     setModalOpen(false)
//   }

//   const openDeleteModal = (job) => {
//     setJobToDelete(job)
//     setDeleteModalOpen(true)
//   }

//   const closeDeleteModal = () => {
//     setDeleteModalOpen(false)
//     setJobToDelete(null)
//   }

//   const openShareModal = (job) => {
//     setJobToShare(job)
//     setShareModalOpen(true)
//   }

//   const closeShareModal = () => {
//     setShareModalOpen(false)
//     setJobToShare(null)
//   }

//   const openViewJobModal = (job) => {
//     setCurrentJob(job)
//     setViewJobModal(true)
//   }

//   const closeViewJobModal = () => {
//     setViewJobModal(false)
//     setCurrentJob(null)
//   }

//   const openApplicationsModal = (job) => {
//     setSelectedJobApplications(job)
//     setApplicationsModalOpen(true)
//   }

//   const closeApplicationsModal = () => {
//     setApplicationsModalOpen(false)
//     setSelectedJobApplications(null)
//   }

//   const handleViewApplicantDetail = (applicant) => {
//     setSelectedApplicant(applicant)
//     setViewApplicantDetail(true)
//   }

//   const closeApplicantDetail = () => {
//     setViewApplicantDetail(false)
//     setSelectedApplicant(null)
//   }

//   const handleContactApplicant = (applicant) => {
//     setSelectedApplicant(applicant)
//     setContactModalOpen(true)
//   }

//   const closeContactModal = () => {
//     setContactModalOpen(false)
//     setContactMessage("")
//   }

//   const handleSendMessage = (e) => {
//     e.preventDefault()
//     toast.success(`Message sent to ${selectedApplicant.name}`)
//     closeContactModal()
//   }

//   const handleShortlistApplicant = (applicant) => {
//     // In a real app, this would update the backend
//     const updatedApplications = mockApplications.map((app) => {
//       if (app.id === applicant.id) {
//         const newStatus = app.status === "Shortlisted" ? "New" : "Shortlisted"
//         toast.success(`${applicant.name} ${newStatus === "Shortlisted" ? "added to" : "removed from"} shortlist`)
//         return { ...app, status: newStatus }
//       }
//       return app
//     })
//     // This is just for demo purposes since we're not actually updating the mockApplications array
//     // In a real app, you would update the state with the new array
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prevData) => ({ ...prevData, [name]: value }))
//   }

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase())
//     setCurrentPage(1)
//   }

//   const handleAddQuestion = () => {
//     setFormData({
//       ...formData,
//       screeningQuestions: [...formData.screeningQuestions, ""],
//     })
//   }

//   const handleQuestionChange = (index, value) => {
//     const updatedQuestions = [...formData.screeningQuestions]
//     updatedQuestions[index] = value
//     setFormData({
//       ...formData,
//       screeningQuestions: updatedQuestions,
//     })
//   }

//   const handleRemoveQuestion = (index) => {
//     const updatedQuestions = formData.screeningQuestions.filter((_, i) => i !== index)
//     setFormData({
//       ...formData,
//       screeningQuestions: updatedQuestions,
//     })
//   }

//   const handleFileChange = (e) => {
//     // In a real app, you would handle file uploads to a server
//     // For this demo, we'll just store the file names
//     const files = Array.from(e.target.files)
//     setFormData({
//       ...formData,
//       attachments: [...formData.attachments, ...files.map((file) => file.name)],
//     })
//   }

//   const handleRemoveAttachment = (index) => {
//     const updatedAttachments = formData.attachments.filter((_, i) => i !== index)
//     setFormData({
//       ...formData,
//       attachments: updatedAttachments,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!formData.title || !formData.department || !formData.location) {
//       toast.error("Please fill in all required fields!")
//       return
//     }

//     // In a real app, these would come from the backend
//     const postedDate = new Date().toISOString().split("T")[0]
//     const deadline = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

//     const newJob = {
//       ...formData,
//       id: Date.now(),
//       status: "active",
//       postedDate,
//       deadline,
//       applications: 0,
//     }

//     setJobs([...jobs, newJob])
//     toast.success("Job added successfully!")
//     closeModal()
//   }

//   const handleDelete = () => {
//     if (jobToDelete) {
//       setJobs(jobs.filter((job) => job.id !== jobToDelete.id))
//       toast.success("Job deleted successfully!")
//       closeDeleteModal()
//     }
//   }

//   const toggleJobStatus = (jobId) => {
//     setJobs(
//       jobs.map((job) => {
//         if (job.id === jobId) {
//           const newStatus = job.status === "active" ? "inactive" : "active"
//           toast.success(`Job marked as ${newStatus}`)
//           return { ...job, status: newStatus }
//         }
//         return job
//       }),
//     )
//   }

//   const handleShareJob = (e) => {
//     e.preventDefault()
//     // In a real app, this would send the job to the specified email
//     toast.success("Job shared successfully!")
//     closeShareModal()
//   }

//   // Filter jobs based on search term and active tab
//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch = Object.values(job).some(
//       (value) => value && value.toString().toLowerCase().includes(searchTerm),
//     )

//     if (activeTab === "all") {
//       return matchesSearch
//     } else {
//       return matchesSearch && job.status === activeTab
//     }
//   })

//   // Pagination
//   const indexOfLastJob = currentPage * jobsPerPage
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

//   const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
//       <Header title={"Job Openings"} />
//       <Toaster position="top-right" />

//       <motion.div
//         className="p-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Search"
//                 className="py-2 border rounded sm:w-40 bg-gray-800 text-white pl-10 md:w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             </div>
//           </div>
//           <motion.button
//             onClick={openModal}
//             className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 flex items-center justify-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Plus size={24} />
//           </motion.button>
//         </div>

//         {/* Status Tabs */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-gray-800 rounded-lg p-1 flex">
//             <button
//               onClick={() => {
//                 setActiveTab("all")
//                 setCurrentPage(1)
//               }}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "all" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               All Jobs
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("active")
//                 setCurrentPage(1)
//               }}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "active" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               Active Jobs
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTab("inactive")
//                 setCurrentPage(1)
//               }}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 activeTab === "inactive"
//                   ? "bg-purple-600 text-white"
//                   : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               Inactive Jobs
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {currentJobs.map((job) => (
//             <motion.div
//               key={job.id}
//               className="bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700 transition-all duration-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex justify-between items-start">
//                 <h2 className="text-xl font-bold text-white">{job.title}</h2>
//                 <div className="flex space-x-1">
//                   <motion.button
//                     onClick={() => toggleJobStatus(job.id)}
//                     className={`p-1 rounded-full ${
//                       job.status === "active"
//                         ? "text-green-400 hover:text-green-500 hover:bg-green-500/10"
//                         : "text-gray-400 hover:text-gray-300 hover:bg-gray-500/10"
//                     }`}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     title={job.status === "active" ? "Mark as Inactive" : "Mark as Active"}
//                   >
//                     {job.status === "active" ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
//                   </motion.button>
//                   <motion.button
//                     onClick={() => openShareModal(job)}
//                     className="text-blue-400 hover:text-blue-500 p-1 rounded-full hover:bg-blue-500/10"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     title="Share Job"
//                   >
//                     <Share2 size={18} />
//                   </motion.button>
//                   <motion.button
//                     onClick={() => openViewJobModal(job)}
//                     className="text-purple-400 hover:text-purple-500 p-1 rounded-full hover:bg-purple-500/10"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     title="View Details"
//                   >
//                     <Eye size={18} />
//                   </motion.button>
//                   <motion.button
//                     onClick={() => openDeleteModal(job)}
//                     className="text-red-400 hover:text-red-500 p-1 rounded-full hover:bg-red-500/10"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     title="Delete Job"
//                   >
//                     <Trash2 size={18} />
//                   </motion.button>
//                 </div>
//               </div>

//               <div className="mt-3 space-y-2">
//                 <p className="text-gray-300 flex items-center text-sm">
//                   <Calendar size={14} className="mr-2 text-purple-400" /> Posted: {job.postedDate}
//                 </p>
//                 <p className="text-gray-300 flex items-center text-sm">
//                   <Calendar size={14} className="mr-2 text-purple-400" /> Expires: {job.deadline}
//                 </p>
//                 {job.salary && (
//                   <p className="text-gray-300 flex items-center text-sm">
//                     <DollarSign size={14} className="mr-2 text-purple-400" /> {job.salary}
//                   </p>
//                 )}
//                 <button
//                   onClick={() => openApplicationsModal(job)}
//                   className="text-gray-300 flex items-center text-sm hover:text-white"
//                 >
//                   <Users size={14} className="mr-2 text-purple-400" />
//                   <span className="underline">{job.applications} Applications</span>
//                 </button>
//               </div>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 <span
//                   className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                     job.status === "active"
//                       ? "bg-green-900/60 text-green-300 border border-green-500"
//                       : "bg-red-900/60 text-red-300 border border-red-500"
//                   }`}
//                 >
//                   {job.status}
//                 </span>
//                 <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/60 text-blue-300 border border-blue-500">
//                   {job.jobType}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {filteredJobs.length > 0 && (
//           <div className="flex justify-center mt-8">
//             <nav className="flex items-center space-x-2">
//               <button
//                 onClick={() => paginate(Math.max(1, currentPage - 1))}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded-md ${
//                   currentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//                 <button
//                   key={number}
//                   onClick={() => paginate(number)}
//                   className={`px-3 py-1 rounded-md ${
//                     currentPage === number ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-700"
//                   }`}
//                 >
//                   {number}
//                 </button>
//               ))}

//               <button
//                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                 disabled={currentPage === totalPages}
//                 className={`p-2 rounded-md ${
//                   currentPage === totalPages ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </nav>
//           </div>
//         )}

//         {filteredJobs.length === 0 && (
//           <motion.div
//             className="text-center py-16 px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 text-purple-400 mb-4">
//               <Search size={32} />
//             </div>
//             <h3 className="text-xl font-bold text-white mb-2">No job openings found</h3>
//             <p className="text-gray-400 max-w-md mx-auto">
//               Try adjusting your search or filter criteria to find what you're looking for.
//             </p>
//             {searchTerm && (
//               <button
//                 onClick={() => {
//                   setSearchTerm("")
//                   setActiveTab("all")
//                 }}
//                 className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
//               >
//                 Clear search
//               </button>
//             )}
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Add Job Modal - Right to Left Slider */}
//       <AnimatePresence>
//         {modalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 w-full max-w-2xl h-full overflow-y-auto border-l border-gray-700"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             >
//               <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
//                 <h2 className="text-white text-xl font-bold">Add New Job Opening</h2>
//                 <motion.button
//                   onClick={closeModal}
//                   className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} />
//                 </motion.button>
//               </div>

//               <div className="p-6">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Job Title*</label>
//                       <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         placeholder="e.g. Senior React Developer"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Department*</label>
//                       <select
//                         name="department"
//                         value={formData.department}
//                         onChange={handleChange}
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                         required
//                       >
//                         <option value="">Select Department</option>
//                         {departmentOptions.map((dept) => (
//                           <option key={dept} value={dept}>
//                             {dept}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Location*</label>
//                       <input
//                         type="text"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                         placeholder="e.g. New York or Remote"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Salary Range</label>
//                       <input
//                         type="text"
//                         name="salary"
//                         value={formData.salary}
//                         onChange={handleChange}
//                         placeholder="e.g. $80,000 - $100,000"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Job Type</label>
//                       <select
//                         name="jobType"
//                         value={formData.jobType}
//                         onChange={handleChange}
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                       >
//                         {jobTypeOptions.map((type) => (
//                           <option key={type} value={type}>
//                             {type}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Description</label>
//                       <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         placeholder="Provide a detailed description of the job"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Requirements</label>
//                       <textarea
//                         name="requirements"
//                         value={formData.requirements}
//                         onChange={handleChange}
//                         placeholder="List the key requirements for this position"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Responsibilities</label>
//                       <textarea
//                         name="responsibilities"
//                         value={formData.responsibilities}
//                         onChange={handleChange}
//                         placeholder="Describe the main responsibilities for this role"
//                         className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
//                       />
//                     </div>

//                     <div>
//                       <div className="flex justify-between items-center mb-2">
//                         <label className="text-gray-300 font-medium">Screening Questions</label>
//                         <button
//                           type="button"
//                           onClick={handleAddQuestion}
//                           className="text-purple-400 hover:text-purple-300 text-sm"
//                         >
//                           + Add Question
//                         </button>
//                       </div>
//                       {formData.screeningQuestions.map((question, index) => (
//                         <div key={index} className="flex items-center gap-2 mb-2">
//                           <input
//                             type="text"
//                             value={question}
//                             onChange={(e) => handleQuestionChange(index, e.target.value)}
//                             placeholder="Enter a screening question"
//                             className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                           />
//                           {formData.screeningQuestions.length > 1 && (
//                             <button
//                               type="button"
//                               onClick={() => handleRemoveQuestion(index)}
//                               className="text-red-400 hover:text-red-300"
//                             >
//                               <X size={20} />
//                             </button>
//                           )}
//                         </div>
//                       ))}
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-medium">Attachments</label>
//                       <div className="mb-2">
//                         <label className="flex items-center justify-center w-full px-4 py-3 border border-gray-700 border-dashed rounded-md bg-gray-800 text-gray-300 cursor-pointer hover:bg-gray-750">
//                           <Upload className="mr-2" size={18} />
//                           <span>Upload Files</span>
//                           <input type="file" multiple onChange={handleFileChange} className="hidden" />
//                         </label>
//                       </div>
//                       {formData.attachments.length > 0 && (
//                         <div className="space-y-2 mt-2">
//                           {formData.attachments.map((file, index) => (
//                             <div key={index} className="flex items-center justify-between bg-gray-750 p-2 rounded-md">
//                               <div className="flex items-center">
//                                 <FileText size={16} className="mr-2 text-purple-400" />
//                                 <span className="text-sm text-gray-300">{file}</span>
//                               </div>
//                               <button
//                                 type="button"
//                                 onClick={() => handleRemoveAttachment(index)}
//                                 className="text-red-400 hover:text-red-300"
//                               >
//                                 <X size={16} />
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex justify-end space-x-4 pt-4">
//                     <motion.button
//                       type="button"
//                       onClick={closeModal}
//                       className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       Cancel
//                     </motion.button>
//                     <motion.button
//                       type="submit"
//                       className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 font-medium"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       Add Job
//                     </motion.button>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* View Job Modal */}
//       <AnimatePresence>
//         {viewJobModal && currentJob && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 w-full max-w-2xl h-full overflow-y-auto border-l border-gray-700"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             >
//               <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
//                 <h2 className="text-white text-xl font-bold">Job Details</h2>
//                 <motion.button
//                   onClick={closeViewJobModal}
//                   className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} />
//                 </motion.button>
//               </div>

//               <div className="p-6 space-y-6">
//                 <div>
//                   <h3 className="text-2xl font-bold text-white mb-2">{currentJob.title}</h3>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     <span
//                       className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                         currentJob.status === "active"
//                           ? "bg-green-900/60 text-green-300 border border-green-500"
//                           : "bg-red-900/60 text-red-300 border border-red-500"
//                       }`}
//                     >
//                       {currentJob.status}
//                     </span>
//                     <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/60 text-blue-300 border border-blue-500">
//                       {currentJob.jobType}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 text-gray-300">
//                   <div>
//                     <p className="text-sm text-gray-500">Department</p>
//                     <p>{currentJob.department}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Location</p>
//                     <p>{currentJob.location}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Posted Date</p>
//                     <p>{currentJob.postedDate}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Deadline</p>
//                     <p>{currentJob.deadline}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Salary</p>
//                     <p>{currentJob.salary || "Not specified"}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Applications</p>
//                     <p>{currentJob.applications}</p>
//                   </div>
//                 </div>

//                 {currentJob.description && (
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
//                     <p className="text-gray-300">{currentJob.description}</p>
//                   </div>
//                 )}

//                 {currentJob.requirements && (
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
//                     <p className="text-gray-300">{currentJob.requirements}</p>
//                   </div>
//                 )}

//                 {currentJob.responsibilities && (
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Responsibilities</h4>
//                     <p className="text-gray-300">{currentJob.responsibilities}</p>
//                   </div>
//                 )}

//                 <div className="flex justify-between pt-4">
//                   <motion.button
//                     onClick={() => {
//                       closeViewJobModal()
//                       openApplicationsModal(currentJob)
//                     }}
//                     className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium flex items-center"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <Users size={18} className="mr-2" />
//                     View Applications
//                   </motion.button>
//                   <motion.button
//                     onClick={() => toggleJobStatus(currentJob.id)}
//                     className={`px-6 py-3 rounded-md font-medium flex items-center ${
//                       currentJob.status === "active"
//                         ? "bg-red-500 text-white hover:bg-red-600"
//                         : "bg-green-500 text-white hover:bg-green-600"
//                     }`}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {currentJob.status === "active" ? "Mark Inactive" : "Mark Active"}
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Share Job Modal */}
//       <AnimatePresence>
//         {shareModalOpen && jobToShare && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             >
//               <div className="text-center mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/30 text-blue-400 mb-4">
//                   <Share2 size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Share Job Opening</h3>
//                 <p className="text-gray-300">
//                   Share the job opening for <span className="font-semibold">{jobToShare.title}</span> with others.
//                 </p>
//               </div>

//               <form onSubmit={handleShareJob} className="space-y-4">
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
//                   <input
//                     type="email"
//                     placeholder="Enter email address"
//                     className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-300 mb-2 font-medium">Message (Optional)</label>
//                   <textarea
//                     placeholder="Add a personal message"
//                     className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
//                   />
//                 </div>

//                 <div className="flex justify-center space-x-4 pt-4">
//                   <motion.button
//                     type="button"
//                     onClick={closeShareModal}
//                     className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Share
//                   </motion.button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Applications Modal */}
//       {applicationsModalOpen && selectedJobApplications && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <div className="container mx-auto px-4 py-8">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-white text-2xl font-bold">Applications for {selectedJobApplications.title}</h2>
//               <motion.button
//                 onClick={closeApplicationsModal}
//                 className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <X size={24} />
//               </motion.button>
//             </div>

//             {mockApplications.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {mockApplications.map((application) => (
//                   <div key={application.id} className="bg-gray-800 p-5 rounded-lg border border-gray-700">
//                     <div className="flex justify-between items-start">
//                       <h3 className="text-lg font-semibold text-white">{application.name}</h3>
//                       <span
//                         className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                           application.status === "Shortlisted"
//                             ? "bg-green-900/60 text-green-300 border border-green-500"
//                             : application.status === "Rejected"
//                               ? "bg-red-900/60 text-red-300 border border-red-500"
//                               : "bg-blue-900/60 text-blue-300 border border-blue-500"
//                         }`}
//                       >
//                         {application.status}
//                       </span>
//                     </div>
//                     <div className="mt-3 space-y-2 text-sm text-gray-300">
//                       <p className="flex items-center">
//                         <Mail size={14} className="mr-2 text-purple-400" /> {application.email}
//                       </p>
//                       <p className="flex items-center">
//                         <Briefcase size={14} className="mr-2 text-purple-400" /> Experience: {application.experience}
//                       </p>
//                       <p className="flex items-center">
//                         <Calendar size={14} className="mr-2 text-purple-400" /> Applied: {application.appliedDate}
//                       </p>
//                     </div>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                       <button
//                         onClick={() => handleViewApplicantDetail(application)}
//                         className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 flex items-center"
//                       >
//                         <Eye size={14} className="mr-1" /> View Details
//                       </button>
//                       <button
//                         onClick={() => handleContactApplicant(application)}
//                         className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex items-center"
//                       >
//                         <Mail size={14} className="mr-1" /> Contact
//                       </button>
//                       <button
//                         onClick={() => handleShortlistApplicant(application)}
//                         className={`px-3 py-1 text-sm rounded flex items-center ${
//                           application.status === "Shortlisted"
//                             ? "bg-gray-600 text-white hover:bg-gray-700"
//                             : "bg-blue-600 text-white hover:bg-blue-700"
//                         }`}
//                       >
//                         {application.status === "Shortlisted" ? (
//                           <>
//                             <CheckCircle size={14} className="mr-1" /> Shortlisted
//                           </>
//                         ) : (
//                           <>
//                             <Plus size={14} className="mr-1" /> Shortlist
//                           </>
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12 bg-gray-800 rounded-lg">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 text-gray-400 mb-4">
//                   <Users size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">No applications yet</h3>
//                 <p className="text-gray-400">There are no applications for this job opening yet.</p>
//               </div>
//             )}
//           </div>
//         </motion.div>
//       )}

//       {/* Delete Confirmation Modal */}
//       <AnimatePresence>
//         {deleteModalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             >
//               <div className="text-center mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-900/30 text-red-400 mb-4">
//                   <Trash2 size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Confirm Deletion</h3>
//                 <p className="text-gray-300">
//                   Are you sure you want to delete the job opening for{" "}
//                   <span className="font-semibold">{jobToDelete?.title}</span>? This action cannot be undone.
//                 </p>
//               </div>

//               <div className="flex justify-center space-x-4">
//                 <motion.button
//                   onClick={closeDeleteModal}
//                   className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Cancel
//                 </motion.button>
//                 <motion.button
//                   onClick={handleDelete}
//                   className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 font-medium"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Delete
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Applicant Detail Slider */}
//       <AnimatePresence>
//         {viewApplicantDetail && selectedApplicant && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-stretch z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 w-full max-w-md h-full overflow-y-auto border-l border-gray-700"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             >
//               <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-700 flex justify-between items-center z-10">
//                 <h2 className="text-white text-xl font-bold">Applicant Details</h2>
//                 <motion.button
//                   onClick={closeApplicantDetail}
//                   className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <X size={24} />
//                 </motion.button>
//               </div>

//               <div className="p-6 space-y-6">
//                 <div>
//                   <h3 className="text-2xl font-bold text-white mb-2">{selectedApplicant.name}</h3>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     <span
//                       className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                         selectedApplicant.status === "Shortlisted"
//                           ? "bg-green-900/60 text-green-300 border border-green-500"
//                           : selectedApplicant.status === "Rejected"
//                             ? "bg-red-900/60 text-red-300 border border-red-500"
//                             : "bg-blue-900/60 text-blue-300 border border-blue-500"
//                       }`}
//                     >
//                       {selectedApplicant.status}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Contact Information</h4>
//                     <div className="bg-gray-800 p-4 rounded-lg">
//                       <p className="flex items-center text-gray-300 mb-2">
//                         <Mail size={16} className="mr-2 text-purple-400" /> {selectedApplicant.email}
//                       </p>
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Experience</h4>
//                     <div className="bg-gray-800 p-4 rounded-lg">
//                       <p className="text-gray-300">{selectedApplicant.experience}</p>
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Application Timeline</h4>
//                     <div className="bg-gray-800 p-4 rounded-lg">
//                       <p className="flex items-center text-gray-300">
//                         <Calendar size={16} className="mr-2 text-purple-400" /> Applied on:{" "}
//                         {selectedApplicant.appliedDate}
//                       </p>
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-semibold text-white mb-2">Resume</h4>
//                     <div className="bg-gray-800 p-4 rounded-lg">
//                       <p className="text-gray-300 mb-2">Applicant's resume would be displayed or linked here.</p>
//                       <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center">
//                         <FileText size={16} className="mr-2" /> View Resume
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-3 pt-4">
//                   <button
//                     onClick={() => handleContactApplicant(selectedApplicant)}
//                     className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
//                   >
//                     <Mail size={18} className="mr-2" /> Contact Applicant
//                   </button>
//                   <button
//                     onClick={() => handleShortlistApplicant(selectedApplicant)}
//                     className={`px-4 py-2 rounded-md flex items-center justify-center ${
//                       selectedApplicant.status === "Shortlisted"
//                         ? "bg-gray-600 text-white hover:bg-gray-700"
//                         : "bg-blue-600 text-white hover:bg-blue-700"
//                     }`}
//                   >
//                     {selectedApplicant.status === "Shortlisted" ? "Remove from Shortlist" : "Add to Shortlist"}
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Contact Applicant Modal */}
//       <AnimatePresence>
//         {contactModalOpen && selectedApplicant && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             >
//               <div className="text-center mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 text-green-400 mb-4">
//                   <Mail size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Contact {selectedApplicant.name}</h3>
//                 <p className="text-gray-300">Send a message to the applicant regarding their application.</p>
//               </div>

//               <form onSubmit={handleSendMessage} className="space-y-4">
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-medium">Subject</label>
//                   <input
//                     type="text"
//                     placeholder="e.g. Regarding your application for Software Engineer"
//                     className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-300 mb-2 font-medium">Message</label>
//                   <textarea
//                     value={contactMessage}
//                     onChange={(e) => setContactMessage(e.target.value)}
//                     placeholder="Type your message here..."
//                     className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[150px] resize-y"
//                     required
//                   />
//                 </div>

//                 <div className="flex justify-center space-x-4 pt-4">
//                   <motion.button
//                     type="button"
//                     onClick={closeContactModal}
//                     className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Cancel
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 font-medium"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Send Message
//                   </motion.button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Jobopening

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast, Toaster } from "react-hot-toast"
import {Search,
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
  CheckCircle,
  Plus,
  Mail,
  Briefcase,
  MapPin,
  Phone,
  Star,
  Edit,
  Clock,
  User,
  GraduationCap,
  Award,
  Download,
  ExternalLink,
  MessageSquare,
  Paperclip,
  Link2,
  Linkedin,
  Github,
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

  // Mock applications data with expanded details
  const mockApplications = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      experience: "5 years",
      appliedDate: "2023-05-20",
      status: "New",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      currentRole: "Senior Frontend Developer",
      currentCompany: "Tech Solutions Inc.",
      education: {
        degree: "BS Computer Science",
        university: "Stanford University",
        year: "2018",
      },
      skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
      portfolio: "https://johndoe.dev",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      coverLetter: "I am excited to apply for the Software Engineer position at your company...",
      resumeUrl: "https://example.com/resume/johndoe.pdf",
      location: "New York, NY",
      salary: "$120,000",
      availability: "2 weeks notice",
      references: [
        {
          name: "Jane Smith",
          position: "Engineering Manager",
          company: "Previous Tech Co",
          contact: "jane@example.com",
        },
      ],
      interviewNotes: "Strong technical skills, good cultural fit. Recommend moving forward.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
      experience: "3 years",
      appliedDate: "2023-05-19",
      status: "Shortlisted",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      currentRole: "UX Designer",
      currentCompany: "Creative Design Studio",
      education: {
        degree: "MFA Design",
        university: "Rhode Island School of Design",
        year: "2020",
      },
      skills: ["UI/UX", "Figma", "Adobe XD", "Sketch", "User Research"],
      portfolio: "https://janesmith.design",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      coverLetter: "With my background in user experience design, I believe I would be a great fit...",
      resumeUrl: "https://example.com/resume/janesmith.pdf",
      location: "Boston, MA",
      salary: "$95,000",
      availability: "Immediate",
      references: [
        {
          name: "Robert Johnson",
          position: "Creative Director",
          company: "Design Agency",
          contact: "robert@example.com",
        },
      ],
      interviewNotes: "Excellent portfolio, strong communication skills.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1 (555) 456-7890",
      experience: "7 years",
      appliedDate: "2023-05-18",
      status: "Rejected",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      currentRole: "Data Engineer",
      currentCompany: "Data Insights Corp",
      education: {
        degree: "MS Data Science",
        university: "MIT",
        year: "2016",
      },
      skills: ["Python", "SQL", "Hadoop", "Spark", "Machine Learning"],
      portfolio: "https://mikejohnson.tech",
      github: "https://github.com/mikejohnson",
      linkedin: "https://linkedin.com/in/mikejohnson",
      coverLetter: "I am writing to express my interest in the Data Scientist position...",
      resumeUrl: "https://example.com/resume/mikejohnson.pdf",
      location: "Chicago, IL",
      salary: "$135,000",
      availability: "30 days notice",
      references: [
        {
          name: "Sarah Williams",
          position: "Head of Data",
          company: "Previous Analytics",
          contact: "sarah@example.com",
        },
      ],
      interviewNotes: "Strong technical background but not aligned with current team needs.",
      rating: 3.5,
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+1 (555) 234-5678",
      experience: "4 years",
      appliedDate: "2023-05-17",
      status: "New",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      currentRole: "Product Manager",
      currentCompany: "Product Innovations",
      education: {
        degree: "MBA",
        university: "Harvard Business School",
        year: "2019",
      },
      skills: ["Product Strategy", "Agile", "User Research", "Market Analysis", "Roadmapping"],
      portfolio: "https://sarahwilliams.co",
      github: "https://github.com/sarahwilliams",
      linkedin: "https://linkedin.com/in/sarahwilliams",
      coverLetter: "I am excited about the opportunity to join your team as a Product Manager...",
      resumeUrl: "https://example.com/resume/sarahwilliams.pdf",
      location: "San Francisco, CA",
      salary: "$125,000",
      availability: "3 weeks notice",
      references: [
        { name: "David Chen", position: "VP of Product", company: "Tech Innovations", contact: "david@example.com" },
      ],
      interviewNotes: "Great product sense and leadership potential.",
      rating: 4,
    },
    {
      id: 5,
      name: "Alex Chen",
      email: "alex@example.com",
      phone: "+1 (555) 876-5432",
      experience: "6 years",
      appliedDate: "2023-05-16",
      status: "New",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      currentRole: "DevOps Engineer",
      currentCompany: "Cloud Systems Inc",
      education: {
        degree: "BS Computer Engineering",
        university: "University of California, Berkeley",
        year: "2017",
      },
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      portfolio: "https://alexchen.dev",
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      coverLetter: "I am writing to apply for the DevOps Engineer position at your company...",
      resumeUrl: "https://example.com/resume/alexchen.pdf",
      location: "Seattle, WA",
      salary: "$130,000",
      availability: "4 weeks notice",
      references: [{ name: "Lisa Park", position: "CTO", company: "Previous Cloud Co", contact: "lisa@example.com" }],
      interviewNotes: "Strong infrastructure automation skills, good team player.",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Emily Brown",
      email: "emily@example.com",
      phone: "+1 (555) 345-6789",
      experience: "2 years",
      appliedDate: "2023-05-15",
      status: "Shortlisted",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      currentRole: "Frontend Developer",
      currentCompany: "Web Solutions",
      education: {
        degree: "BS Information Technology",
        university: "Georgia Tech",
        year: "2021",
      },
      skills: ["JavaScript", "React", "CSS", "HTML", "Responsive Design"],
      portfolio: "https://emilybrown.me",
      github: "https://github.com/emilybrown",
      linkedin: "https://linkedin.com/in/emilybrown",
      coverLetter: "I am excited to apply for the Frontend Developer position at your company...",
      resumeUrl: "https://example.com/resume/emilybrown.pdf",
      location: "Atlanta, GA",
      salary: "$85,000",
      availability: "2 weeks notice",
      references: [
        {
          name: "Michael Wilson",
          position: "Lead Developer",
          company: "Web Solutions",
          contact: "michael@example.com",
        },
      ],
      interviewNotes: "Promising junior developer with good potential.",
      rating: 4,
    },
  ]

  const [jobs, setJobs] = useState(initialJobs)
  const [searchTerm, setSearchTerm] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [jobToDelete, setJobToDelete] = useState(null)
  const [jobToEdit, setJobToEdit] = useState(null)
  const [activeTab, setActiveTab] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [jobsPerPage] = useState(6)
  const [viewJobModal, setViewJobModal] = useState(false)
  const [currentJob, setCurrentJob] = useState(null)
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [jobToShare, setJobToShare] = useState(null)
  const [applicationsModalOpen, setApplicationsModalOpen] = useState(false)
  const [selectedJobApplications, setSelectedJobApplications] = useState(null)
  const [viewApplicantDetail, setViewApplicantDetail] = useState(false)
  const [selectedApplicant, setSelectedApplicant] = useState(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactMessage, setContactMessage] = useState("")
  const [applicantCurrentPage, setApplicantCurrentPage] = useState(1)
  const [applicantsPerPage] = useState(3)
  const [applicantSearchTerm, setApplicantSearchTerm] = useState("")
  const [applicantFilterStatus, setApplicantFilterStatus] = useState("all")
  const [scheduleInterviewModal, setScheduleInterviewModal] = useState(false)
  const [interviewData, setInterviewData] = useState({
    date: "",
    time: "",
    type: "video",
    notes: "",
  })
  const [ratingModalOpen, setRatingModalOpen] = useState(false)

  useEffect(() => {
    if (
      modalOpen ||
      editModalOpen ||
      deleteModalOpen ||
      viewJobModal ||
      shareModalOpen ||
      applicationsModalOpen ||
      viewApplicantDetail ||
      contactModalOpen ||
      scheduleInterviewModal ||
      ratingModalOpen
    ) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [
    modalOpen,
    editModalOpen,
    deleteModalOpen,
    viewJobModal,
    shareModalOpen,
    applicationsModalOpen,
    viewApplicantDetail,
    contactModalOpen,
    scheduleInterviewModal,
    ratingModalOpen,
  ])

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

  const openEditModal = (job) => {
    setJobToEdit(job)
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      salary: job.salary,
      jobType: job.jobType,
      description: job.description,
      requirements: job.requirements,
      responsibilities: job.responsibilities,
      screeningQuestions: [""], 
      attachments: [],
    })
    setEditModalOpen(true)
  }

  const closeEditModal = () => {
    setEditModalOpen(false)
    setJobToEdit(null)
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
    setApplicantCurrentPage(1)
    setApplicantSearchTerm("")
    setApplicantFilterStatus("all")
  }

  const closeApplicationsModal = () => {
    setApplicationsModalOpen(false)
    setSelectedJobApplications(null)
  }

  const handleViewApplicantDetail = (applicant) => {
    setSelectedApplicant(applicant)
    setViewApplicantDetail(true)
  }

  const closeApplicantDetail = () => {
    setViewApplicantDetail(false)
    setSelectedApplicant(null)
  }

  const handleContactApplicant = (applicant) => {
    setSelectedApplicant(applicant)
    setContactModalOpen(true)
  }

  const closeContactModal = () => {
    setContactModalOpen(false)
    setContactMessage("")
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    toast.success(`Message sent to ${selectedApplicant.name}`)
    closeContactModal()
  }

  const openScheduleInterviewModal = (applicant) => {
    setSelectedApplicant(applicant)
    setInterviewData({
      date: "",
      time: "",
      type: "video",
      notes: "",
    })
    setScheduleInterviewModal(true)
  }

  const closeScheduleInterviewModal = () => {
    setScheduleInterviewModal(false)
  }

  const handleScheduleInterview = (e) => {
    e.preventDefault()
    if (!interviewData.date || !interviewData.time) {
      toast.error("Please select a date and time for the interview")
      return
    }

    toast.success(
      `Interview scheduled with ${selectedApplicant.name} on ${interviewData.date} at ${interviewData.time}`,
    )
    closeScheduleInterviewModal()
  }

  const openRatingModal = (applicant) => {
    setSelectedApplicant(applicant)
    setRatingModalOpen(true)
  }

  const closeRatingModal = () => {
    setRatingModalOpen(false)
  }

  const handleRateApplicant = (rating) => {
    toast.success(`${selectedApplicant.name} rated ${rating} stars`)
    closeRatingModal()
  }

  const handleShortlistApplicant = (applicant) => {
    
    const newStatus = applicant.status === "Shortlisted" ? "New" : "Shortlisted"
    toast.success(`${applicant.name} ${newStatus === "Shortlisted" ? "added to" : "removed from"} shortlist`)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase())
    setCurrentPage(1)
  }

  const handleApplicantSearchChange = (e) => {
    setApplicantSearchTerm(e.target.value.toLowerCase())
    setApplicantCurrentPage(1)
  }

  const handleApplicantFilterChange = (status) => {
    setApplicantFilterStatus(status)
    setApplicantCurrentPage(1)
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

  const handleEditSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.department || !formData.location) {
      toast.error("Please fill in all required fields!")
      return
    }

    const updatedJobs = jobs.map((job) => {
      if (job.id === jobToEdit.id) {
        return {
          ...job,
          ...formData,
        }
      }
      return job
    })

    setJobs(updatedJobs)
    toast.success("Job updated successfully!")
    closeEditModal()
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

  const handleInterviewDataChange = (e) => {
    const { name, value } = e.target
    setInterviewData((prev) => ({
      ...prev,
      [name]: value,
    }))
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

  // Filter applicants based on search term and status filter
  const filteredApplicants = mockApplications.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(applicantSearchTerm) ||
      applicant.email.toLowerCase().includes(applicantSearchTerm) ||
      applicant.currentRole.toLowerCase().includes(applicantSearchTerm) ||
      applicant.skills.some((skill) => skill.toLowerCase().includes(applicantSearchTerm))

    if (applicantFilterStatus === "all") {
      return matchesSearch
    } else {
      return matchesSearch && applicant.status.toLowerCase() === applicantFilterStatus.toLowerCase()
    }
  })

  // Pagination for jobs
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

  // Pagination for applicants
  const indexOfLastApplicant = applicantCurrentPage * applicantsPerPage
  const indexOfFirstApplicant = indexOfLastApplicant - applicantsPerPage
  const currentApplicants = filteredApplicants.slice(indexOfFirstApplicant, indexOfLastApplicant)
  const totalApplicantPages = Math.ceil(filteredApplicants.length / applicantsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const paginateApplicants = (pageNumber) => setApplicantCurrentPage(pageNumber)

  // Function to render star rating
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star size={16} className="text-yellow-400" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-gray-400" />
        ))}
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
      <Header title={"Job Openings"} />
      
<motion.div
initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search jobs..."
                className="py-2 border rounded sm:w-40 bg-gray-800 text-white pl-10 md:w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
          <motion.button
            onClick={openModal}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center"
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
                activeTab === "all"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
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
                activeTab === "active"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
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
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              Inactive Jobs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
          {currentJobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg shadow-lg border border-gray-700  transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              // whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)" }}
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
                    onClick={() => openEditModal(job)}
                    className="text-yellow-400 hover:text-yellow-500 p-1 rounded-full hover:bg-yellow-500/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Edit Job"
                  >
                    <Edit size={18} />
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
                  <Briefcase size={14} className="mr-2 text-purple-400" /> {job.department}
                </p>
                <p className="text-gray-300 flex items-center text-sm">
                  <MapPin size={14} className="mr-2 text-purple-400" /> {job.location}
                </p>
                <p className="text-gray-300 flex items-center text-sm">
                  <Calendar size={14} className="mr-2 text-purple-400" /> Posted: {job.postedDate}
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
                      ? "bg-gradient-to-r from-green-900/60 to-green-700/60 text-green-300 border border-green-500"
                      : "bg-gradient-to-r from-red-900/60 to-red-700/60 text-red-300 border border-red-500"
                  }`}
                >
                  {job.status}
                </span>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-900/60 to-blue-700/60 text-blue-300 border border-blue-500">
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
                    currentPage === number
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
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
                className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 transition-colors"
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
              <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center z-10">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
                        >
                          <Plus size={16} className="mr-1" /> Add Question
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
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 font-medium"
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

      {/* Edit Job Modal */}
      <AnimatePresence>
        {editModalOpen && jobToEdit && (
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
              <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center z-10">
                <h2 className="text-white text-xl font-bold">Edit Job Opening</h2>
                <motion.button
                  onClick={closeEditModal}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="p-6">
                <form onSubmit={handleEditSubmit} className="space-y-6">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>

                  <div className="flex justify-end space-x-4 pt-4">
                    <motion.button
                      type="button"
                      onClick={closeEditModal}
                      className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-md hover:from-yellow-600 hover:to-amber-600 font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Update Job
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
              <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center z-10">
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
                          ? "bg-gradient-to-r from-green-900/60 to-green-700/60 text-green-300 border border-green-500"
                          : "bg-gradient-to-r from-red-900/60 to-red-700/60 text-red-300 border border-red-500"
                      }`}
                    >
                      {currentJob.status}
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-900/60 to-blue-700/60 text-blue-300 border border-blue-500">
                      {currentJob.jobType}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="flex items-center">
                      <Briefcase size={16} className="mr-2 text-purple-400" />
                      {currentJob.department}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="flex items-center">
                      <MapPin size={16} className="mr-2 text-purple-400" />
                      {currentJob.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Posted Date</p>
                    <p className="flex items-center">
                      <Calendar size={16} className="mr-2 text-purple-400" />
                      {currentJob.postedDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p className="flex items-center">
                      <Clock size={16} className="mr-2 text-purple-400" />
                      {currentJob.deadline}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Salary</p>
                    <p className="flex items-center">
                      <DollarSign size={16} className="mr-2 text-purple-400" />
                      {currentJob.salary || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Applications</p>
                    <p className="flex items-center">
                      <Users size={16} className="mr-2 text-purple-400" />
                      {currentJob.applications}
                    </p>
                  </div>
                </div>

                {currentJob.description && (
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                    <p className="text-gray-300">{currentJob.description}</p>
                  </div>
                )}

                {currentJob.requirements && (
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
                    <p className="text-gray-300">{currentJob.requirements}</p>
                  </div>
                )}

                {currentJob.responsibilities && (
                  <div className="bg-gray-800/50 p-4 rounded-lg">
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
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 font-medium flex items-center"
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
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
                        : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-900/30 to-blue-700/30 text-blue-400 mb-4">
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

                <div className="pt-2">
                  <label className="block text-gray-300 mb-2 font-medium">Share via</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                    >
                      <Mail size={16} /> Email
                    </button>
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#0066a1] text-white py-2 px-4 rounded-md"
                    >
                      <Linkedin size={16} /> LinkedIn
                    </button>
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                    >
                      <Link2 size={16} /> Copy Link
                    </button>
                  </div>
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
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 font-medium"
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
      {/* {applicationsModalOpen && selectedJobApplications && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h2 className="text-white text-2xl font-bold">Applications for {selectedJobApplications.title}</h2>
                <p className="text-gray-400">Manage and review candidate applications</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={applicantSearchTerm}
                    onChange={handleApplicantSearchChange}
                    placeholder="Search applicants..."
                    className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
                <div className="flex gap-2">
                  <select
                    value={applicantFilterStatus}
                    onChange={(e) => handleApplicantFilterChange(e.target.value)}
                    className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <motion.button
                    onClick={closeApplicationsModal}
                    className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </div>
            </div>

            {currentApplicants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentApplicants.map((applicant) => (
                  <motion.div
                    key={applicant.id}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)" }}
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={applicant.avatar || "/placeholder.svg"}
                        alt={applicant.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-semibold text-white">{applicant.name}</h3>
                          <span
                            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                              applicant.status === "Shortlisted"
                                ? "bg-gradient-to-r from-green-900/60 to-green-700/60 text-green-300 border border-green-500"
                                : applicant.status === "Rejected"
                                  ? "bg-gradient-to-r from-red-900/60 to-red-700/60 text-red-300 border border-red-500"
                                  : "bg-gradient-to-r from-blue-900/60 to-blue-700/60 text-blue-300 border border-blue-500"
                            }`}
                          >
                            {applicant.status}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{applicant.currentRole}</p>
                        <p className="text-gray-400 text-sm">{applicant.currentCompany}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <p className="text-gray-300 flex items-center text-sm">
                        <Mail size={14} className="mr-2 text-purple-400" /> {applicant.email}
                      </p>
                      <p className="text-gray-300 flex items-center text-sm">
                        <Phone size={14} className="mr-2 text-purple-400" /> {applicant.phone}
                      </p>
                      <p className="text-gray-300 flex items-center text-sm">
                        <MapPin size={14} className="mr-2 text-purple-400" /> {applicant.location}
                      </p>
                      <p className="text-gray-300 flex items-center text-sm">
                        <Calendar size={14} className="mr-2 text-purple-400" /> Applied: {applicant.appliedDate}
                      </p>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm text-gray-400 mb-1">Skills</p>
                      <div className="flex flex-wrap gap-1">
                        {applicant.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                            {skill}
                          </span>
                        ))}
                        {applicant.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                            +{applicant.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm text-gray-400 mb-1">Rating</p>
                      <div className="flex items-center">
                        {renderStarRating(applicant.rating)}
                        <span className="ml-2 text-gray-300 text-sm">{applicant.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        onClick={() => handleViewApplicantDetail(applicant)}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded hover:from-purple-700 hover:to-indigo-700 flex items-center"
                      >
                        <Eye size={14} className="mr-1" /> View Details
                      </button>
                      <button
                        onClick={() => handleContactApplicant(applicant)}
                        className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm rounded hover:from-green-700 hover:to-emerald-700 flex items-center"
                      >
                        <Mail size={14} className="mr-1" /> Contact
                      </button>
                      <button
                        onClick={() => handleShortlistApplicant(applicant)}
                        className={`px-3 py-1 text-sm rounded flex items-center ${
                          applicant.status === "Shortlisted"
                            ? "bg-gray-600 text-white hover:bg-gray-700"
                            : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                        }`}
                      >
                        {applicant.status === "Shortlisted" ? (
                          <>
                            <CheckCircle size={14} className="mr-1" /> Shortlisted
                          </>
                        ) : (
                          <>
                            <Plus size={14} className="mr-1" /> Shortlist
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-800 rounded-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 text-gray-400 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No applications found</h3>
                <p className="text-gray-400">No applications match your current filters.</p>
              </div>
            )} */}

            {/* Pagination for Applicants */}
            {/* {filteredApplicants.length > applicantsPerPage && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => paginateApplicants(Math.max(1, applicantCurrentPage - 1))}
                    disabled={applicantCurrentPage === 1}
                    className={`p-2 rounded-md ${
                      applicantCurrentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
                    }`}
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {Array.from({ length: totalApplicantPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => paginateApplicants(number)}
                      className={`px-3 py-1 rounded-md ${
                        applicantCurrentPage === number
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={() => paginateApplicants(Math.min(totalApplicantPages, applicantCurrentPage + 1))}
                    disabled={applicantCurrentPage === totalApplicantPages}
                    className={`p-2 rounded-md ${
                      applicantCurrentPage === totalApplicantPages
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-white hover:bg-gray-700"
                    }`}
                  >
                    <ChevronRight size={20} />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </motion.div>
      )} */}
      {applicationsModalOpen && selectedJobApplications && (
  <motion.div
    className="fixed inset-0 z-50 overflow-y-auto"
    style={{
      top: "70px", // Adjust based on your header height
      left: "260px", // Adjust based on your sidebar width
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(17, 24, 39, 1)", // Full opacity background
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="container mx-auto px-4 py-8 h-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-white text-2xl font-bold">Applications for {selectedJobApplications.title}</h2>
          <p className="text-gray-400">Manage and review candidate applications</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              value={applicantSearchTerm}
              onChange={handleApplicantSearchChange}
              placeholder="Search applicants..."
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <div className="flex gap-2">
            <select
              value={applicantFilterStatus}
              onChange={(e) => handleApplicantFilterChange(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="rejected">Rejected</option>
            </select>
            <motion.button
              onClick={closeApplicationsModal}
              className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {currentApplicants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentApplicants.map((applicant) => (
            <motion.div
              key={applicant.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)" }}
            >
              <div className="flex items-start gap-4">
                <img
                  src={applicant.avatar || "/placeholder.svg"}
                  alt={applicant.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-white">{applicant.name}</h3>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        applicant.status === "Shortlisted"
                          ? "bg-gradient-to-r from-green-900/60 to-green-700/60 text-green-300 border border-green-500"
                          : applicant.status === "Rejected"
                            ? "bg-gradient-to-r from-red-900/60 to-red-700/60 text-red-300 border border-red-500"
                            : "bg-gradient-to-r from-blue-900/60 to-blue-700/60 text-blue-300 border border-blue-500"
                      }`}
                    >
                      {applicant.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{applicant.currentRole}</p>
                  <p className="text-gray-400 text-sm">{applicant.currentCompany}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-gray-300 flex items-center text-sm">
                  <Mail size={14} className="mr-2 text-purple-400" /> {applicant.email}
                </p>
                <p className="text-gray-300 flex items-center text-sm">
                  <Phone size={14} className="mr-2 text-purple-400" /> {applicant.phone}
                </p>
                <p className="text-gray-300 flex items-center text-sm">
                  <MapPin size={14} className="mr-2 text-purple-400" /> {applicant.location}
                </p>
                <p className="text-gray-300 flex items-center text-sm">
                  <Calendar size={14} className="mr-2 text-purple-400" /> Applied: {applicant.appliedDate}
                </p>
              </div>

              <div className="mt-3">
                <p className="text-sm text-gray-400 mb-1">Skills</p>
                <div className="flex flex-wrap gap-1">
                  {applicant.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                      {skill}
                    </span>
                  ))}
                  {applicant.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
                      +{applicant.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm text-gray-400 mb-1">Rating</p>
                <div className="flex items-center">
                  {renderStarRating(applicant.rating)}
                  <span className="ml-2 text-gray-300 text-sm">{applicant.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => handleViewApplicantDetail(applicant)}
                  className="px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded hover:from-purple-700 hover:to-indigo-700 flex items-center"
                >
                  <Eye size={14} className="mr-1" /> View Details
                </button>
                <button
                  onClick={() => handleContactApplicant(applicant)}
                  className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm rounded hover:from-green-700 hover:to-emerald-700 flex items-center"
                >
                  <Mail size={14} className="mr-1" /> Contact
                </button>
                <button
                  onClick={() => handleShortlistApplicant(applicant)}
                  className={`px-3 py-1 text-sm rounded flex items-center ${
                    applicant.status === "Shortlisted"
                      ? "bg-gray-600 text-white hover:bg-gray-700"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                  }`}
                >
                  {applicant.status === "Shortlisted" ? (
                    <>
                      <CheckCircle size={14} className="mr-1" /> Shortlisted
                    </>
                  ) : (
                    <>
                      <Plus size={14} className="mr-1" /> Shortlist
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-800 rounded-lg">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 text-gray-400 mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No applications found</h3>
          <p className="text-gray-400">No applications match your current filters.</p>
        </div>
      )}

      {/* Pagination for Applicants */}
      {filteredApplicants.length > applicantsPerPage && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => paginateApplicants(Math.max(1, applicantCurrentPage - 1))}
              disabled={applicantCurrentPage === 1}
              className={`p-2 rounded-md ${
                applicantCurrentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-white hover:bg-gray-700"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from({ length: totalApplicantPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginateApplicants(number)}
                className={`px-3 py-1 rounded-md ${
                  applicantCurrentPage === number
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => paginateApplicants(Math.min(totalApplicantPages, applicantCurrentPage + 1))}
              disabled={applicantCurrentPage === totalApplicantPages}
              className={`p-2 rounded-md ${
                applicantCurrentPage === totalApplicantPages
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:bg-gray-700"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </nav>
        </div>
      )}
    </div>
  </motion.div>
)}

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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-900/30 to-red-700/30 text-red-400 mb-4">
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
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md hover:from-red-600 hover:to-red-700 font-medium"
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

      {/* Applicant Detail Slider */}
      <AnimatePresence>
        {viewApplicantDetail && selectedApplicant && (
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
              <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700 flex justify-between items-center z-10">
                <h2 className="text-white text-xl font-bold">Applicant Details</h2>
                <motion.button
                  onClick={closeApplicantDetail}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedApplicant.avatar || "/placeholder.svg"}
                    alt={selectedApplicant.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedApplicant.name}</h3>
                    <p className="text-gray-300">
                      {selectedApplicant.currentRole} at {selectedApplicant.currentCompany}
                    </p>
                    <div className="flex items-center mt-1">
                      {renderStarRating(selectedApplicant.rating)}
                      <span className="ml-2 text-gray-300 text-sm">{selectedApplicant.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      selectedApplicant.status === "Shortlisted"
                        ? "bg-gradient-to-r from-green-900/60 to-green-700/60 text-green-300 border border-green-500"
                        : selectedApplicant.status === "Rejected"
                          ? "bg-gradient-to-r from-red-900/60 to-red-700/60 text-red-300 border border-red-500"
                          : "bg-gradient-to-r from-blue-900/60 to-blue-700/60 text-blue-300 border border-blue-500"
                    }`}
                  >
                    {selectedApplicant.status}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <User size={18} className="mr-2 text-purple-400" /> Contact Information
                    </h4>
                    <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                      <p className="flex items-center text-gray-300">
                        <Mail size={16} className="mr-2 text-purple-400" /> {selectedApplicant.email}
                      </p>
                      <p className="flex items-center text-gray-300">
                        <Phone size={16} className="mr-2 text-purple-400" /> {selectedApplicant.phone}
                      </p>
                      <p className="flex items-center text-gray-300">
                        <MapPin size={16} className="mr-2 text-purple-400" /> {selectedApplicant.location}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Briefcase size={18} className="mr-2 text-purple-400" /> Professional Experience
                    </h4>
                    <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                      <div>
                        <p className="text-gray-400 text-sm">Current Role</p>
                        <p className="text-white">{selectedApplicant.currentRole}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Company</p>
                        <p className="text-white">{selectedApplicant.currentCompany}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Experience</p>
                        <p className="text-white">{selectedApplicant.experience}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Expected Salary</p>
                        <p className="text-white">{selectedApplicant.salary}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Availability</p>
                        <p className="text-white">{selectedApplicant.availability}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <GraduationCap size={18} className="mr-2 text-purple-400" /> Education
                    </h4>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <p className="text-white">{selectedApplicant.education.degree}</p>
                      <p className="text-gray-300">{selectedApplicant.education.university}</p>
                      <p className="text-gray-400">Graduated: {selectedApplicant.education.year}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Award size={18} className="mr-2 text-purple-400" /> Skills
                    </h4>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex flex-wrap gap-2">
                        {selectedApplicant.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-700 text-sm rounded-full text-gray-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <FileText size={18} className="mr-2 text-purple-400" /> Resume & Portfolio
                    </h4>
                    <div className="bg-gray-800 p-4 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <p className="text-gray-300">Resume</p>
                        <button
                          onClick={() => window.open(selectedApplicant.resumeUrl, "_blank")}
                          className="flex items-center text-purple-400 hover:text-purple-300"
                        >
                          <Download size={16} className="mr-1" /> Download
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <p className="text-gray-300">Portfolio</p>
                        <button
                          onClick={() => window.open(selectedApplicant.portfolio, "_blank")}
                          className="flex items-center text-purple-400 hover:text-purple-300"
                        >
                          <ExternalLink size={16} className="mr-1" /> View
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <p className="text-gray-300">GitHub</p>
                        <button
                          onClick={() => window.open(selectedApplicant.github, "_blank")}
                          className="flex items-center text-purple-400 hover:text-purple-300"
                        >
                          <Github size={16} className="mr-1" /> View
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <p className="text-gray-300">LinkedIn</p>
                        <button
                          onClick={() => window.open(selectedApplicant.linkedin, "_blank")}
                          className="flex items-center text-purple-400 hover:text-purple-300"
                        >
                          <Linkedin size={16} className="mr-1" /> View
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <MessageSquare size={18} className="mr-2 text-purple-400" /> Cover Letter
                    </h4>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <p className="text-gray-300 text-sm italic">{selectedApplicant.coverLetter}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Paperclip size={18} className="mr-2 text-purple-400" /> References
                    </h4>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      {selectedApplicant.references.map((reference, index) => (
                        <div key={index} className="mb-2 last:mb-0">
                          <p className="text-white">{reference.name}</p>
                          <p className="text-gray-300 text-sm">
                            {reference.position} at {reference.company}
                          </p>
                          <p className="text-gray-400 text-sm">{reference.contact}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <FileText size={18} className="mr-2 text-purple-400" /> Interview Notes
                    </h4>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <p className="text-gray-300 text-sm">
                        {selectedApplicant.interviewNotes || "No interview notes yet."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <button
                    onClick={() => openScheduleInterviewModal(selectedApplicant)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center"
                  >
                    <Calendar size={18} className="mr-2" /> Schedule Interview
                  </button>
                  <button
                    onClick={() => handleContactApplicant(selectedApplicant)}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md hover:from-green-700 hover:to-emerald-700 flex items-center justify-center"
                  >
                    <Mail size={18} className="mr-2" /> Contact Applicant
                  </button>
                  <button
                    onClick={() => handleShortlistApplicant(selectedApplicant)}
                    className={`px-4 py-2 rounded-md flex items-center justify-center ${
                      selectedApplicant.status === "Shortlisted"
                        ? "bg-gray-600 text-white hover:bg-gray-700"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700"
                    }`}
                  >
                    {selectedApplicant.status === "Shortlisted" ? "Remove from Shortlist" : "Add to Shortlist"}
                  </button>
                  <button
                    onClick={() => openRatingModal(selectedApplicant)}
                    className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-md hover:from-yellow-600 hover:to-amber-600 flex items-center justify-center"
                  >
                    <Star size={18} className="mr-2" /> Rate Applicant
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Applicant Modal */}
      <AnimatePresence>
        {contactModalOpen && selectedApplicant && (
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-900/30 to-green-700/30 text-green-400 mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Contact {selectedApplicant.name}</h3>
                <p className="text-gray-300">Send a message to the applicant regarding their application.</p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Regarding your application for Software Engineer"
                    className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[150px] resize-y"
                    required
                  />
                </div>

                <div className="pt-2">
                  <label className="block text-gray-300 mb-2 font-medium">Contact via</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                    >
                      <Mail size={16} /> Email
                    </button>
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                    >
                      <Phone size={16} /> Phone
                    </button>
                    <button
                      type="button"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
                    >
                      <MessageSquare size={16} /> SMS
                    </button>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={closeContactModal}
                    className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:from-green-600 hover:to-green-700 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Schedule Interview Modal */}
      <AnimatePresence>
        {scheduleInterviewModal && selectedApplicant && (
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-900/30 to-purple-700/30 text-purple-400 mb-4">
                  <Calendar size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Schedule Interview</h3>
                <p className="text-gray-300">Schedule an interview with {selectedApplicant.name}</p>
              </div>

              <form onSubmit={handleScheduleInterview} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={interviewData.date}
                      onChange={handleInterviewDataChange}
                      className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={interviewData.time}
                      onChange={handleInterviewDataChange}
                      className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Interview Type</label>
                  <select
                    name="type"
                    value={interviewData.type}
                    onChange={handleInterviewDataChange}
                    className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="video">Video Call</option>
                    <option value="phone">Phone Call</option>
                    <option value="in-person">In-Person</option>
                    <option value="technical">Technical Interview</option>
                    <option value="panel">Panel Interview</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Notes</label>
                  <textarea
                    name="notes"
                    value={interviewData.notes}
                    onChange={handleInterviewDataChange}
                    placeholder="Add any notes about this interview..."
                    className="px-4 py-3 w-full border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px] resize-y"
                  />
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <motion.button
                    type="button"
                    onClick={closeScheduleInterviewModal}
                    className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-md hover:from-purple-600 hover:to-purple-700 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rate Applicant Modal */}
      <AnimatePresence>
        {ratingModalOpen && selectedApplicant && (
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-900/30 to-yellow-700/30 text-yellow-400 mb-4">
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rate Applicant</h3>
                <p className="text-gray-300">
                  Rate {selectedApplicant.name} based on their qualifications and fit for the role
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <motion.button
                        key={rating}
                        onClick={() => handleRateApplicant(rating)}
                        className="p-2"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Star
                          size={32}
                          className={`${rating <= selectedApplicant.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-300">Current rating: {selectedApplicant.rating.toFixed(1)}</p>
                </div>

                <div className="flex justify-center pt-4">
                  <motion.button
                    onClick={closeRatingModal}
                    className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </div>
    
  )
}

export default Jobopening

