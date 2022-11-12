import React from 'react'
import classes from './Hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className="hero_text">
        <h1 className={classes.hero_heading}>
          Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
        </h1>
        <p className={classes.hero_paragraph}>
          We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.
        </p>
      </div>
      <form className={classes.search}>
        <input type="search" placeholder='Search for location' />
        <span className='{classes.btn_search}'> Search</span>
      </form>
      <div className="hero_image">
        <img src="../../src/assets/images/hero.png" alt="hero-image" />
      </div>
    </section>
  )
}

export default Hero