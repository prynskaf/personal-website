'use client'
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { navlinks } from './utils/navlinks/navlinks'
import './styles/home.scss'
import Intro from './components/Intro/Intro'
import About from '@/app/components/About/About'
import Experience from './components/Experience/Work'
import Project from './components/Project/Project'



const Home = () => {
const [links] = useState(navlinks)


  return (
    <main className='home-wrapper'>
      <Navbar navlinks={links} />
      <Intro/>
      <About/>
      <Experience/>
      <Project/>
    </main>
  )
}

export default Home
