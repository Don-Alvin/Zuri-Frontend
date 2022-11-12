import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import classes from './Footer.module.css'

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear()

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__logo_socials}>
          <img src="" alt="footer__logo" className={classes.footer__content_logo} />
          <div className={classes.footer__content_socials}>
            <div className={classes.socials}>
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
            <div className={classes.copyright}>
            <span>&#169; {currentYear} Metabnb</span>
            </div>
          </div>
        </div>

        <div className={classes.footer__content_community}>
          <h1 className={classes.heading} >Community</h1>
          <div className={classes.community_content}>
            <ul>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>

        <div className={classes.footer__content_places}>
          <h1 className={classes.heading} >Places</h1>
          <div className={classes.places_content}>
            <ul>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>
        </div>

        <div className={classes.footer__content_aboutus}>
          <h1 className={classes.heading} >About us</h1>
          <div className={classes.aboutus_content}>
            <ul>
              <li>Roadmap</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer