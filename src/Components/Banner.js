import React from 'react'
import img from "../Assets/Illustration 1.svg";
import { Link } from "react-router-dom"

function Banner() {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <p className='main-heading'>
                                Want anything to be easy with <b>LaslesVPN</b>.
                            </p>
                            <p className='para'>
                                Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.
                            </p>
                            <Link className="link" to="#">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={img} alt="Banner" title='Banner' className='w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
