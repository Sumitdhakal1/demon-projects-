import React from 'react'

const card = ({name,price,info}) => {
    return (
        <div className="item">
            <div className='item_head'>
                <h2>{name} </h2>
                <span>{price}</span>
            </div>
            <p>{info}</p>
        </div>)
}

export default card