import React from 'react'
import "../css/HomeStyle.css"
import Herosection from '../components/Herosection'
import HeroImg from '../images/Kerala.jpg'
import Destination from '../components/Destination'
import TrendingDestination from '../components/TrendingDestination'


function Home() {
    let hero = {
        cName:"hero",
        title: "Take only memories, leave only footprints.",
        img : HeroImg,
        text : "Choose Your Favourite Destination",
        url: "/",
        btnClass: "show",
        btnName : "Travel Plan"
    }
    
  return (
    <div>
        <Herosection {...hero}/>
        <Destination/>
        <TrendingDestination />
    </div>
  )
}

export default Home