import React from 'react'
import Herosection from '../components/Herosection'
import HeroImg from '../images/Himachal.jpg'
import Contactform from '../components/Contactform'


function Contact() {
    let hero = {
        cName:"hero-about",
        title: "Contact",
        img : HeroImg,
    }
  return (
    <div>
        <Herosection {...hero}/>
        <Contactform />
    </div>
  )
}

export default Contact