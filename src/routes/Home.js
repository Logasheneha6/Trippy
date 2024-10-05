import React from 'react';
import NavBarComponent from '../components/navbar/NavBarComponent';
import HeroComponent from '../components/Hero/Hero';
import homeImg from '../assets/home-img.jpg'
import DestinationComponent from '../components/Destination/DestinationComponent';
import TripComponent from '../components/RecentTrips/TripComponent';
import FooterComponent from '../components/Footer/FooterComponent';

const Home = () => {
  return (
   <>
    <NavBarComponent/>
    <HeroComponent cName='hero' title='Your Travel Your Story' heroImg={homeImg} text='Choose you favorite destination' buttonText='Travel Plan'
     url='/'buttonClass='show'/>
       <DestinationComponent/>
       <TripComponent/>
       <FooterComponent/>
   </>
 
  )
}

export default Home