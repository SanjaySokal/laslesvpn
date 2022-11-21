import React from 'react'
import { Link } from 'react-router-dom'

function Subscribe() {
    return (
        <div className='subscribe'>
            <div className="content">
                <h2>
                    Subscribe Now for Get Special Features!
                </h2>
                <p>
                    Let's subscribe with us and find the fun.
                </p>
            </div>
            <div className="btn">
                <Link to={"#"}>Subscribe Now</Link>
            </div>
        </div>
    )
}

export default Subscribe
