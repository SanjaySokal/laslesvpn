import React from 'react'
import Heading from "./Heading"
import img from "../Assets/Huge Global.svg"

function Global() {
    return (
        <div className='container global'>
            <Heading title="Huge Global Network of Fast VPN" para="See LaslesVPN everywhere to make it easier for you when you move locations." />
            <img src={img} className="w-100" alt="Globe" title='Globe' />
        </div>
    )
}

export default Global
