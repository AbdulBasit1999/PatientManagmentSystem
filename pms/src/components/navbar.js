import { React,useState} from "react";
import { Outlet } from "react-router-dom";
import './navbar.css';

export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);
        return(
            <>
            <nav className="nav-container">
                <a href="/" className="brand-name">PMS</a>
                <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                    {/* icon from heroicons.com */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white">
                    <path fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"/>
                </svg>
                </button>
                <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/token">Token</a></li>
                        <li><a href="/patients">Patients</a></li>
                        <li><a href="/doctors">Doctors</a></li>
                        <li><a href="/appointments">Appointments</a></li>
                        <li><a href="/">Billing</a></li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
            </>
        );
} 