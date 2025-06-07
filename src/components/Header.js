import react from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import "../Styles/Header.css";
function Header() {
    return (
        <header className="Header">
            <div className="header-container">
             <p className="header-title">CollegeConnect</p>
            </div>
        </header>
    );
}
export default Header;


