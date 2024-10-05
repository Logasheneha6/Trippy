import React from 'react'
import NavBarComponent from '../components/navbar/NavBarComponent'
import HeroComponent from '../components/Hero/Hero'
import contactImg from '../assets/contact.jpeg'
import FooterComponent from '../components/Footer/FooterComponent'
import ContactFormComponent from '../components/ContactForm/ContactFormComponent'

const Contact = () => {
  return (
    <>
    <NavBarComponent/>
    <HeroComponent cName='hero-about' title='Get in touch' text='We’d Love to Hear from You!' heroImg={contactImg}  buttonClass='hide'/>
    <ContactFormComponent/>
    <FooterComponent/>
    </>
  )
}

export default Contact