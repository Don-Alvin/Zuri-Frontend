import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PlaceToStay, Home } from './Pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/placetostay' element={<PlaceToStay />} />
    </Routes>
  )
}

export default App