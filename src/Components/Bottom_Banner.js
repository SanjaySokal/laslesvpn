import React from 'react'
import icon from "../Assets/Group 1216.svg"
import icon2 from "../Assets/Group 1215.svg"
import icon3 from "../Assets/Group 1217.svg"

function Bottom_Banner() {
  return (
    <div className='container'>
      <div className="strips">
        <div className="icons-row">
          <div className="icons-col">
            <div className="icons">
              <div className="back">
                <img src={icon} alt="icon" title='icon' />
              </div>
              <p>
                <span>
                  90+
                </span>
                Users
              </p>
            </div>
          </div>
          <div className="icons-col">
            <div className="icons">
              <div className="back">
                <img src={icon2} alt="icon" title='icon' />
              </div>
              <p>
                <span>
                  30+
                </span>
                Locations
              </p>
            </div>
          </div>
          <div className="icons-col">
            <div className="icons">
              <div className="back">
                <img src={icon3} alt="icon" title='icon' />
              </div>
              <p>
                <span>
                  50+
                </span>
                Servers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom_Banner
