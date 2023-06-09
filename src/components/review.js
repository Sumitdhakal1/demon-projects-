import React,{useState} from 'react'
import "../style/review.css"
import Tab from './tab';
import { AiFillStar } from 'react-icons/ai';
import { MdRectangle } from 'react-icons/md';


const Review = () => {
    const [toogletabs, setToogletabs] = useState(1);

    const toogle = (id) => {
        setToogletabs(id)
    }
    return (
        <div className="review_section">
            <div className="image">
                <img src="assets/review-bg.jpg.webp" alt="" />
            </div>
            <div className="container">
                <div className="details_wrapper">
                <div className={toogletabs === 1 ? "show-items" : "container-items"}>
                    <div className="user_image">
                        <img src="assets/tanjiro.webp" alt="" />
                    </div>
                    <div className="star_icon">
                        <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                    <div className="text">
                        <h1>Sumit Dhakal</h1>
                        <p>best food loved it est food loved it est food loved it est food loved it </p>
                    </div>
                    </div>
                    <div className={toogletabs === 2 ? "show-items" : "container-items"}>
                    <div className="user_image">
                        <img src="assets/nezuko.jpeg" alt="" />
                    </div>
                    <div className="star_icon">
                        <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                    <div className="text">
                        <h1>Lochan Dhakal</h1>
                        <p>best food loved it est food loved it est food loved it est food loved it </p>
                    </div>
                    </div>
                    <div className={toogletabs === 3 ? "show-items" : "container-items"}>
                    <div className="user_image">
                        <img src="assets/tanjiro.webp" alt="" />
                    </div>
                    <div className="star_icon">
                        <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                    <div className="text">
                        <h1>Suraj Dhakal</h1>
                        <p>best food loved it est food loved it est food loved it est food loved it </p>
                    </div>
                    </div>
                    <div className={toogletabs === 4 ? "show-items" : "container-items"}>
                    <div className="user_image">
                        <img src="assets/tanjiro.webp" alt="" />
                    </div>
                    <div className="star_icon">
                        <AiFillStar /> <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                    </div>
                    <div className="text">
                        <h1>Sumit Dhakal</h1>
                        <p>best food loved it est food loved it est food loved it est food loved it </p>
                    </div>
                    </div>
                    <Tab menus={[<MdRectangle/>, <MdRectangle/>, <MdRectangle/>, <MdRectangle/> ]} activeTab={toogletabs} toogle={toogle} />
     
            
                </div>
            </div>
        </div>
    ) 
}

export default Review