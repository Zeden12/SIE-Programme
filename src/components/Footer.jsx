import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 w-full"></div>

      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SKAFF Academy
            </h2>
            <p className="text-sm text-gray-500 mb-4 font-medium">
              Powered by{" "}
              <span className="text-blue-300">SKAFF INVEST R GROUP</span>
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation through innovative education and
              cutting-edge technology.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com/profile.php?id=61572630885590 "
                className="text-gray-400 hover:text-blue-400 text-xl transition duration-300 transform hover:-translate-y-1"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572630885590 "
                className="text-gray-400 hover:text-sky-400 text-xl transition duration-300 transform hover:-translate-y-1"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572630885590 "
                className="text-gray-400 hover:text-blue-500 text-xl transition duration-300 transform hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/sie_program?igsh=MXZmYWt5emdraGR4NQ== "
                className="text-gray-400 hover:text-pink-500 text-xl transition duration-300 transform hover:-translate-y-1"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572630885590 "
                className="text-gray-400 hover:text-red-500 text-xl transition duration-300 transform hover:-translate-y-1"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                  About SKAFF Academy
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✆</span>
                <div>
                  <p className="hover:text-white transition duration-300">
                    +250 788 338 877
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">✉</span>
                <div>
                  <p className="hover:text-white transition duration-300">
                    skaffacademy@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">📍</span>
                <p className="hover:text-white transition duration-300">
                  Kigali Innovation City
                  <br />
                  Kigali, Rwanda
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Subscribe to our newsletter for programme updates, scholarship, Jobs and
              announcements.
            </p>
            <div className="flex flex-col">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-5 py-4 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} SKAFF Academy. All rights reserved. |
            <a
              href="/privacy"
              className="hover:text-gray-300 transition duration-300 ml-2"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/terms"
              className="hover:text-gray-300 transition duration-300 ml-2"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
