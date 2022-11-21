import React from 'react'

function Heading(props) {
    return (
        <div className='section-heading'>
            <h2>{props.title}</h2>
            <p>{props.para}</p>
        </div>
    )
}

export default Heading
