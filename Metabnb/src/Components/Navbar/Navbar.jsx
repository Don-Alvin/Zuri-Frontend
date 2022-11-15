import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { SiBandsintown } from 'react-icons/si'
import { GiToken } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import ConnectWalletModal from '../UI/ConnectWalletModal/ConnectWalletModal'
import classes from './Navbar.module.css'


const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const openModal = () => {
    setShowModal(true)

  }

  const handleNavScroll = () => {
    if(window.scrollY >= 50) {
      setNavbar(true)
    }else(false)
  }

  

  window.addEventListener('scroll', handleNavScroll)

  return (
    <div>
      <ConnectWalletModal showModal={showModal} closeModal={() => setShowModal(false)}/>
      <div className={navbar ? `${classes.navbar} ${classes.navbar_active}` : `${navbar}`}>
        <nav className={classes.nav}>
          <div className={classes.nav__logo}>
              <img src='../../src/assets/images/logo.png' alt="logo" />
          </div>
          <div className={classes.nav__links}>
            <ul>
              <li className={classes.nav__link_item}>
                <Link to='/'>
                  <span>Home</span>
                  <div className={classes.icon}>
                    <HiHome />
                  </div>
                </Link>
              </li>
              <li className={classes.nav__link_item}>
                <Link to='/placetostay'>
                  <span>Place to stay</span>
                  <div className={classes.icon}>
                    <SiBandsintown />
                  </div>
                </Link>
              </li>
              <li className={classes.nav__link_item}>
                <a href="#nft">
                  <span>NFTs</span>
                  <div className={classes.icon}>
                    <GiToken />
                  </div>
                </a>
              </li>
              <li className={classes.nav__link_item}>
                <a href=''>
                  <span>Community</span>
                  <div className={classes.icon}>
                    <IoIosPeople />
                  </div>
                </a>
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