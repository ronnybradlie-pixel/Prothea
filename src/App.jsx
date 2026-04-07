import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import LandingPage from './Components/Landing'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
