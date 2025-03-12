// import { useState } from "react"
// import Header from "../components/Common/Header"
// import { toast } from "react-hot-toast"
// import { motion, AnimatePresence } from "framer-motion"
// import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"
// import { Search, Trash2, Eye, Edit, XCircle, CheckCircle, ToggleLeft, ToggleRight } from "lucide-react"

// const TeamManagementDashboard = () => {
//   const [members, setMembers] = useState([
//     // { id: 1, name: 'Alice', role: 'Recruiter', active: true, department: 'HR', location: 'New York', skills: ['Recruiting', 'Communication'], contact: 'alice@example.com', address: '123 Main St, City' },
//     // { id: 2, name: 'Bob', role: 'Interviewer', active: true, department: 'Tech', location: 'San Francisco', skills: ['Interviewing', 'Technical Analysis'], contact: 'bob@example.com', address: '456 Second St, City' },
//     // { id: 3, name: 'Charlie', role: 'Manager', active: true, department: 'Operations', location: 'London', skills: ['Leadership', 'Team Management'], contact: 'charlie@example.com', address: '789 Third St, City' },
//     // { id: 4, name: 'David', role: 'HR Specialist', active: false, department: 'HR', location: 'Chicago', skills: ['Employee Relations', 'Conflict Resolution'], contact: 'david@example.com', address: '101 Fourth St, City' },
//     // { id: 5, name: 'Eva', role: 'Software Engineer', active: true, department: 'Tech', location: 'Berlin', skills: ['JavaScript', 'React'], contact: 'eva@example.com', address: '202 Fifth St, City' },
//     // { id: 6, name: 'Frank', role: 'Data Scientist', active: true, department: 'Tech', location: 'San Francisco', skills: ['Machine Learning', 'Data Analysis'], contact: 'frank@example.com', address: '303 Sixth St, City' },
//     // { id: 7, name: 'Grace', role: 'UI/UX Designer', active: true, department: 'Design', location: 'New York', skills: ['Sketch', 'Figma'], contact: 'grace@example.com', address: '404 Seventh St, City' },
//     // { id: 8, name: 'Hank', role: 'Developer', active: false, department: 'Tech', location: 'Sydney', skills: ['Python', 'Django'], contact: 'hank@example.com', address: '505 Eighth St, City' },
//     // { id: 9, name: 'Ivy', role: 'QA Engineer', active: true, department: 'Tech', location: 'Austin', skills: ['Automated Testing', 'Manual Testing'], contact: 'ivy@example.com', address: '606 Ninth St, City' },
//     // { id: 10, name: 'Jack', role: 'Team Lead', active: true, department: 'Tech', location: 'Paris', skills: ['Leadership', 'Scrum'], contact: 'jack@example.com', address: '707 Tenth St, City' },
//     // { id: 11, name: 'Ivy John', role: 'Junior Engineer', active: false, department: 'Tech', location: 'London', skills: ['Automated Testing', 'Manual Testing'], contact: 'ivyjohn@example.com', address: '404 Second St, City' },
//     // { id: 12, name: 'Jacky', role: 'Team Manager', active: true, department: 'Non-Tech', location: 'NewYork', skills: ['Leadership', 'Scrum'], contact: 'jacky@example.com', address: '101 Seven St, City' },

