import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ConnectWalletModal from '../UI/ConnectWalletModal/ConnectWalletModal'
import classes from './Navbar.module.css'


const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)

  }

  

  return (
    <div>
      <ConnectWalletModal showModal={showModal} closeModal={() => setShowModal(false)}/>
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
                <a href="#nft">NFTs</a>
              </li>
              <li className={classes.nav__link_item}>
                <a href=''>Community</a>
              </li>
            </ul>
          </div>
          <div className={classes.nav__button}>
            <a className={classes.btn_wallet} onClick={openModal}>Connect wallet</a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar