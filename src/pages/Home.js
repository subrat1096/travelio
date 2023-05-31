import React from 'react'
import "../css/HomeStyle.css"
import Herosection from '../components/Herosection'
import HeroImg from '../images/Kerala.jpg'

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
    </div>
  )
}

export default Home