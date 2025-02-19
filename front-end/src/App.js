import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { motion } from "framer-motion";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router> {/* Wrap the entire app in Router */}
      <div className="min-h-screen bg-blue-50 dark:bg-blue-900 transition-colors duration-300 flex flex-col">
        <Navbar onLoginClick={openModal} />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="flex-grow flex flex-col items-center justify-center p-4 min-h-[calc(100vh-64px)]">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-6xl font-bold text-teal-600 dark:text-teal-400 mb-4 text-center"
                >
                  Welcome to PrimoS
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-xl text-teal-700 dark:text-teal-300 text-center"
                >
                  Your safe space for books and documents.
                </motion.p>
              </div>
            }
          />
        </Routes>
        <Footer />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          isLoginForm={isLoginForm}
          toggleForm={toggleForm}
        />
      </div>
    </Router>
  );
}

export default App;