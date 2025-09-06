import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/SIE.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg py-2' : 'bg-black/90 backdrop-blur-sm py-4'} mb-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="SKAFF Academy Logo" 
                className="h-10 mr-3" 
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                SKAFF Academy
              </span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className={`text-gray-100 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                isActive('/') ? 'text-blue-600' : ''
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-100 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                isActive('/about') ? 'text-blue-600' : ''
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/programs" 
              className={`text-gray-100 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                isActive('/programs') ? 'text-blue-600' : ''
              }`}
            >
              Programs
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive('/programs') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/career" 
              className={`text-gray-100 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                isActive('/career') ? 'text-blue-600' : ''
              }`}
            >
              Careers
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isActive('/career') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md ${
                isActive('/contact') 
                  ? 'bg-gradient-to-r from-blue-700 to-blue-900 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900'
              }`}
            >
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
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
      
      {isOpen && (
        <div className="md:hidden bg-black shadow-lg pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-blue-600 bg-gray-900' 
                  : 'text-gray-100 hover:text-blue-600 hover:bg-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/about') 
                  ? 'text-blue-600 bg-gray-900' 
                  : 'text-gray-100 hover:text-blue-600 hover:bg-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/programs" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/programs') 
                  ? 'text-blue-600 bg-gray-900' 
                  : 'text-gray-100 hover:text-blue-600 hover:bg-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/career" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive('/career') 
                  ? 'text-blue-600 bg-gray-900' 
                  : 'text-gray-100 hover:text-blue-600 hover:bg-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium mt-2 transition-colors duration-300 ${
                isActive('/contact')
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;