import React from 'react'

const RecentTripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'> 
            <img alt='trip' src={props.image}/>
        </div>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default RecentTripData