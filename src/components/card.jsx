import React from 'react'
function Card(props) {
    return (
        <div className="container-card">
            <div className='right'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p>{props.descriptionTwo}</p>
            </div>
            <div>a</div>
        </div>
    )
}

export default Card