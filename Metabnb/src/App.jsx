import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PlaceToStay, Home } from './Pages'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/placetostay' element={<PlaceToStay />} />
      </Routes>
    </div>
  )
}

export default App