import React from 'react'

function TestiItem(props) {
    return (
        <div className='item'>
            <div className="client">
                <div className="client-name">
                    <img src={props.image} title='client' alt="client" />
                    <p className="name">
                        <span>{props.name}</span>
                        {props.location}
                    </p>
                </div>
                <div className="rate">
                    <p>
                        {props.rate} <i className="fa-solid fa-star"></i>
                    </p>
                </div>
            </div>
            <p className='review'>
                {props.desc}
            </p>
        </div>
    )
}

export default TestiItem
