import React from 'react'
import './TrendingStyle.css'
import TrendingData from './TrendingData'
import { Trend } from './TrendData'

function TrendingDestination() {
  return (
    <div className='trend'>
        <h1>Top Trending India Holiday Destinations</h1>
        <p className='trend-p'>You can discover unique destinations using Google Maps.</p>
        <div className="trendcard">
            {Trend.map((item,index)=>{
                return(
                <TrendingData key={index} title={item.title} img={item.img} text={item.text}/>
                )
            })}
            
        </div>
    </div>
  )
}

export default TrendingDestination