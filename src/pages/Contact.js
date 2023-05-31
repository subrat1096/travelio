import React from 'react'
import Herosection from '../components/Herosection'
import HeroImg from '../images/Himachal.jpg'

function Contact() {
    let hero = {
        cName:"hero-about",
        title: "Contact",
        img : HeroImg,
    }
  return (
    <div>
        <Herosection {...hero}/>
    </div>
  )
}

export default Contact