import React from "react";
import "./HeroStyle.css";


function Herosection({cName,title,img,url,text,btnClass,btnName}) {
  return (
    <div>
      <div className={cName}>
        <img src={img} alt="Hero-img" />
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={url} className={btnClass}>{btnName}</a>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
