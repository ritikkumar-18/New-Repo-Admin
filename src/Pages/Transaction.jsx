// import React, { useState } from "react";
// import { FiCopy, FiRefreshCw } from "react-icons/fi";
// import { toast } from "react-hot-toast";
// import { motion } from "framer-motion";
// import Header from "../components/Common/Header";

// const Transaction = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [formData, setFormData] = useState({ name: "", mobile: "", amount: "", company: "", remark: "" });
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const generatePaymentLink = () => {
//     if (!formData.name || !formData.mobile || !formData.amount || !formData.company) {
//       toast.error("Please fill all required fields.");
//       return;
//     }

//     const paymentLink = `https://paymentgateway.com/pay/${Math.random().toString(36).substr(2, 9)}`;
//     const newTransaction = { id: transactions.length + 1, ...formData, paymentLink, status: "Pending" };
//     setTransactions((prev) => [...prev, newTransaction]);
//     setFormData({ name: "", mobile: "", amount: "", company: "", remark: "" });
//     toast.success("Payment link generated!");
//   };

//   const copyToClipboard = (link) => {
//     navigator.clipboard.writeText(link);
//     toast.success("Payment link copied!");
//   };

//   const refreshTransactions = () => {
//     setTransactions((prev) => prev.map((txn) => (Math.random() > 0.5 ? { ...txn, status: "Paid" } : txn)));
//     toast.success("Transactions updated!");
//   };

//   const filteredTransactions = transactions.filter(
//     (txn) =>
//       (filterStatus === "All" || txn.status === filterStatus) &&
//       txn.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex-1 overflow-auto bg-gray-900 text-white">
//       <Header title={"Transactions"} />
//       <div className="flex flex-col w-full h-screen p-2 overflow-auto">
//         <motion.div 
//           className="w-full max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//           initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}>
          
//           <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">Transaction Management</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {Object.keys(formData).map((key) => (
//               <input
//                 key={key}
//                 type={key === "amount" ? "number" : "text"}
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//                 className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//               />
//             ))}
//           </div>
//           <button 
//             onClick={generatePaymentLink} 
//             className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
//           >Generate Payment Link</button>
//         </motion.div>

//         <motion.div 
//           className="w-full max-w-5xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//           initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         >
          
//         <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
//         <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">Transactions</h3>

//         <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
//          <input 
//           type="text" 
//            placeholder="Search by Name" 
//           className="p-2 w-full sm:w-auto bg-gray-700 rounded-md border border-gray-600"
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
    
//     <select 
//       className="p-2 w-full sm:w-auto bg-gray-700 rounded-md border border-gray-600" 
//       onChange={(e) => setFilterStatus(e.target.value)}
//     >
//       <option value="All">All</option>
//       <option value="Pending">Pending</option>
//       <option value="Paid">Paid</option>
//     </select>

//     <button 
//       onClick={refreshTransactions} 
//       className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700 transition-all duration-300"
//     >
//       <FiRefreshCw />
//     </button>
//   </div>
// </div>


//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gray-700 text-white">
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Amount</th>
//                   <th className="p-3">Status</th>
//                   <th className="p-3">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredTransactions.map((txn) => (
//                   <tr key={txn.id} className="border-b border-gray-600 hover:bg-gray-700 transition-all">
//                     <td className="p-3">{txn.name}</td>
//                     <td className="p-3">${txn.amount}</td>
//                     <td className={`p-3 ${txn.status === "Paid" ? "text-green-400" : "text-yellow-400"}`}>{txn.status}</td>
//                     <td className="p-3">
//                       <button 
//                         onClick={() => copyToClipboard(txn.paymentLink)} 
//                         className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 transition-all duration-300"
//                       >Copy Link</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Transaction;


// import { useState, useRef } from "react"
// import {
//   FiCopy,
//   FiRefreshCw,
//   FiDownload,
//   FiFilter,
//   FiDollarSign,
//   FiUser,
//   FiPhone,
//   FiMessageSquare,
//   FiCheckCircle,
//   FiXCircle,
//   FiClock,
//   FiAlertCircle,
//   FiPrinter,
//   FiSend,
//   FiBarChart2,
//   FiSearch,
//   FiX,
//   FiArrowLeft,
//   FiArrowRight,
//   FiEdit,
// } from "react-icons/fi"
// import { toast, Toaster } from "react-hot-toast"
// import { motion, AnimatePresence } from "framer-motion"
// import Header from "../components/Common/Header"
// import { format, subDays, isAfter, isBefore, parseISO } from "date-fns"
// import { CSVLink } from "react-csv"
// import { useReactToPrint } from "react-to-print"
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts"

// // Mock data for initial transactions
// const MOCK_TRANSACTIONS = [
//   {
//     id: 1,
//     name: "John Doe",
//     mobile: "123-456-7890",
//     email: "john@example.com",
//     amount: "299.99",
//     company: "Acme Inc",
//     remark: "Monthly subscription",
//     paymentLink: "https://paymentgateway.com/pay/abc123def456",
//     status: "Paid",
//     paymentMethod: "Credit Card",
//     transactionId: "TXN78901234",
//     createdAt: subDays(new Date(), 2).toISOString(),
//     paidAt: subDays(new Date(), 1).toISOString(),
//     category: "Subscription",
//     currency: "USD",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     mobile: "987-654-3210",
//     email: "jane@example.com",
//     amount: "149.50",
//     company: "Tech Solutions",
//     remark: "One-time service",
//     paymentLink: "https://paymentgateway.com/pay/ghi789jkl012",
//     status: "Pending",
//     paymentMethod: null,
//     transactionId: null,
//     createdAt: subDays(new Date(), 3).toISOString(),
//     paidAt: null,
//     category: "Service",
//     currency: "USD",
//   },
//   {
//     id: 3,
//     name: "Robert Johnson",
//     mobile: "555-123-4567",
//     email: "robert@example.com",
//     amount: "599.99",
//     company: "Global Enterprises",
//     remark: "Premium package",
//     paymentLink: "https://paymentgateway.com/pay/mno345pqr678",
//     status: "Failed",
//     paymentMethod: "PayPal",
//     transactionId: "TXN45678901",
//     createdAt: subDays(new Date(), 5).toISOString(),
//     paidAt: null,
//     category: "Package",
//     currency: "USD",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     mobile: "333-888-7777",
//     email: "emily@example.com",
//     amount: "79.99",
//     company: "Digital Services",
//     remark: "Monthly plan",
//     paymentLink: "https://paymentgateway.com/pay/stu901vwx234",
//     status: "Paid",
//     paymentMethod: "Bank Transfer",
//     transactionId: "TXN12345678",
//     createdAt: subDays(new Date(), 10).toISOString(),
//     paidAt: subDays(new Date(), 9).toISOString(),
//     category: "Subscription",
//     currency: "USD",
//   },
//   {
//     id: 5,
//     name: "Michael Wilson",
//     mobile: "222-999-8888",
//     email: "michael@example.com",
//     amount: "1299.99",
//     company: "Enterprise Solutions",
//     remark: "Annual contract",
//     paymentLink: "https://paymentgateway.com/pay/yza567bcd890",
//     status: "Pending",
//     paymentMethod: null,
//     transactionId: null,
//     createdAt: subDays(new Date(), 1).toISOString(),
//     paidAt: null,
//     category: "Contract",
//     currency: "USD",
//   },
// ]

// // Transaction status options
// const STATUS_OPTIONS = ["All", "Paid", "Pending", "Failed", "Refunded", "Expired"]

// // Payment method options
// const PAYMENT_METHODS = ["Credit Card", "Debit Card", "PayPal", "Bank Transfer", "Crypto", "Mobile Payment"]

// // Category options
// const CATEGORIES = ["All", "Subscription", "Service", "Package", "Contract", "One-time", "Other"]

// // Currency options
// const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "INR"]

// // Date range options
// const DATE_RANGES = [
//   { label: "Today", value: "today" },
//   { label: "Yesterday", value: "yesterday" },
//   { label: "Last 7 days", value: "week" },
//   { label: "Last 30 days", value: "month" },
//   { label: "Custom", value: "custom" },
// ]

// const Transaction = () => {
//   // State management
//   const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS)
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     amount: "",
//     company: "",
//     remark: "",
//     category: "Service",
//     currency: "USD",
//   })
//   const [searchQuery, setSearchQuery] = useState("")
//   const [filterStatus, setFilterStatus] = useState("All")
//   const [filterCategory, setFilterCategory] = useState("All")
//   const [filterDateRange, setFilterDateRange] = useState("month")
//   const [customDateRange, setCustomDateRange] = useState({
//     startDate: format(subDays(new Date(), 30), "yyyy-MM-dd"),
//     endDate: format(new Date(), "yyyy-MM-dd"),
//   })
//   const [sortField, setSortField] = useState("createdAt")
//   const [sortDirection, setSortDirection] = useState("desc")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage] = useState(5)
//   const [viewTransaction, setViewTransaction] = useState(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [showAnalytics, setShowAnalytics] = useState(false)
//   const [showForm, setShowForm] = useState(true)
//   const [isEditMode, setIsEditMode] = useState(false)
//   const [sendReceiptEmail, setSendReceiptEmail] = useState("")

//   // Refs
//   const receiptRef = useRef(null)

//   // Handle print receipt
//   const handlePrint = useReactToPrint({
//     content: () => receiptRef.current,
//     documentTitle: `Receipt-${viewTransaction?.transactionId || viewTransaction?.id}`,
//     onAfterPrint: () => toast.success("Receipt printed successfully!"),
//   })

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   // Generate payment link
//   const generatePaymentLink = () => {
//     if (!formData.name || !formData.mobile || !formData.amount || !formData.company) {
//       toast.error("Please fill all required fields.")
//       return
//     }

//     const paymentLink = `https://paymentgateway.com/pay/${Math.random().toString(36).substr(2, 9)}`
//     const newTransaction = {
//       id: transactions.length + 1,
//       ...formData,
//       paymentLink,
//       status: "Pending",
//       paymentMethod: null,
//       transactionId: null,
//       createdAt: new Date().toISOString(),
//       paidAt: null,
//     }

//     setTransactions((prev) => [newTransaction, ...prev])
//     setFormData({
//       name: "",
//       mobile: "",
//       email: "",
//       amount: "",
//       company: "",
//       remark: "",
//       category: "Service",
//       currency: "USD",
//     })
//     toast.success("Payment link generated!")
//   }

//   // Copy payment link to clipboard
//   const copyToClipboard = (link) => {
//     navigator.clipboard.writeText(link)
//     toast.success("Payment link copied!")
//   }

//   // Update transaction status
//   const updateTransactionStatus = (id, newStatus) => {
//     setTransactions((prev) =>
//       prev.map((txn) => {
//         if (txn.id === id) {
//           const updatedTxn = {
//             ...txn,
//             status: newStatus,
//             paidAt: newStatus === "Paid" ? new Date().toISOString() : txn.paidAt,
//             paymentMethod: newStatus === "Paid" ? txn.paymentMethod || PAYMENT_METHODS[0] : txn.paymentMethod,
//             transactionId:
//               newStatus === "Paid"
//                 ? txn.transactionId || `TXN${Math.floor(Math.random() * 100000000)}`
//                 : txn.transactionId,
//           }

//           // If we're viewing this transaction, update the view
//           if (viewTransaction && viewTransaction.id === id) {
//             setViewTransaction(updatedTxn)
//           }

//           return updatedTxn
//         }
//         return txn
//       }),
//     )
//     toast.success(`Transaction status updated to ${newStatus}!`)
//   }

//   // Refresh transactions (simulate status updates)
//   const refreshTransactions = () => {
//     setTransactions((prev) =>
//       prev.map((txn) => {
//         if (txn.status === "Pending" && Math.random() > 0.6) {
//           const newStatus = Math.random() > 0.8 ? "Failed" : "Paid"
//           return {
//             ...txn,
//             status: newStatus,
//             paidAt: newStatus === "Paid" ? new Date().toISOString() : txn.paidAt,
//             paymentMethod:
//               newStatus === "Paid"
//                 ? PAYMENT_METHODS[Math.floor(Math.random() * PAYMENT_METHODS.length)]
//                 : txn.paymentMethod,
//             transactionId: newStatus === "Paid" ? `TXN${Math.floor(Math.random() * 100000000)}` : txn.transactionId,
//           }
//         }
//         return txn
//       }),
//     )
//     toast.success("Transactions updated!")
//   }

//   // Send receipt via email
//   const handleSendReceipt = () => {
//     if (!sendReceiptEmail) {
//       toast.error("Please enter an email address")
//       return
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(sendReceiptEmail)) {
//       toast.error("Please enter a valid email address")
//       return
//     }

//     toast.success(`Receipt sent to ${sendReceiptEmail}`)
//     setSendReceiptEmail("")
//   }

//   // Edit transaction
//   const handleEditTransaction = () => {
//     if (!viewTransaction) return

//     setFormData({
//       name: viewTransaction.name,
//       mobile: viewTransaction.mobile,
//       email: viewTransaction.email || "",
//       amount: viewTransaction.amount,
//       company: viewTransaction.company,
//       remark: viewTransaction.remark || "",
//       category: viewTransaction.category,
//       currency: viewTransaction.currency,
//     })

//     setIsEditMode(true)
//     setViewTransaction(null)
//     setShowForm(true)
//   }

//   // Save edited transaction
//   const saveEditedTransaction = () => {
//     if (!formData.name || !formData.mobile || !formData.amount || !formData.company) {
//       toast.error("Please fill all required fields.")
//       return
//     }

//     setTransactions((prev) =>
//       prev.map((txn) => {
//         if (txn.id === viewTransaction.id) {
//           return {
//             ...txn,
//             name: formData.name,
//             mobile: formData.mobile,
//             email: formData.email,
//             amount: formData.amount,
//             company: formData.company,
//             remark: formData.remark,
//             category: formData.category,
//             currency: formData.currency,
//           }
//         }
//         return txn
//       }),
//     )

//     setFormData({
//       name: "",
//       mobile: "",
//       email: "",
//       amount: "",
//       company: "",
//       remark: "",
//       category: "Service",
//       currency: "USD",
//     })

//     setIsEditMode(false)
//     toast.success("Transaction updated successfully!")
//   }

//   // Cancel edit mode
//   const cancelEdit = () => {
//     setFormData({
//       name: "",
//       mobile: "",
//       email: "",
//       amount: "",
//       company: "",
//       remark: "",
//       category: "Service",
//       currency: "USD",
//     })
//     setIsEditMode(false)
//   }

//   // Filter transactions based on search, status, category, and date range
//   const getFilteredTransactions = () => {
//     return transactions.filter((txn) => {
//       // Search query filter
//       const matchesSearch =
//         txn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         txn.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         (txn.transactionId && txn.transactionId.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (txn.email && txn.email.toLowerCase().includes(searchQuery.toLowerCase()))

      
//       const matchesStatus = filterStatus === "All" || txn.status === filterStatus

//       // Category filter
//       const matchesCategory = filterCategory === "All" || txn.category === filterCategory

//       // Date range filter
//       let matchesDateRange = true
//       const txnDate = parseISO(txn.createdAt)

//       if (filterDateRange === "today") {
//         const today = new Date()
//         today.setHours(0, 0, 0, 0)
//         const tomorrow = new Date(today)
//         tomorrow.setDate(tomorrow.getDate() + 1)
//         matchesDateRange = isAfter(txnDate, today) && isBefore(txnDate, tomorrow)
//       } else if (filterDateRange === "yesterday") {
//         const yesterday = new Date()
//         yesterday.setDate(yesterday.getDate() - 1)
//         yesterday.setHours(0, 0, 0, 0)
//         const today = new Date()
//         today.setHours(0, 0, 0, 0)
//         matchesDateRange = isAfter(txnDate, yesterday) && isBefore(txnDate, today)
//       } else if (filterDateRange === "week") {
//         const weekAgo = subDays(new Date(), 7)
//         matchesDateRange = isAfter(txnDate, weekAgo)
//       } else if (filterDateRange === "month") {
//         const monthAgo = subDays(new Date(), 30)
//         matchesDateRange = isAfter(txnDate, monthAgo)
//       } else if (filterDateRange === "custom") {
//         const startDate = parseISO(`${customDateRange.startDate}T00:00:00`)
//         const endDate = parseISO(`${customDateRange.endDate}T23:59:59`)
//         matchesDateRange = isAfter(txnDate, startDate) && isBefore(txnDate, endDate)
//       }

//       return matchesSearch && matchesStatus && matchesCategory && matchesDateRange
//     })
//   }

//   // Sort transactions
//   const getSortedTransactions = () => {
//     const filtered = getFilteredTransactions()

//     return filtered.sort((a, b) => {
//       let aValue = a[sortField]
//       let bValue = b[sortField]

//       // Handle dates
//       if (sortField === "createdAt" || sortField === "paidAt") {
//         aValue = aValue ? new Date(aValue).getTime() : 0
//         bValue = bValue ? new Date(bValue).getTime() : 0
//       }

//       // Handle numbers
//       if (sortField === "amount") {
//         aValue = Number.parseFloat(aValue)
//         bValue = Number.parseFloat(bValue)
//       }

//       if (sortDirection === "asc") {
//         return aValue > bValue ? 1 : -1
//       } else {
//         return aValue < bValue ? 1 : -1
//       }
//     })
//   }

//   // Pagination
//   const paginatedTransactions = () => {
//     const sorted = getSortedTransactions()
//     const startIndex = (currentPage - 1) * itemsPerPage
//     return sorted.slice(startIndex, startIndex + itemsPerPage)
//   }

//   // Toggle sort direction
//   const toggleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc")
//     } else {
//       setSortField(field)
//       setSortDirection("desc")
//     }
//   }

//   // Prepare data for CSV export
//   const csvData = [
//     [
//       "ID",
//       "Name",
//       "Mobile",
//       "Email",
//       "Amount",
//       "Currency",
//       "Company",
//       "Category",
//       "Status",
//       "Created Date",
//       "Paid Date",
//       "Payment Method",
//       "Transaction ID",
//       "Remark",
//     ],
//     ...getFilteredTransactions().map((txn) => [
//       txn.id,
//       txn.name,
//       txn.mobile,
//       txn.email || "",
//       txn.amount,
//       txn.currency,
//       txn.company,
//       txn.category,
//       txn.status,
//       format(new Date(txn.createdAt), "yyyy-MM-dd HH:mm"),
//       txn.paidAt ? format(new Date(txn.paidAt), "yyyy-MM-dd HH:mm") : "",
//       txn.paymentMethod || "",
//       txn.transactionId || "",
//       txn.remark || "",
//     ]),
//   ]

//   // Prepare analytics data
//   const getAnalyticsData = () => {
//     const filtered = getFilteredTransactions()

//     // Status distribution
//     const statusData = STATUS_OPTIONS.filter((status) => status !== "All")
//       .map((status) => {
//         const count = filtered.filter((txn) => txn.status === status).length
//         return { name: status, value: count }
//       })
//       .filter((item) => item.value > 0)

//     // Category distribution
//     const categoryData = CATEGORIES.filter((cat) => cat !== "All")
//       .map((category) => {
//         const count = filtered.filter((txn) => txn.category === category).length
//         return { name: category, value: count }
//       })
//       .filter((item) => item.value > 0)

//     // Daily transactions (last 7 days)
//     const dailyData = []
//     for (let i = 6; i >= 0; i--) {
//       const date = subDays(new Date(), i)
//       const dateStr = format(date, "MMM dd")
//       const txns = filtered.filter((txn) => {
//         const txnDate = new Date(txn.createdAt)
//         return (
//           txnDate.getDate() === date.getDate() &&
//           txnDate.getMonth() === date.getMonth() &&
//           txnDate.getFullYear() === date.getFullYear()
//         )
//       })

//       const totalAmount = txns.reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
//       const paidAmount = txns
//         .filter((txn) => txn.status === "Paid")
//         .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)

//       dailyData.push({
//         name: dateStr,
//         total: totalAmount.toFixed(2),
//         paid: paidAmount.toFixed(2),
//       })
//     }

//     return { statusData, categoryData, dailyData }
//   }

//   // Analytics data
//   const analyticsData = getAnalyticsData()

//   // Colors for pie charts
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#FF6B6B"]

//   // Calculate total and statistics
//   const stats = (() => {
//     const filtered = getFilteredTransactions()
//     const total = filtered.reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
//     const paid = filtered
//       .filter((txn) => txn.status === "Paid")
//       .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
//     const pending = filtered
//       .filter((txn) => txn.status === "Pending")
//       .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)

//     return {
//       total: total.toFixed(2),
//       paid: paid.toFixed(2),
//       pending: pending.toFixed(2),
//       count: filtered.length,
//       paidCount: filtered.filter((txn) => txn.status === "Paid").length,
//       pendingCount: filtered.filter((txn) => txn.status === "Pending").length,
//       failedCount: filtered.filter((txn) => txn.status === "Failed").length,
//     }
//   })()

//   return (
//     <div className="flex-1 overflow-auto bg-gray-900 text-white min-h-screen">
//       <Header title={"Transactions"} />
      

//       <div className="flex flex-col w-full p-4 md:p-6 overflow-auto">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
//           <motion.div
//             className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-lg shadow-lg border border-blue-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-blue-300 text-sm">Total Amount</p>
//                 <h3 className="text-2xl font-bold">${stats.total}</h3>
//                 <p className="text-blue-300 text-sm">{stats.count} transactions</p>
//               </div>
//               <div className="bg-blue-700 p-3 rounded-full">
//                 <FiDollarSign size={24} className="text-blue-200" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="bg-gradient-to-r from-green-900 to-green-800 p-4 rounded-lg shadow-lg border border-green-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-green-300 text-sm">Paid Amount</p>
//                 <h3 className="text-2xl font-bold">${stats.paid}</h3>
//                 <p className="text-green-300 text-sm">{stats.paidCount} transactions</p>
//               </div>
//               <div className="bg-green-700 p-3 rounded-full">
//                 <FiCheckCircle size={24} className="text-green-200" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="bg-gradient-to-r from-yellow-900 to-yellow-800 p-4 rounded-lg shadow-lg border border-yellow-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-yellow-300 text-sm">Pending Amount</p>
//                 <h3 className="text-2xl font-bold">${stats.pending}</h3>
//                 <p className="text-yellow-300 text-sm">{stats.pendingCount} transactions</p>
//               </div>
//               <div className="bg-yellow-700 p-3 rounded-full">
//                 <FiClock size={24} className="text-yellow-200" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="bg-gradient-to-r from-red-900 to-red-800 p-4 rounded-lg shadow-lg border border-red-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-red-300 text-sm">Failed Transactions</p>
//                 <h3 className="text-2xl font-bold">{stats.failedCount}</h3>
//                 <p className="text-red-300 text-sm">Need attention</p>
//               </div>
//               <div className="bg-red-700 p-3 rounded-full">
//                 <FiXCircle size={24} className="text-red-200" />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap gap-3 mb-6">
//           <motion.button
//             onClick={() => setShowForm(!showForm)}
//             className={`px-4 py-2 rounded-lg flex items-center gap-2 ${showForm ? "bg-gray-700 text-gray-300" : "bg-blue-600 text-white"}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {showForm ? "Hide Form" : "New Transaction"}
//           </motion.button>

//           <motion.button
//             onClick={() => setShowFilters(!showFilters)}
//             className={`px-4 py-2 rounded-lg flex items-center gap-2 ${showFilters ? "bg-gray-700 text-gray-300" : "bg-purple-600 text-white"}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FiFilter size={18} />
//             {showFilters ? "Hide Filters" : "Show Filters"}
//           </motion.button>

//           <motion.button
//             onClick={() => setShowAnalytics(!showAnalytics)}
//             className={`px-4 py-2 rounded-lg flex items-center gap-2 ${showAnalytics ? "bg-gray-700 text-gray-300" : "bg-green-600 text-white"}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FiBarChart2 size={18} />
//             {showAnalytics ? "Hide Analytics" : "Show Analytics"}
//           </motion.button>

//           <motion.button
//             onClick={refreshTransactions}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FiRefreshCw size={18} />
//             Refresh Status
//           </motion.button>

//           <CSVLink
//             data={csvData}
//             filename={`transactions-${format(new Date(), "yyyy-MM-dd")}.csv`}
//             className="px-4 py-2 bg-teal-600 text-white rounded-lg flex items-center gap-2"
//           >
//             <FiDownload size={18} />
//             Export CSV
//           </CSVLink>
//         </div>

//         {/* Transaction Form */}
//         <AnimatePresence>
//           {showForm && (
//             <motion.div
//               className="w-full mb-6 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-xl font-bold mb-4 text-blue-400">
//                 {isEditMode ? "Edit Transaction" : "Create New Transaction"}
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Name*</label>
//                   <div className="relative">
//                     <FiUser className="absolute left-3 top-3 text-gray-500" />
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Customer Name"
//                       className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Mobile*</label>
//                   <div className="relative">
//                     <FiPhone className="absolute left-3 top-3 text-gray-500" />
//                     <input
//                       type="text"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       placeholder="Phone Number"
//                       className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Email</label>
//                   <div className="relative">
//                     <FiMessageSquare className="absolute left-3 top-3 text-gray-500" />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Email Address"
//                       className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Amount*</label>
//                   <div className="relative">
//                     <FiDollarSign className="absolute left-3 top-3 text-gray-500" />
//                     <input
//                       type="number"
//                       name="amount"
//                       value={formData.amount}
//                       onChange={handleChange}
//                       placeholder="Payment Amount"
//                       className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Currency</label>
//                   <select
//                     name="currency"
//                     value={formData.currency}
//                     onChange={handleChange}
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                   >
//                     {CURRENCIES.map((currency) => (
//                       <option key={currency} value={currency}>
//                         {currency}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Category</label>
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                   >
//                     {CATEGORIES.filter((cat) => cat !== "All").map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Company*</label>
//                   <div className="relative">
//                     <FiUser className="absolute left-3 top-3 text-gray-500" />
//                     <input
//                       type="text"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       placeholder="Company Name"
//                       className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-1 md:col-span-2">
//                   <label className="text-sm text-gray-400">Remark</label>
//                   <textarea
//                     name="remark"
//                     value={formData.remark}
//                     onChange={handleChange}
//                     placeholder="Additional Notes"
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 min-h-[80px]"
//                   />
//                 </div>
//               </div>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 {isEditMode ? (
//                   <>
//                     <button
//                       onClick={saveEditedTransaction}
//                       className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-all duration-300"
//                     >
//                       Save Changes
//                     </button>
//                     <button
//                       onClick={cancelEdit}
//                       className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-all duration-300"
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     onClick={generatePaymentLink}
//                     className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
//                   >
//                     Generate Payment Link
//                   </button>
//                 )}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Filters */}
//         <AnimatePresence>
//           {showFilters && (
//             <motion.div
//               className="w-full mb-6 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-xl font-bold mb-4 text-purple-400">Advanced Filters</h2>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Status</label>
//                   <select
//                     value={filterStatus}
//                     onChange={(e) => setFilterStatus(e.target.value)}
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                   >
//                     {STATUS_OPTIONS.map((status) => (
//                       <option key={status} value={status}>
//                         {status}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Category</label>
//                   <select
//                     value={filterCategory}
//                     onChange={(e) => setFilterCategory(e.target.value)}
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                   >
//                     {CATEGORIES.map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Date Range</label>
//                   <select
//                     value={filterDateRange}
//                     onChange={(e) => setFilterDateRange(e.target.value)}
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                   >
//                     {DATE_RANGES.map((range) => (
//                       <option key={range.value} value={range.value}>
//                         {range.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {filterDateRange === "custom" && (
//                   <>
//                     <div className="space-y-1">
//                       <label className="text-sm text-gray-400">Start Date</label>
//                       <input
//                         type="date"
//                         value={customDateRange.startDate}
//                         onChange={(e) => setCustomDateRange({ ...customDateRange, startDate: e.target.value })}
//                         className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                       />
//                     </div>

//                     <div className="space-y-1">
//                       <label className="text-sm text-gray-400">End Date</label>
//                       <input
//                         type="date"
//                         value={customDateRange.endDate}
//                         onChange={(e) => setCustomDateRange({ ...customDateRange, endDate: e.target.value })}
//                         className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                       />
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="mt-4 flex items-center">
//                 <div className="relative flex-grow">
//                   <FiSearch className="absolute left-3 top-3 text-gray-500" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search by name, company, or transaction ID"
//                     className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                   />
//                   {searchQuery && (
//                     <button
//                       onClick={() => setSearchQuery("")}
//                       className="absolute right-3 top-3 text-gray-400 hover:text-white"
//                     >
//                       <FiX size={16} />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Analytics */}
//         <AnimatePresence>
//           {showAnalytics && (
//             <motion.div
//               className="w-full mb-6 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-xl font-bold mb-4 text-green-400">Transaction Analytics</h2>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Daily Transactions Chart */}
//                 <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                   <h3 className="text-lg font-semibold mb-4 text-gray-300">Daily Transactions (Last 7 Days)</h3>
//                   <div className="h-64">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart data={analyticsData.dailyData}>
//                         <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//                         <XAxis dataKey="name" stroke="#999" />
//                         <YAxis stroke="#999" />
//                         <Tooltip
//                           contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
//                           labelStyle={{ color: "#fff" }}
//                         />
//                         <Legend />
//                         <Bar dataKey="total" name="Total Amount" fill="#3B82F6" />
//                         <Bar dataKey="paid" name="Paid Amount" fill="#10B981" />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>

//                 {/* Status and Category Distribution */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {/* Status Distribution */}
//                   <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                     <h3 className="text-lg font-semibold mb-4 text-gray-300">Status Distribution</h3>
//                     <div className="h-64">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <PieChart>
//                           <Pie
//                             data={analyticsData.statusData}
//                             cx="50%"
//                             cy="50%"
//                             labelLine={false}
//                             outerRadius={80}
//                             fill="#8884d8"
//                             dataKey="value"
//                             label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                           >
//                             {analyticsData.statusData.map((entry, index) => (
//                               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                             ))}
//                           </Pie>
//                           <Tooltip
//                             contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
//                             labelStyle={{ color: "#fff" }}
//                           />
//                         </PieChart>
//                       </ResponsiveContainer>
//                     </div>
//                   </div>

//                   {/* Category Distribution */}
//                   <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                     <h3 className="text-lg font-semibold mb-4 text-gray-300">Category Distribution</h3>
//                     <div className="h-64">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <PieChart>
//                           <Pie
//                             data={analyticsData.categoryData}
//                             cx="50%"
//                             cy="50%"
//                             labelLine={false}
//                             outerRadius={80}
//                             fill="#8884d8"
//                             dataKey="value"
//                             label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                           >
//                             {analyticsData.categoryData.map((entry, index) => (
//                               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                             ))}
//                           </Pie>
//                           <Tooltip
//                             contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
//                             labelStyle={{ color: "#fff" }}
//                           />
//                         </PieChart>
//                       </ResponsiveContainer>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Transactions List */}
//         <div className="w-full bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
//           <div className="p-4 border-b border-gray-700 flex justify-between items-center">
//             <h3 className="text-xl font-semibold text-blue-400">Transaction List</h3>
//             <p className="text-gray-400 text-sm">
//               Showing {paginatedTransactions().length} of {getFilteredTransactions().length} transactions
//             </p>
//           </div>

//           {getFilteredTransactions().length === 0 ? (
//             <div className="p-8 text-center text-gray-400">
//               <FiAlertCircle size={48} className="mx-auto mb-4 text-gray-500" />
//               <p>No transactions found matching your criteria.</p>
//               <p className="text-sm mt-2">Try adjusting your filters or create a new transaction.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//               {paginatedTransactions().map((txn) => (
//                 <motion.div
//                   key={txn.id}
//                   className={`bg-gray-900 rounded-lg overflow-hidden border ${
//                     txn.status === "Paid"
//                       ? "border-green-700"
//                       : txn.status === "Pending"
//                         ? "border-yellow-700"
//                         : txn.status === "Failed"
//                           ? "border-red-700"
//                           : "border-gray-700"
//                   } hover:shadow-lg transition-all duration-300 cursor-pointer`}
//                   whileHover={{ scale: 1.02 }}
//                   onClick={() => setViewTransaction(txn)}
//                 >
//                   <div
//                     className={`p-3 flex justify-between items-center ${
//                       txn.status === "Paid"
//                         ? "bg-green-900/30"
//                         : txn.status === "Pending"
//                           ? "bg-yellow-900/30"
//                           : txn.status === "Failed"
//                             ? "bg-red-900/30"
//                             : "bg-gray-800"
//                     }`}
//                   >
//                     <div className="flex items-center gap-2">
//                       <div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                           txn.status === "Paid"
//                             ? "bg-green-700"
//                             : txn.status === "Pending"
//                               ? "bg-yellow-700"
//                               : txn.status === "Failed"
//                                 ? "bg-red-700"
//                                 : "bg-gray-700"
//                         }`}
//                       >
//                         {txn.status === "Paid" ? (
//                           <FiCheckCircle size={16} />
//                         ) : txn.status === "Pending" ? (
//                           <FiClock size={16} />
//                         ) : (
//                           <FiXCircle size={16} />
//                         )}
//                       </div>
//                       <div>
//                         <p className="font-medium">{txn.name}</p>
//                         <p className="text-xs text-gray-400">{format(new Date(txn.createdAt), "MMM dd, yyyy")}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-bold">
//                         {txn.currency} {txn.amount}
//                       </p>
//                       <p
//                         className={`text-xs ${
//                           txn.status === "Paid"
//                             ? "text-green-400"
//                             : txn.status === "Pending"
//                               ? "text-yellow-400"
//                               : txn.status === "Failed"
//                                 ? "text-red-400"
//                                 : "text-gray-400"
//                         }`}
//                       >
//                         {txn.status}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="p-3 space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-400">Company:</span>
//                       <span className="text-gray-300">{txn.company}</span>
//                     </div>

//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-400">Category:</span>
//                       <span className="text-gray-300">{txn.category}</span>
//                     </div>

//                     {txn.transactionId && (
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-400">Transaction ID:</span>
//                         <span className="text-gray-300">{txn.transactionId}</span>
//                       </div>
//                     )}

//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-400">Mobile:</span>
//                       <span className="text-gray-300">{txn.mobile}</span>
//                     </div>
//                   </div>

//                   <div className="p-3 border-t border-gray-800 flex justify-between items-center">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         copyToClipboard(txn.paymentLink)
//                       }}
//                       className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
//                     >
//                       <FiCopy size={14} /> Copy Link
//                     </button>

//                     {txn.status === "Pending" && (
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation()
//                           updateTransactionStatus(txn.id, "Paid")
//                         }}
//                         className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm"
//                       >
//                         <FiCheckCircle size={14} /> Mark Paid
//                       </button>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {getFilteredTransactions().length > itemsPerPage && (
//             <div className="p-4 border-t border-gray-700 flex justify-center">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                   disabled={currentPage === 1}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === 1
//                       ? "bg-gray-700 text-gray-500 cursor-not-allowed"
//                       : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                   }`}
//                 >
//                   <FiArrowLeft size={16} />
//                 </button>

//                 {Array.from(
//                   { length: Math.min(5, Math.ceil(getFilteredTransactions().length / itemsPerPage)) },
//                   (_, i) => {
//                     // Calculate page numbers to show (centered around current page)
//                     const totalPages = Math.ceil(getFilteredTransactions().length / itemsPerPage)
//                     let startPage = Math.max(1, currentPage - 2)
//                     const endPage = Math.min(startPage + 4, totalPages)

//                     if (endPage - startPage < 4) {
//                       startPage = Math.max(1, endPage - 4)
//                     }

//                     const pageNum = startPage + i
//                     if (pageNum > totalPages) return null

//                     return (
//                       <button
//                         key={pageNum}
//                         onClick={() => setCurrentPage(pageNum)}
//                         className={`px-3 py-1 rounded ${
//                           currentPage === pageNum
//                             ? "bg-blue-600 text-white"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                       >
//                         {pageNum}
//                       </button>
//                     )
//                   },
//                 )}

//                 <button
//                   onClick={() =>
//                     setCurrentPage(
//                       Math.min(Math.ceil(getFilteredTransactions().length / itemsPerPage), currentPage + 1),
//                     )
//                   }
//                   disabled={currentPage === Math.ceil(getFilteredTransactions().length / itemsPerPage)}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === Math.ceil(getFilteredTransactions().length / itemsPerPage)
//                       ? "bg-gray-700 text-gray-500 cursor-not-allowed"
//                       : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                   }`}
//                 >
//                   <FiArrowRight size={16} />
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Transaction Detail Modal */}
//       <AnimatePresence>
//         {viewTransaction && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setViewTransaction(null)}
//           >
//             <motion.div
//               className="bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
//                 <h3 className="text-xl font-semibold text-white">Transaction Details</h3>
//                 <button onClick={() => setViewTransaction(null)} className="text-gray-400 hover:text-white">
//                   <FiX size={24} />
//                 </button>
//               </div>