//     {
//       id: 1,
//       name: "Alice",
//       role: "Recruiter",
//       active: true,
//       department: "HR",
//       location: "New York",
//       skills: ["Recruiting", "Communication"],
//       contact: "alice@example.com",
//       address: "123 Main St, City",
//       joinDate: "2022-06-15",
//       releaseDate: null,
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "alice@example.com",
//       phone: "+1-234-567-8901",
//       experience: "5 years",
//       salary: "$60,000",
//       position: "Senior Recruiter",
//       status: "Active",
//       remark: "Excellent performance",
//     },
//     {
//       id: 2,
//       name: "Bob",
//       role: "Interviewer",
//       active: true,
//       department: "Tech",
//       location: "San Francisco",
//       skills: ["Interviewing", "Technical Analysis"],
//       contact: "bob@example.com",
//       address: "456 Second St, City",
//       joinDate: "2021-09-10",
//       releaseDate: "2024-01-20",
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "bob@example.com",
//       phone: "+1-987-654-3210",
//       experience: "8 years",
//       salary: "$80,000",
//       position: "Lead Interviewer",
//       status: "Inactive",
//       remark: "Left for a better opportunity",
//     },
//     {
//       id: 3,
//       name: "Charlie",
//       role: "Manager",
//       active: true,
//       department: "Operations",
//       location: "London",
//       skills: ["Leadership", "Team Management"],
//       contact: "charlie@example.com",
//       address: "789 Third St, City",
//       joinDate: "2020-02-18",
//       releaseDate: null,
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "charlie@example.com",
//       phone: "+44-203-123-4567",
//       experience: "10 years",
//       salary: "$100,000",
//       position: "Operations Manager",
//       status: "Active",
//       remark: "Key asset to the team",
//     },
//     {
//       id: 4,
//       name: "David",
//       role: "HR Specialist",
//       active: false,
//       department: "HR",
//       location: "Chicago",
//       skills: ["Employee Relations", "Conflict Resolution"],
//       contact: "david@example.com",
//       address: "101 Fourth St, City",
//       joinDate: "2018-07-25",
//       releaseDate: "2023-11-30",
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "david@example.com",
//       phone: "+1-312-555-7890",
//       experience: "7 years",
//       salary: "$55,000",
//       position: "HR Specialist",
//       status: "Inactive",
//       remark: "Resigned due to relocation",
//     },
//     {
//       id: 5,
//       name: "Eva",
//       role: "Software Engineer",
//       active: true,
//       department: "Tech",
//       location: "Berlin",
//       skills: ["JavaScript", "React"],
//       contact: "eva@example.com",
//       address: "202 Fifth St, City",
//       joinDate: "2019-12-05",
//       releaseDate: null,
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "eva@example.com",
//       phone: "+49-30-9876-5432",
//       experience: "6 years",
//       salary: "$75,000",
//       position: "Senior Software Engineer",
//       status: "Active",
//       remark: "Consistently exceeds expectations",
//     },
//     {
//       id: 6,
//       name: "Bobbbb",
//       role: "Interviewer",
//       active: true,
//       department: "Tech",
//       location: "San Francisco",
//       skills: ["Interviewing", "Technical Analysis"],
//       contact: "bob@example.com",
//       address: "456 Second St, City",
//       joinDate: "2021-09-10",
//       releaseDate: "2024-01-20",
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "bob@example.com",
//       phone: "+1-987-654-3210",
//       experience: "8 years",
//       salary: "$80,000",
//       position: "Lead Interviewer",
//       status: "Inactive",
//       remark: "Left for a better opportunity",
//     },
//     {
//       id: 7,
//       name: "Kenna",
//       role: "Interviewer",
//       active: true,
//       department: "Tech",
//       location: "San Francisco",
//       skills: ["Interviewing", "Technical Analysis"],
//       contact: "bob@example.com",
//       address: "456 Second St, City",
//       joinDate: "2021-09-10",
//       releaseDate: "2024-01-20",
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "bob@example.com",
//       phone: "+1-987-654-3210",
//       experience: "8 years",
//       salary: "$80,000",
//       position: "Lead Interviewer",
//       status: "Inactive",
//       remark: "Left for a better opportunity",
//     },
//     {
//       id: 8,
//       name: "Bobbly",
//       role: "Interviewer",
//       active: true,
//       department: "Tech",
//       location: "San Francisco",
//       skills: ["Interviewing", "Technical Analysis"],
//       contact: "bob@example.com",
//       address: "456 Second St, City",
//       joinDate: "2021-09-10",
//       releaseDate: "2024-01-20",
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "bob@example.com",
//       phone: "+1-987-654-3210",
//       experience: "8 years",
//       salary: "$80,000",
//       position: "Lead Interviewer",
//       status: "Inactive",
//       remark: "Left for a better opportunity",
//     },
//     {
//       id: 9,
//       name: "Sam",
//       role: "Interviewer",
//       active: true,
//       department: "Tech",
//       location: "San Francisco",
//       skills: ["Interviewing", "Technical Analysis"],
//       contact: "bob@example.com",
//       address: "456 Second St, City",
//       joinDate: "2021-09-10",
//       releaseDate: "2024-01-20",
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "bob@example.com",
//       phone: "+1-987-654-3210",
//       experience: "8 years",
//       salary: "$80,000",
//       position: "Lead Interviewer",
//       status: "Inactive",
//       remark: "Left for a better opportunity",
//     },
//     {
//       id: 10,
//       name: "Will",
//       role: "Interviewer",
//       active: true,
//       department: "Tech",
//       location: "San Francisco",
//       skills: ["Interviewing", "Technical Analysis"],
//       contact: "bob@example.com",
//       address: "456 Second St, City",
//       joinDate: "2021-09-10",
//       releaseDate: "2024-01-20",
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "bob@example.com",
//       phone: "+1-987-654-3210",
//       experience: "8 years",
//       salary: "$80,000",
//       position: "Lead Interviewer",
//       status: "Inactive",
//       remark: "Left for a better opportunity",
//     },
//     {
//       id: 11,
//       name: "Ram",
//       role: "Interviewer",
//       active: true,
//       department: "Tech",
//       location: "San Francisco",
//       skills: ["Interviewing", "Technical Analysis"],
//       contact: "bob@example.com",
//       address: "456 Second St, City",
//       joinDate: "2021-09-10",
//       releaseDate: "2024-01-20",
//       aadharCard: "https://t4.ftcdn.net/jpg/06/20/32/15/240_F_620321511_fodPcaOudj9jTg1Fo6wybZWJM91IaKIp.jpg",
//       panCard: "https://indiangrow.com/data/user/maker/document/pan/banner.jpg",
//       email: "bob@example.com",
//       phone: "+1-987-654-3210",
//       experience: "8 years",
//       salary: "$80,000",
//       position: "Lead Interviewer",
//       status: "Inactive",
//       remark: "Left for a better opportunity",
//     },
//   ])

//   const [viewingMember, setViewingMember] = useState(null)
//   const [filters, setFilters] = useState("")
//   const [selectedDepartment, setSelectedDepartment] = useState("all")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [newMember, setNewMember] = useState({
//     name: "",
//     role: "",
//     department: "",
//     location: "",
//     skills: "",
//     contact: "",
//     address: "",
//   })
//   const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false)
//   const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false)
//   const [editedMember, setEditedMember] = useState(null)
//   const [filterStatus, setFilterStatus] = useState("All")

//   const membersPerPage = 10

//   const handleFilterChange = (e) => setFilters(e.target.value)
//   const handleDepartmentChange = (e) => setSelectedDepartment(e.target.value)

  
//   const filteredMembers = members.filter((member) => {
    
//     const searchTerm = filters.toLowerCase()
//     const isNameMatch = member.name.toLowerCase().includes(searchTerm)
//     const isRoleMatch = member.role.toLowerCase().includes(searchTerm)
//     const isLocationMatch = member.location.toLowerCase().includes(searchTerm)
//     const isSkillsMatch = member.skills.some((skill) => skill.toLowerCase().includes(searchTerm))

    
//     const isDepartmentMatch =
//       selectedDepartment === "all" || member.department.toLowerCase() === selectedDepartment.toLowerCase()

//     const isStatusMatch =
//       filterStatus === "All" ||
//       (filterStatus === "Active" && member.active) ||
//       (filterStatus === "Inactive" && !member.active)

    
//     return (isNameMatch || isRoleMatch || isLocationMatch || isSkillsMatch) && isDepartmentMatch && isStatusMatch
//   })

