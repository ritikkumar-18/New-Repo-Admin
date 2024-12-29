import { useState } from 'react';
import React from 'react';
import Header from '../components/Common/Header';
import { motion } from 'framer-motion';

const Payment = () => {
  const [subscription, setSubscription] = useState("monthly");
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2024-12-01", amount: "$50", type: "monthly" },
    { id: 2, date: "2024-12-05", amount: "$20", type: "pay-per-post" },
  ]);
  const [pricing, setPricing] = useState({
    "job-posting": 10,
    "premium-listing": 30,
    "featured-job": 50,
  });

  const [newPlan, setNewPlan] = useState({ name: "", price: "" });
  const [notification, setNotification] = useState("");
  const [filter, setFilter] = useState("all");

  const handleSubscriptionChange = (e) => {
    setSubscription(e.target.value);
  };

  const handlePricingChange = (e, type) => {
    setPricing((prevPricing) => ({
      ...prevPricing,
      [type]: e.target.value,
    }));
  };

  const handleNewPlanChange = (e) => {
    const { name, value } = e.target;
    setNewPlan((prevPlan) => ({
      ...prevPlan,
      [name]: value,
    }));
  };

  const addNewPlan = () => {
    if (newPlan.name && newPlan.price) {
      setSubscription(newPlan.name);
      setNotification(`New plan "${newPlan.name}" created successfully.`);

      setTimeout(() => {
        setNotification("");
      }, 2000);

      setNewPlan({ name: "", price: "" });
    } else {
      setNotification("Please fill in both fields for the new plan.");

      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true;
    return transaction.type === filter;
  });

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Subscription Plan"} />
      <motion.div className="container mx-auto px-6 md:px-8 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
        {notification && (
          <div className="bg-green-600 text-white p-3 rounded mb-6">
            {notification}
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Manage Subscription Plans</h2>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-200">Subscription Plan</label>
              <select
                className="mt-1 p-3 border border-gray-700 rounded bg-gray-800 w-full md:w-auto"
                value={subscription}
                onChange={handleSubscriptionChange}>
                <option value="monthly">Monthly</option>
                <option value="pay-per-post">Pay Per Post</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium  text-gray-200">Create New Subscription Plan</h3>
            <div className="flex space-x-4 mt-4">
              <input
                type="text"
                name="name"
                value={newPlan.name}
                onChange={handleNewPlanChange}
                className="p-3 border border-gray-700 bg-gray-900 rounded w-full md:w-1/3" placeholder="Plan Name" />
              <input
                type="number"
                name="price"
                value={newPlan.price}
                onChange={handleNewPlanChange}
                className="p-3 border border-gray-700 bg-gray-900 rounded w-full md:w-1/3" placeholder="Price" />
              <button
                onClick={addNewPlan}
                className="p-3 bg-blue-600 text-white rounded w-full md:w-auto"> Add Plan</button>
            </div>
          </div>
        </div>


        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Set Pricing for Job Postings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(pricing).map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <label className="w-1/3 text-sm text-gray-200">{type.replace("-", " ").toUpperCase()}:</label>
                <input
                  type="number"
                  className="p-3 border border-gray-700  bg-gray-900 rounded w-full md:w-1/2"
                  value={pricing[type]}
                  onChange={(e) => handlePricingChange(e, type)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="text-lg text-gray-200 mb-4 mr-9">Filter Transactions</label>
          <select
            value={filter}
            onChange={handleFilterChange}
            className="p-3 border border-gray-700 rounded bg-gray-800 w-full md:w-auto" >
            <option value="all">All</option>
            <option value="monthly">Monthly</option>
            <option value="pay-per-post">Pay Per Post</option>
          </select>
        </div>

        {/* Transaction History Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
          <div className="overflow-x-hidden">
            <table className="table-auto w-full border-collapse text-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 border border-gray-700">ID</th>
                  <th className="px-6 py-3 border border-gray-700">Date</th>
                  <th className="px-6 py-3 border border-gray-700">Amount</th>
                  <th className="px-6 py-3 border border-gray-700">Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-3 border border-gray-700">{transaction.id}</td>
                    <td className="px-6 py-3 border border-gray-700">{transaction.date}</td>
                    <td className="px-6 py-3 border border-gray-700">{transaction.amount}</td>
                    <td className="px-6 py-3 border border-gray-700">{transaction.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Payment;
