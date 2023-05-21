import React from 'react'
import "../style/header.css"
import { Link } from 'react-router-dom'
const Header = () => {
    return (

        <div className="header">
            <div className="image">
                <img src="assets/bheader.webp" alt="" />
            </div>
            <div className="container">
                <div className="header_text">
                    <h5>WIDE OPTIONS OF CHOICE</h5>
                    <h1>Delicious Recipes</h1>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</p>
                    <Link className="button_menu">Check Our Menu</Link>
                </div>
            </div>
        </div>
    )
}

export default Header