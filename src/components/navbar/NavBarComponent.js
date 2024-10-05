import { MenuLinks } from '../../data/MenuLinks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBarStyles.css';

import React from 'react'


const NavBarComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () =>{
    setClicked(prevClicked=>!prevClicked)
  }
  return (
    <nav className="navbar-items">
    <h1 className="navbar-logo">Trippy</h1>
    <div className='menu-icons' onClick={handleClick}> 
      <i className={clicked ? "fas fa-times":"fas fa-bars"}></i>
    </div>
    <ul className={clicked? "nav-menu active":"nav-menu"}>
      {MenuLinks.map((item,index)=> {
        return (
        <li key={index}>
        <Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
        </li>)
      })}
    <button className='sign-up-button'>Sign Up</button>
    </ul>
    </nav>
  )
}

export default NavBarComponent