import React from 'react'
import { Link } from 'react-router-dom'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contact'>
      <div className="contact-container">
        <div className="contact-intro">
          <h1>Contact Me</h1>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form className='contact-form'>
          <div className='names' id='names'>
            <div className="names__name">
              <label htmlFor="first_name">First name</label>
              <input type='text' id='first_name' name='first_name' className='first_name' placeholder='Enter your first name'  required/>
            </div>
            <div className="names__name">
              <label htmlFor="last_name">Last name</label>
              <input type='text' id='last_name' name='last_name' className='last_name'  placeholder='Enter your last name' required/>
            </div>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='yourname@email.com' required/>
          </div>
          <div className="message">
            <span className="textarea-header">Message</span>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." required></textarea>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" required/>
            <span className="checkbox-message">You agree to providing your data to Annette Black who may contact you.</span>
          </div>
          <button id='btn__submit'>Send message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs