import React from 'react'
import './Intro.scss'
import Link from 'next/link'
import Button from '../Button/Button'
import { FiCornerRightDown } from "react-icons/fi";


const Intro = () => {
  return (
    <section className='intro-wrapper'>
      <div className="intro-headline">
        <p>Hi, my name is</p>
        <h1 className='name'> Prince kyei.</h1>
        <h1 className='description'>I build things for the web.</h1>
      </div>

      <div className="intro-subHeadline">
        <p>
          I&apos;m a software engineer specializing in creating exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products at
          <Link className='link-style' href='https://proadvisor-group.com/'> Pro Advisor Group.</Link>
        </p>
      </div>
      <div  className="intro-btn">
        <Button  >
          <div className='button-text'>
            <span>Read More </span>
            <FiCornerRightDown /></div>
        </Button>
      </div>
    </section>
  )
}

export default Intro
