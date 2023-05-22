import React, { useState } from 'react'
import "../style/menu.css"
import Tab from './tab';

const Menu = () => {

    const [toogletabs, setToogletabs] = useState(1);

    const toogle = (id) => {
        setToogletabs(id)
    }
    return (

        <div className="menu_section">
            <div className="container">
                <div className="menu_heading">
                    <div className="heading_text">
                        <h1>What kind of Foods we serve for you</h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                </div>
                <Tab menus={["All Menu", "Breakfast", "Lunch", "Dinner", "Budget Meal", "Buffer"]} activeTab={toogletabs} toogle={toogle} />

                <div className={toogletabs === 1 ? "show-items" : "container-items"}>
                    <div className='items'>
                        <div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div>
                        <div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div>
                        <div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div>
                        <div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div>
                        <div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div>
                        <div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div>
                    </div>
                </div>
                <div className={toogletabs === 2 ? "show-items" : "container-items"}>
                    <div className='items'>
                        <><div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is</p>
                        </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div></>
                    </div>
                </div>
                <div className={toogletabs === 3 ? "show-items" : "container-items"}>
                    <div className='items'>
                        <><div className="item">
                            <div className='item_head'>
                                <h2>Fruits </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div></>
                    </div>
                </div>
                <div className={toogletabs === 4 ? "show-items" : "container-items"}>
                    <div className='items'>
                        <div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div><div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div><div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div><div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div><div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div><div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div>
                    </div>
                </div>
                <div className={toogletabs === 5 ? "show-items" : "container-items"}>
                    <div className='items'>
                        <><div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div></>
                    </div>
                </div>
                <div className={toogletabs === 6 ? "show-items" : "container-items"}>
                    <div className='items'>
                        <><div className="item">
                            <div className='item_head'>
                                <h2>Cappuccion </h2>
                                <span>$49</span>
                            </div>
                            <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                        </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div><div className="item">
                                <div className='item_head'>
                                    <h2>Cappuccion </h2>
                                    <span>$49</span>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div></>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Menu;