import React from 'react'
import "./About.scss"
import Image from 'next/image'
import { MdArrowCircleRight } from "react-icons/md"
import Link from 'next/link'

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
            Creative and detail-driven Frontend Developer with strong expertise in React, Next.js, and TypeScript. Passionate about crafting polished, responsive, and user-friendly interfaces with a strong eye for design using Figma. Competent in backend development with Node.js, MongoDB, and PostgreSQL, enabling full-stack contributions when needed. Known for clean code, scalable architecture, and thriving in agile, cross-functional environments.
          </p>
          <p>
            Over the years, I’ve contributed to dynamic projects across industries, including property management platforms and user-friendly <Link className='link-style' href='https://www.afitpilot.com/' target="_blank" rel="noopener noreferrer">training applications</Link>. My approach blends technical expertise with a commitment to accessibility, performance, and collaborative teamwork.
          </p>
          <p>
            Most recently, I’ve focused on building global real estate and e-commerce platforms, enhancing frontend experiences with responsive design, efficient API integrations, and robust state management. My goal is to continue crafting impactful digital products that users love.
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
            <div className="list">
              <MdArrowCircleRight />
              <span>Next.js</span>
            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>Express.js</span>
            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>Redux Toolkit</span>
            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>Tailwind CSS</span>
            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>Figma</span>
            </div>
            <div className="list">
              <MdArrowCircleRight />
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div> {/* ✅ Missing closing div fixed here */}

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

export default About
