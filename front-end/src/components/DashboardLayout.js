import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50 dark:bg-blue-900">
      {/* Dashboard Header with Logout Button */}
      <header className="bg-white dark:bg-blue-800 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="flex-grow p-4">
        <Outlet /> {/* This will render the nested routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;