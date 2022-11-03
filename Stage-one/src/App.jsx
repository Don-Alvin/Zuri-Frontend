import React from 'react'
import { Main, Footer, ContactUs } from './components'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App