import React from 'react';
import './HeroStyles.css';

const HeroComponent = (props) => {
  return (
    <>
    <div className={props.cName}>
        <img alt='heroaltimg' src={props.heroImg}/>
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.buttonClass}>{props.buttonText}</a>
        </div>
    </div>
    </>
  )
}

export default HeroComponent