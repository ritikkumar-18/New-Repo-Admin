import React, { useState } from 'react';
import Header from '../components/Common/Header';
import { FiUsers, FiSettings, FiDollarSign, FiBarChart2, FiCalendar, FiCheckCircle, FiMail, FiFileText } from 'react-icons/fi';

const HRM = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Name Same", completed: false },
    { id: 2, text: "Update Your Subscription for using HRM Tools", completed: false },
    { id: 3, text: "Review Team Feedback", completed: false },
    { id: 4, text: "Schedule Performance Reviews", completed: false }
  ]);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [progress, setProgress] = useState(65);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    
    // Update progress based on completed tasks
    const completedCount = tasks.filter(t => t.completed).length;
    setProgress(Math.round((completedCount / tasks.length) * 100));
  };

  const hrmFeatures = [
    { title: "Recruitment", icon: <FiUsers size={24} />, desc: "Streamline hiring process" },
    { title: "Onboarding", icon: <FiSettings size={24} />, desc: "New hire integration" },
    { title: "Payroll", icon: <FiDollarSign size={24} />, desc: "Automated compensation" },
    { title: "Analytics", icon: <FiBarChart2 size={24} />, desc: "Workforce insights" },
    { title: "Scheduling", icon: <FiCalendar size={24} />, desc: "Manage employee shifts" },
    { title: "Compliance", icon: <FiCheckCircle size={24} />, desc: "Legal requirements" }
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 min-h-screen text-white">
      <Header title="HRM Dashboard" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Main Header */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Unblock your workflows, ship things faster
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            See how it's done on April 2
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-200">
            Save your spot
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left Column - Tasks */}
          <div className="w-full lg:w-1/2 bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-blue-400">
                <FiFileText className="inline mr-2" />
                Tasks Board
              </h2>
              <span className="text-sm text-gray-400">{tasks.filter(t => t.completed).length}/{tasks.length} completed</span>
            </div>
            
            <div className="space-y-3">
              {tasks.map(task => (
                <div 
                  key={task.id} 
                  className={`flex items-center gap-3 p-3 rounded-lg ${task.completed ? 'bg-gray-700' : 'bg-gray-800'}`}
                >
                  <input 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 rounded focus:ring-blue-500"
                  />
                  <span className={task.completed ? 'line-through text-gray-400' : ''}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="w-full lg:w-1/2 bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-6">
              <FiSettings className="inline mr-2" />
              HRM Tools
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hrmFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition cursor-pointer"
                  onClick={() => setActiveTab(feature.title.toLowerCase())}
                >
                  <div className="text-blue-400 mb-2">{feature.icon}</div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Progress Tracker */}
            <div className="mt-8 bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">
                  <FiBarChart2 className="inline mr-2" />
                  Monthly Completion
                </h3>
                <span className="text-sm text-blue-400">{progress}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional HRM Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-blue-400 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[
                "Updated payroll records",
                "New employee onboarded",
                "Performance review scheduled",
                "Training session completed"
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-blue-600 rounded-full p-1 mt-1">
                    <FiMail size={14} />
                  </div>
                  <div>
                    <p>{activity}</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-blue-400 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
                Add Employee
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition">
                Run Payroll
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition">
                Schedule Meeting
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRM;