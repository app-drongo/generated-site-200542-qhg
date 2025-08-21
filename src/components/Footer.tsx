// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T17:26:28.011Z
// Section: footer
// Category: footer
// Template ID: footer-c001
// Page: layout
// Component: Footer

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Invoicely</h3>
            <p className="text-gray-400 mb-4">
              Invoicely is a modern invoicing solution for small businesses and freelancers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Invoicing</a></li>
              <li><a href="#" className="hover:text-white">Expense Tracking</a></li>
              <li><a href="#" className="hover:text-white">Time Tracking</a></li>
              <li><a href="#" className="hover:text-white">Reporting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Webinars</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Invoicely. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;