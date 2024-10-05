import React from 'react'
import NavBarComponent from '../components/navbar/NavBarComponent'
import HeroComponent from '../components/Hero/Hero'
import aboutImg from '../assets/about.jpeg'
import FooterComponent from '../components/Footer/FooterComponent'
import AboutsUs from '../components/AboutUs/AboutsUs'

const About = () => {
  return (
    <>
          <NavBarComponent/>
          <HeroComponent cName='hero-about' title='Behind the Scenes' text='Who We Are and What We Believe' heroImg={aboutImg}  buttonClass='hide'/>
          <AboutsUs/>
          <FooterComponent/>
          
    </>
  
  )
}

export default About