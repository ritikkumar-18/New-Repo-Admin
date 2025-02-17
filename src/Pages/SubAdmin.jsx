import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Plus, X, ToggleLeft, ToggleRight, Eye, Trash } from "lucide-react";
import Header from "../components/Common/Header";

const SubAdmin = () => {
  const [subAdmins, setSubAdmins] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      name: `Admin ${i + 1}`,
      email: `admin${i + 1}@example.com`,
      password: "********",
      joinedDate: "2024-01-10",
      lastActive: "2025-02-10",
      status: i % 2 === 0 ? "Active" : "Inactive",
      permissions: {
        recruiter: { view: true, edit: false, list: true },
        subscription: { view: true, edit: true, list: false },
        payment: { view: false, edit: false, list: true },
      },
    }))
  );

  const [showForm, setShowForm] = useState(false);
  const [showPermissions, setShowPermissions] = useState(false);
  const [viewAdmin, setViewAdmin] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const adminsPerPage = 10;

  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    joinedDate: new Date().toISOString().split("T")[0],
    lastActive: "N/A",
    status: "Active",
    permissions: {
      recruiter: { view: false, edit: false, list: false },
      subscription: { view: false, edit: false, list: false },
      payment: { view: false, edit: false, list: false },
    },
  });

  const togglePermission = (category, type) => {
    setNewAdmin((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [category]: {
          ...prev.permissions[category],
          [type]: !prev.permissions[category][type],
        },
      },
    }));
  };

  const handleCreateSubAdmin = () => {
    if (!newAdmin.name || !newAdmin.email || !newAdmin.password) {
      toast.error("All fields are required!");
      return;
    }
    setSubAdmins([newAdmin, ...subAdmins]);
    setShowForm(false);
    setShowPermissions(false);
    toast.success("Sub-Admin Created Successfully!");
    setNewAdmin({
      name: "",
      email: "",
      password: "",
      joinedDate: new Date().toISOString().split("T")[0],
      lastActive: "N/A",
      status: "Active",
      permissions: {
        recruiter: { view: false, edit: false, list: false },
        subscription: { view: false, edit: false, list: false },
        payment: { view: false, edit: false, list: false },
      },
    });
  };

  const handleDeleteAdmin = (index) => {
    setSubAdmins(subAdmins.filter((_, i) => i !== index));
    toast.success("Sub-Admin Deleted Successfully!");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredAdmins = subAdmins.filter(
    (admin) =>
      (admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterStatus === "All" || admin.status === filterStatus)
  );

  return (
    <div className="flex-1 overflow-auto relative bg-gray-900 text-white min-h-screen">
      <Header title="Sub Admins" />
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-10 right-10 bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        <Plus size={24} color="white" />
      </button>
      <div className="p-4 flex flex-col sm:flex-row gap-2 sm:justify-between">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full sm:w-auto p-2 rounded bg-gray-700 border border-gray-600"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setFilterStatus(filterStatus === "All" ? "Active" : filterStatus === "Active" ? "Inactive" : "All")
          }
          className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
        >
          {filterStatus === "Active" ? <ToggleLeft size={20} /> : <ToggleRight size={20} />}
          {filterStatus}
        </button>
      </div>
      <div className="p-4 rounded-lg overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-gray-700 text-sm">
          <thead>
            <tr className="border-b border-gray-700 bg-gray-700">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Joined Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAdmins.slice((currentPage - 1) * adminsPerPage, currentPage * adminsPerPage).map((admin, index) => (
              <tr key={index} className="border-b border-gray-700 text-center">
                <td className="p-2">{admin.name}</td>
                <td className="p-2">{admin.email}</td>
                <td className="p-2">{admin.joinedDate}</td>
                <td className="p-2">{admin.status}</td>
                <td className="p-2 flex gap-2 justify-center">
                  <button onClick={() => setViewAdmin(admin)} className="bg-green-500 p-1 rounded text-xs">
                    <Eye size={16} />
                  </button>
                  <button onClick={() => handleDeleteAdmin(index)} className="bg-red-500 p-1 rounded text-xs">
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(filteredAdmins.length / adminsPerPage))].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1 ? "bg-blue-500" : "bg-gray-700"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {/* View Modal */}
       {viewAdmin && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-center">Sub-Admin Details</h3>
            <p><strong>Name:</strong> {viewAdmin.name}</p>
            <p><strong>Email:</strong> {viewAdmin.email}</p>
            <p><strong>Joined:</strong> {viewAdmin.joinedDate}</p>
            <p><strong>Last Active:</strong> {viewAdmin.lastActive}</p>
            <h4 className="mt-4">Permissions:</h4>
            {Object.entries(viewAdmin.permissions).map(([key, value]) => (
              <div key={key}>
                <h5 className="capitalize">{key}</h5>
                {Object.entries(value).map(([perm, allowed]) => (
                  <span key={perm} className="text-xs px-2 py-1 bg-gray-700 rounded mr-1">
                    {perm}: {allowed ? "✅" : "❌"}
                  </span>
                ))}
              </div>
            ))}
            <button onClick={() => setViewAdmin(null)} className="w-full mt-4 bg-gray-600 p-2 rounded">
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* Create Sub-Admin Modal */}
      {showForm && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-lg border border-gray-700">
            <X className="cursor-pointer ml-auto" onClick={() => setShowForm(false)} />
            <h3 className="text-lg font-semibold mb-4 text-center">Create Sub-Admin</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-2 bg-gray-700 rounded"
              value={newAdmin.name}
              onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 bg-gray-700 rounded"
              value={newAdmin.email}
              onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 bg-gray-700 rounded"
              value={newAdmin.password}
              onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
            />
            <button
              onClick={() => setShowPermissions(true)}
              className="w-full bg-gray-600 p-2 rounded"
            >
              Set Permissions
            </button>
            <button
              onClick={handleCreateSubAdmin}
              className="w-full mt-4 bg-blue-500 p-2 rounded"
            >
              Create
            </button>
          </div>
        </motion.div>
      )}

      {/* Permission Modal */}
      {showPermissions && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-lg border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Set Permissions</h3>
              <X className="cursor-pointer" onClick={() => setShowPermissions(false)} />
            </div>

            {["recruiter", "subscription", "payment"].map((category) => (
              <div key={category} className="mb-4">
                <h4 className="capitalize font-semibold">{category}</h4>
                <div className="grid grid-cols-3 gap-3">
                  {["view", "edit", "list"].map((type) => (
                    <label key={type} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={newAdmin.permissions[category][type]}
                        onChange={() => togglePermission(category, type)}
                        className="w-4 h-4"
                      />
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={() => setShowPermissions(false)}
              className="w-full bg-blue-500 mt-4 p-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SubAdmin;
