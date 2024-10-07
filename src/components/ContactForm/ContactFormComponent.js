import './ContactFormStyles.css';
import React from 'react'
import { useState } from 'react';
import ModalComponent from '../Modal/ModalComponent';

const ContactFormComponent = () => {
    const [submitted, setSubmitted] = useState(false); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [thankYouMessage, setThankYouMessage] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
        setThankYouMessage(`Thank you for your message, ${name}! We will get back to you soon.`);
    }
    const handleCloseModal = () => {
        setSubmitted(false); 
      };
  return (
   <div className='form-container'>
 
   <h1>Send a message to us!</h1> <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type='email'placeholder='Email'value={email}    onChange={(e) => setEmail(e.target.value)} required/>
        <input type='text' placeholder='Subject'value={subject}  onChange={(e) => setSubject(e.target.value)} required/>
        <textarea type='text' placeholder='Message' rows="4" value={message}  onChange={(e) => setMessage(e.target.value)} required/>
        <button type='submit'>Send Message</button>
    </form>
 {
    submitted && (
        <ModalComponent buttonText='Close' subtext='In the meantime, feel free to explore our website for more information about our services.' message={thankYouMessage} onClose={handleCloseModal}/>
    )
 }

</div>)}

export default ContactFormComponent