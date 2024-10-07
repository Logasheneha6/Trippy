import React from 'react';
import './HeroStyles.css';
import { useEffect,useState } from 'react';

const HeroComponent = (props) => {
    const [username, setUsername] = useState('Guest');
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        setUsername(userData ? userData.username : 'Guest');
    }, [username]);
  return (
    <>
    <div className={props.cName}>
        <img alt='heroaltimg' src={props.heroImg}/>
        <div className='hero-text'>
            <h3>Greetings, {username}!</h3>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.buttonClass}>{props.buttonText}</a>
        </div>
    </div>
    </>
  )
}

export default HeroComponent