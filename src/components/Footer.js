import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">CollegeConnect</h3>
            <p className="text-sm">
              Your comprehensive hub for all college activities, announcements, and resources. Stay connected, stay informed!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact & Support</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm">Support Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 text-sm">Terms of Service</a></li>
            </ul>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/yourcollegeconnect" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/yourcollegeconnect" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/yourcollegeconnect" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CollegeConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}