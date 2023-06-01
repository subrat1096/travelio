import React from 'react'
import Herosection from '../components/Herosection'
import HeroImg from '../images/Rajasthan.jpg'
import TrendingDestination from '../components/TrendingDestination'


function Service() {
    let hero = {
        cName:"hero-about",
        title: "Service",
        img : HeroImg,
    }
  return (
    <div>
        <Herosection {...hero}/>
        <TrendingDestination />
    </div>
  )
}

export default Service