//               <div className="p-6 space-y-6">
//                 {/* Transaction Status */}
//                 <div
//                   className={`p-4 rounded-lg ${
//                     viewTransaction.status === "Paid"
//                       ? "bg-green-900/30 border border-green-700"
//                       : viewTransaction.status === "Pending"
//                         ? "bg-yellow-900/30 border border-yellow-700"
//                         : viewTransaction.status === "Failed"
//                           ? "bg-red-900/30 border border-red-700"
//                           : "bg-gray-700"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                         viewTransaction.status === "Paid"
//                           ? "bg-green-700"
//                           : viewTransaction.status === "Pending"
//                             ? "bg-yellow-700"
//                             : viewTransaction.status === "Failed"
//                               ? "bg-red-700"
//                               : "bg-gray-600"
//                       }`}
//                     >
//                       {viewTransaction.status === "Paid" ? (
//                         <FiCheckCircle size={24} />
//                       ) : viewTransaction.status === "Pending" ? (
//                         <FiClock size={24} />
//                       ) : (
//                         <FiXCircle size={24} />
//                       )}
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-semibold">
//                         {viewTransaction.status === "Paid"
//                           ? "Payment Completed"
//                           : viewTransaction.status === "Pending"
//                             ? "Payment Pending"
//                             : viewTransaction.status === "Failed"
//                               ? "Payment Failed"
//                               : viewTransaction.status}
//                       </h4>
//                       <p className="text-sm text-gray-300">
//                         {viewTransaction.status === "Paid"
//                           ? `Paid on ${format(new Date(viewTransaction.paidAt), "MMMM dd, yyyy 'at' h:mm a")}`
//                           : viewTransaction.status === "Pending"
//                             ? `Created on ${format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy 'at' h:mm a")}`
//                             : `Last updated on ${format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy 'at' h:mm a")}`}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Transaction Details */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-4">
//                     <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">Customer Information</h4>

