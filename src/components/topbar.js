import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import "../style/topbar.css"
const Topbar = ({setOpenNav}) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Set the threshold value based on your requirements
        };

        // Set the initial value
        setIsMobile(window.innerWidth <= 768); // Set the threshold value based on your requirements

        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="nav">
            <div className="container">
                <div className="image">
                    <img src="assets/logo.png.webp" alt="" />
                </div>
                {isMobile ? (
                    <button className="open-button" onClick={() => setOpenNav(true)}>
                        <GiHamburgerMenu />
                    </button>
                ) : (
                    <div className="navbar">
                        <Link to="/"> home</Link>
                        <Link to="/"> home</Link>
                        <Link to="/"> home</Link>
                        <Link to="/"> home</Link>
                    </div>)}
        </div>
        </div> 
    );
};

export default Topbar;