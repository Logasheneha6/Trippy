import React from "react";
import NavBarComponent from "../components/navbar/NavBarComponent";
import HeroComponent from "../components/Hero/Hero";
import serviceImg from "../assets/service.webp";
import FooterComponent from "../components/Footer/FooterComponent";
import TripComponent from "../components/RecentTrips/TripComponent";

const Service = () => {
  return (
    <>
      <NavBarComponent />
      <HeroComponent
        cName="hero-about"
        title="What We Offer"
        text="Crafted Just for You"
        heroImg={serviceImg}
        buttonClass="hide"
      />
      <TripComponent />
      <FooterComponent />
    </>
  );
};

export default Service;