//   const paginatedMembers = filteredMembers.slice((currentPage - 1) * membersPerPage, currentPage * membersPerPage)

//   const handleDeleteMember = (id) => {
//     setMembers(members.filter((member) => member.id !== id))
//     toast.error("Member deleted!", {
//       style: {
//         background: "#f8d7da",
//       },
//     })
//   }

//   const handleUpdateMember = (updatedMember) => {
//     setMembers(members.map((member) => (member.id === updatedMember.id ? updatedMember : member)))
//   }

//   const handleAddNewMember = () => {
//     const newMemberObj = {
//       id: members.length + 1,
//       ...newMember,
//       skills: newMember.skills.split(",").map((skill) => skill.trim()),
//     }
//     setMembers([...members, newMemberObj])
//     setIsAddMemberModalOpen(false)
//     toast.success("New member added!")
//     setNewMember({ name: "", role: "", department: "", location: "", skills: "", contact: "", address: "" })
//   }

//   const handleEditMember = (member) => {
//     setEditedMember(member)
//     setIsEditMemberModalOpen(true)
//   }

//   const handleSaveEditedMember = () => {
//     handleUpdateMember(editedMember)
//     setIsEditMemberModalOpen(false)
//     toast.success("Member details updated!")
//   }

//   const openDetailView = (item) => setViewingMember(item)
//   const closeDetailView = () => setViewingMember(null)

//   const indexOfLastMember = currentPage * membersPerPage
//   const indexOfFirstMember = indexOfLastMember - membersPerPage
//   const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember)

//   const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
//       <Header title="Team Management" />
//       <motion.div
//         className="flex-1 p-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <div className="md:w-1/2 relative">
//             <input
//               type="text"
//               value={filters}
//               onChange={handleFilterChange}
//               placeholder="Search..."
//               className=" py-2 pl-10 xs:w-20 md:w-auto bg-gray-800 text-white border rounded  focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           </div>
//           <div className="md:ml-48 sm:ml-5 sm:mr-5">
//             <button
//               onClick={() =>
//                 setFilterStatus(filterStatus === "All" ? "Active" : filterStatus === "Active" ? "Inactive" : "All")
//               }
//               className="flex items-center gap-2  bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
//             >
//               {filterStatus === "Active" ? <ToggleLeft size={20} /> : <ToggleRight size={20} />}
//               {filterStatus}
//             </button>
//           </div>
//           <div className="relative xs:w-auto md:w-auto md:text-sm xs:text-xs">
//             <select
//               value={selectedDepartment}
//               onChange={handleDepartmentChange}
//               className="px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="all">All Departments</option>
//               <option value="HR">HR</option>
//               <option value="Tech">Tech</option>
//               <option value="Design">Design</option>
//               <option value="Operations">Operations</option>
//             </select>
//           </div>
//         </div>

//         <div className="overflow-x-auto border rounded-lg border-gray-700">
//           <table className="w-full table-auto border-collapse bg-gray-900 text-white rounded-lg shadow-md overflow-hidden">
//             <thead className=" text-white">
//               <tr>
//                 <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
//                   Name
//                 </th>
//                 <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
//                   Experience
//                 </th>
//                 <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
//                   Location
//                 </th>
//                 <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
//                   Department
//                 </th>
//                 <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
//                   Status
//                 </th>
//                 <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm ">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedMembers.map((member, index) => (
//                 <tr key={member.id} className="border-t border-gray-700 transition duration-300">
//                   <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{member.name}</td>
//                   <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{member.experience}</td>
//                   <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{member.location}</td>
//                   <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{member.department}</td>
//                   <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">
//                     <span
//                       className={`px-2 py-1 flex items-center space-x-1 rounded text-xs ${member.active ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
//                     >
//                       {member.active ? (
//                         <>
//                           <CheckCircle size={14} className="text-white" />
//                           <span>Active</span>
//                         </>
//                       ) : (
//                         <>
//                           <XCircle size={14} className="text-white" />
//                           <span>Inactive</span>
//                         </>
//                       )}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 flex items-center space-x-5">
//                     <button
//                       onClick={() => openDetailView(member)}
//                       className="px-4 py-2 text-sm rounded bg-blue-500 hover:bg-blue-600 text-white shadow-md"
//                     >
//                       <Eye className="text-white" size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleEditMember(member)}
//                       className="px-4 py-2 text-sm rounded bg-purple-500 hover:bg-purple-600 text-white shadow-md"
//                     >
//                       <Edit className="text-white" size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleDeleteMember(member.id)}
//                       className="px-4 py-2 text-sm rounded bg-red-500 hover:bg-red-600 text-white shadow-md"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <AnimatePresence>
//           {viewingMember && (
//             <motion.div
//               className="fixed inset-0 bg-opacity-50 flex justify-end mt-14"
//               onClick={closeDetailView}
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: "100%" }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.div
//                 className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 w-1/2 md:w-1/3 sm:w-auto relative shadow-2xl rounded-lg 
//         max-h-[90vh] overflow-y-auto"
//                 initial={{ opacity: 0, x: "100%" }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: "100%" }}
//                 transition={{ duration: 0.5 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Close Button */}
//                 <AiOutlineClose
//                   className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
//                   size={24}
//                   onClick={closeDetailView}
//                 />

//                 {/* Profile Section */}
//                 <div className="flex flex-col items-center space-y-4">
//                   <div className="h-20 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-2xl">
//                     {viewingMember.name.charAt(0)}
//                   </div>
//                   <h2 className="text-2xl font-semibold text-gray-100">{viewingMember.name}</h2>
//                 </div>

//                 {/* Member Details */}
//                 <div className="mt-6 space-y-4">
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Role:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.role}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Department:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.department}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Location:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.location}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Skills:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.skills.join(", ")}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Email:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.email}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Phone:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.phone}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Experience:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.experience}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Salary:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.salary}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Position:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.position}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Status:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.status}</span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm text-gray-400">Remark:</p>
//                     <span className="text-sm text-gray-200">{viewingMember.remark}</span>
//                   </div>
//                 </div>

