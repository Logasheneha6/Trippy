import React from 'react'
import './TripStyles.css';
import jaipurImg from '../../assets/jaipur-1.avif';
import mysoreImg from '../../assets/mysore.avif';
import keralaImg from '../../assets/kerala.avif';
import RecentTripData from '../../data/RecentTripData';

const TripComponent = () => {
  return (
 <div className='trip'>
    <h1>Recent Trips</h1>
    <p>You can discover unique destinations using google maps</p>

    <div className='trip-card'> 
        <RecentTripData title='Jaipur, Rajasthan' heading='Trip in jaipur' image={jaipurImg} text='Known as the Pink City, Jaipur is steeped in royal history and vibrant culture. The city boasts majestic forts like Amber Fort and Nahargarh Fort, which offer panoramic views of the surrounding landscape. The City Palace, with its stunning architecture and museums, showcases the grandeur of the Rajput rulers. Jaipur bustling bazaars are perfect for shopping traditional handicrafts, textiles, and jewelry. The city rich culinary scene features delectable Rajasthani cuisine, adding to its allure. Festivals like Teej and Diwali bring the streets to life with colorful celebrations, making Jaipur a captivating destination year-round.'/>

        <RecentTripData title='Kerala Backwaters'  heading='Trip in Kerala' image={keralaImg} text='The Kerala Backwaters offer a serene escape into nature, characterized by a network of lagoons, lakes, and canals fringed by lush greenery. Visitors can explore this tranquil region on traditional houseboats, known as kettuvallams, which provide a unique perspective of rural life. As you glide through the waters, you’ll encounter charming villages, paddy fields, and local wildlife, all while enjoying the soothing sounds of nature. The backwaters are also home to diverse flora and fauna, making it a paradise for birdwatchers. With its rich cultural experiences, including traditional cuisine and Ayurvedic treatments, Kerala’s backwaters promise a rejuvenating getaway.'/>

        <RecentTripData title='Mysore Palace, Karnataka'   heading='Trip in Mysore' image={mysoreImg} text='The Mysore Palace is a stunning example of Indo-Saracenic architecture and one of the most visited monuments in India. This royal residence features intricate carvings, vibrant stained glass, and elaborate domes that reflect the grandeur of the Wadiyar dynasty. Visitors can explore the beautifully maintained gardens and halls, adorned with royal artifacts and artworks. The palace is especially enchanting during the annual Dasara festival when it is illuminated with thousands of lights. A stroll through the palace grounds provides a glimpse into the opulent lifestyle of the erstwhile kings. Mysore is also known for its silk sarees and sandalwood products, adding to its charm.'/>
    </div>

 </div>
  )
}

export default TripComponent