//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Name:</span>
//                         <span className="text-white font-medium">{viewTransaction.name}</span>
//                       </div>

//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Mobile:</span>
//                         <span className="text-white">{viewTransaction.mobile}</span>
//                       </div>

//                       {viewTransaction.email && (
//                         <div className="flex justify-between">
//                           <span className="text-gray-400">Email:</span>
//                           <span className="text-white">{viewTransaction.email}</span>
//                         </div>
//                       )}

//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Company:</span>
//                         <span className="text-white">{viewTransaction.company}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">Payment Details</h4>

//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Amount:</span>
//                         <span className="text-white font-bold">
//                           {viewTransaction.currency} {viewTransaction.amount}
//                         </span>
//                       </div>

//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Category:</span>
//                         <span className="text-white">{viewTransaction.category}</span>
//                       </div>

//                       {viewTransaction.paymentMethod && (
//                         <div className="flex justify-between">
//                           <span className="text-gray-400">Payment Method:</span>
//                           <span className="text-white">{viewTransaction.paymentMethod}</span>
//                         </div>
//                       )}

//                       {viewTransaction.transactionId && (
//                         <div className="flex justify-between">
//                           <span className="text-gray-400">Transaction ID:</span>
//                           <span className="text-white">{viewTransaction.transactionId}</span>
//                         </div>
//                       )}

//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Created Date:</span>
//                         <span className="text-white">
//                           {format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy")}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Payment Link */}
//                 <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                   <div className="flex justify-between items-center mb-2">
//                     <h4 className="font-semibold">Payment Link</h4>
//                     <button
//                       onClick={() => copyToClipboard(viewTransaction.paymentLink)}
//                       className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
//                     >
//                       <FiCopy size={14} /> Copy Link
//                     </button>
//                   </div>
//                   <div className="bg-gray-700 p-2 rounded text-sm text-gray-300 break-all">
//                     {viewTransaction.paymentLink}
//                   </div>
//                 </div>

//                 {/* Remark */}
//                 {viewTransaction.remark && (
//                   <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                     <h4 className="font-semibold mb-2">Remark</h4>
//                     <p className="text-gray-300">{viewTransaction.remark}</p>
//                   </div>
//                 )}

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
//                   {viewTransaction.status === "Pending" && (
//                     <button
//                       onClick={() => updateTransactionStatus(viewTransaction.id, "Paid")}
//                       className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2"
//                     >
//                       <FiCheckCircle size={18} /> Mark as Paid
//                     </button>
//                   )}

//                   {viewTransaction.status === "Pending" && (
//                     <button
//                       onClick={() => updateTransactionStatus(viewTransaction.id, "Failed")}
//                       className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center gap-2"
//                     >
//                       <FiXCircle size={18} /> Mark as Failed
//                     </button>
//                   )}

//                   <button
//                     onClick={handleEditTransaction}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
//                   >
//                     <FiEdit size={18} /> Edit Transaction
//                   </button>

//                   {viewTransaction.status === "Paid" && (
//                     <button
//                       onClick={handlePrint}
//                       className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center gap-2"
//                     >
//                       <FiPrinter size={18} /> Print Receipt
//                     </button>
//                   )}
//                 </div>

//                 {/* Send Receipt Section */}
//                 {viewTransaction.status === "Paid" && (
//                   <div className="pt-4 border-t border-gray-700">
//                     <h4 className="font-semibold mb-3">Send Receipt</h4>
//                     <div className="flex gap-2">
//                       <input
//                         type="email"
//                         value={sendReceiptEmail}
//                         onChange={(e) => setSendReceiptEmail(e.target.value)}
//                         placeholder="Enter email address"
//                         className="flex-grow p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                       />
//                       <button
//                         onClick={handleSendReceipt}
//                         className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 flex items-center gap-2 whitespace-nowrap"
//                       >
//                         <FiSend size={18} /> Send
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Receipt Preview (hidden, used for printing) */}
//               <div className="hidden">
//                 <div ref={receiptRef} className="p-8 bg-white text-black">
//                   <div className="text-center mb-6">
//                     <h2 className="text-2xl font-bold">Payment Receipt</h2>
//                     <p className="text-gray-600">Transaction #{viewTransaction.transactionId || viewTransaction.id}</p>
//                   </div>

//                   <div className="flex justify-between mb-6">
//                     <div>
//                       <h3 className="font-bold">From:</h3>
//                       <p>Your Company Name</p>
//                       <p>123 Business Street</p>
//                       <p>City, State, ZIP</p>
//                       <p>contact@yourcompany.com</p>
//                     </div>
//                     <div className="text-right">
//                       <h3 className="font-bold">To:</h3>
//                       <p>{viewTransaction.name}</p>
//                       <p>{viewTransaction.company}</p>
//                       <p>{viewTransaction.mobile}</p>
//                       <p>{viewTransaction.email || ""}</p>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h3 className="font-bold mb-2">Payment Details:</h3>
//                     <div className="border-t border-b border-gray-300 py-2">
//                       <div className="flex justify-between py-1">
//                         <span>Payment Date:</span>
//                         <span>
//                           {viewTransaction.paidAt ? format(new Date(viewTransaction.paidAt), "MMMM dd, yyyy") : "N/A"}
//                         </span>
//                       </div>
//                       <div className="flex justify-between py-1">
//                         <span>Payment Method:</span>
//                         <span>{viewTransaction.paymentMethod || "N/A"}</span>
//                       </div>
//                       <div className="flex justify-between py-1">
//                         <span>Transaction ID:</span>
//                         <span>{viewTransaction.transactionId || "N/A"}</span>
//                       </div>
//                       <div className="flex justify-between py-1">
//                         <span>Category:</span>
//                         <span>{viewTransaction.category}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h3 className="font-bold mb-2">Payment Summary:</h3>
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-gray-100">
//                           <th className="border border-gray-300 p-2 text-left">Description</th>
//                           <th className="border border-gray-300 p-2 text-right">Amount</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className="border border-gray-300 p-2">
//                             {viewTransaction.remark || viewTransaction.category}
//                           </td>
//                           <td className="border border-gray-300 p-2 text-right">
//                             {viewTransaction.currency} {viewTransaction.amount}
//                           </td>
//                         </tr>
//                         <tr className="bg-gray-100 font-bold">
//                           <td className="border border-gray-300 p-2">Total</td>
//                           <td className="border border-gray-300 p-2 text-right">
//                             {viewTransaction.currency} {viewTransaction.amount}
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>

//                   <div className="text-center text-gray-600 text-sm mt-8">
//                     <p>Thank you for your business!</p>
//                     <p>This is a computer-generated receipt and does not require a signature.</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Transaction



// import { useState, useRef, useEffect } from "react"
// import {
//   FiCopy,
//   FiRefreshCw,
//   FiDownload,
//   FiFilter,
//   FiDollarSign,
//   FiUser,
//   FiPhone,
//   FiMessageSquare,
//   FiCheckCircle,
//   FiXCircle,
//   FiClock,
//   FiAlertCircle,
//   FiPrinter,
//   FiSend,
//   FiBarChart2,
//   FiSearch,
//   FiX,
//   FiArrowLeft,
//   FiArrowRight,
//   FiEdit,
//   FiPlus,
//   FiTag,
//   FiPackage,
//   FiCalendar,
//   FiFileText,
//   FiTool,
//   FiShoppingCart,
// } from "react-icons/fi"
// import { toast, Toaster } from "react-hot-toast"
// import { motion, AnimatePresence } from "framer-motion"
// import Header from "../components/Common/Header"
// import { format, subDays, isAfter, isBefore, parseISO } from "date-fns"
// import { CSVLink } from "react-csv"
// import { useReactToPrint } from "react-to-print"
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts"

