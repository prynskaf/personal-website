import React from 'react'
import "./About.scss"
import Image from 'next/image'
import { MdArrowCircleRight } from "react-icons/md";
import Link from 'next/link';

const About = () => {
  return (
    <section id='About' className='about-wrapper'>
      <div className='text-wrapper'>
        <div className='title'>
          <h4>01.</h4>
          <h1>About Me</h1>
          {/* <hr /> */}
        </div>
        <div className='description'>
          <p>
            Hello! My name is Prince, a passionate frontend developer with a
             focus on building clean, modern, and efficient web applications. My journey
              into web development started with a curiosity for crafting intuitive digital
               experiences, and I’ve since honed my skills in frameworks like React, Next.js,
                and TypeScript.
          </p>
          <p>
            Over the years, I’ve had the opportunity to work on dynamic projects
             across industries, from designing property management platforms to developing 
             user-friendly <Link className='link-style' href='https://www.afitpilot.com/'> training applications</Link>. My approach blends technical expertise with a 
             commitment to creating accessible and performance-driven solutions.
          </p>
          <p>
            Most recently, I’ve been involved in building a global real estate
             platform, enhancing frontend experiences with responsive design,
              efficient API integrations, and robust state management. My goal is
   to 
              continue crafting impactful digital products that users love.
          </p>
        </div>

        <div className='technologies'>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className='tech-stacks'>
            <div className="list">
              <MdArrowCircleRight />
              <span>JavaScript (ES6+)</span>
            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>React</span>

            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>Node.js</span>

            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>TypeScript</span>
            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>MongoDB</span>

            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>PostgresSql</span>
            </div>
            <div className="list"></div>
          </div>
        </div>

      </div>
      <div className='image-wrapper'>
        <Image
          className='about-image'
          src='/prince.jpg'
          alt='about-image'
          width={500}
          height={300}
        />
      </div>
    </section>
  )
}

export default About;



