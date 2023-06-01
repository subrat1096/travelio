import React from 'react'
import Herosection from '../components/Herosection'
import HeroImg from '../images/Kashmir.jpg'
import Aboutus from '../components/Aboutus'


function About() {
    let hero = {
        cName:"hero-about",
        title: "About Travelio",
        img : HeroImg,
    }

  return (
    <div>
        <Herosection {...hero}/>
        <Aboutus />
    </div>
  )
}

export default About