// // Mock data for initial transactions
// const MOCK_TRANSACTIONS = [
//   {
//     id: 1,
//     name: "John Doe",
//     mobile: "123-456-7890",
//     email: "john@example.com",
//     amount: "299.99",
//     company: "Acme Inc",
//     remark: "Monthly subscription",
//     paymentLink: "https://paymentgateway.com/pay/abc123def456",
//     status: "Paid",
//     paymentMethod: "Credit Card",
//     transactionId: "TXN78901234",
//     createdAt: subDays(new Date(), 2).toISOString(),
//     paidAt: subDays(new Date(), 1).toISOString(),
//     category: "Subscription",
//     currency: "USD",
//     service: "Premium Plan",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     mobile: "987-654-3210",
//     email: "jane@example.com",
//     amount: "149.50",
//     company: "Tech Solutions",
//     remark: "One-time service",
//     paymentLink: "https://paymentgateway.com/pay/ghi789jkl012",
//     status: "Pending",
//     paymentMethod: null,
//     transactionId: null,
//     createdAt: subDays(new Date(), 3).toISOString(),
//     paidAt: null,
//     category: "Service",
//     currency: "USD",
//     service: "Website Maintenance",
//   },
//   {
//     id: 3,
//     name: "Robert Johnson",
//     mobile: "555-123-4567",
//     email: "robert@example.com",
//     amount: "599.99",
//     company: "Global Enterprises",
//     remark: "Premium package",
//     paymentLink: "https://paymentgateway.com/pay/mno345pqr678",
//     status: "Failed",
//     paymentMethod: "PayPal",
//     transactionId: "TXN45678901",
//     createdAt: subDays(new Date(), 5).toISOString(),
//     paidAt: null,
//     category: "Package",
//     currency: "USD",
//     service: "Enterprise Solution",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     mobile: "333-888-7777",
//     email: "emily@example.com",
//     amount: "79.99",
//     company: "Digital Services",
//     remark: "Monthly plan",
//     paymentLink: "https://paymentgateway.com/pay/stu901vwx234",
//     status: "Paid",
//     paymentMethod: "Bank Transfer",
//     transactionId: "TXN12345678",
//     createdAt: subDays(new Date(), 10).toISOString(),
//     paidAt: subDays(new Date(), 9).toISOString(),
//     category: "Subscription",
//     currency: "USD",
//     service: "Basic Plan",
//   },
//   {
//     id: 5,
//     name: "Michael Wilson",
//     mobile: "222-999-8888",
//     email: "michael@example.com",
//     amount: "1299.99",
//     company: "Enterprise Solutions",
//     remark: "Annual contract",
//     paymentLink: "https://paymentgateway.com/pay/yza567bcd890",
//     status: "Pending",
//     paymentMethod: null,
//     transactionId: null,
//     createdAt: subDays(new Date(), 1).toISOString(),
//     paidAt: null,
//     category: "Contract",
//     currency: "USD",
//     service: "Annual Support",
//   },
// ]

// // Transaction status options
// const STATUS_OPTIONS = ["All", "Paid", "Pending", "Failed", "Refunded", "Expired"]

// // Payment method options
// const PAYMENT_METHODS = ["Credit Card", "Debit Card", "PayPal", "Bank Transfer", "Crypto", "Mobile Payment"]

// // Category options
// const CATEGORIES = ["All", "Subscription", "Service", "Package", "Contract", "One-time", "Other"]

// // Services by category
// const SERVICES_BY_CATEGORY = {
//   Subscription: ["Basic Plan", "Standard Plan", "Premium Plan", "Enterprise Plan", "Custom Plan"],
//   Service: [
//     "Website Development",
//     "Website Maintenance",
//     "SEO Optimization",
//     "Content Creation",
//     "Graphic Design",
//     "Digital Marketing",
//     "IT Support",
//   ],
//   Package: ["Starter Package", "Business Package", "Enterprise Solution", "Custom Package", "All-in-One Solution"],
//   Contract: ["Monthly Support", "Quarterly Support", "Annual Support", "Project-based Contract", "Retainer Agreement"],
//   "One-time": ["Consultation", "Training Session", "Setup Fee", "Installation", "One-time Project"],
//   Other: ["Miscellaneous", "Donation", "Refund", "Adjustment", "Credit"],
// }

// // Currency options
// const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "INR"]

// // Date range options
// const DATE_RANGES = [
//   { label: "Today", value: "today" },
//   { label: "Yesterday", value: "yesterday" },
//   { label: "Last 7 days", value: "week" },
//   { label: "Last 30 days", value: "month" },
//   { label: "Custom", value: "custom" },
// ]

// const Transaction = () => {
//   // State management
//   const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS)
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     amount: "",
//     company: "",
//     remark: "",
//     category: "Service",
//     currency: "USD",
//     service: "",
//   })
//   const [searchQuery, setSearchQuery] = useState("")
//   const [filterStatus, setFilterStatus] = useState("All")
//   const [filterCategory, setFilterCategory] = useState("All")
//   const [filterDateRange, setFilterDateRange] = useState("month")
//   const [customDateRange, setCustomDateRange] = useState({
//     startDate: format(subDays(new Date(), 30), "yyyy-MM-dd"),
//     endDate: format(new Date(), "yyyy-MM-dd"),
//   })
//   const [sortField, setSortField] = useState("createdAt")
//   const [sortDirection, setSortDirection] = useState("desc")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage] = useState(5)
//   const [viewTransaction, setViewTransaction] = useState(null)
//   const [showFilters, setShowFilters] = useState(false)
//   const [showAnalytics, setShowAnalytics] = useState(false)
//   const [isEditMode, setIsEditMode] = useState(false)
//   const [sendReceiptEmail, setSendReceiptEmail] = useState("")
//   const [showTransactionModal, setShowTransactionModal] = useState(false)
//   const [availableServices, setAvailableServices] = useState([])

//   // Refs
//   const receiptRef = useRef(null)

//   // Update available services when category changes
//   useEffect(() => {
//     if (formData.category && SERVICES_BY_CATEGORY[formData.category]) {
//       setAvailableServices(SERVICES_BY_CATEGORY[formData.category])
//       // Set default service if none is selected
//       if (!formData.service && SERVICES_BY_CATEGORY[formData.category].length > 0) {
//         setFormData((prev) => ({
//           ...prev,
//           service: SERVICES_BY_CATEGORY[formData.category][0],
//         }))
//       }
//     } else {
//       setAvailableServices([])
//     }
//   }, [formData.category])

//   // Handle print receipt
//   const handlePrint = useReactToPrint({
//     content: () => receiptRef.current,
//     documentTitle: `Receipt-${viewTransaction?.transactionId || viewTransaction?.id}`,
//     onAfterPrint: () => toast.success("Receipt printed successfully!"),
//   })

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   // Open transaction modal
//   const openTransactionModal = () => {
//     setIsEditMode(false)
//     setFormData({
//       name: "",
//       mobile: "",
//       email: "",
//       amount: "",
//       company: "",
//       remark: "",
//       category: "Service",
//       currency: "USD",
//       service: SERVICES_BY_CATEGORY["Service"][0],
//     })
//     setShowTransactionModal(true)
//   }

//   // Generate payment link
//   const generatePaymentLink = () => {
//     if (!formData.name || !formData.mobile || !formData.amount || !formData.company) {
//       toast.error("Please fill all required fields.")
//       return
//     }

//     const paymentLink = `https://paymentgateway.com/pay/${Math.random().toString(36).substr(2, 9)}`
//     const newTransaction = {
//       id: transactions.length + 1,
//       ...formData,
//       paymentLink,
//       status: "Pending",
//       paymentMethod: null,
//       transactionId: null,
//       createdAt: new Date().toISOString(),
//       paidAt: null,
//     }

//     setTransactions((prev) => [newTransaction, ...prev])
//     setFormData({
//       name: "",
//       mobile: "",
//       email: "",
//       amount: "",
//       company: "",
//       remark: "",
//       category: "Service",
//       currency: "USD",
//       service: "",
//     })
//     toast.success("Payment link generated!")
//     setShowTransactionModal(false)
//   }

//   // Copy payment link to clipboard
//   const copyToClipboard = (link) => {
//     navigator.clipboard.writeText(link)
//     toast.success("Payment link copied!")
//   }

//   // Update transaction status
//   const updateTransactionStatus = (id, newStatus) => {
//     setTransactions((prev) =>
//       prev.map((txn) => {
//         if (txn.id === id) {
//           const updatedTxn = {
//             ...txn,
//             status: newStatus,
//             paidAt: newStatus === "Paid" ? new Date().toISOString() : txn.paidAt,
//             paymentMethod: newStatus === "Paid" ? txn.paymentMethod || PAYMENT_METHODS[0] : txn.paymentMethod,
//             transactionId:
//               newStatus === "Paid"
//                 ? txn.transactionId || `TXN${Math.floor(Math.random() * 100000000)}`
//                 : txn.transactionId,
//           }

//           // If we're viewing this transaction, update the view
//           if (viewTransaction && viewTransaction.id === id) {
//             setViewTransaction(updatedTxn)
//           }

//           return updatedTxn
//         }
//         return txn
//       }),
//     )
//     toast.success(`Transaction status updated to ${newStatus}!`)
//   }

//   // Refresh transactions (simulate status updates)
//   const refreshTransactions = () => {
//     setTransactions((prev) =>
//       prev.map((txn) => {
//         if (txn.status === "Pending" && Math.random() > 0.6) {
//           const newStatus = Math.random() > 0.8 ? "Failed" : "Paid"
//           return {
//             ...txn,
//             status: newStatus,
//             paidAt: newStatus === "Paid" ? new Date().toISOString() : txn.paidAt,
//             paymentMethod:
//               newStatus === "Paid"
//                 ? PAYMENT_METHODS[Math.floor(Math.random() * PAYMENT_METHODS.length)]
//                 : txn.paymentMethod,
//             transactionId: newStatus === "Paid" ? `TXN${Math.floor(Math.random() * 100000000)}` : txn.transactionId,
//           }
//         }
//         return txn
//       }),
//     )
//     toast.success("Transactions updated!")
//   }

