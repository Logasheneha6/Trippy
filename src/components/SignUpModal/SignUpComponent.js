

import React from 'react'
import './SignUpStyles.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ModalComponent from '../Modal/ModalComponent'

const SignUpComponent = () => {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    localStorage.setItem('userData', JSON.stringify({ username, email, password }));
    localStorage.getItem('userData', JSON.stringify({ username, email, password }));
    console.log( JSON.parse(localStorage.getItem('userData')));
    const welcomeText=`Welcome Abroad, ${username}`;

    e.preventDefault(); 
    setShowPopup(true);

  };

  const handleCloseModal = () => {
    setShowPopup(false); 
    navigate('/');
  };
  return (
    <div className="signup-container">
        <div className='mid-container'>
       <h1 className='heading'>✨ Welcome to Trippy! ✨</h1>
      <p>"Start Your Adventure—Create Your Account Today!"</p> 
       <h2>Create Your Account</h2>
    
    
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username"  value={username}
            onChange={(e) => setUsername(e.target.value)} required/>
        <input type="email" placeholder="Email"  value={email}
            onChange={(e) => setEmail(e.target.value)}  required/>
        <input type="password" placeholder="Password"   value={password}
            onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit" className='signup-button'>Sign Up</button>
      </form>

      <p className="guest-link">
          <Link to="/">Want to Explore First? Join as a Guest!</Link>
        </p>
        {showPopup && (
            <ModalComponent  subtext='You are all set! Let the adventure begin!'
            buttonText='Lets go'
            message={`Welcome Aboard, ${username}!`}
            onClose={handleCloseModal}/>

        )}
    </div>
    </div>
  )
}

export default SignUpComponent