import React, { useState } from 'react'
import "../style/gallery.css"
import Tab from './tab'
const Gallery = () => {
  const [toogletabs, setToogletabs] = useState(1);

  const toogle = (id) => {
    setToogletabs(id)
  }

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery_content">
          <div className="gallery_text">
            <h1>Food and Customer Gallery</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
        <Tab menus={["All Menu", "Breakfast", "Lunch", "Dinner", "Budget Meal", "Buffer"]} activeTab={toogletabs} toogle={toogle} />
        <div className={toogletabs === 1 ? "show-items" : "container-items"}>
          <div className="image_container">
            <div className="images">

              <img src="assets/g1.jpg.webp" alt="" />
              <img src="assets/g2.jpg.webp" alt="" />
              <img src="assets/g3.jpg.webp" alt="" />
              <img src="assets/g5.jpg.webp" alt="" />

            </div>
          </div>
        </div>
        <div className={toogletabs === 2 ? "show-items" : "container-items"}>
          <div className="image_container">
            <div className="images">
              <img src="assets/g1.jpg.webp" alt="" />
              <img src="assets/g2.jpg.webp" alt="" />
            </div>
          </div>
        </div>
        <div className={toogletabs === 5 ? "show-items" : "container-items"}>
          <div className="image_container">
            <div className="images">
              <img src="assets/g3.jpg.webp" alt="" />
              <img src="assets/g5.jpg.webp" alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
