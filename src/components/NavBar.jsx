// components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              SIE Programme
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link to="/team" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Our Team
            </Link>
            <Link to="/partners" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Partners
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
              About Us
            </Link>
            <Link to="/team" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
              Our Team
            </Link>
            <Link to="/partners" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
              Partners
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;