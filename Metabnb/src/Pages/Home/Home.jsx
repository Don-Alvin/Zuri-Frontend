import React from 'react'
import classes from './Home.module.css'
import { Navbar, Footer, Hero, Partners, Inspiration, NFT } from '../../Components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Inspiration />
      <NFT />
      <Footer />
    </div>
  )
}

export default Home