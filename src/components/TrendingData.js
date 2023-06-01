import React from 'react'
import './TrendingStyle.css'

function TrendingData({title,img,text}) {
  return (
    <div className='trend-card'>
        <div className="card-img">
            <img src={img} alt="card-img" />
        </div>
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default TrendingData