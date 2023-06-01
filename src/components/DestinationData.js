import React from 'react'
import './DestinationStyle.css'


function DestinationData({title,text,img1,img2,cName}) {
  return (
    <div className={cName}>
            <div className="desc-text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

            <div className="image">
                <img src={img1} alt="kashmir-img" />
                <img src={img2} alt="kashmir-img" />
            </div>
        </div>
  )
}

export default DestinationData