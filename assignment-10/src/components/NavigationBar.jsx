import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SUVA
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