//   // Send receipt via email
//   const handleSendReceipt = () => {
//     if (!sendReceiptEmail) {
//       toast.error("Please enter an email address")
//       return
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(sendReceiptEmail)) {
//       toast.error("Please enter a valid email address")
//       return
//     }

//     toast.success(`Receipt sent to ${sendReceiptEmail}`)
//     setSendReceiptEmail("")
//   }

//   // Edit transaction
//   const handleEditTransaction = () => {
//     if (!viewTransaction) return

//     setFormData({
//       name: viewTransaction.name,
//       mobile: viewTransaction.mobile,
//       email: viewTransaction.email || "",
//       amount: viewTransaction.amount,
//       company: viewTransaction.company,
//       remark: viewTransaction.remark || "",
//       category: viewTransaction.category,
//       currency: viewTransaction.currency,
//       service: viewTransaction.service || "",
//     })

//     setIsEditMode(true)
//     setViewTransaction(null)
//     setShowTransactionModal(true)
//   }

//   // Save edited transaction
//   const saveEditedTransaction = () => {
//     if (!formData.name || !formData.mobile || !formData.amount || !formData.company) {
//       toast.error("Please fill all required fields.")
//       return
//     }

//     setTransactions((prev) =>
//       prev.map((txn) => {
//         if (txn.id === viewTransaction.id) {
//           return {
//             ...txn,
//             name: formData.name,
//             mobile: formData.mobile,
//             email: formData.email,
//             amount: formData.amount,
//             company: formData.company,
//             remark: formData.remark,
//             category: formData.category,
//             currency: formData.currency,
//             service: formData.service,
//           }
//         }
//         return txn
//       }),
//     )

//     setFormData({
//       name: "",
//       mobile: "",
//       email: "",
//       amount: "",
//       company: "",
//       remark: "",
//       category: "Service",
//       currency: "USD",
//       service: "",
//     })

//     setIsEditMode(false)
//     toast.success("Transaction updated successfully!")
//     setShowTransactionModal(false)
//   }

//   // Cancel edit mode
//   const cancelEdit = () => {
//     setFormData({
//       name: "",
//       mobile: "",
//       email: "",
//       amount: "",
//       company: "",
//       remark: "",
//       category: "Service",
//       currency: "USD",
//       service: "",
//     })
//     setIsEditMode(false)
//     setShowTransactionModal(false)
//   }

//   // Filter transactions based on search, status, category, and date range
//   const getFilteredTransactions = () => {
//     return transactions.filter((txn) => {
      
//       const matchesSearch =
//         txn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         txn.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         (txn.transactionId && txn.transactionId.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (txn.email && txn.email.toLowerCase().includes(searchQuery.toLowerCase()))

//       const matchesStatus = filterStatus === "All" || txn.status === filterStatus

//       // Category filter
//       const matchesCategory = filterCategory === "All" || txn.category === filterCategory

//       // Date range filter
//       let matchesDateRange = true
//       const txnDate = parseISO(txn.createdAt)

//       if (filterDateRange === "today") {
//         const today = new Date()
//         today.setHours(0, 0, 0, 0)
//         const tomorrow = new Date(today)
//         tomorrow.setDate(tomorrow.getDate() + 1)
//         matchesDateRange = isAfter(txnDate, today) && isBefore(txnDate, tomorrow)
//       } else if (filterDateRange === "yesterday") {
//         const yesterday = new Date()
//         yesterday.setDate(yesterday.getDate() - 1)
//         yesterday.setHours(0, 0, 0, 0)
//         const today = new Date()
//         today.setHours(0, 0, 0, 0)
//         matchesDateRange = isAfter(txnDate, yesterday) && isBefore(txnDate, today)
//       } else if (filterDateRange === "week") {
//         const weekAgo = subDays(new Date(), 7)
//         matchesDateRange = isAfter(txnDate, weekAgo)
//       } else if (filterDateRange === "month") {
//         const monthAgo = subDays(new Date(), 30)
//         matchesDateRange = isAfter(txnDate, monthAgo)
//       } else if (filterDateRange === "custom") {
//         const startDate = parseISO(`${customDateRange.startDate}T00:00:00`)
//         const endDate = parseISO(`${customDateRange.endDate}T23:59:59`)
//         matchesDateRange = isAfter(txnDate, startDate) && isBefore(txnDate, endDate)
//       }

//       return matchesSearch && matchesStatus && matchesCategory && matchesDateRange
//     })
//   }

//   // Sort transactions
//   const getSortedTransactions = () => {
//     const filtered = getFilteredTransactions()

//     return filtered.sort((a, b) => {
//       let aValue = a[sortField]
//       let bValue = b[sortField]

//       // Handle dates
//       if (sortField === "createdAt" || sortField === "paidAt") {
//         aValue = aValue ? new Date(aValue).getTime() : 0
//         bValue = bValue ? new Date(bValue).getTime() : 0
//       }

//       // Handle numbers
//       if (sortField === "amount") {
//         aValue = Number.parseFloat(aValue)
//         bValue = Number.parseFloat(bValue)
//       }

//       if (sortDirection === "asc") {
//         return aValue > bValue ? 1 : -1
//       } else {
//         return aValue < bValue ? 1 : -1
//       }
//     })
//   }

//   // Pagination
//   const paginatedTransactions = () => {
//     const sorted = getSortedTransactions()
//     const startIndex = (currentPage - 1) * itemsPerPage
//     return sorted.slice(startIndex, startIndex + itemsPerPage)
//   }

//   // Toggle sort direction
//   const toggleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc")
//     } else {
//       setSortField(field)
//       setSortDirection("desc")
//     }
//   }

//   // Prepare data for CSV export
//   const csvData = [
//     [
//       "ID",
//       "Name",
//       "Mobile",
//       "Email",
//       "Amount",
//       "Currency",
//       "Company",
//       "Category",
//       "Service",
//       "Status",
//       "Created Date",
//       "Paid Date",
//       "Payment Method",
//       "Transaction ID",
//       "Remark",
//     ],
//     ...getFilteredTransactions().map((txn) => [
//       txn.id,
//       txn.name,
//       txn.mobile,
//       txn.email || "",
//       txn.amount,
//       txn.currency,
//       txn.company,
//       txn.category,
//       txn.service || "",
//       txn.status,
//       format(new Date(txn.createdAt), "yyyy-MM-dd HH:mm"),
//       txn.paidAt ? format(new Date(txn.paidAt), "yyyy-MM-dd HH:mm") : "",
//       txn.paymentMethod || "",
//       txn.transactionId || "",
//       txn.remark || "",
//     ]),
//   ]

//   // Prepare analytics data
//   const getAnalyticsData = () => {
//     const filtered = getFilteredTransactions()

//     // Status distribution
//     const statusData = STATUS_OPTIONS.filter((status) => status !== "All")
//       .map((status) => {
//         const count = filtered.filter((txn) => txn.status === status).length
//         return { name: status, value: count }
//       })
//       .filter((item) => item.value > 0)

//     // Category distribution
//     const categoryData = CATEGORIES.filter((cat) => cat !== "All")
//       .map((category) => {
//         const count = filtered.filter((txn) => txn.category === category).length
//         return { name: category, value: count }
//       })
//       .filter((item) => item.value > 0)

//     // Daily transactions (last 7 days)
//     const dailyData = []
//     for (let i = 6; i >= 0; i--) {
//       const date = subDays(new Date(), i)
//       const dateStr = format(date, "MMM dd")
//       const txns = filtered.filter((txn) => {
//         const txnDate = new Date(txn.createdAt)
//         return (
//           txnDate.getDate() === date.getDate() &&
//           txnDate.getMonth() === date.getMonth() &&
//           txnDate.getFullYear() === date.getFullYear()
//         )
//       })

//       const totalAmount = txns.reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
//       const paidAmount = txns
//         .filter((txn) => txn.status === "Paid")
//         .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)

//       dailyData.push({
//         name: dateStr,
//         total: totalAmount.toFixed(2),
//         paid: paidAmount.toFixed(2),
//       })
//     }

//     return { statusData, categoryData, dailyData }
//   }

//   // Analytics data
//   const analyticsData = getAnalyticsData()

//   // Colors for pie charts
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#FF6B6B"]

//   // Calculate total and statistics
//   const stats = (() => {
//     const filtered = getFilteredTransactions()
//     const total = filtered.reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
//     const paid = filtered
//       .filter((txn) => txn.status === "Paid")
//       .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
//     const pending = filtered
//       .filter((txn) => txn.status === "Pending")
//       .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)

//     return {
//       total: total.toFixed(2),
//       paid: paid.toFixed(2),
//       pending: pending.toFixed(2),
//       count: filtered.length,
//       paidCount: filtered.filter((txn) => txn.status === "Paid").length,
//       pendingCount: filtered.filter((txn) => txn.status === "Pending").length,
//       failedCount: filtered.filter((txn) => txn.status === "Failed").length,
//     }
//   })()

//   // Get category icon
//   const getCategoryIcon = (category) => {
//     switch (category) {
//       case "Subscription":
//         return <FiCalendar className="mr-2" />
//       case "Service":
//         return <FiTool className="mr-2" />
//       case "Package":
//         return <FiPackage className="mr-2" />
//       case "Contract":
//         return <FiFileText className="mr-2" />
//       case "One-time":
//         return <FiShoppingCart className="mr-2" />
//       default:
//         return <FiTag className="mr-2" />
//     }
//   }

//   return (
//     <div className="flex-1 overflow-auto bg-gray-900 text-white min-h-screen">
//       <Header title={"Transactions"} />
//       <Toaster position="top-right" />

//       <div className="flex flex-col w-full p-4 md:p-6 overflow-auto">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <motion.div
//             className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-lg shadow-lg border border-blue-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-blue-300 text-sm">Total Amount</p>
//                 <h3 className="text-2xl font-bold">${stats.total}</h3>
//                 <p className="text-blue-300 text-sm">{stats.count} transactions</p>
//               </div>
//               <div className="bg-blue-700 p-3 rounded-full">
//                 <FiDollarSign size={24} className="text-blue-200" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="bg-gradient-to-r from-green-900 to-green-800 p-4 rounded-lg shadow-lg border border-green-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-green-300 text-sm">Paid Amount</p>
//                 <h3 className="text-2xl font-bold">${stats.paid}</h3>
//                 <p className="text-green-300 text-sm">{stats.paidCount} transactions</p>
//               </div>
//               <div className="bg-green-700 p-3 rounded-full">
//                 <FiCheckCircle size={24} className="text-green-200" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="bg-gradient-to-r from-yellow-900 to-yellow-800 p-4 rounded-lg shadow-lg border border-yellow-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-yellow-300 text-sm">Pending Amount</p>
//                 <h3 className="text-2xl font-bold">${stats.pending}</h3>
//                 <p className="text-yellow-300 text-sm">{stats.pendingCount} transactions</p>
//               </div>
//               <div className="bg-yellow-700 p-3 rounded-full">
//                 <FiClock size={24} className="text-yellow-200" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="bg-gradient-to-r from-red-900 to-red-800 p-4 rounded-lg shadow-lg border border-red-700"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-red-300 text-sm">Failed Transactions</p>
//                 <h3 className="text-2xl font-bold">{stats.failedCount}</h3>
//                 <p className="text-red-300 text-sm">Need attention</p>
//               </div>
//               <div className="bg-red-700 p-3 rounded-full">
//                 <FiXCircle size={24} className="text-red-200" />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap gap-3 mb-6">
//           <motion.button
//             onClick={openTransactionModal}
//             className="px-4 py-2 rounded-lg flex items-center gap-2 bg-blue-600 text-white"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FiPlus size={18} />
//             New Transaction
//           </motion.button>

//           <motion.button
//             onClick={() => setShowFilters(!showFilters)}
//             className={`px-4 py-2 rounded-lg flex items-center gap-2 ${showFilters ? "bg-gray-700 text-gray-300" : "bg-purple-600 text-white"}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FiFilter size={18} />
//             {showFilters ? "Hide Filters" : "Show Filters"}
//           </motion.button>

//           <motion.button
//             onClick={() => setShowAnalytics(!showAnalytics)}
//             className={`px-4 py-2 rounded-lg flex items-center gap-2 ${showAnalytics ? "bg-gray-700 text-gray-300" : "bg-green-600 text-white"}`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FiBarChart2 size={18} />
//             {showAnalytics ? "Hide Analytics" : "Show Analytics"}
//           </motion.button>

//           <motion.button
//             onClick={refreshTransactions}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FiRefreshCw size={18} />
//             Refresh Status
//           </motion.button>

//           <CSVLink
//             data={csvData}
//             filename={`transactions-${format(new Date(), "yyyy-MM-dd")}.csv`}
//             className="px-4 py-2 bg-teal-600 text-white rounded-lg flex items-center gap-2"
//           >
//             <FiDownload size={18} />
//             Export CSV
//           </CSVLink>
//         </div>

//         {/* Filters */}
//         <AnimatePresence>
//           {showFilters && (
//             <motion.div
//               className="w-full mb-6 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-xl font-bold mb-4 text-purple-400">Advanced Filters</h2>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Status</label>
//                   <select
//                     value={filterStatus}
//                     onChange={(e) => setFilterStatus(e.target.value)}
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                   >
//                     {STATUS_OPTIONS.map((status) => (
//                       <option key={status} value={status}>
//                         {status}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Category</label>
//                   <select
//                     value={filterCategory}
//                     onChange={(e) => setFilterCategory(e.target.value)}
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                   >
//                     {CATEGORIES.map((category) => (
//                       <option key={category} value={category}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-1">
//                   <label className="text-sm text-gray-400">Date Range</label>
//                   <select
//                     value={filterDateRange}
//                     onChange={(e) => setFilterDateRange(e.target.value)}
//                     className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                   >
//                     {DATE_RANGES.map((range) => (
//                       <option key={range.value} value={range.value}>
//                         {range.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {filterDateRange === "custom" && (
//                   <>
//                     <div className="space-y-1">
//                       <label className="text-sm text-gray-400">Start Date</label>
//                       <input
//                         type="date"
//                         value={customDateRange.startDate}
//                         onChange={(e) => setCustomDateRange({ ...customDateRange, startDate: e.target.value })}
//                         className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                       />
//                     </div>

//                     <div className="space-y-1">
//                       <label className="text-sm text-gray-400">End Date</label>
//                       <input
//                         type="date"
//                         value={customDateRange.endDate}
//                         onChange={(e) => setCustomDateRange({ ...customDateRange, endDate: e.target.value })}
//                         className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                       />
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="mt-4 flex items-center">
//                 <div className="relative flex-grow">
//                   <FiSearch className="absolute left-3 top-3 text-gray-500" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search by name, company, or transaction ID"
//                     className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
//                   />
//                   {searchQuery && (
//                     <button
//                       onClick={() => setSearchQuery("")}
//                       className="absolute right-3 top-3 text-gray-400 hover:text-white"
//                     >
//                       <FiX size={16} />
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Analytics */}
//         <AnimatePresence>
//           {showAnalytics && (
//             <motion.div
//               className="w-full mb-6 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-xl font-bold mb-4 text-green-400">Transaction Analytics</h2>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Daily Transactions Chart */}
//                 <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                   <h3 className="text-lg font-semibold mb-4 text-gray-300">Daily Transactions (Last 7 Days)</h3>
//                   <div className="h-64">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart data={analyticsData.dailyData}>
//                         <CartesianGrid strokeDasharray="3 3" stroke="#444" />
//                         <XAxis dataKey="name" stroke="#999" />
//                         <YAxis stroke="#999" />
//                         <Tooltip
//                           contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
//                           labelStyle={{ color: "#fff" }}
//                         />
//                         <Legend />
//                         <Bar dataKey="total" name="Total Amount" fill="#3B82F6" />
//                         <Bar dataKey="paid" name="Paid Amount" fill="#10B981" />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>

//                 {/* Status and Category Distribution */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   {/* Status Distribution */}
//                   <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                     <h3 className="text-lg font-semibold mb-4 text-gray-300">Status Distribution</h3>
//                     <div className="h-64">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <PieChart>
//                           <Pie
//                             data={analyticsData.statusData}
//                             cx="50%"
//                             cy="50%"
//                             labelLine={false}
//                             outerRadius={80}
//                             fill="#8884d8"
//                             dataKey="value"
//                             label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                           >
//                             {analyticsData.statusData.map((entry, index) => (
//                               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                             ))}
//                           </Pie>
//                           <Tooltip
//                             contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
//                             labelStyle={{ color: "#fff" }}
//                           />
//                         </PieChart>
//                       </ResponsiveContainer>
//                     </div>
//                   </div>

//                   {/* Category Distribution */}
//                   <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                     <h3 className="text-lg font-semibold mb-4 text-gray-300">Category Distribution</h3>
//                     <div className="h-64">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <PieChart>
//                           <Pie
//                             data={analyticsData.categoryData}
//                             cx="50%"
//                             cy="50%"
//                             labelLine={false}
//                             outerRadius={80}
//                             fill="#8884d8"
//                             dataKey="value"
//                             label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                           >
//                             {analyticsData.categoryData.map((entry, index) => (
//                               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                             ))}
//                           </Pie>
//                           <Tooltip
//                             contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
//                             labelStyle={{ color: "#fff" }}
//                           />
//                         </PieChart>
//                       </ResponsiveContainer>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Transactions List */}
//         <div className="w-full bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
//           <div className="p-4 border-b border-gray-700 flex justify-between items-center">
//             <h3 className="text-xl font-semibold text-blue-400">Transaction List</h3>
//             <p className="text-gray-400 text-sm">
//               Showing {paginatedTransactions().length} of {getFilteredTransactions().length} transactions
//             </p>
//           </div>

//           {getFilteredTransactions().length === 0 ? (
//             <div className="p-8 text-center text-gray-400">
//               <FiAlertCircle size={48} className="mx-auto mb-4 text-gray-500" />
//               <p>No transactions found matching your criteria.</p>
//               <p className="text-sm mt-2">Try adjusting your filters or create a new transaction.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//               {paginatedTransactions().map((txn) => (
//                 <motion.div
//                   key={txn.id}
//                   className={`bg-gray-900 rounded-lg overflow-hidden border ${
//                     txn.status === "Paid"
//                       ? "border-green-700"
//                       : txn.status === "Pending"
//                         ? "border-yellow-700"
//                         : txn.status === "Failed"
//                           ? "border-red-700"
//                           : "border-gray-700"
//                   } hover:shadow-lg transition-all duration-300 cursor-pointer`}
//                   whileHover={{ scale: 1.02 }}
//                   onClick={() => setViewTransaction(txn)}
//                 >
//                   <div
//                     className={`p-3 flex justify-between items-center ${
//                       txn.status === "Paid"
//                         ? "bg-green-900/30"
//                         : txn.status === "Pending"
//                           ? "bg-yellow-900/30"
//                           : txn.status === "Failed"
//                             ? "bg-red-900/30"
//                             : "bg-gray-800"
//                     }`}
//                   >
//                     <div className="flex items-center gap-2">
//                       <div
//                         className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                           txn.status === "Paid"
//                             ? "bg-green-700"
//                             : txn.status === "Pending"
//                               ? "bg-yellow-700"
//                               : txn.status === "Failed"
//                                 ? "bg-red-700"
//                                 : "bg-gray-700"
//                         }`}
//                       >
//                         {txn.status === "Paid" ? (
//                           <FiCheckCircle size={16} />
//                         ) : txn.status === "Pending" ? (
//                           <FiClock size={16} />
//                         ) : (
//                           <FiXCircle size={16} />
//                         )}
//                       </div>
//                       <div>
//                         <p className="font-medium">{txn.name}</p>
//                         <p className="text-xs text-gray-400">{format(new Date(txn.createdAt), "MMM dd, yyyy")}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-bold">
//                         {txn.currency} {txn.amount}
//                       </p>
//                       <p
//                         className={`text-xs ${
//                           txn.status === "Paid"
//                             ? "text-green-400"
//                             : txn.status === "Pending"
//                               ? "text-yellow-400"
//                               : txn.status === "Failed"
//                                 ? "text-red-400"
//                                 : "text-gray-400"
//                         }`}
//                       >
//                         {txn.status}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="p-3 space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-400">Company:</span>
//                       <span className="text-gray-300">{txn.company}</span>
//                     </div>

//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-400">Category:</span>
//                       <span className="text-gray-300 flex items-center">
//                         {getCategoryIcon(txn.category)}
//                         {txn.category}
//                       </span>
//                     </div>

//                     {txn.service && (
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-400">Service:</span>
//                         <span className="text-gray-300">{txn.service}</span>
//                       </div>
//                     )}

//                     {txn.transactionId && (
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-400">Transaction ID:</span>
//                         <span className="text-gray-300">{txn.transactionId}</span>
//                       </div>
//                     )}

//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-400">Mobile:</span>
//                       <span className="text-gray-300">{txn.mobile}</span>
//                     </div>
//                   </div>

//                   <div className="p-3 border-t border-gray-800 flex justify-between items-center">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         copyToClipboard(txn.paymentLink)
//                       }}
//                       className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
//                     >
//                       <FiCopy size={14} /> Copy Link
//                     </button>

//                     {txn.status === "Pending" && (
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation()
//                           updateTransactionStatus(txn.id, "Paid")
//                         }}
//                         className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm"
//                       >
//                         <FiCheckCircle size={14} /> Mark Paid
//                       </button>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {getFilteredTransactions().length > itemsPerPage && (
//             <div className="p-4 border-t border-gray-700 flex justify-center">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                   disabled={currentPage === 1}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === 1
//                       ? "bg-gray-700 text-gray-500 cursor-not-allowed"
//                       : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                   }`}
//                 >
//                   <FiArrowLeft size={16} />
//                 </button>

//                 {Array.from(
//                   { length: Math.min(5, Math.ceil(getFilteredTransactions().length / itemsPerPage)) },
//                   (_, i) => {
//                     // Calculate page numbers to show (centered around current page)
//                     const totalPages = Math.ceil(getFilteredTransactions().length / itemsPerPage)
//                     let startPage = Math.max(1, currentPage - 2)
//                     const endPage = Math.min(startPage + 4, totalPages)

//                     if (endPage - startPage < 4) {
//                       startPage = Math.max(1, endPage - 4)
//                     }

//                     const pageNum = startPage + i
//                     if (pageNum > totalPages) return null

//                     return (
//                       <button
//                         key={pageNum}
//                         onClick={() => setCurrentPage(pageNum)}
//                         className={`px-3 py-1 rounded ${
//                           currentPage === pageNum
//                             ? "bg-blue-600 text-white"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                       >
//                         {pageNum}
//                       </button>
//                     )
//                   },
//                 )}

//                 <button
//                   onClick={() =>
//                     setCurrentPage(
//                       Math.min(Math.ceil(getFilteredTransactions().length / itemsPerPage), currentPage + 1),
//                     )
//                   }
//                   disabled={currentPage === Math.ceil(getFilteredTransactions().length / itemsPerPage)}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === Math.ceil(getFilteredTransactions().length / itemsPerPage)
//                       ? "bg-gray-700 text-gray-500 cursor-not-allowed"
//                       : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                   }`}
//                 >
//                   <FiArrowRight size={16} />
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Transaction Modal */}
//       <AnimatePresence>
//         {showTransactionModal && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowTransactionModal(false)}
//           >
//             <motion.div
//               className="bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
//                 <h3 className="text-xl font-semibold text-white">
//                   {isEditMode ? "Edit Transaction" : "Create New Transaction"}
//                 </h3>
//                 <button onClick={() => setShowTransactionModal(false)} className="text-gray-400 hover:text-white">
//                   <FiX size={24} />
//                 </button>
//               </div>

