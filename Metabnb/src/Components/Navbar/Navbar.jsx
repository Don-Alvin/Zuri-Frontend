import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <nav className={classes.nav}>
        <div className={classes.nav__logo}>
            <img src='../../src/assets/images/logo.png' alt="logo" />
        </div>
        <div className={classes.nav__links}>
          <ul>
            <li className={classes.nav__link_item}>
              <Link to='/'>Home</Link>
            </li>
            <li className={classes.nav__link_item}>
              <Link to='/placetostay'>Place to stay</Link>
            </li>
            <li className={classes.nav__link_item}>
              <a href="#">NFTs</a>
            </li>
            <li className={classes.nav__link_item}>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        <div className={classes.nav__button}>
          <a href="#" className={classes.btn_wallet}>Connect wallet</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar