import React from 'react'
import Herosection from '../components/Herosection'
import HeroImg from '../images/Rajasthan.jpg'

function Service() {
    let hero = {
        cName:"hero-about",
        title: "Service",
        img : HeroImg,
    }
  return (
    <div>
        <Herosection {...hero}/>
    </div>
  )
}

export default Service