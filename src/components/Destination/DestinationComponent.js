import './DestinationStyles.css';
import React from 'react'

import tajOne from '../../assets/taj-mahal-1.avif';
import tajTwo from '../../assets/taj-mahal-2.avif';
import goaOne from '../../assets/goa-1.jpg';
import goaTwo from '../../assets/goa-2.jpg';
import kodaiOne from '../../assets/kodai-1.avif';
import kodaiTwo from '../../assets/kodai-2.avif';
import DestinationData from '../../data/DestinationData';


const DestinationComponent = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>

       <DestinationData heading='Taj Mahal, Agra' text='The Taj Mahal is an architectural masterpiece and a UNESCO World Heritage Site, celebrated as a symbol of eternal love. Built in the 17th century by Emperor Shah Jahan for his beloved wife, Mumtaz Mahal, this stunning white marble mausoleum features intricate inlay work and beautiful gardens. Visitors are captivated by its symmetrical design and the way it changes color with the shifting sunlight. The main dome, surrounded by minarets, stands as a testament to Mughal architecture. A visit at sunrise or sunset offers a magical experience, making it a must-see for anyone traveling to India.' img1={tajOne} img2={tajTwo}  cName='first-desc'/>

       <DestinationData heading='Goa' text='Goa is a coastal paradise renowned for its stunning beaches, vibrant nightlife, and rich cultural heritage. From the tranquil shores of Palolem to the lively atmosphere of Baga, each beach offers a unique experience, whether it’s relaxation or adventure. The influence of Portuguese architecture is evident in its churches and homes, particularly in Old Goa, a UNESCO World Heritage Site. Goa’s culinary scene is a delightful mix of seafood, spices, and international cuisines, often enjoyed in beach shacks with a view of the sunset. The annual carnival and music festivals attract tourists seeking fun and celebration, making Goa a perfect getaway for all.' img1={goaOne} img2={goaTwo} cName='first-desc-reverse'/>

       <DestinationData heading='Kodaikanal, Tamil Nadu' text='Kodaikanal, often referred to as the "Princess of Hill Stations," is a charming hill town nestled in the Western Ghats of Tamil Nadu. Known for its stunning natural beauty, Kodaikanal boasts lush forests, serene lakes, and rolling hills that attract nature lovers and adventure seekers alike. The centerpiece of the town is Kodaikanal Lake, a star-shaped body of water surrounded by dense greenery, where visitors can enjoy boating, cycling, or simply relaxing along the scenic banks. The Coaker’s Walk, a paved pathway offering breathtaking views of the valley and mountains, is a favorite spot for morning strolls, especially at sunrise.' img1={kodaiOne} img2={kodaiTwo} cName='first-desc'/>
    </div>
  )
}

export default DestinationComponent