//                 {/* Verification Documents */}
//                 <div className="border-t border-gray-600 pt-4">
//                   <h3 className="text-lg font-semibold text-gray-100">Verification Documents</h3>
//                   <div className="mt-2 space-y-2">
//                     <p className="text-gray-300">Aadhar Card:</p>
//                     <img
//                       src={viewingMember.aadharCard || "/placeholder.svg"}
//                       alt="Aadhar Card"
//                       className="w-40 rounded shadow-md"
//                     />
//                     <p className="text-gray-300">PAN Card:</p>
//                     <img
//                       src={viewingMember.panCard || "/placeholder.svg"}
//                       alt="PAN Card"
//                       className="w-40 rounded shadow-md"
//                     />
//                   </div>
//                 </div>

//                 {/* Join Date & Release Date */}
//                 <div className="border-t border-gray-600 pt-4">
//                   <h3 className="text-lg font-semibold text-gray-100">Employment Dates</h3>
//                   <p className="text-gray-300">Join Date: {viewingMember.joinDate}</p>
//                   <p className="text-gray-300">Release Date: {viewingMember.releaseDate || "N/A"}</p>
//                 </div>

//                 {/* Close Button */}
//                 <div className="mt-6 flex justify-center">
//                   <button
//                     className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
//                     onClick={closeDetailView}
//                   >
//                     Close
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <div className="flex justify-center mt-6 space-x-2">
//           {Array.from({ length: Math.ceil(filteredMembers.length / membersPerPage) }, (_, index) => (
//             <button
//               key={index + 1}
//               onClick={() => paginate(index + 1)}
//               className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${currentPage === index + 1 ? "bg-purple-500 text-white shadow-md" : "bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white"}`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </motion.div>
//       <button
//         onClick={() => setIsAddMemberModalOpen(true)}
//         className="bg-blue-500 text-white p-4 rounded-full fixed bottom-10 right-10 z-50 "
//       >
//         <AiOutlinePlus size={24} />
//       </button>

//       {isAddMemberModalOpen && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 mt-16 p-7"
//           onClick={() => setIsAddMemberModalOpen(false)}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-sm md:w-1/2 xs:w-full"
//             onClick={(e) => e.stopPropagation()}
//             initial={{ x: "100%" }}
//             animate={{ x: "0%" }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="md:text-3xl xs:text-sm xs:w-full sm:text-center font-bold text-white">Add New Member</h2>
//               <button onClick={() => setIsAddMemberModalOpen(false)} className="text-white text-2xl">
//                 <AiOutlineClose />
//               </button>
//             </div>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault()
//                 handleAddNewMember()
//               }}
//             >
//               <input
//                 type="text"
//                 value={newMember.name}
//                 onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
//                 placeholder="Name"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />
//               <input
//                 type="text"
//                 value={newMember.role}
//                 onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
//                 placeholder="Role"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />
//               <input
//                 type="text"
//                 value={newMember.department}
//                 onChange={(e) => setNewMember({ ...newMember, department: e.target.value })}
//                 placeholder="Department"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />

//               <input
//                 type="text"
//                 value={newMember.contact}
//                 onChange={(e) => setNewMember({ ...newMember, contact: e.target.value })}
//                 placeholder="Contact"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />
//               <input
//                 type="text"
//                 value={newMember.address}
//                 onChange={(e) => setNewMember({ ...newMember, address: e.target.value })}
//                 placeholder="Address"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />
//               <input
//                 type="text"
//                 value={newMember.location}
//                 onChange={(e) => setNewMember({ ...newMember, location: e.target.value })}
//                 placeholder="Location"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />
//               <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg">
//                 Add Member
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}

//       {/* Edit Member Modal */}
//       {/* {isEditMemberModalOpen && (
//     <motion.div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 mt-16 p-7"
//       onClick={() => setIsEditMemberModalOpen(false)} >
//       <motion.div
//         className="bg-gray-800 p-6 rounded-lg shadow-sm md:w-1/2 xs:w-full"
//         onClick={(e) => e.stopPropagation()}
//         initial={{ x: '100%' }}
//         animate={{ x: '0%' }}
//         exit={{ x: '100%' }}
//         transition={{ type: 'spring', stiffness: 200, damping: 25 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="md:text-3xl xs:text-sm xs:w-full sm:text-center font-bold text-white">Edit Member</h2>
//           <button onClick={() => setIsEditMemberModalOpen(false)} className="text-white text-2xl">
//             <AiOutlineClose />
//           </button>
//         </div>
//         <form onSubmit={(e) => { e.preventDefault(); handleSaveEditedMember(); }}>
//           <input
//             type="text"
//             value={editedMember.name}
//             onChange={(e) => setEditedMember({ ...editedMember, name: e.target.value })}
//             placeholder="Name"
//             className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//           />
//           <input
//             type="text"
//             value={editedMember.role}
//             onChange={(e) => setEditedMember({ ...editedMember, role: e.target.value })}
//             placeholder="Role"
//             className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//           />
//           <input
//             type="text"
//             value={editedMember.department}
//             onChange={(e) => setEditedMember({ ...editedMember, department: e.target.value })}
//             placeholder="Department"
//             className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//           />
          
