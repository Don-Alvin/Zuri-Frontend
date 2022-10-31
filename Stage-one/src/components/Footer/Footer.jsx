import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__line'></div>
        <div className="footer__content">
          <img src="../../src/assets/Zuri.Internship_Logo.png" alt="zuri" className="footer__img" />
          <span className="footer__text">HNG Internship 9 Frontend Task</span>
          <img src="../../src/assets/I4G.png" alt="ingressive" />
        </div>
      </footer>
    </>
  )
}

export default Footer