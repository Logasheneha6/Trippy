import React from 'react'


const DestinationData = (props) => {
  return (
    <div className={props.cName}>
    <div className='desc-text'>
        <h2>{props.heading}</h2>
        <p> {props.text}</p>
    </div>
    <div className='image'>
        <img alt='imageAlt' src={props.img1}/>
        <img alt='imageAlt' src={props.img2}/>
    </div>
</div>
  )
}

export default DestinationData