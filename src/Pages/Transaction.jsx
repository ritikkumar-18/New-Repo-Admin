// import React, { useState } from "react";
// import { FiCopy, FiRefreshCw, FiCheckCircle, FiSearch, FiFilter } from "react-icons/fi";
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
//     setTransactions([...transactions, newTransaction]);
//     setFormData({ name: "", mobile: "", amount: "", company: "", remark: "" });
//     toast.success("Payment link generated!");
//   };

//   const copyToClipboard = (link) => {
//     navigator.clipboard.writeText(link);
//     toast.success("Payment link copied!");
//   };

//   const refreshTransactions = () => {
//     const updatedTransactions = transactions.map((txn) =>
//       Math.random() > 0.5 ? { ...txn, status: "Paid" } : txn
//     );
//     setTransactions(updatedTransactions);
//     toast.success("Transactions updated!");
//   };

//   const filteredTransactions = transactions.filter((txn) =>
//     (filterStatus === "All" || txn.status === filterStatus) && txn.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900 ">
//       <Header title={"Transactions"} />
//     <div className="flex flex-col w-full h-screen p-6 bg-gray-900 text-white overflow-auto">
//       <motion.div className="w-full max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//         <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">Transaction Management</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" />
//           <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" />
//           <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" />
//           <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500" />
//           <textarea name="remark" value={formData.remark} onChange={handleChange} placeholder="Remark (optional)" className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2" />
//         </div>
//         <button onClick={generatePaymentLink} className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-all duration-300">Generate Payment Link</button>
//       </motion.div>

//       <motion.div className="w-full max-w-5xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//         <div className="flex justify-between mb-4">
//           <h3 className="text-2xl font-semibold text-blue-400">Transactions</h3>
//           <div className="flex items-center gap-3">
//             <input type="text" placeholder="Search by Name" className="p-2 bg-gray-700 rounded-md border border-gray-600" onChange={(e) => setSearchQuery(e.target.value)} />
//             <select className="p-2 bg-gray-700 rounded-md border border-gray-600" onChange={(e) => setFilterStatus(e.target.value)}>
//               <option value="All">All</option>
//               <option value="Pending">Pending</option>
//               <option value="Paid">Paid</option>
//             </select>
//             <button onClick={refreshTransactions} className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700 transition-all duration-300"><FiRefreshCw /></button>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-700 text-white">
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Amount</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTransactions.map((txn) => (
//                 <tr key={txn.id} className="border-b border-gray-600 hover:bg-gray-700 transition-all">
//                   <td className="p-3">{txn.name}</td>
//                   <td className="p-3">${txn.amount}</td>
//                   <td className="p-3 text-yellow-400">{txn.status}</td>
//                   <td className="p-3">
//                     <button onClick={() => copyToClipboard(txn.paymentLink)} className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 transition-all duration-300"><FiCopy /> Copy Link</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </motion.div>
//     </div>
//     </div>
//   );
// };

// export default Transaction;
import React, { useState } from "react";
import { FiCopy, FiRefreshCw } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Header from "../components/Common/Header";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({ name: "", mobile: "", amount: "", company: "", remark: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePaymentLink = () => {
    if (!formData.name || !formData.mobile || !formData.amount || !formData.company) {
      toast.error("Please fill all required fields.");
      return;
    }

    const paymentLink = `https://paymentgateway.com/pay/${Math.random().toString(36).substr(2, 9)}`;
    const newTransaction = { id: transactions.length + 1, ...formData, paymentLink, status: "Pending" };
    setTransactions((prev) => [...prev, newTransaction]);
    setFormData({ name: "", mobile: "", amount: "", company: "", remark: "" });
    toast.success("Payment link generated!");
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link);
    toast.success("Payment link copied!");
  };

  const refreshTransactions = () => {
    setTransactions((prev) => prev.map((txn) => (Math.random() > 0.5 ? { ...txn, status: "Paid" } : txn)));
    toast.success("Transactions updated!");
  };

  const filteredTransactions = transactions.filter(
    (txn) =>
      (filterStatus === "All" || txn.status === filterStatus) &&
      txn.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-auto bg-gray-900 text-white">
      <Header title={"Transactions"} />
      <div className="flex flex-col w-full h-screen p-6 overflow-auto">
        <motion.div 
          className="w-full max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">Transaction Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(formData).map((key) => (
              <input
                key={key}
                type={key === "amount" ? "number" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                className="p-3 bg-gray-700 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
          <button 
            onClick={generatePaymentLink} 
            className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
          >Generate Payment Link</button>
        </motion.div>

        <motion.div 
          className="w-full max-w-5xl mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        >
          
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">Transactions</h3>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
         <input 
          type="text" 
           placeholder="Search by Name" 
          className="p-2 w-full sm:w-auto bg-gray-700 rounded-md border border-gray-600"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
    
    <select 
      className="p-2 w-full sm:w-auto bg-gray-700 rounded-md border border-gray-600" 
      onChange={(e) => setFilterStatus(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Paid">Paid</option>
    </select>

    <button 
      onClick={refreshTransactions} 
      className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700 transition-all duration-300"
    >
      <FiRefreshCw />
    </button>
  </div>
</div>


          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-3">Name</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((txn) => (
                  <tr key={txn.id} className="border-b border-gray-600 hover:bg-gray-700 transition-all">
                    <td className="p-3">{txn.name}</td>
                    <td className="p-3">${txn.amount}</td>
                    <td className={`p-3 ${txn.status === "Paid" ? "text-green-400" : "text-yellow-400"}`}>{txn.status}</td>
                    <td className="p-3">
                      <button 
                        onClick={() => copyToClipboard(txn.paymentLink)} 
                        className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 transition-all duration-300"
                      >Copy Link</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transaction;
