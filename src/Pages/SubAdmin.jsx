import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Header from "../components/Common/Header";

const SubAdmin = () => {
  const [subAdmins, setSubAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    permissions: {
      recruiter: { view: false, edit: false, list: false },
      subscription: { view: false, edit: false, list: false },
      payment: { view: false, edit: false, list: false },
    },
  });

  const handlePermissionChange = (tab, action) => {
    setNewAdmin((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [tab]: {
          ...prev.permissions[tab],
          [action]: !prev.permissions[tab][action],
        },
      },
    }));
  };

  const handleCreateSubAdmin = () => {
    if (!newAdmin.name.trim()) {
      toast.error("Sub-Admin name is required!");
      return;
    }

    setSubAdmins([...subAdmins, newAdmin]);

    toast.success("Sub-Admin created successfully!");

    setNewAdmin({
      name: "",
      permissions: {
        recruiter: { view: false, edit: false, list: false },
        subscription: { view: false, edit: false, list: false },
        payment: { view: false, edit: false, list: false },
      },
    });
  };

  const handleDeleteSubAdmin = (index) => {
    setSubAdmins(subAdmins.filter((_, i) => i !== index));
    toast.success("Sub-Admin deleted successfully!");
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Sub Admins"} />
      <div className="min-h-screen w-full bg-gray-900 text-white p-6">
        <motion.div
          className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Sub-Admin Name"
            value={newAdmin.name}
            onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
            className="w-full p-2 border rounded bg-gray-700 text-white mb-4"
          />

          <div className="grid md:grid-cols-3 gap-4">
            {["recruiter", "subscription", "payment"].map((tab) => (
              <div key={tab} className="border border-gray-700 p-4 rounded">
                <h3 className="font-semibold capitalize">{tab} Permissions</h3>
                {["view", "edit", "list"].map((action) => (
                  <label key={action} className="block mt-2">
                    <input
                      type="checkbox"
                      checked={newAdmin.permissions[tab][action]}
                      onChange={() => handlePermissionChange(tab, action)}
                      className="mr-2"
                    />
                    {action}
                  </label>
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={handleCreateSubAdmin}
            className="w-full mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            Create Sub-Admin
          </button>
        </motion.div>

        {subAdmins.length > 0 && (
          <motion.div
            className="max-w-6xl mx-auto mt-8 overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-center mb-4">Sub-Admins List</h3>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Recruiter</th>
                    <th className="py-2 px-4">Subscription</th>
                    <th className="py-2 px-4">Payment</th>
                    <th className="py-2 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subAdmins.map((admin, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <td className="py-2 px-4">{admin.name}</td>
                      <td className="py-2 px-4">
                        {Object.entries(admin.permissions.recruiter)
                          .filter(([_, allowed]) => allowed)
                          .map(([action]) => (
                            <span key={action} className="bg-blue-500 px-2 py-1 rounded text-sm mx-1">
                              {action}
                            </span>
                          ))}
                      </td>
                      <td className="py-2 px-4">
                        {Object.entries(admin.permissions.subscription)
                          .filter(([_, allowed]) => allowed)
                          .map(([action]) => (
                            <span key={action} className="bg-green-500 px-2 py-1 rounded text-sm mx-1">
                              {action}
                            </span>
                          ))}
                      </td>
                      <td className="py-2 px-4">
                        {Object.entries(admin.permissions.payment)
                          .filter(([_, allowed]) => allowed)
                          .map(([action]) => (
                            <span key={action} className="bg-yellow-500 px-2 py-1 rounded text-sm mx-1">
                              {action}
                            </span>
                          ))}
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button
                          onClick={() => handleDeleteSubAdmin(index)}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
                        >
                          Delete
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SubAdmin;