//               <div className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   <div className="space-y-1">
//                     <label className="text-sm text-gray-400">Name*</label>
//                     <div className="relative">
//                       <FiUser className="absolute left-3 top-3 text-gray-500" />
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Customer Name"
//                         className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm text-gray-400">Mobile*</label>
//                     <div className="relative">
//                       <FiPhone className="absolute left-3 top-3 text-gray-500" />
//                       <input
//                         type="text"
//                         name="mobile"
//                         value={formData.mobile}
//                         onChange={handleChange}
//                         placeholder="Phone Number"
//                         className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm text-gray-400">Email</label>
//                     <div className="relative">
//                       <FiMessageSquare className="absolute left-3 top-3 text-gray-500" />
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Email Address"
//                         className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm text-gray-400">Amount*</label>
//                     <div className="relative">
//                       <FiDollarSign className="absolute left-3 top-3 text-gray-500" />
//                       <input
//                         type="number"
//                         name="amount"
//                         value={formData.amount}
//                         onChange={handleChange}
//                         placeholder="Payment Amount"
//                         className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm text-gray-400">Currency</label>
//                     <select
//                       name="currency"
//                       value={formData.currency}
//                       onChange={handleChange}
//                       className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                     >
//                       {CURRENCIES.map((currency) => (
//                         <option key={currency} value={currency}>
//                           {currency}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm text-gray-400">Category</label>
//                     <div className="flex items-center">
//                       <select
//                         name="category"
//                         value={formData.category}
//                         onChange={handleChange}
//                         className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                       >
//                         {CATEGORIES.filter((cat) => cat !== "All").map((category) => (
//                           <option key={category} value={category}>
//                             {category}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm text-gray-400">Service</label>
//                     <select
//                       name="service"
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                     >
//                       {availableServices.map((service) => (
//                         <option key={service} value={service}>
//                           {service}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="space-y-1">
//                     <label className="text-sm text-gray-400">Company*</label>
//                     <div className="relative">
//                       <FiUser className="absolute left-3 top-3 text-gray-500" />
//                       <input
//                         type="text"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         placeholder="Company Name"
//                         className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-1 md:col-span-2 lg:col-span-3">
//                     <label className="text-sm text-gray-400">Remark</label>
//                     <textarea
//                       name="remark"
//                       value={formData.remark}
//                       onChange={handleChange}
//                       placeholder="Additional Notes"
//                       className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 min-h-[80px]"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-6 flex flex-wrap gap-3">
//                   {isEditMode ? (
//                     <>
//                       <button
//                         onClick={saveEditedTransaction}
//                         className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-all duration-300"
//                       >
//                         Save Changes
//                       </button>
//                       <button
//                         onClick={cancelEdit}
//                         className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-all duration-300"
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={generatePaymentLink}
//                         className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
//                       >
//                         Generate Payment Link
//                       </button>
//                       <button
//                         onClick={() => setShowTransactionModal(false)}
//                         className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-all duration-300"
//                       >
//                         Cancel
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Transaction Detail Modal */}
//       <AnimatePresence>
//         {viewTransaction && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setViewTransaction(null)}
//           >
//             <motion.div
//               className="bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
//                 <h3 className="text-xl font-semibold text-white">Transaction Details</h3>
//                 <button onClick={() => setViewTransaction(null)} className="text-gray-400 hover:text-white">
//                   <FiX size={24} />
//                 </button>
//               </div>

//               <div className="p-6 space-y-6">
//                 {/* Transaction Status */}
//                 <div
//                   className={`p-4 rounded-lg ${
//                     viewTransaction.status === "Paid"
//                       ? "bg-green-900/30 border border-green-700"
//                       : viewTransaction.status === "Pending"
//                         ? "bg-yellow-900/30 border border-yellow-700"
//                         : viewTransaction.status === "Failed"
//                           ? "bg-red-900/30 border border-red-700"
//                           : "bg-gray-700"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div
//                       className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                         viewTransaction.status === "Paid"
//                           ? "bg-green-700"
//                           : viewTransaction.status === "Pending"
//                             ? "bg-yellow-700"
//                             : viewTransaction.status === "Failed"
//                               ? "bg-red-700"
//                               : "bg-gray-600"
//                       }`}
//                     >
//                       {viewTransaction.status === "Paid" ? (
//                         <FiCheckCircle size={24} />
//                       ) : viewTransaction.status === "Pending" ? (
//                         <FiClock size={24} />
//                       ) : (
//                         <FiXCircle size={24} />
//                       )}
//                     </div>
//                     <div>
//                       <h4 className="text-lg font-semibold">
//                         {viewTransaction.status === "Paid"
//                           ? "Payment Completed"
//                           : viewTransaction.status === "Pending"
//                             ? "Payment Pending"
//                             : viewTransaction.status === "Failed"
//                               ? "Payment Failed"
//                               : viewTransaction.status}
//                       </h4>
//                       <p className="text-sm text-gray-300">
//                         {viewTransaction.status === "Paid"
//                           ? `Paid on ${format(new Date(viewTransaction.paidAt), "MMMM dd, yyyy 'at' h:mm a")}`
//                           : viewTransaction.status === "Pending"
//                             ? `Created on ${format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy 'at' h:mm a")}`
//                             : `Last updated on ${format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy 'at' h:mm a")}`}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Transaction Details */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-4">
//                     <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">Customer Information</h4>

//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Name:</span>
//                         <span className="text-white font-medium">{viewTransaction.name}</span>
//                       </div>

//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Mobile:</span>
//                         <span className="text-white">{viewTransaction.mobile}</span>
//                       </div>

//                       {viewTransaction.email && (
//                         <div className="flex justify-between">
//                           <span className="text-gray-400">Email:</span>
//                           <span className="text-white">{viewTransaction.email}</span>
//                         </div>
//                       )}

//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Company:</span>
//                         <span className="text-white">{viewTransaction.company}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <h4 className="text-lg font-semibold border-b border-gray-700 pb-2">Payment Details</h4>

//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Amount:</span>
//                         <span className="text-white font-bold">
//                           {viewTransaction.currency} {viewTransaction.amount}
//                         </span>
//                       </div>

//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Category:</span>
//                         <span className="text-white flex items-center">
//                           {getCategoryIcon(viewTransaction.category)}
//                           {viewTransaction.category}
//                         </span>
//                       </div>

//                       {viewTransaction.service && (
//                         <div className="flex justify-between">
//                           <span className="text-gray-400">Service:</span>
//                           <span className="text-white">{viewTransaction.service}</span>
//                         </div>
//                       )}

//                       {viewTransaction.paymentMethod && (
//                         <div className="flex justify-between">
//                           <span className="text-gray-400">Payment Method:</span>
//                           <span className="text-white">{viewTransaction.paymentMethod}</span>
//                         </div>
//                       )}

//                       {viewTransaction.transactionId && (
//                         <div className="flex justify-between">
//                           <span className="text-gray-400">Transaction ID:</span>
//                           <span className="text-white">{viewTransaction.transactionId}</span>
//                         </div>
//                       )}

//                       <div className="flex justify-between">
//                         <span className="text-gray-400">Created Date:</span>
//                         <span className="text-white">
//                           {format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy")}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Payment Link */}
//                 <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                   <div className="flex justify-between items-center mb-2">
//                     <h4 className="font-semibold">Payment Link</h4>
//                     <button
//                       onClick={() => copyToClipboard(viewTransaction.paymentLink)}
//                       className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
//                     >
//                       <FiCopy size={14} /> Copy Link
//                     </button>
//                   </div>
//                   <div className="bg-gray-700 p-2 rounded text-sm text-gray-300 break-all">
//                     {viewTransaction.paymentLink}
//                   </div>
//                 </div>

//                 {/* Remark */}
//                 {viewTransaction.remark && (
//                   <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
//                     <h4 className="font-semibold mb-2">Remark</h4>
//                     <p className="text-gray-300">{viewTransaction.remark}</p>
//                   </div>
//                 )}

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
//                   {viewTransaction.status === "Pending" && (
//                     <button
//                       onClick={() => updateTransactionStatus(viewTransaction.id, "Paid")}
//                       className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2"
//                     >
//                       <FiCheckCircle size={18} /> Mark as Paid
//                     </button>
//                   )}

//                   {viewTransaction.status === "Pending" && (
//                     <button
//                       onClick={() => updateTransactionStatus(viewTransaction.id, "Failed")}
//                       className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center gap-2"
//                     >
//                       <FiXCircle size={18} /> Mark as Failed
//                     </button>
//                   )}

//                   <button
//                     onClick={handleEditTransaction}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
//                   >
//                     <FiEdit size={18} /> Edit Transaction
//                   </button>

//                   {viewTransaction.status === "Paid" && (
//                     <button
//                       onClick={handlePrint}
//                       className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center gap-2"
//                     >
//                       <FiPrinter size={18} /> Print Receipt
//                     </button>
//                   )}
//                 </div>

//                 {/* Send Receipt Section */}
//                 {viewTransaction.status === "Paid" && (
//                   <div className="pt-4 border-t border-gray-700">
//                     <h4 className="font-semibold mb-3">Send Receipt</h4>
//                     <div className="flex gap-2">
//                       <input
//                         type="email"
//                         value={sendReceiptEmail}
//                         onChange={(e) => setSendReceiptEmail(e.target.value)}
//                         placeholder="Enter email address"
//                         className="flex-grow p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
//                       />
//                       <button
//                         onClick={handleSendReceipt}
//                         className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 flex items-center gap-2 whitespace-nowrap"
//                       >
//                         <FiSend size={18} /> Send
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Receipt Preview (hidden, used for printing) */}
//               <div className="hidden">
//                 <div ref={receiptRef} className="p-8 bg-white text-black">
//                   <div className="text-center mb-6">
//                     <h2 className="text-2xl font-bold">Payment Receipt</h2>
//                     <p className="text-gray-600">Transaction #{viewTransaction.transactionId || viewTransaction.id}</p>
//                   </div>

//                   <div className="flex justify-between mb-6">
//                     <div>
//                       <h3 className="font-bold">From:</h3>
//                       <p>Your Company Name</p>
//                       <p>123 Business Street</p>
//                       <p>City, State, ZIP</p>
//                       <p>contact@yourcompany.com</p>
//                     </div>
//                     <div className="text-right">
//                       <h3 className="font-bold">To:</h3>
//                       <p>{viewTransaction.name}</p>
//                       <p>{viewTransaction.company}</p>
//                       <p>{viewTransaction.mobile}</p>
//                       <p>{viewTransaction.email || ""}</p>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h3 className="font-bold mb-2">Payment Details:</h3>
//                     <div className="border-t border-b border-gray-300 py-2">
//                       <div className="flex justify-between py-1">
//                         <span>Payment Date:</span>
//                         <span>
//                           {viewTransaction.paidAt ? format(new Date(viewTransaction.paidAt), "MMMM dd, yyyy") : "N/A"}
//                         </span>
//                       </div>
//                       <div className="flex justify-between py-1">
//                         <span>Payment Method:</span>
//                         <span>{viewTransaction.paymentMethod || "N/A"}</span>
//                       </div>
//                       <div className="flex justify-between py-1">
//                         <span>Transaction ID:</span>
//                         <span>{viewTransaction.transactionId || "N/A"}</span>
//                       </div>
//                       <div className="flex justify-between py-1">
//                         <span>Category:</span>
//                         <span>{viewTransaction.category}</span>
//                       </div>
//                       {viewTransaction.service && (
//                         <div className="flex justify-between py-1">
//                           <span>Service:</span>
//                           <span>{viewTransaction.service}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h3 className="font-bold mb-2">Payment Summary:</h3>
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-gray-100">
//                           <th className="border border-gray-300 p-2 text-left">Description</th>
//                           <th className="border border-gray-300 p-2 text-right">Amount</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className="border border-gray-300 p-2">
//                             {viewTransaction.service || viewTransaction.remark || viewTransaction.category}
//                           </td>
//                           <td className="border border-gray-300 p-2 text-right">
//                             {viewTransaction.currency} {viewTransaction.amount}
//                           </td>
//                         </tr>
//                         <tr className="bg-gray-100 font-bold">
//                           <td className="border border-gray-300 p-2">Total</td>
//                           <td className="border border-gray-300 p-2 text-right">
//                             {viewTransaction.currency} {viewTransaction.amount}
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>

//                   <div className="text-center text-gray-600 text-sm mt-8">
//                     <p>Thank you for your business!</p>
//                     <p>This is a computer-generated receipt and does not require a signature.</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Transaction

"use client"

import { useState, useRef, useEffect } from "react"
import {
  FiCopy,
  FiRefreshCw,
  FiDownload,
  FiFilter,
  FiDollarSign,
  FiUser,
  FiPhone,
  FiMessageSquare,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiAlertCircle,
  FiPrinter,
  FiSend,
  FiBarChart2,
  FiSearch,
  FiX,
  FiArrowLeft,
  FiArrowRight,
  FiPlus,
  FiList,
  FiTag,
  FiPackage,
  FiCalendar,
  FiFileText,
  FiTool,
  FiLink,
  FiCreditCard,
  FiInfo,
  FiMail,
  FiChevronRight,
} from "react-icons/fi"
import { toast, Toaster } from "react-hot-toast"
import { motion, AnimatePresence } from "framer-motion"
import Header from "../components/Common/Header"
import { format, subDays, isAfter, isBefore, parseISO } from "date-fns"
import { CSVLink } from "react-csv"
import { useReactToPrint } from "react-to-print"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock data for initial transactions
const MOCK_TRANSACTIONS = [
  {
    id: 1,
    name: "John Doe",
    mobile: "123-456-7890",
    email: "john@example.com",
    amount: "299.99",
    company: "Acme Inc",
    remark: "Monthly subscription",
    paymentLink: "https://paymentgateway.com/pay/abc123def456",
    status: "Paid",
    paymentMethod: "Credit Card",
    transactionId: "TXN78901234",
    createdAt: subDays(new Date(), 2).toISOString(),
    paidAt: subDays(new Date(), 1).toISOString(),
    category: "Subscription",
    currency: "USD",
    service: "Premium Plan",
  },
  {
    id: 2,
    name: "Jane Smith",
    mobile: "987-654-3210",
    email: "jane@example.com",
    amount: "149.50",
    company: "Tech Solutions",
    remark: "One-time service",
    paymentLink: "https://paymentgateway.com/pay/ghi789jkl012",
    status: "Pending",
    paymentMethod: null,
    transactionId: null,
    createdAt: subDays(new Date(), 3).toISOString(),
    paidAt: null,
    category: "Service",
    currency: "USD",
    service: "Website Maintenance",
  },
  {
    id: 3,
    name: "Robert Johnson",
    mobile: "555-123-4567",
    email: "robert@example.com",
    amount: "599.99",
    company: "Global Enterprises",
    remark: "Premium package",
    paymentLink: "https://paymentgateway.com/pay/mno345pqr678",
    status: "Failed",
    paymentMethod: "PayPal",
    transactionId: "TXN45678901",
    createdAt: subDays(new Date(), 5).toISOString(),
    paidAt: null,
    category: "Package",
    currency: "USD",
    service: "Enterprise Solution",
  },
  {
    id: 4,
    name: "Emily Davis",
    mobile: "333-888-7777",
    email: "emily@example.com",
    amount: "79.99",
    company: "Digital Services",
    remark: "Monthly plan",
    paymentLink: "https://paymentgateway.com/pay/stu901vwx234",
    status: "Paid",
    paymentMethod: "Bank Transfer",
    transactionId: "TXN12345678",
    createdAt: subDays(new Date(), 10).toISOString(),
    paidAt: subDays(new Date(), 9).toISOString(),
    category: "Subscription",
    currency: "USD",
    service: "Basic Plan",
  },
  {
    id: 5,
    name: "Michael Wilson",
    mobile: "222-999-8888",
    email: "michael@example.com",
    amount: "1299.99",
    company: "Enterprise Solutions",
    remark: "Annual contract",
    paymentLink: "https://paymentgateway.com/pay/yza567bcd890",
    status: "Pending",
    paymentMethod: null,
    transactionId: null,
    createdAt: subDays(new Date(), 1).toISOString(),
    paidAt: null,
    category: "Contract",
    currency: "USD",
    service: "Annual Support",
  },
]

