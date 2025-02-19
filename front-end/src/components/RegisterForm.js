import React from "react";

const RegisterForm = ({ onSwitchToLogin }) => {
  return (
    <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-6">
        Register
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 dark:bg-teal-700 text-white py-2 rounded-md hover:bg-teal-700 dark:hover:bg-teal-800 transition-colors duration-300"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-teal-600 dark:text-teal-400 hover:underline"
          >
            Already have an account? Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;