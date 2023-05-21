import React from 'react'
import "../style/about.css"
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className="about">
            <div className="container">

                <div className="about_wrapper">

                    <div className="about_detail">
                        <h1>About Our Story</h1>
                        <p>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link to="/" className='button_view'>View Full Menu</Link>
                    </div>

                    <div className="image">
                        <img src="assets/about-img.jpg.webp" alt="" />
                    </div>
                </div>

            </div>


        </div>

    )
}

export default About;