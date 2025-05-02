// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Mission Statement */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">WISE Academy</h2>
            <p className="text-gray-300">
              Transforming education through innovation and technology, preparing students for the challenges of tomorrow.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white transition">Our Team</a></li>
              <li><a href="/partners" className="text-gray-300 hover:text-white transition">Partners</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>0788 777 888</li>
              <li>0780 111 910</li>
              <li>wiseacademyrw@gmail.com</li>
              <li>Kigali, Rwanda</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates.</p>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-400 mb-1">Your email</label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l text-gray-900 focus:outline-none w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r font-medium transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 WISE Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;