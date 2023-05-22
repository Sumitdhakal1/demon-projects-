import React from 'react'
import "../style/reserv.css"
const Reserv = () => {
    return (
     <div className="reserve">
         <div className="image">
            <div className="bg_color"></div>
            <img src="assets/reservation-bg.jpg.webp" alt="" />
         </div>
        <div className="container"></div>
        <div className="reservation_details-wrapper">
           <div className="reservation_details-all">
            <div className="reservation-text">
                <h1>Reserve Your Seats to Confirm if You Come with Your Family</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
            </div>
            <div className="reservation-table">
                <div className="reservation-details">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                    <button>Make Reservation</button>
                </div>
            </div>
            </div>
        </div>
     </div>

    )
}

export default Reserv;