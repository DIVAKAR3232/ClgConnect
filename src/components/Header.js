import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import "../Styles/Header.css";
function Header() {
    return (
        <div>
            {/* // <div className="header-container"> */}
            
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
                </link>
                <nav class="bg-white shadow-md">
                <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    

                    <div class="text-2xl font-bold text-indigo-700">
                    CollegeConnect
                    </div>


                    <div class="flex items-center space-x-4">
                    

                    <button class="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    <div class="flex items-center space-x-2 bg-indigo-100 px-3 py-1 rounded-full">
                        <div class="bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold">
                        A
                        </div>
                        <span class="text-indigo-700 font-medium">Alex Smith</span>
                    </div>

                    </div>
                </div>
                </nav>
                <br></br>
        </div>
        
    );
}
export default Header;


