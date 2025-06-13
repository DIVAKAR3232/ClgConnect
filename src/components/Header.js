import react from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../Styles/Header.css"; 
const Bell = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;

function Header() {
    return (
         <header className="bg-white custom-shadow p-4 md:px-8 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-700">CollegeConnect</h1>
        <div className="flex items-center space-x-4">
          <Link to="/signup">
          <button>SignUp/Login</button>
          </Link>
          <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <Bell size={22} />
          </button>
          <div className="flex items-center space-x-2 bg-indigo-100 rounded-full pr-3 pl-2 py-1 cursor-pointer">
            <img
              src="https://placehold.co/36x36/6366f1/ffffff?text=A" 
              alt="User Avatar"
              className="w-9 h-9 rounded-full border-2 border-indigo-400"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/36x36/6366f1/ffffff?text=A"; }}
            />
            <span className="font-medium text-base text-indigo-800 hidden sm:block">Alex Smith</span>
          </div>
        </div>
      </header>
    );
}
export default Header;