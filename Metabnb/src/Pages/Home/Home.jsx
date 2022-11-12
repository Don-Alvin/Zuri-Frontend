import React from 'react'
import classes from './Home.module.css'
import { Navbar, Footer, Hero } from '../../Components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home