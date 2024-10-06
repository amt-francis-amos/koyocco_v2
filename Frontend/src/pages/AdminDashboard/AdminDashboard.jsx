import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaChartBar, FaCog } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaUsers className="text-red-600 text-3xl mr-2" />
              <h2 className="text-xl font-semibold">User Statistics</h2>
            </div>
            <p className="text-gray-700">Total Users: <span className="font-bold">120</span></p>
            <p className="text-gray-700">Active Users: <span className="font-bold">85</span></p>
            <p className="text-gray-700">Inactive Users: <span className="font-bold">35</span></p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaChartBar className="text-red-600 text-3xl mr-2" />
              <h2 className="text-xl font-semibold">Recent Activities</h2>
            </div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>New user registered: <span className="font-bold">John Doe</span></li>
              <li>System update completed</li>
              <li>New feedback received</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaCog className="text-red-600 text-3xl mr-2" />
              <h2 className="text-xl font-semibold">Quick Links</h2>
            </div>
            <ul className="text-gray-700">
              <li><Link to="/admin/users" className="text-blue-600 hover:underline">Manage Users</Link></li>
              <li><Link to="/admin/settings" className="text-blue-600 hover:underline">Manage Settings</Link></li>
              <li><Link to="/admin/analytics" className="text-blue-600 hover:underline">View Analytics</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