// Transaction status options
const STATUS_OPTIONS = ["All", "Paid", "Pending", "Failed", "Refunded", "Expired"]

// Payment method options
const PAYMENT_METHODS = ["Credit Card", "Debit Card", "PayPal", "Bank Transfer", "Crypto", "Mobile Payment"]

// Category options (removed One-time)
const CATEGORIES = ["All", "Subscription", "Service", "Package", "Contract", "Other"]

// Services by category (removed One-time)
const SERVICES_BY_CATEGORY = {
  Subscription: ["Basic Plan", "Standard Plan", "Premium Plan", "Enterprise Plan", "Custom Plan"],
  Service: [
    "Website Development",
    "Website Maintenance",
    "SEO Optimization",
    "Content Creation",
    "Graphic Design",
    "Digital Marketing",
    "IT Support",
  ],
  Package: ["Starter Package", "Business Package", "Enterprise Solution", "Custom Package", "All-in-One Solution"],
  Contract: ["Monthly Support", "Quarterly Support", "Annual Support", "Project-based Contract", "Retainer Agreement"],
  Other: ["Miscellaneous", "Donation", "Refund", "Adjustment", "Credit"],
}

// Currency options
const CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "INR"]

// Date range options
const DATE_RANGES = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Last 7 days", value: "week" },
  { label: "Last 30 days", value: "month" },
  { label: "Custom", value: "custom" },
]

const Transaction = () => {
  // State management
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS)
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    amount: "",
    company: "",
    remark: "",
    category: "Service",
    currency: "USD",
    service: "",
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")
  const [filterCategory, setFilterCategory] = useState("All")
  const [filterDateRange, setFilterDateRange] = useState("month")
  const [customDateRange, setCustomDateRange] = useState({
    startDate: format(subDays(new Date(), 30), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  })
  const [sortField, setSortField] = useState("createdAt")
  const [sortDirection, setSortDirection] = useState("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const [viewTransaction, setViewTransaction] = useState(null)
  const [showFilters, setShowFilters] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)
  const [sendReceiptEmail, setSendReceiptEmail] = useState("")
  const [showTransactionModal, setShowTransactionModal] = useState(false)
  const [availableServices, setAvailableServices] = useState([])

  // Refs
  const receiptRef = useRef(null)

  // Update available services when category changes
  useEffect(() => {
    if (formData.category && SERVICES_BY_CATEGORY[formData.category]) {
      setAvailableServices(SERVICES_BY_CATEGORY[formData.category])
      // Set default service if none is selected
      if (!formData.service && SERVICES_BY_CATEGORY[formData.category].length > 0) {
        setFormData((prev) => ({
          ...prev,
          service: SERVICES_BY_CATEGORY[formData.category][0],
        }))
      }
    } else {
      setAvailableServices([])
    }
  }, [formData.category])

  // Handle print receipt
  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
    documentTitle: `Receipt-${viewTransaction?.transactionId || viewTransaction?.id}`,
    onAfterPrint: () => toast.success("Receipt printed successfully!"),
  })

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Open transaction modal
  const openTransactionModal = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      amount: "",
      company: "",
      remark: "",
      category: "Service",
      currency: "USD",
      service: SERVICES_BY_CATEGORY["Service"][0],
    })
    setShowTransactionModal(true)
  }

  // Generate payment link
  const generatePaymentLink = () => {
    if (!formData.name || !formData.mobile || !formData.amount || !formData.company) {
      toast.error("Please fill all required fields.")
      return
    }

    const paymentLink = `https://paymentgateway.com/pay/${Math.random().toString(36).substr(2, 9)}`
    const newTransaction = {
      id: transactions.length + 1,
      ...formData,
      paymentLink,
      status: "Pending",
      paymentMethod: null,
      transactionId: null,
      createdAt: new Date().toISOString(),
      paidAt: null,
    }

    setTransactions((prev) => [newTransaction, ...prev])
    setFormData({
      name: "",
      mobile: "",
      email: "",
      amount: "",
      company: "",
      remark: "",
      category: "Service",
      currency: "USD",
      service: "",
    })
    toast.success("Payment link generated!")
    setShowTransactionModal(false)
  }

  // Copy payment link to clipboard
  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link)
    toast.success("Payment link copied!")
  }

  // Update transaction status
  const updateTransactionStatus = (id, newStatus) => {
    setTransactions((prev) =>
      prev.map((txn) => {
        if (txn.id === id) {
          const updatedTxn = {
            ...txn,
            status: newStatus,
            paidAt: newStatus === "Paid" ? new Date().toISOString() : txn.paidAt,
            paymentMethod: newStatus === "Paid" ? txn.paymentMethod || PAYMENT_METHODS[0] : txn.paymentMethod,
            transactionId:
              newStatus === "Paid"
                ? txn.transactionId || `TXN${Math.floor(Math.random() * 100000000)}`
                : txn.transactionId,
          }

          // If we're viewing this transaction, update the view
          if (viewTransaction && viewTransaction.id === id) {
            setViewTransaction(updatedTxn)
          }

          return updatedTxn
        }
        return txn
      }),
    )
    toast.success(`Transaction status updated to ${newStatus}!`)
  }

  // Refresh transactions (simulate status updates)
  const refreshTransactions = () => {
    setTransactions((prev) =>
      prev.map((txn) => {
        if (txn.status === "Pending" && Math.random() > 0.6) {
          const newStatus = Math.random() > 0.8 ? "Failed" : "Paid"
          return {
            ...txn,
            status: newStatus,
            paidAt: newStatus === "Paid" ? new Date().toISOString() : txn.paidAt,
            paymentMethod:
              newStatus === "Paid"
                ? PAYMENT_METHODS[Math.floor(Math.random() * PAYMENT_METHODS.length)]
                : txn.paymentMethod,
            transactionId: newStatus === "Paid" ? `TXN${Math.floor(Math.random() * 100000000)}` : txn.transactionId,
          }
        }
        return txn
      }),
    )
    toast.success("Transactions updated!")
  }

  // Send receipt via email
  const handleSendReceipt = () => {
    if (!sendReceiptEmail) {
      toast.error("Please enter an email address")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sendReceiptEmail)) {
      toast.error("Please enter a valid email address")
      return
    }

    toast.success(`Receipt sent to ${sendReceiptEmail}`)
    setSendReceiptEmail("")
  }

  // Filter transactions based on search, status, category, and date range
  const getFilteredTransactions = () => {
    return transactions.filter((txn) => {
      // Search query filter
      const matchesSearch =
        txn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        txn.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (txn.transactionId && txn.transactionId.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (txn.email && txn.email.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesStatus = filterStatus === "All" || txn.status === filterStatus

      // Category filter
      const matchesCategory = filterCategory === "All" || txn.category === filterCategory

      // Date range filter
      let matchesDateRange = true
      const txnDate = parseISO(txn.createdAt)

      if (filterDateRange === "today") {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        matchesDateRange = isAfter(txnDate, today) && isBefore(txnDate, tomorrow)
      } else if (filterDateRange === "yesterday") {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        yesterday.setHours(0, 0, 0, 0)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        matchesDateRange = isAfter(txnDate, yesterday) && isBefore(txnDate, today)
      } else if (filterDateRange === "week") {
        const weekAgo = subDays(new Date(), 7)
        matchesDateRange = isAfter(txnDate, weekAgo)
      } else if (filterDateRange === "month") {
        const monthAgo = subDays(new Date(), 30)
        matchesDateRange = isAfter(txnDate, monthAgo)
      } else if (filterDateRange === "custom") {
        const startDate = parseISO(`${customDateRange.startDate}T00:00:00`)
        const endDate = parseISO(`${customDateRange.endDate}T23:59:59`)
        matchesDateRange = isAfter(txnDate, startDate) && isBefore(txnDate, endDate)
      }

      return matchesSearch && matchesStatus && matchesCategory && matchesDateRange
    })
  }

  // Sort transactions
  const getSortedTransactions = () => {
    const filtered = getFilteredTransactions()

    return filtered.sort((a, b) => {
      let aValue = a[sortField]
      let bValue = b[sortField]

      // Handle dates
      if (sortField === "createdAt" || sortField === "paidAt") {
        aValue = aValue ? new Date(aValue).getTime() : 0
        bValue = bValue ? new Date(bValue).getTime() : 0
      }

      // Handle numbers
      if (sortField === "amount") {
        aValue = Number.parseFloat(aValue)
        bValue = Number.parseFloat(bValue)
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })
  }

  // Pagination
  const paginatedTransactions = () => {
    const sorted = getSortedTransactions()
    const startIndex = (currentPage - 1) * itemsPerPage
    return sorted.slice(startIndex, startIndex + itemsPerPage)
  }

  // Toggle sort direction
  const toggleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  // Prepare data for CSV export
  const csvData = [
    [
      "ID",
      "Name",
      "Mobile",
      "Email",
      "Amount",
      "Currency",
      "Company",
      "Category",
      "Service",
      "Status",
      "Created Date",
      "Paid Date",
      "Payment Method",
      "Transaction ID",
      "Remark",
    ],
    ...getFilteredTransactions().map((txn) => [
      txn.id,
      txn.name,
      txn.mobile,
      txn.email || "",
      txn.amount,
      txn.currency,
      txn.company,
      txn.category,
      txn.service || "",
      txn.status,
      format(new Date(txn.createdAt), "yyyy-MM-dd HH:mm"),
      txn.paidAt ? format(new Date(txn.paidAt), "yyyy-MM-dd HH:mm") : "",
      txn.paymentMethod || "",
      txn.transactionId || "",
      txn.remark || "",
    ]),
  ]

  // Prepare analytics data
  const getAnalyticsData = () => {
    const filtered = getFilteredTransactions()

    // Status distribution
    const statusData = STATUS_OPTIONS.filter((status) => status !== "All")
      .map((status) => {
        const count = filtered.filter((txn) => txn.status === status).length
        return { name: status, value: count }
      })
      .filter((item) => item.value > 0)

    // Category distribution
    const categoryData = CATEGORIES.filter((cat) => cat !== "All")
      .map((category) => {
        const count = filtered.filter((txn) => txn.category === category).length
        return { name: category, value: count }
      })
      .filter((item) => item.value > 0)

    // Daily transactions (last 7 days)
    const dailyData = []
    for (let i = 6; i >= 0; i--) {
      const date = subDays(new Date(), i)
      const dateStr = format(date, "MMM dd")
      const txns = filtered.filter((txn) => {
        const txnDate = new Date(txn.createdAt)
        return (
          txnDate.getDate() === date.getDate() &&
          txnDate.getMonth() === date.getMonth() &&
          txnDate.getFullYear() === date.getFullYear()
        )
      })

      const totalAmount = txns.reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
      const paidAmount = txns
        .filter((txn) => txn.status === "Paid")
        .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)

      dailyData.push({
        name: dateStr,
        total: totalAmount.toFixed(2),
        paid: paidAmount.toFixed(2),
      })
    }

    return { statusData, categoryData, dailyData }
  }

  // Analytics data
  const analyticsData = getAnalyticsData()

  // Colors for pie charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#FF6B6B"]

  // Calculate total and statistics
  const stats = (() => {
    const filtered = getFilteredTransactions()
    const total = filtered.reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
    const paid = filtered
      .filter((txn) => txn.status === "Paid")
      .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)
    const pending = filtered
      .filter((txn) => txn.status === "Pending")
      .reduce((sum, txn) => sum + Number.parseFloat(txn.amount), 0)

    return {
      total: total.toFixed(2),
      paid: paid.toFixed(2),
      pending: pending.toFixed(2),
      count: filtered.length,
      paidCount: filtered.filter((txn) => txn.status === "Paid").length,
      pendingCount: filtered.filter((txn) => txn.status === "Pending").length,
      failedCount: filtered.filter((txn) => txn.status === "Failed").length,
    }
  })()

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Subscription":
        return <FiCalendar className="mr-2" />
      case "Service":
        return <FiTool className="mr-2" />
      case "Package":
        return <FiPackage className="mr-2" />
      case "Contract":
        return <FiFileText className="mr-2" />
      default:
        return <FiTag className="mr-2" />
    }
  }

  return (
    <div className="flex-1 overflow-auto bg-gray-900 text-white min-h-screen">
      <Header title={"Transactions"} />
      

      <div className="flex flex-col w-full p-4 md:p-6 overflow-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <motion.div
            className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 rounded-lg shadow-lg border border-blue-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-300 text-sm">Total Amount</p>
                <h3 className="text-2xl font-bold">${stats.total}</h3>
                <p className="text-blue-300 text-sm">{stats.count} transactions</p>
              </div>
              <div className="bg-blue-700 p-3 rounded-full">
                <FiDollarSign size={24} className="text-blue-200" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-green-900 to-green-800 p-4 rounded-lg shadow-lg border border-green-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-300 text-sm">Paid Amount</p>
                <h3 className="text-2xl font-bold">${stats.paid}</h3>
                <p className="text-green-300 text-sm">{stats.paidCount} transactions</p>
              </div>
              <div className="bg-green-700 p-3 rounded-full">
                <FiCheckCircle size={24} className="text-green-200" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-yellow-900 to-yellow-800 p-4 rounded-lg shadow-lg border border-yellow-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-yellow-300 text-sm">Pending Amount</p>
                <h3 className="text-2xl font-bold">${stats.pending}</h3>
                <p className="text-yellow-300 text-sm">{stats.pendingCount} transactions</p>
              </div>
              <div className="bg-yellow-700 p-3 rounded-full">
                <FiClock size={24} className="text-yellow-200" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-red-900 to-red-800 p-4 rounded-lg shadow-lg border border-red-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-red-300 text-sm">Failed Transactions</p>
                <h3 className="text-2xl font-bold">{stats.failedCount}</h3>
                <p className="text-red-300 text-sm">Need attention</p>
              </div>
              <div className="bg-red-700 p-3 rounded-full">
                <FiXCircle size={24} className="text-red-200" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <motion.button
            onClick={openTransactionModal}
            className="px-4 py-2 rounded-lg flex items-center gap-2 bg-blue-600 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPlus size={18} />
            New Transaction
          </motion.button>

          <motion.button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${showFilters ? "bg-gray-700 text-gray-300" : "bg-purple-600 text-white"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiFilter size={18} />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </motion.button>

          <motion.button
            onClick={() => setShowAnalytics(!showAnalytics)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${showAnalytics ? "bg-gray-700 text-gray-300" : "bg-green-600 text-white"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiBarChart2 size={18} />
            {showAnalytics ? "Hide Analytics" : "Show Analytics"}
          </motion.button>

          <motion.button
            onClick={refreshTransactions}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiRefreshCw size={18} />
            Refresh Status
          </motion.button>

          <CSVLink
            data={csvData}
            filename={`transactions-${format(new Date(), "yyyy-MM-dd")}.csv`}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg flex items-center gap-2"
          >
            <FiDownload size={18} />
            Export CSV
          </CSVLink>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="w-full mb-6 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4 text-purple-400">Advanced Filters</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-400">Status</label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
                  >
                    {STATUS_OPTIONS.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-400">Category</label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
                  >
                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-400">Date Range</label>
                  <select
                    value={filterDateRange}
                    onChange={(e) => setFilterDateRange(e.target.value)}
                    className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
                  >
                    {DATE_RANGES.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {filterDateRange === "custom" && (
                  <>
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Start Date</label>
                      <input
                        type="date"
                        value={customDateRange.startDate}
                        onChange={(e) => setCustomDateRange({ ...customDateRange, startDate: e.target.value })}
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">End Date</label>
                      <input
                        type="date"
                        value={customDateRange.endDate}
                        onChange={(e) => setCustomDateRange({ ...customDateRange, endDate: e.target.value })}
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="mt-4 flex items-center">
                <div className="relative flex-grow">
                  <FiSearch className="absolute left-3 top-3 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, company, or transaction ID"
                    className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3 text-gray-400 hover:text-white"
                    >
                      <FiX size={16} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Analytics */}
        <AnimatePresence>
          {showAnalytics && (
            <motion.div
              className="w-full mb-6 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4 text-green-400">Transaction Analytics</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Daily Transactions Chart */}
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 text-gray-300">Daily Transactions (Last 7 Days)</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analyticsData.dailyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#999" />
                        <YAxis stroke="#999" />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
                          labelStyle={{ color: "#fff" }}
                        />
                        <Legend />
                        <Bar dataKey="total" name="Total Amount" fill="#3B82F6" />
                        <Bar dataKey="paid" name="Paid Amount" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Status and Category Distribution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Status Distribution */}
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold mb-4 text-gray-300">Status Distribution</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={analyticsData.statusData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {analyticsData.statusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
                            labelStyle={{ color: "#fff" }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Category Distribution */}
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold mb-4 text-gray-300">Category Distribution</h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={analyticsData.categoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {analyticsData.categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{ backgroundColor: "#333", border: "1px solid #555" }}
                            labelStyle={{ color: "#fff" }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transactions List */}
        <div className="w-full bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-blue-400">Transaction List</h3>
            <p className="text-gray-400 text-sm">
              Showing {paginatedTransactions().length} of {getFilteredTransactions().length} transactions
            </p>
          </div>

          {getFilteredTransactions().length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <FiAlertCircle size={48} className="mx-auto mb-4 text-gray-500" />
              <p>No transactions found matching your criteria.</p>
              <p className="text-sm mt-2">Try adjusting your filters or create a new transaction.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {paginatedTransactions().map((txn) => (
                <motion.div
                  key={txn.id}
                  className={`bg-gray-900 rounded-lg overflow-hidden border ${
                    txn.status === "Paid"
                      ? "border-green-700"
                      : txn.status === "Pending"
                        ? "border-yellow-700"
                        : txn.status === "Failed"
                          ? "border-red-700"
                          : "border-gray-700"
                  } hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setViewTransaction(txn)}
                >
                  <div
                    className={`p-3 flex justify-between items-center ${
                      txn.status === "Paid"
                        ? "bg-green-900/30"
                        : txn.status === "Pending"
                          ? "bg-yellow-900/30"
                          : txn.status === "Failed"
                            ? "bg-red-900/30"
                            : "bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          txn.status === "Paid"
                            ? "bg-green-700"
                            : txn.status === "Pending"
                              ? "bg-yellow-700"
                              : txn.status === "Failed"
                                ? "bg-red-700"
                                : "bg-gray-700"
                        }`}
                      >
                        {txn.status === "Paid" ? (
                          <FiCheckCircle size={16} />
                        ) : txn.status === "Pending" ? (
                          <FiClock size={16} />
                        ) : (
                          <FiXCircle size={16} />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{txn.name}</p>
                        <p className="text-xs text-gray-400">{format(new Date(txn.createdAt), "MMM dd, yyyy")}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">
                        {txn.currency} {txn.amount}
                      </p>
                      <p
                        className={`text-xs ${
                          txn.status === "Paid"
                            ? "text-green-400"
                            : txn.status === "Pending"
                              ? "text-yellow-400"
                              : txn.status === "Failed"
                                ? "text-red-400"
                                : "text-gray-400"
                        }`}
                      >
                        {txn.status}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Company:</span>
                      <span className="text-gray-300">{txn.company}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-gray-300 flex items-center">
                        {getCategoryIcon(txn.category)}
                        {txn.category}
                      </span>
                    </div>

                    {txn.service && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Service:</span>
                        <span className="text-gray-300">{txn.service}</span>
                      </div>
                    )}

                    {txn.transactionId && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Transaction ID:</span>
                        <span className="text-gray-300">{txn.transactionId}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Mobile:</span>
                      <span className="text-gray-300">{txn.mobile}</span>
                    </div>
                  </div>

                  <div className="p-3 border-t border-gray-800 flex justify-between items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        copyToClipboard(txn.paymentLink)
                      }}
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                    >
                      <FiCopy size={14} /> Copy Link
                    </button>

                    {txn.status === "Pending" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          updateTransactionStatus(txn.id, "Paid")
                        }}
                        className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm"
                      >
                        <FiCheckCircle size={14} /> Mark Paid
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {getFilteredTransactions().length > itemsPerPage && (
            <div className="p-4 border-t border-gray-700 flex justify-center">
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded ${
                    currentPage === 1
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  <FiArrowLeft size={16} />
                </button>

                {Array.from(
                  { length: Math.min(5, Math.ceil(getFilteredTransactions().length / itemsPerPage)) },
                  (_, i) => {
                    // Calculate page numbers to show (centered around current page)
                    const totalPages = Math.ceil(getFilteredTransactions().length / itemsPerPage)
                    let startPage = Math.max(1, currentPage - 2)
                    const endPage = Math.min(startPage + 4, totalPages)

                    if (endPage - startPage < 4) {
                      startPage = Math.max(1, endPage - 4)
                    }

                    const pageNum = startPage + i
                    if (pageNum > totalPages) return null

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 rounded ${
                          currentPage === pageNum
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  },
                )}

                <button
                  onClick={() =>
                    setCurrentPage(
                      Math.min(Math.ceil(getFilteredTransactions().length / itemsPerPage), currentPage + 1),
                    )
                  }
                  disabled={currentPage === Math.ceil(getFilteredTransactions().length / itemsPerPage)}
                  className={`px-3 py-1 rounded ${
                    currentPage === Math.ceil(getFilteredTransactions().length / itemsPerPage)
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  <FiArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Transaction Modal */}
      <AnimatePresence>
        {showTransactionModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTransactionModal(false)}
          >
            <motion.div
              className="bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">Create New Transaction</h3>
                <button onClick={() => setShowTransactionModal(false)} className="text-gray-400 hover:text-white">
                  <FiX size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Name*</label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Customer Name"
                        className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Mobile*</label>
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Email</label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Amount*</label>
                    <div className="relative">
                      <FiDollarSign className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Payment Amount"
                        className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Currency</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                    >
                      {CURRENCIES.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Category</label>
                    <div className="flex items-center">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                      >
                        {CATEGORIES.filter((cat) => cat !== "All").map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                    >
                      {availableServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Company*</label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full p-2 pl-10 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1 md:col-span-2 lg:col-span-3">
                    <label className="text-sm text-gray-400">Remark</label>
                    <textarea
                      name="remark"
                      value={formData.remark}
                      onChange={handleChange}
                      placeholder="Additional Notes"
                      className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={generatePaymentLink}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Generate Payment Link
                  </button>
                  <button
                    onClick={() => setShowTransactionModal(false)}
                    className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transaction Detail Slider */}
      <AnimatePresence>
        {viewTransaction && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewTransaction(null)}
          >
            <motion.div
              className="bg-gray-900 w-full max-w-md sm:max-w-lg md:max-w-xl h-full overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  
                  Transaction Details
                </h3>
                <button onClick={() => setViewTransaction(null)} className="text-gray-400 hover:text-white">
                  <FiX size={24} />
                </button>
              </div>

              <div className="p-4 space-y-4">
                {/* Status Card */}
                <div
                  className={`rounded-lg overflow-hidden shadow-lg ${
                    viewTransaction.status === "Paid"
                      ? "bg-gradient-to-r from-green-500 to-green-800"
                      : viewTransaction.status === "Pending"
                        ? "bg-gradient-to-r from-yellow-900 to-yellow-800"
                        : "bg-gradient-to-r from-red-900 to-red-800"
                  }`}
                >
                  <div className="p-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center ${
                          viewTransaction.status === "Paid"
                            ? "bg-green-700"
                            : viewTransaction.status === "Pending"
                              ? "bg-yellow-700"
                              : "bg-red-700"
                        }`}
                      >
                        {viewTransaction.status === "Paid" ? (
                          <FiCheckCircle size={28} />
                        ) : viewTransaction.status === "Pending" ? (
                          <FiClock size={28} />
                        ) : (
                          <FiXCircle size={28} />
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">
                          {viewTransaction.status === "Paid"
                            ? "Payment Completed"
                            : viewTransaction.status === "Pending"
                              ? "Payment Pending"
                              : "Payment Failed"}
                        </h4>
                        <p className="text-sm opacity-80">
                          {viewTransaction.status === "Paid"
                            ? `Paid on ${format(new Date(viewTransaction.paidAt), "MMMM dd, yyyy")}`
                            : viewTransaction.status === "Pending"
                              ? `Created on ${format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy")}`
                              : `Last updated on ${format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy")}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amount Card */}
                <div className="bg-gradient-to-r from-purple-800 to-purple-500 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-5">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-blue-300 text-sm">Amount</p>
                        <h3 className="text-2xl font-bold">
                          {viewTransaction.currency} {viewTransaction.amount}
                        </h3>
                      </div>
                      <div className="bg-blue-700 p-3 rounded-full">
                        <FiDollarSign size={24} className="text-blue-200" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Info Card */}
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-700 flex items-center">
                    <FiUser className="text-purple-500 mr-2" />
                    <h4 className="text-lg font-semibold">Customer Information</h4>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center">
                      <FiUser className="text-purple-500 mr-3 w-5" />
                      <div>
                        <p className="text-sm text-gray-400">Name</p>
                        <p className="font-medium">{viewTransaction.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FiPhone className="text-purple-500 mr-3 w-5" />
                      <div>
                        <p className="text-sm text-gray-400">Mobile</p>
                        <p>{viewTransaction.mobile}</p>
                      </div>
                    </div>
                    {viewTransaction.email && (
                      <div className="flex items-center">
                        <FiMail className="text-purple-500 mr-3 w-5" />
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p>{viewTransaction.email}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center">
                      <FiInfo className="text-purple-500 mr-3 w-5" />
                      <div>
                        <p className="text-sm text-gray-400">Company</p>
                        <p>{viewTransaction.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transaction Details Card */}
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-700 flex items-center">
                    <FiFileText className="text-purple-400 mr-2" />
                    <h4 className="text-lg font-semibold">Transaction Details</h4>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center">
                      <FiTag className="text-purple-500 mr-3 w-5" />
                      <div>
                        <p className="text-sm text-gray-400">Category</p>
                        <p className="flex items-center">
                          {getCategoryIcon(viewTransaction.category)}
                          {viewTransaction.category}
                        </p>
                      </div>
                    </div>
                    {viewTransaction.service && (
                      <div className="flex items-center">
                        <FiTool className="text-purple-500 mr-3 w-5" />
                        <div>
                          <p className="text-sm text-gray-400">Service</p>
                          <p>{viewTransaction.service}</p>
                        </div>
                      </div>
                    )}
                    {viewTransaction.paymentMethod && (
                      <div className="flex items-center">
                        <FiCreditCard className="text-purple-500 mr-3 w-5" />
                        <div>
                          <p className="text-sm text-gray-400">Payment Method</p>
                          <p>{viewTransaction.paymentMethod}</p>
                        </div>
                      </div>
                    )}
                    {viewTransaction.transactionId && (
                      <div className="flex items-center">
                        <FiList className="text-purple-500 mr-3 w-5" />
                        <div>
                          <p className="text-sm text-gray-400">Transaction ID</p>
                          <p>{viewTransaction.transactionId}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center">
                      <FiCalendar className="text-purple-500 mr-3 w-5" />
                      <div>
                        <p className="text-sm text-gray-400">Created Date</p>
                        <p>{format(new Date(viewTransaction.createdAt), "MMMM dd, yyyy")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Link Card */}
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-700 flex items-center">
                    <FiLink className="text-purple-400 mr-2" />
                    <h4 className="text-lg font-semibold">Payment Link</h4>
                  </div>
                  <div className="p-4">
                    <div className="bg-gray-900 p-3 rounded-lg flex items-center justify-between">
                      <p className="text-sm text-gray-300 truncate mr-2">{viewTransaction.paymentLink}</p>
                      <button
                        onClick={() => copyToClipboard(viewTransaction.paymentLink)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md flex-shrink-0"
                      >
                        <FiCopy size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remark Card */}
                {viewTransaction.remark && (
                  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4 border-b border-gray-700 flex items-center">
                      <FiMessageSquare className="text-purple-500 mr-2" />
                      <h4 className="text-lg font-semibold">Remark</h4>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300">{viewTransaction.remark}</p>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  {viewTransaction.status === "Pending" && (
                    <button
                      onClick={() => updateTransactionStatus(viewTransaction.id, "Paid")}
                      className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center gap-2"
                    >
                      <FiCheckCircle size={18} /> Mark as Paid
                    </button>
                  )}

                  {viewTransaction.status === "Pending" && (
                    <button
                      onClick={() => updateTransactionStatus(viewTransaction.id, "Failed")}
                      className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center gap-2"
                    >
                      <FiXCircle size={18} /> Mark as Failed
                    </button>
                  )}

                  {viewTransaction.status === "Paid" && (
                    <button
                      onClick={handlePrint}
                      className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center justify-center gap-2"
                    >
                      <FiPrinter size={18} /> Print Receipt
                    </button>
                  )}
                </div>

                {/* Send Receipt Section */}
                {viewTransaction.status === "Paid" && (
                  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4 border-b border-gray-700 flex items-center">
                      <FiSend className="text-purple-500 mr-2" />
                      <h4 className="text-lg font-semibold">Send Receipt</h4>
                    </div>
                    <div className="p-4">
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={sendReceiptEmail}
                          onChange={(e) => setSendReceiptEmail(e.target.value)}
                          placeholder="Enter email address"
                          className="flex-grow p-2 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={handleSendReceipt}
                          className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 flex items-center gap-2 whitespace-nowrap"
                        >
                          <FiSend size={18} /> Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Receipt Preview (hidden, used for printing) */}
              <div className="hidden">
                <div ref={receiptRef} className="p-8 bg-white text-black">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">Payment Receipt</h2>
                    <p className="text-gray-600">Transaction #{viewTransaction.transactionId || viewTransaction.id}</p>
                  </div>

                  <div className="flex justify-between mb-6">
                    <div>
                      <h3 className="font-bold">From:</h3>
                      <p>Your Company Name</p>
                      <p>123 Business Street</p>
                      <p>City, State, ZIP</p>
                      <p>contact@yourcompany.com</p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold">To:</h3>
                      <p>{viewTransaction.name}</p>
                      <p>{viewTransaction.company}</p>
                      <p>{viewTransaction.mobile}</p>
                      <p>{viewTransaction.email || ""}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Payment Details:</h3>
                    <div className="border-t border-b border-gray-300 py-2">
                      <div className="flex justify-between py-1">
                        <span>Payment Date:</span>
                        <span>
                          {viewTransaction.paidAt ? format(new Date(viewTransaction.paidAt), "MMMM dd, yyyy") : "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Payment Method:</span>
                        <span>{viewTransaction.paymentMethod || "N/A"}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Transaction ID:</span>
                        <span>{viewTransaction.transactionId || "N/A"}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Category:</span>
                        <span>{viewTransaction.category}</span>
                      </div>
                      {viewTransaction.service && (
                        <div className="flex justify-between py-1">
                          <span>Service:</span>
                          <span>{viewTransaction.service}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Payment Summary:</h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">Description</th>
                          <th className="border border-gray-300 p-2 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2">
                            {viewTransaction.service || viewTransaction.remark || viewTransaction.category}
                          </td>
                          <td className="border border-gray-300 p-2 text-right">
                            {viewTransaction.currency} {viewTransaction.amount}
                          </td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="border border-gray-300 p-2">Total</td>
                          <td className="border border-gray-300 p-2 text-right">
                            {viewTransaction.currency} {viewTransaction.amount}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="text-center text-gray-600 text-sm mt-8">
                    <p>Thank you for your business!</p>
                    <p>This is a computer-generated receipt and does not require a signature.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Transaction