//           <input
//             type="text"
//             value={editedMember.contact}
//             onChange={(e) => setEditedMember({ ...editedMember, contact: e.target.value })}
//             placeholder="Contact"
//             className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//           />
//           <input
//             type="text"
//             value={editedMember.address}
//             onChange={(e) => setEditedMember({ ...editedMember, address: e.target.value })}
//             placeholder="Address"
//             className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//           />
//           <input
//             type="text"
//             value={editedMember.location}
//             onChange={(e) => setEditedMember({ ...editedMember, location: e.target.value })}
//             placeholder="Location"
//             className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//           />
//           <input
//             type="text"
//             value={editedMember.verificationDocuments?.panCard}
//             onChange={(e) => setEditedMember({ ...editedMember, verificationDocuments: e.target.value })}
//             placeholder="Verification"
//             className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//           />
//           <input
//             type="text"
//             value={editedMember.companyDetails?.name}
//             onChange={(e) => setEditedMember({ ...editedMember, companyDetails: e.target.value })}
//             placeholder="Company Name"
//             className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//           />
//           <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg">Save Changes</button>
//         </form>
//       </motion.div>
//     </motion.div>
//   )} */}
//       {isEditMemberModalOpen && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 mt-16 p-7"
//           onClick={() => setIsEditMemberModalOpen(false)}
//         >
//           <motion.div
//             className="bg-gray-800 p-6 rounded-lg shadow-sm md:w-1/2 xs:w-full overflow-y-auto max-h-[80vh]"
//             onClick={(e) => e.stopPropagation()}
//             initial={{ x: "100%" }}
//             animate={{ x: "0%" }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 200, damping: 25 }}
//           >
//             {/* Modal Header */}
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="md:text-2xl xs:text-lg xs:w-full sm:text-center font-bold text-white">
//                 Edit Member Details
//               </h2>
//               <button onClick={() => setIsEditMemberModalOpen(false)} className="text-white text-2xl">
//                 <AiOutlineClose />
//               </button>
//             </div>

//             <form
//               onSubmit={(e) => {
//                 e.preventDefault()
//                 handleSaveEditedMember()
//               }}
//             >
//               <input
//                 type="text"
//                 value={editedMember.name}
//                 onChange={(e) => setEditedMember({ ...editedMember, name: e.target.value })}
//                 placeholder="Name"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />

//               <input
//                 type="text"
//                 value={editedMember.role}
//                 onChange={(e) => setEditedMember({ ...editedMember, role: e.target.value })}
//                 placeholder="Role"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />

//               <input
//                 type="text"
//                 value={editedMember.department}
//                 onChange={(e) => setEditedMember({ ...editedMember, department: e.target.value })}
//                 placeholder="Department"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />

//               <input
//                 type="text"
//                 value={editedMember.contact}
//                 onChange={(e) => setEditedMember({ ...editedMember, contact: e.target.value })}
//                 placeholder="Contact"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />

//               <input
//                 type="text"
//                 value={editedMember.address}
//                 onChange={(e) => setEditedMember({ ...editedMember, address: e.target.value })}
//                 placeholder="Address"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />

//               <input
//                 type="text"
//                 value={editedMember.location}
//                 onChange={(e) => setEditedMember({ ...editedMember, location: e.target.value })}
//                 placeholder="Location"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />

//               <input
//                 type="text"
//                 value={editedMember.skills?.join(", ") || ""}
//                 onChange={(e) => setEditedMember({ ...editedMember, skills: e.target.value.split(", ") })}
//                 placeholder="Skills (comma-separated)"
//                 className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//               />

//               <div className="border-t border-gray-600 pt-4">
//                 <h3 className="text-lg font-semibold text-gray-100 mb-2">Verification Documents</h3>
//                 <input
//                   type="text"
//                   value={editedMember.verificationDocuments?.panCard || ""}
//                   onChange={(e) =>
//                     setEditedMember({
//                       ...editedMember,
//                       verificationDocuments: {
//                         ...editedMember.verificationDocuments,
//                         panCard: e.target.value,
//                       },
//                     })
//                   }
//                   placeholder="PAN Card"
//                   className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//                 />

//                 <input
//                   type="text"
//                   value={editedMember.verificationDocuments?.msmeCertificate || ""}
//                   onChange={(e) =>
//                     setEditedMember({
//                       ...editedMember,
//                       verificationDocuments: {
//                         ...editedMember.verificationDocuments,
//                         msmeCertificate: e.target.value,
//                       },
//                     })
//                   }
//                   placeholder="MSME Certificate"
//                   className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//                 />

//                 <input
//                   type="text"
//                   value={editedMember.verificationDocuments?.gstCertificate || ""}
//                   onChange={(e) =>
//                     setEditedMember({
//                       ...editedMember,
//                       verificationDocuments: {
//                         ...editedMember.verificationDocuments,
//                         gstCertificate: e.target.value,
//                       },
//                     })
//                   }
//                   placeholder="GST Certificate"
//                   className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//                 />
//               </div>

//               {/* Company Details */}
//               <div className="border-t border-gray-600 pt-4">
//                 <h3 className="text-lg font-semibold text-gray-100 mb-2">Company Details</h3>
//                 <input
//                   type="text"
//                   value={editedMember.companyDetails?.name || ""}
//                   onChange={(e) =>
//                     setEditedMember({
//                       ...editedMember,
//                       companyDetails: { ...editedMember.companyDetails, name: e.target.value },
//                     })
//                   }
//                   placeholder="Company Name"
//                   className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//                 />

//                 <input
//                   type="text"
//                   value={editedMember.companyDetails?.type || ""}
//                   onChange={(e) =>
//                     setEditedMember({
//                       ...editedMember,
//                       companyDetails: { ...editedMember.companyDetails, type: e.target.value },
//                     })
//                   }
//                   placeholder="Company Type"
//                   className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//                 />
//               </div>

//               {/* Subscription Details */}
//               <div className="border-t border-gray-600 pt-4">
//                 <h3 className="text-lg font-semibold text-gray-100 mb-2">Subscription Details</h3>
//                 <input
//                   type="text"
//                   value={editedMember.subscriptionDetails?.plan || ""}
//                   onChange={(e) =>
//                     setEditedMember({
//                       ...editedMember,
//                       subscriptionDetails: {
//                         ...editedMember.subscriptionDetails,
//                         plan: e.target.value,
//                       },
//                     })
//                   }
//                   placeholder="Subscription Plan"
//                   className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//                 />

