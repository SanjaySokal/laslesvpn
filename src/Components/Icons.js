import React from 'react'
import icon1 from "../Assets/Mask Group.svg"
import icon2 from "../Assets/Mask Group (1).svg"
import icon3 from "../Assets/Mask Group (2).svg"
import icon4 from "../Assets/Mask Group (3).svg"
import icon5 from "../Assets/Mask Group (4).svg"

function Icons() {
    return (
        <div className='container icons'>
            <div className="img">
                <img src={icon1} alt='icon' title='icon' />
            </div>
            <div className="img">
                <img src={icon2} alt='icon' title='icon' />
            </div>
            <div className="img">
                <img src={icon3} alt='icon' title='icon' />
            </div>
            <div className="img">
                <img src={icon4} alt='icon' title='icon' />
            </div>
            <div className="img">
                <img src={icon5} alt='icon' title='icon' />
            </div>
        </div>
    )
}

export default Icons
