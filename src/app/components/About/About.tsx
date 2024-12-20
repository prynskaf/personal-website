import React from 'react'
import './About.scss'
import Link from 'next/link'
import Button from '../Button/Button'
import { FiCornerRightDown } from "react-icons/fi";


const About = () => {
  return (
    <section id='About' className='about-wrapper'>
      <div className="about-headline">
        <p>Hi, my name is</p>
         <h1 className='name'> Prince kyei.</h1> 
        <h1 className='description'>I build things for the web.</h1>
         </div>
  
      <div className="about-subHeadline">
        <p>
          I&apos;m a software engineer specializing in creating exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products at
          <Link className='link-style' href='https://www.linkedin.com/company/pro-advisor-group/posts/?feedView=all'> Pro Advisor Group.</Link>
        </p>
      </div>
      <div className="about-btn">
        <Button > 
        <div className='button-text'>  
          <span>Read More </span>
        <FiCornerRightDown /></div>
        </Button>
      </div>
    </section>
  )
}

export default About
