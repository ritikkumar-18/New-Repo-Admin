import { useState } from "react"
import Header from "../components/Common/Header"
import { toast, Toaster } from "react-hot-toast"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai"
import { Search, XCircle, CheckCircle, ToggleRight, X, Filter, Mail, Phone, Calendar, MapPin, Briefcase, User, Shield, FileText, ChevronLeft, ChevronRight, AlertTriangle, UserPlus } from 'lucide-react'

const TeamManagementDashboard = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Alice",
      role: "Recruiter",
      active: true,
      department: "HR",
      location: "New York",
      skills: ["Recruiting", "Communication"],
      contact: "alice@example.com",
      address: "123 Main St, City",
      joinDate: "2022-06-15",
      releaseDate: null,
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "alice@example.com",
      phone: "+1-234-567-8901",
      experience: "5 years",
      salary: "$60,000",
      position: "Senior Recruiter",
      status: "Active",
      remark: "Excellent performance",
    },
    {
      id: 2,
      name: "Bob",
      role: "Interviewer",
      active: true,
      department: "Tech",
      location: "San Francisco",
      skills: ["Interviewing", "Technical Analysis"],
      contact: "bob@example.com",
      address: "456 Second St, City",
      joinDate: "2021-09-10",
      releaseDate: "2024-01-20",
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "bob@example.com",
      phone: "+1-987-654-3210",
      experience: "8 years",
      salary: "$80,000",
      position: "Lead Interviewer",
      status: "Inactive",
      remark: "Left for a better opportunity",
    },
    {
      id: 3,
      name: "Charlie",
      role: "Manager",
      active: true,
      department: "Operations",
      location: "London",
      skills: ["Leadership", "Team Management"],
      contact: "charlie@example.com",
      address: "789 Third St, City",
      joinDate: "2020-02-18",
      releaseDate: null,
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "charlie@example.com",
      phone: "+44-203-123-4567",
      experience: "10 years",
      salary: "$100,000",
      position: "Operations Manager",
      status: "Active",
      remark: "Key asset to the team",
    },
    {
      id: 4,
      name: "David",
      role: "HR Specialist",
      active: false,
      department: "HR",
      location: "Chicago",
      skills: ["Employee Relations", "Conflict Resolution"],
      contact: "david@example.com",
      address: "101 Fourth St, City",
      joinDate: "2018-07-25",
      releaseDate: "2023-11-30",
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "david@example.com",
      phone: "+1-312-555-7890",
      experience: "7 years",
      salary: "$55,000",
      position: "HR Specialist",
      status: "Inactive",
      remark: "Resigned due to relocation",
    },
    {
      id: 5,
      name: "Eva",
      role: "Software Engineer",
      active: true,
      department: "Tech",
      location: "Berlin",
      skills: ["JavaScript", "React"],
      contact: "eva@example.com",
      address: "202 Fifth St, City",
      joinDate: "2019-12-05",
      releaseDate: null,
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "eva@example.com",
      phone: "+49-30-9876-5432",
      experience: "6 years",
      salary: "$75,000",
      position: "Senior Software Engineer",
      status: "Active",
      remark: "Consistently exceeds expectations",
    },
    {
      id: 6,
      name: "Bobbbb",
      role: "Interviewer",
      active: true,
      department: "Tech",
      location: "San Francisco",
      skills: ["Interviewing", "Technical Analysis"],
      contact: "bob@example.com",
      address: "456 Second St, City",
      joinDate: "2021-09-10",
      releaseDate: "2024-01-20",
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "bob@example.com",
      phone: "+1-987-654-3210",
      experience: "8 years",
      salary: "$80,000",
      position: "Lead Interviewer",
      status: "Inactive",
      remark: "Left for a better opportunity",
    },
    {
      id: 7,
      name: "Kenna",
      role: "Interviewer",
      active: true,
      department: "Tech",
      location: "San Francisco",
      skills: ["Interviewing", "Technical Analysis"],
      contact: "bob@example.com",
      address: "456 Second St, City",
      joinDate: "2021-09-10",
      releaseDate: "2024-01-20",
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "bob@example.com",
      phone: "+1-987-654-3210",
      experience: "8 years",
      salary: "$80,000",
      position: "Lead Interviewer",
      status: "Inactive",
      remark: "Left for a better opportunity",
    },
    {
      id: 8,
      name: "Bobbly",
      role: "Interviewer",
      active: true,
      department: "Tech",
      location: "San Francisco",
      skills: ["Interviewing", "Technical Analysis"],
      contact: "bob@example.com",
      address: "456 Second St, City",
      joinDate: "2021-09-10",
      releaseDate: "2024-01-20",
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "bob@example.com",
      phone: "+1-987-654-3210",
      experience: "8 years",
      salary: "$80,000",
      position: "Lead Interviewer",
      status: "Inactive",
      remark: "Left for a better opportunity",
    },
    {
      id: 9,
      name: "Sam",
      role: "Interviewer",
      active: true,
      department: "Tech",
      location: "San Francisco",
      skills: ["Interviewing", "Technical Analysis"],
      contact: "bob@example.com",
      address: "456 Second St, City",
      joinDate: "2021-09-10",
      releaseDate: "2024-01-20",
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "bob@example.com",
      phone: "+1-987-654-3210",
      experience: "8 years",
      salary: "$80,000",
      position: "Lead Interviewer",
      status: "Inactive",
      remark: "Left for a better opportunity",
    },
    {
      id: 10,
      name: "Will",
      role: "Interviewer",
      active: true,
      department: "Tech",
      location: "San Francisco",
      skills: ["Interviewing", "Technical Analysis"],
      contact: "bob@example.com",
      address: "456 Second St, City",
      joinDate: "2021-09-10",
      releaseDate: "2024-01-20",
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "bob@example.com",
      phone: "+1-987-654-3210",
      experience: "8 years",
      salary: "$80,000",
      position: "Lead Interviewer",
      status: "Inactive",
      remark: "Left for a better opportunity",
    },
    {
      id: 11,
      name: "Ram",
      role: "Interviewer",
      active: true,
      department: "Tech",
      location: "San Francisco",
      skills: ["Interviewing", "Technical Analysis"],
      contact: "bob@example.com",
      address: "456 Second St, City",
      joinDate: "2021-09-10",
      releaseDate: "2024-01-20",
      aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
      panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
      email: "bob@example.com",
      phone: "+1-987-654-3210",
      experience: "8 years",
      salary: "$80,000",
      position: "Lead Interviewer",
      status: "Inactive",
      remark: "Left for a better opportunity",
    },
  ])

  const [viewingMember, setViewingMember] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    department: "",
    location: "",
    skills: "",
    contact: "",
    address: "",
    email: "",
    phone: "",
    experience: "",
    salary: "",
    position: "",
    active: true,
    status: "Active",
    joinDate: "",
    releaseDate: "",
    aadharCard: "",
    panCard: "",
    remark: "",
  })
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false)
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false)
  const [editedMember, setEditedMember] = useState(null)
  const [filterStatus, setFilterStatus] = useState("All")
  const [filterSidebar, setFilterSidebar] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [memberToDelete, setMemberToDelete] = useState(null)
  const [activeTab, setActiveTab] = useState("All")

  const membersPerPage = 10

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value)
    setCurrentPage(1)
  }

  const handleToggleStatus = () => {
    const nextStatus = filterStatus === "All" ? "Active" : filterStatus === "Active" ? "Inactive" : "All"

    setFilterStatus(nextStatus)
    setActiveTab(nextStatus)
    setCurrentPage(1)
  }

  const handleTabChange = (status) => {
    setActiveTab(status)
    setFilterStatus(status)
    setCurrentPage(1)
  }

  const filteredMembers = members.filter((member) => {
    // Search term can match name OR skills OR role OR location OR email
    const searchLower = searchTerm.toLowerCase()
    const isNameMatch = member.name.toLowerCase().includes(searchLower)
    const isRoleMatch = member.role.toLowerCase().includes(searchLower)
    const isLocationMatch = member.location.toLowerCase().includes(searchLower)
    const isEmailMatch = member.email.toLowerCase().includes(searchLower)
    const isSkillsMatch = member.skills.some((skill) => skill.toLowerCase().includes(searchLower))

    // Department filter
    const isDepartmentMatch =
      selectedDepartment === "all" || member.department.toLowerCase() === selectedDepartment.toLowerCase()

    // Status filter
    const isStatusMatch =
      filterStatus === "All" ||
      (filterStatus === "Active" && member.active) ||
      (filterStatus === "Inactive" && !member.active)

    return (
      (isNameMatch || isRoleMatch || isLocationMatch || isEmailMatch || isSkillsMatch) &&
      isDepartmentMatch &&
      isStatusMatch
    )
  })

  const paginatedMembers = filteredMembers.slice((currentPage - 1) * membersPerPage, currentPage * membersPerPage)

  const handleDeleteMember = (id) => {
    setMemberToDelete(members.find((member) => member.id === id))
    setDeleteModal(true)
  }

  const confirmDelete = () => {
    if (memberToDelete) {
      setMembers(members.filter((member) => member.id !== memberToDelete.id))
      toast.error("Member deleted successfully!")
      setDeleteModal(false)
      setMemberToDelete(null)
    }
  }

  const handleUpdateMember = (updatedMember) => {
    setMembers(members.map((member) => (member.id === updatedMember.id ? updatedMember : member)))
    toast.success("Member details updated successfully!")
  }

  const handleAddNewMember = () => {
    const newMemberObj = {
      id: members.length + 1,
      ...newMember,
      skills: newMember.skills.split(",").map((skill) => skill.trim()),
      active: newMember.status === "Active",
    }
    setMembers([...members, newMemberObj])
    setIsAddMemberModalOpen(false)
    toast.success("New member added successfully!")
    setNewMember({
      name: "",
      role: "",
      department: "",
      location: "",
      skills: "",
      contact: "",
      address: "",
      email: "",
      phone: "",
      experience: "",
      salary: "",
      position: "",
      active: true,
      status: "Active",
      joinDate: "",
      releaseDate: "",
      aadharCard: "",
      panCard: "",
      remark: "",
    })
  }

  const handleEditMember = (member) => {
    setEditedMember({ ...member })
    setIsEditMemberModalOpen(true)
  }

  const handleSaveEditedMember = () => {
    const updatedMember = {
      ...editedMember,
      active: editedMember.status === "Active",
    }
    handleUpdateMember(updatedMember)
    setIsEditMemberModalOpen(false)
  }

  const openDetailView = (item) => setViewingMember(item)
  const closeDetailView = () => setViewingMember(null)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen">
      <Header title="Team Management" />
      

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
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search members..."
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterSidebar(true)}
              className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
            
            {/* Add Member Button - Added next to filter button */}
            <button
              onClick={() => setIsAddMemberModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors"
            >
              <UserPlus size={18} />
              <span>Add Member</span>
            </button>
          </div>
        </div>

        {/* Status Tabs - Similar to jobopening.tsx */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 rounded-lg p-1 flex flex-wrap">
            <button
              onClick={() => handleTabChange("All")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "All"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              All Members
            </button>
            <button
              onClick={() => handleTabChange("Active")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "Active"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              Active Members
            </button>
            <button
              onClick={() => handleTabChange("Inactive")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "Inactive"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              Inactive Members
            </button>
          </div>
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
                    <label className="block text-white mb-2">Department</label>
                    <select
                      value={selectedDepartment}
                      onChange={handleDepartmentChange}
                      className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="all">All Departments</option>
                      <option value="HR">HR</option>
                      <option value="Tech">Tech</option>
                      <option value="Design">Design</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Status</label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setFilterStatus("All")}
                        className={`px-4 py-2 rounded-lg ${
                          filterStatus === "All" ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setFilterStatus("Active")}
                        className={`px-4 py-2 rounded-lg ${
                          filterStatus === "Active" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        Active
                      </button>
                      <button
                        onClick={() => setFilterStatus("Inactive")}
                        className={`px-4 py-2 rounded-lg ${
                          filterStatus === "Inactive" ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        Inactive
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedDepartment("all")
                        setFilterStatus("All")
                        setSearchTerm("")
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

        {/* Member Cards */}
        {paginatedMembers.length === 0 ? (
          <div className="bg-gray-800 p-8 text-center rounded-lg">
            <p className="text-gray-400">No team members found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                
              >
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="text-purple-400 text-sm">{member.position || member.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-lg font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-300 truncate">{member.email}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-300">{member.phone}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-300">{member.department}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-300">{member.location}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-300">Experience: {member.experience}</p>
                  </div>

                  <div className="mt-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        member.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {member.active ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
                      {member.active ? "Active" : "Inactive"}
                    </span>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-gray-400 mb-1">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-0.5 bg-gray-700 rounded-full text-xs text-gray-300">
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-700 rounded-full text-xs text-gray-300">
                          +{member.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 p-3 flex justify-between items-center">
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openDetailView(member)
                      }}
                      className="p-1.5 bg-gray-700 rounded-full text-blue-400 hover:text-blue-300 transition-colors"
                      title="View Details"
                    >
                      <AiOutlineEye size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleEditMember(member)
                      }}
                      className="p-1.5 bg-gray-700 rounded-full text-purple-400 hover:text-purple-300 transition-colors"
                      title="Edit Member"
                    >
                      <AiOutlineEdit size={16} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDeleteMember(member.id)
                      }}
                      className="p-1.5 bg-gray-700 rounded-full text-red-400 hover:text-red-300 transition-colors"
                      title="Delete Member"
                    >
                      <AiOutlineDelete size={16} />
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">
                    Joined: {new Date(member.joinDate).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredMembers.length > membersPerPage && (
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 1
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: Math.ceil(filteredMembers.length / membersPerPage) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
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
                onClick={() => paginate(Math.min(Math.ceil(filteredMembers.length / membersPerPage), currentPage + 1))}
                disabled={currentPage === Math.ceil(filteredMembers.length / membersPerPage)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentPage === Math.ceil(filteredMembers.length / membersPerPage)
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Member Detail Slider */}
        <AnimatePresence>
          {viewingMember && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
              onClick={closeDetailView}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-900 shadow-xl z-50 overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 z-10">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-white">Member Profile</h2>
                    <button
                      onClick={closeDetailView}
                      className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Profile Header */}
                  <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-gray-700">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                        {viewingMember.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">{viewingMember.name}</h3>
                        <p className="text-purple-400">{viewingMember.position || viewingMember.role}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-3 py-1 rounded-full text-sm bg-purple-900/40 text-purple-400 border border-purple-800/50">
                            {viewingMember.department}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              viewingMember.active
                                ? "bg-green-900/40 text-green-400 border border-green-800/50"
                                : "bg-red-900/40 text-red-400 border border-red-800/50"
                            }`}
                          >
                            {viewingMember.active ? "Active" : "Inactive"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information Card */}
                  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                      <User size={20} className="text-purple-400" /> Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20">
                          <Mail size={18} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <a
                            href={`mailto:${viewingMember.email}`}
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            {viewingMember.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20">
                          <Phone size={18} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <a
                            href={`tel:${viewingMember.phone}`}
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            {viewingMember.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20">
                          <MapPin size={18} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Location</p>
                          <p className="text-white">{viewingMember.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20">
                          <MapPin size={18} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Address</p>
                          <p className="text-white">{viewingMember.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                      <Briefcase size={20} className="text-purple-400" /> Professional Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Role</p>
                        <p className="text-white">{viewingMember.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Position</p>
                        <p className="text-white">{viewingMember.position || "N/A"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Department</p>
                        <p className="text-white">{viewingMember.department}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Experience</p>
                        <p className="text-white">{viewingMember.experience}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Salary</p>
                        <p className="text-white">{viewingMember.salary}</p>
                      </div>
                    </div>
                  </div>

                  {/* Employment Details */}
                  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                      <Calendar size={20} className="text-purple-400" /> Employment Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Join Date</p>
                        <p className="text-white">{viewingMember.joinDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Release Date</p>
                        <p className="text-white">{viewingMember.releaseDate || "N/A"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Status</p>
                        <p className={`text-${viewingMember.active ? "green" : "red"}-400`}>
                          {viewingMember.active ? "Active" : "Inactive"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                      <Shield size={20} className="text-purple-400" /> Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {viewingMember.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verification Documents */}
                  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                      <FileText size={20} className="text-purple-400" /> Verification Documents
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Aadhar Card</p>
                        <img
                          src={viewingMember.aadharCard || "/placeholder.svg"}
                          alt="Aadhar Card"
                          className="w-full h-auto mt-2 rounded-md object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">PAN Card</p>
                        <img
                          src={viewingMember.panCard || "/placeholder.svg"}
                          alt="PAN Card"
                          className="w-full h-auto mt-2 rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Remarks */}
                  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                      <FileText size={20} className="text-purple-400" /> Remarks
                    </h3>
                    <p className="text-white">{viewingMember.remark || "No remarks available"}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={() => {
                        closeDetailView()
                        handleEditMember(viewingMember)
                      }}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
                    >
                      <AiOutlineEdit size={18} />
                      Edit Member
                    </button>
                    <button
                      onClick={closeDetailView}
                      className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Member Slider */}
        <AnimatePresence>
          {isAddMemberModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
              onClick={() => setIsAddMemberModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-900 shadow-xl z-50 overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 z-10">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-white">Add New Member</h2>
                    <button
                      onClick={() => setIsAddMemberModalOpen(false)}
                      className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleAddNewMember()
                    }}
                    className="space-y-6"
                  >
                    {/* Basic Information */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Basic Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.name}
                            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.role}
                            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Position</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.position}
                            onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Department</label>
                          <select
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.department}
                            onChange={(e) => setNewMember({ ...newMember, department: e.target.value })}
                            required
                          >
                            <option value="">Select Department</option>
                            <option value="HR">HR</option>
                            <option value="Tech">Tech</option>
                            <option value="Design">Design</option>
                            <option value="Operations">Operations</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.location}
                            onChange={(e) => setNewMember({ ...newMember, location: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                          <select
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.status}
                            onChange={(e) => setNewMember({ ...newMember, status: e.target.value })}
                            required
                          >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                          <input
                            type="email"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.email}
                            onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.phone}
                            onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.address}
                            onChange={(e) => setNewMember({ ...newMember, address: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Employment Details */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Employment Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Experience</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.experience}
                            onChange={(e) => setNewMember({ ...newMember, experience: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Salary</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.salary}
                            onChange={(e) => setNewMember({ ...newMember, salary: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Join Date</label>
                          <input
                            type="date"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.joinDate}
                            onChange={(e) => setNewMember({ ...newMember, joinDate: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Release Date</label>
                          <input
                            type="date"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.releaseDate}
                            onChange={(e) => setNewMember({ ...newMember, releaseDate: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Skills</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Skills (comma separated)</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={newMember.skills}
                          onChange={(e) => setNewMember({ ...newMember, skills: e.target.value })}
                          placeholder="e.g. JavaScript, React, Communication"
                          required
                        />
                      </div>
                    </div>

                    {/* Document Links */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Document Links</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Aadhar Card URL</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.aadharCard}
                            onChange={(e) => setNewMember({ ...newMember, aadharCard: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">PAN Card URL</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={newMember.panCard}
                            onChange={(e) => setNewMember({ ...newMember, panCard: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Remarks */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Remarks</h3>
                      <div>
                        <textarea
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={newMember.remark}
                          onChange={(e) => setNewMember({ ...newMember, remark: e.target.value })}
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-700 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsAddMemberModalOpen(false)}
                        className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-colors"
                      >
                        Add Member
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Edit Member Slider */}
        <AnimatePresence>
          {isEditMemberModalOpen && editedMember && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
              onClick={() => setIsEditMemberModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-900 shadow-xl z-50 overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-6 z-10">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-white">Edit Member Profile</h2>
                    <button
                      onClick={() => setIsEditMemberModalOpen(false)}
                      className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSaveEditedMember()
                    }}
                    className="space-y-6"
                  >
                    {/* Basic Information */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Basic Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.name}
                            onChange={(e) => setEditedMember({ ...editedMember, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.role}
                            onChange={(e) => setEditedMember({ ...editedMember, role: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Position</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.position || ""}
                            onChange={(e) => setEditedMember({ ...editedMember, position: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Department</label>
                          <select
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.department}
                            onChange={(e) => setEditedMember({ ...editedMember, department: e.target.value })}
                            required
                          >
                            <option value="HR">HR</option>
                            <option value="Tech">Tech</option>
                            <option value="Design">Design</option>
                            <option value="Operations">Operations</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.location}
                            onChange={(e) => setEditedMember({ ...editedMember, location: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                          <select
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.active ? "Active" : "Inactive"}
                            onChange={(e) =>
                              setEditedMember({
                                ...editedMember,
                                active: e.target.value === "Active",
                                status: e.target.value,
                              })
                            }
                            required
                          >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                          <input
                            type="email"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.email}
                            onChange={(e) => setEditedMember({ ...editedMember, email: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.phone}
                            onChange={(e) => setEditedMember({ ...editedMember, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.address}
                            onChange={(e) => setEditedMember({ ...editedMember, address: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Employment Details */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Employment Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Experience</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.experience}
                            onChange={(e) => setEditedMember({ ...editedMember, experience: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Salary</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.salary}
                            onChange={(e) => setEditedMember({ ...editedMember, salary: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Join Date</label>
                          <input
                            type="date"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.joinDate}
                            onChange={(e) => setEditedMember({ ...editedMember, joinDate: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Release Date</label>
                          <input
                            type="date"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.releaseDate || ""}
                            onChange={(e) => setEditedMember({ ...editedMember, releaseDate: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Skills</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Skills (comma separated)</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editedMember.skills?.join(", ") || ""}
                          onChange={(e) => setEditedMember({ ...editedMember, skills: e.target.value.split(", ") })}
                          required
                        />
                      </div>
                    </div>

                    {/* Document Links */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Document Links</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">Aadhar Card URL</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.aadharCard || ""}
                            onChange={(e) => setEditedMember({ ...editedMember, aadharCard: e.target.value })}
                          />
                          {editedMember.aadharCard && (
                            <div className="mt-2">
                              <img
                                src={editedMember.aadharCard || "/placeholder.svg"}
                                alt="Aadhar Card"
                                className="w-full h-auto max-h-40 object-contain rounded-md border border-gray-700"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-1">PAN Card URL</label>
                          <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            value={editedMember.panCard || ""}
                            onChange={(e) => setEditedMember({ ...editedMember, panCard: e.target.value })}
                          />
                          {editedMember.panCard && (
                            <div className="mt-2">
                              <img
                                src={editedMember.panCard || "/placeholder.svg"}
                                alt="PAN Card"
                                className="w-full h-auto max-h-40 object-contain rounded-md border border-gray-700"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Remarks */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-200 mb-3">Remarks</h3>
                      <div>
                        <textarea
                          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                          value={editedMember.remark || ""}
                          onChange={(e) => setEditedMember({ ...editedMember, remark: e.target.value })}
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-700 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsEditMemberModalOpen(false)}
                        className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deleteModal && memberToDelete && (
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
                <div className="flex items-center gap-3 text-red-400 mb-4">
                  <AlertTriangle size={24} />
                  <h3 className="text-xl font-semibold">Confirm Deletion</h3>
                </div>

                <p className="text-gray-300 mb-6">
                  Are you sure you want to remove <span className="font-semibold">{memberToDelete.name}</span> from the
                  team? This action cannot be undone.
                </p>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setDeleteModal(false)}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
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

export default TeamManagementDashboard
