import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <nav className={classes.nav}>
        <div className={classes.nav__logo}>
          <div className={classes.logo}>
              <img src="" alt="logo" />
              <h1>Metabnb</h1>
          </div>
        </div>
        <div className={classes.nav__links}>
          <ul>
            <li className={classes.nav__link_item}>
              <a href="#">Home</a>
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
          <button>Connect wallet</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar