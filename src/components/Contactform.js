import React from 'react'
import './ContactformStyle.css'

function Contactform() {
  return (
    <div className='form-container'>
        <h1>Contact Us</h1>
        <form action="">
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea name="" id="" rows="4" placeholder='Message'></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default Contactform