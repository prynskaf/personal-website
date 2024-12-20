'use client'
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { navlinks } from './utils/navlinks/navlinks'
import './styles/home.scss'
import About from './components/About/About'

const Home = () => {
const [links] = useState(navlinks)


  return (
    <div className='home-wrapper'>
      <Navbar navlinks={links} />
      <About/>
    </div>
  )
}

export default Home
