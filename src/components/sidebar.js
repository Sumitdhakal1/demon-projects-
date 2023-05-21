import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import "../style/topbar.css"

const Sidebar = ({setOpenNav}) => {
  
    return (
        <div className="nav">
        <div className="container">
            <div className="image">
                <img src="assets/logo.png.webp" alt="" />
            </div>

            <div className="navbar">
                <Link to="/"> home</Link>
                <Link to="/"> home</Link>
                <Link to="/"> home</Link>
                <Link to="/"> home</Link>
            </div>
        </div>
        <button className="close-button" onClick={() => setOpenNav(false)}>
          <RxCross1 />
       </button>
        </div>
    )
}

export default Sidebar