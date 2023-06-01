import React from 'react'
import './DestinationStyle.css'
import DestinationData from './DestinationData'
import { Place } from './PlaceData'

function Destination() {

  return (
    <div className='destination'>
        <h1>About Incredible India</h1>
        <p>Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation.</p>
        <p>India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.</p>
        <p>The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourist's interest.</p>
        <p>Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own. The numerous spell-binding and less-trodden trails give trekking tour opportunities in South Asia unlike any other.</p>
        <p>India Tours offers a chance to explore its biodiversity in the country's many national parks and wildlife reserves. An enthralling experience entails in the India wildlife tour packages that take tourists to the habitats of Royal Bengal Tigers, one-horned rhinos, and snow leopards amongst many rare, endangered, and unique species of flora and fauna.</p>

        {Place.map((item,index)=>{
            return(
                <DestinationData key={index} cName={item.cName} title={item.title} text={item.text} img1={item.img1} img2={item.img2}/>
            )
        })}
        
    </div>
  )
}

export default Destination