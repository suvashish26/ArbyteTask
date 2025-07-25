import React from "react";

function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Admin Dashboard</h1>
      <p className="text-gray-700 mb-2">
        Manage your application settings and user accounts here.
      </p>
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          View Users
        </button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
          Settings
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
