import React from 'react'
import image from "../Assets/Illustration 2.svg"
import tick from '../Assets/Group 1120.svg'

function About() {
  return (
    <div className='container about'>
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt="About" title='About' className='w-100' />
        </div>
        <div className="col-md-6">
          <h2>We Provide Many Features You Can Use</h2>
          <p>
            You can explore the features that we provide with fun and have their own functions each feature.
          </p>
          <ul>
            <li>
              <img src={tick} title='Tick' alt="Tick" /> Powerfull online protection.
            </li>
            <li>
              <img src={tick} title='Tick' alt="Tick" /> Internet without borders.
            </li>
            <li>
              <img src={tick} title='Tick' alt="Tick" /> Supercharged VPN
            </li>
            <li>
              <img src={tick} title='Tick' alt="Tick" /> No specific time limits.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