//                 <input
//                   type="text"
//                   value={editedMember.subscriptionDetails?.validUntil || ""}
//                   onChange={(e) =>
//                     setEditedMember({
//                       ...editedMember,
//                       subscriptionDetails: {
//                         ...editedMember.subscriptionDetails,
//                         validUntil: e.target.value,
//                       },
//                     })
//                   }
//                   placeholder="Valid Until"
//                   className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg border border-gray-600"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//                 Save Changes
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   )
// }

// export default TeamManagementDashboard

"use client"

import { useState } from "react"
import Header from "../components/Common/Header"
import { toast } from "react-hot-toast"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"
import { Search, Trash2, Eye, Edit, XCircle, CheckCircle, ToggleLeft, ToggleRight } from "lucide-react"

const TeamManagementDashboard = () => {
  const [members, setMembers] = useState([
    // { id: 1, name: 'Alice', role: 'Recruiter', active: true, department: 'HR', location: 'New York', skills: ['Recruiting', 'Communication'], contact: 'alice@example.com', address: '123 Main St, City' },
    // { id: 2, name: 'Bob', role: 'Interviewer', active: true, department: 'Tech', location: 'San Francisco', skills: ['Interviewing', 'Technical Analysis'], contact: 'bob@example.com', address: '456 Second St, City' },
    // { id: 3, name: 'Charlie', role: 'Manager', active: true, department: 'Operations', location: 'London', skills: ['Leadership', 'Team Management'], contact: 'charlie@example.com', address: '789 Third St, City' },
    // { id: 4, name: 'David', role: 'HR Specialist', active: false, department: 'HR', location: 'Chicago', skills: ['Employee Relations', 'Conflict Resolution'], contact: 'david@example.com', address: '101 Fourth St, City' },
    // { id: 5, name: 'Eva', role: 'Software Engineer', active: true, department: 'Tech', location: 'Berlin', skills: ['JavaScript', 'React'], contact: 'eva@example.com', address: '202 Fifth St, City' },
    // { id: 6, name: 'Frank', role: 'Data Scientist', active: true, department: 'Tech', location: 'San Francisco', skills: ['Machine Learning', 'Data Analysis'], contact: 'frank@example.com', address: '303 Sixth St, City' },
    // { id: 7, name: 'Grace', role: 'UI/UX Designer', active: true, department: 'Design', location: 'New York', skills: ['Sketch', 'Figma'], contact: 'grace@example.com', address: '404 Seventh St, City' },
    // { id: 8, name: 'Hank', role: 'Developer', active: false, department: 'Tech', location: 'Sydney', skills: ['Python', 'Django'], contact: 'hank@example.com', address: '505 Eighth St, City' },
    // { id: 9, name: 'Ivy', role: 'QA Engineer', active: true, department: 'Tech', location: 'Austin', skills: ['Automated Testing', 'Manual Testing'], contact: 'ivy@example.com', address: '606 Ninth St, City' },
    // { id: 10, name: 'Jack', role: 'Team Lead', active: true, department: 'Tech', location: 'Paris', skills: ['Leadership', 'Scrum'], contact: 'jack@example.com', address: '707 Tenth St, City' },
    // { id: 11, name: 'Ivy John', role: 'Junior Engineer', active: false, department: 'Tech', location: 'London', skills: ['Automated Testing', 'Manual Testing'], contact: 'ivyjohn@example.com', address: '404 Second St, City' },
    // { id: 12, name: 'Jacky', role: 'Team Manager', active: true, department: 'Non-Tech', location: 'NewYork', skills: ['Leadership', 'Scrum'], contact: 'jacky@example.com', address: '101 Seven St, City' },

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
  const [filters, setFilters] = useState("")
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
  })
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false)
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false)
  const [editedMember, setEditedMember] = useState(null)
  const [filterStatus, setFilterStatus] = useState("All")

  const membersPerPage = 10

  const handleFilterChange = (e) => setFilters(e.target.value)
  const handleDepartmentChange = (e) => setSelectedDepartment(e.target.value)

  // const filteredMembers = members.filter((member) => {
  //   const isNameMatch = member.name.toLowerCase().includes(filters.toLowerCase());
  //   const isDepartmentMatch = selectedDepartment === 'all' || member.department.toLowerCase() === selectedDepartment.toLowerCase();
  //   const isSkillsMatch = member.skills.some(skill => skill.toLowerCase().includes(filters.toLowerCase()));
  //    filterStatus === 'All' || (member.active ? 'Active' : 'Inactive') === filterStatus;

  //   return (isNameMatch || isSkillsMatch) && isDepartmentMatch;
  // });
  // const filteredAdmins = members.filter(
  //   (member) =>

  //     (filterStatus === "All" || member.status === filterStatus)
  // );
  const filteredMembers = members.filter((member) => {
    // Search term can match name OR skills OR role OR location
    const searchTerm = filters.toLowerCase()
    const isNameMatch = member.name.toLowerCase().includes(searchTerm)
    const isRoleMatch = member.role.toLowerCase().includes(searchTerm)
    const isLocationMatch = member.location.toLowerCase().includes(searchTerm)
    const isSkillsMatch = member.skills.some((skill) => skill.toLowerCase().includes(searchTerm))

    // These filters should still be applied as restrictions
    const isDepartmentMatch =
      selectedDepartment === "all" || member.department.toLowerCase() === selectedDepartment.toLowerCase()

    const isStatusMatch =
      filterStatus === "All" ||
      (filterStatus === "Active" && member.active) ||
      (filterStatus === "Inactive" && !member.active)

    
    return (isNameMatch || isRoleMatch || isLocationMatch || isSkillsMatch) && isDepartmentMatch && isStatusMatch
  })

  const paginatedMembers = filteredMembers.slice((currentPage - 1) * membersPerPage, currentPage * membersPerPage)

  const handleDeleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id))
    toast.error("Member deleted!", {
      style: {
        background: "#f8d7da",
      },
    })
  }

  const handleUpdateMember = (updatedMember) => {
    setMembers(members.map((member) => (member.id === updatedMember.id ? updatedMember : member)))
  }

  const handleAddNewMember = () => {
    const newMemberObj = {
      id: members.length + 1,
      ...newMember,
      skills: newMember.skills.split(",").map((skill) => skill.trim()),
    }
    setMembers([...members, newMemberObj])
    setIsAddMemberModalOpen(false)
    toast.success("New member added!")
    setNewMember({ name: "", role: "", department: "", location: "", skills: "", contact: "", address: "" })
  }

  const handleEditMember = (member) => {
    setEditedMember(member)
    setIsEditMemberModalOpen(true)
  }

  const handleSaveEditedMember = () => {
    handleUpdateMember(editedMember)
    setIsEditMemberModalOpen(false)
    toast.success("Member details updated!")
  }

  const openDetailView = (item) => setViewingMember(item)
  const closeDetailView = () => setViewingMember(null)

  const indexOfLastMember = currentPage * membersPerPage
  const indexOfFirstMember = indexOfLastMember - membersPerPage
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Team Management" />
      <motion.div
        className="flex-1 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="w-full md:w-1/3 relative">
            <input
              type="text"
              value={filters}
              onChange={handleFilterChange}
              placeholder="Search..."
              className="w-full py-2 pl-10 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                setFilterStatus(filterStatus === "All" ? "Active" : filterStatus === "Active" ? "Inactive" : "All")
              }
              className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
            >
              {filterStatus === "Active" ? <ToggleLeft size={20} /> : <ToggleRight size={20} />}
              {filterStatus}
            </button>
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Departments</option>
                <option value="HR">HR</option>
                <option value="Tech">Tech</option>
                <option value="Design">Design</option>
                <option value="Operations">Operations</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto border rounded-lg border-gray-700">
          <table className="w-full table-auto border-collapse bg-gray-900 text-white rounded-lg shadow-md overflow-hidden">
            <thead className=" text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
                  Name
                </th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
                  Experience
                </th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
                  Location
                </th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
                  Department
                </th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm border-r border-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-left font-bold uppercase tracking-wider text-sm ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedMembers.map((member, index) => (
                <tr key={member.id} className="border-t border-gray-700 transition duration-300 hover:bg-gray-800 cursor-pointer">
                  <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{member.name}</td>
                  <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{member.experience}</td>
                  <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{member.location}</td>
                  <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">{member.department}</td>
                  <td className="px-6 py-4 text-gray-200 font-medium border-r border-gray-700">
                    <span
                      className={`px-2 py-1 flex items-center space-x-1 rounded text-xs ${member.active ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                    >
                      {member.active ? (
                        <>
                          <CheckCircle size={14} className="text-white" />
                          <span>Active</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={14} className="text-white" />
                          <span>Inactive</span>
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex items-center space-x-5">
                    <button
                      onClick={() => openDetailView(member)}
                      className="px-4 py-2 text-sm rounded bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                    >
                      <Eye className="text-white" size={18} />
                    </button>
                    <button
                      onClick={() => handleEditMember(member)}
                      className="px-4 py-2 text-sm rounded bg-purple-500 hover:bg-purple-600 text-white shadow-md"
                    >
                      <Edit className="text-white" size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteMember(member.id)}
                      className="px-4 py-2 text-sm rounded bg-red-500 hover:bg-red-600 text-white shadow-md"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6 w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-full ml-auto relative shadow-2xl overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <AiOutlineClose
                  className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-200"
                  size={24}
                  onClick={closeDetailView}
                />

                {/* Profile Section */}
                <div className="flex flex-col items-center space-y-4 mb-6">
                  <div className="h-20 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                    {viewingMember.name.charAt(0)}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-100">{viewingMember.name}</h2>
                </div>

                {/* Member Details */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Role:</p>
                    <span className="text-sm text-gray-200">{viewingMember.role}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Department:</p>
                    <span className="text-sm text-gray-200">{viewingMember.department}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Location:</p>
                    <span className="text-sm text-gray-200">{viewingMember.location}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Skills:</p>
                    <span className="text-sm text-gray-200">{viewingMember.skills.join(", ")}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Email:</p>
                    <span className="text-sm text-gray-200">{viewingMember.email}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Phone:</p>
                    <span className="text-sm text-gray-200">{viewingMember.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Experience:</p>
                    <span className="text-sm text-gray-200">{viewingMember.experience}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Salary:</p>
                    <span className="text-sm text-gray-200">{viewingMember.salary}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Position:</p>
                    <span className="text-sm text-gray-200">{viewingMember.position}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Status:</p>
                    <span className="text-sm text-gray-200">{viewingMember.status}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-400">Remark:</p>
                    <span className="text-sm text-gray-200">{viewingMember.remark}</span>
                  </div>
                </div>

                {/* Verification Documents */}
                <div className="border-t border-gray-600 pt-4">
                  <h3 className="text-lg font-semibold text-gray-100">Verification Documents</h3>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-300">Aadhar Card:</p>
                    <img
                      src={viewingMember.aadharCard || "/placeholder.svg"}
                      alt="Aadhar Card"
                      className="w-40 rounded shadow-md"
                    />
                    <p className="text-gray-300">PAN Card:</p>
                    <img
                      src={viewingMember.panCard || "/placeholder.svg"}
                      alt="PAN Card"
                      className="w-40 rounded shadow-md"
                    />
                  </div>
                </div>

                {/* Join Date & Release Date */}
                <div className="border-t border-gray-600 pt-4">
                  <h3 className="text-lg font-semibold text-gray-100">Employment Dates</h3>
                  <p className="text-gray-300">Join Date: {viewingMember.joinDate}</p>
                  <p className="text-gray-300">Release Date: {viewingMember.releaseDate || "N/A"}</p>
                </div>

                {/* Close Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300"
                    onClick={closeDetailView}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(filteredMembers.length / membersPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${currentPage === index + 1 ? "bg-purple-500 text-white shadow-md" : "bg-gray-700 text-gray-400 hover:bg-purple-600 hover:text-white"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </motion.div>
      <button
        onClick={() => setIsAddMemberModalOpen(true)}
        className="bg-blue-500 text-white p-4 rounded-full fixed bottom-10 right-10 z-50 "
      >
        <AiOutlinePlus size={24} />
      </button>

      {/* Add member modal to match the edit modal structure */}
      {isAddMemberModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 mt-16 p-7"
          onClick={() => setIsAddMemberModalOpen(false)}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-sm md:w-1/2 w-full overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">Add New Member</h2>
              <button onClick={() => setIsAddMemberModalOpen(false)} className="text-white text-2xl">
                <AiOutlineClose />
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleAddNewMember()
              }}
              className="space-y-4"
            >
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-100">Basic Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    placeholder="Name"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="text"
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    placeholder="Role"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newMember.department}
                    onChange={(e) => setNewMember({ ...newMember, department: e.target.value })}
                    placeholder="Department"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="text"
                    value={newMember.location}
                    onChange={(e) => setNewMember({ ...newMember, location: e.target.value })}
                    placeholder="Location"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>

                <input
                  type="text"
                  value={newMember.skills}
                  onChange={(e) => setNewMember({ ...newMember, skills: e.target.value })}
                  placeholder="Skills (comma-separated)"
                  className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                />
              </div>

              {/* Contact Information */}
              <div className="border-t border-gray-600 pt-4 space-y-4">
                <h3 className="text-lg font-semibold text-gray-100">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={newMember.email}
                    onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    placeholder="Email"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="text"
                    value={newMember.phone}
                    onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                    placeholder="Phone"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>

                <input
                  type="text"
                  value={newMember.address}
                  onChange={(e) => setNewMember({ ...newMember, address: e.target.value })}
                  placeholder="Address"
                  className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add Member
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Edit modal */}
      {isEditMemberModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 mt-16 p-7"
          onClick={() => setIsEditMemberModalOpen(false)}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-sm md:w-1/2 w-full overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">Edit Member Details</h2>
              <button onClick={() => setIsEditMemberModalOpen(false)} className="text-white text-2xl">
                <AiOutlineClose />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSaveEditedMember()
              }}
              className="space-y-4"
            >
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-100">Basic Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={editedMember.name}
                    onChange={(e) => setEditedMember({ ...editedMember, name: e.target.value })}
                    placeholder="Name"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="text"
                    value={editedMember.role}
                    onChange={(e) => setEditedMember({ ...editedMember, role: e.target.value })}
                    placeholder="Role"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={editedMember.department}
                    onChange={(e) => setEditedMember({ ...editedMember, department: e.target.value })}
                    placeholder="Department"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="text"
                    value={editedMember.location}
                    onChange={(e) => setEditedMember({ ...editedMember, location: e.target.value })}
                    placeholder="Location"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={editedMember.position}
                    onChange={(e) => setEditedMember({ ...editedMember, position: e.target.value })}
                    placeholder="Position"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="text"
                    value={editedMember.experience}
                    onChange={(e) => setEditedMember({ ...editedMember, experience: e.target.value })}
                    placeholder="Experience"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    value={editedMember.skills?.join(", ") || ""}
                    onChange={(e) => setEditedMember({ ...editedMember, skills: e.target.value.split(", ") })}
                    placeholder="Skills (comma-separated)"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-gray-600 pt-4 space-y-4">
                <h3 className="text-lg font-semibold text-gray-100">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={editedMember.email}
                    onChange={(e) => setEditedMember({ ...editedMember, email: e.target.value })}
                    placeholder="Email"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="text"
                    value={editedMember.phone}
                    onChange={(e) => setEditedMember({ ...editedMember, phone: e.target.value })}
                    placeholder="Phone"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>

                <input
                  type="text"
                  value={editedMember.address}
                  onChange={(e) => setEditedMember({ ...editedMember, address: e.target.value })}
                  placeholder="Address"
                  className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                />
              </div>

              
              <div className="border-t border-gray-600 pt-4 space-y-4">
                <h3 className="text-lg font-semibold text-gray-100">Employment Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={editedMember.salary}
                    onChange={(e) => setEditedMember({ ...editedMember, salary: e.target.value })}
                    placeholder="Salary"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <div className="flex items-center space-x-2">
                    <span className="text-white">Status:</span>
                    <select
                      value={editedMember.active ? "Active" : "Inactive"}
                      onChange={(e) =>
                        setEditedMember({
                          ...editedMember,
                          active: e.target.value === "Active",
                          status: e.target.value,
                        })
                      }
                      className="flex-1 px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    value={editedMember.joinDate || ""}
                    onChange={(e) => setEditedMember({ ...editedMember, joinDate: e.target.value })}
                    placeholder="Join Date"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="date"
                    value={editedMember.releaseDate || ""}
                    onChange={(e) => setEditedMember({ ...editedMember, releaseDate: e.target.value })}
                    placeholder="Release Date"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>

                <textarea
                  value={editedMember.remark || ""}
                  onChange={(e) => setEditedMember({ ...editedMember, remark: e.target.value })}
                  placeholder="Remarks"
                  rows={3}
                  className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                />
              </div>

              
              <div className="border-t border-gray-600 pt-4 space-y-4">
                <h3 className="text-lg font-semibold text-gray-100">Document Links</h3>

                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    value={editedMember.aadharCard || ""}
                    onChange={(e) => setEditedMember({ ...editedMember, aadharCard: e.target.value })}
                    placeholder="Aadhar Card URL"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />

                  <input
                    type="text"
                    value={editedMember.panCard || ""}
                    onChange={(e) => setEditedMember({ ...editedMember, panCard: e.target.value })}
                    placeholder="PAN Card URL"
                    className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-600"
                  />
                </div>
              </div>

              
              <div className="border-t border-gray-600 pt-4">
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default TeamManagementDashboard

