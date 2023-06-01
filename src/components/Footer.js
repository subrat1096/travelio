import React from "react";
import "./FooterStyle.css";
import airplane from "../images/airplane.png";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-left">
          <h1 className="logo">
            Travelio
            <img src={airplane} alt="logo" className="logo-img" />
          </h1>
          <p>Choose Your Destination</p>
        </div>
        <div className="top-right">
            <a href="/">
            <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="/">
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="/">
            <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="/">
            <i class="fa-brands fa-twitter"></i>
            </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Community</h4>
            <a href="/">Travel Guide</a>
            <a href="/">Travel Blogs</a>
            <a href="/">Testimonials</a>
            <a href="/">Trip Advisor</a>
        </div>
        <div>
            <h4>Legal Policy</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Disclaimer</a>
            <a href="/">Privacy Policy</a>
            <a href="/">We are hiring</a>
            <a href="/">License</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
