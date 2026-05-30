import React from 'react'
import "./About.scss"
import Image from 'next/image'
import { MdArrowCircleRight } from "react-icons/md"
import Link from 'next/link'
import SectionHeading from '../SectionHeading/SectionHeading'
import { CV_WISER_URL } from '@/app/utils/siteConfig'

const techCategories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'PostgreSQL', 'Supabase', 'MongoDB'],
  },
  {
    title: 'SaaS & Tools',
    items: ['Stripe', 'OpenAI', 'Figma', 'Firebase'],
  },
]

const About = () => {
  return (
    <section id='About' className='about-wrapper'>
      <div className='text-wrapper'>
        <SectionHeading number="01." title="About Me" />

        <div className='description'>
          <p>
            I&apos;m a frontend-focused developer specializing in React, Next.js, and TypeScript, with experience
            building real-world web applications from idea to deployment.
          </p>
          <p>
            I&apos;ve worked on platforms including a{' '}
            <Link className='link-underline' href='https://www.afitpilot.com/' target="_blank" rel="noopener noreferrer">
              real estate application
            </Link>
            {' '}and AI-powered tools, focusing on performance, usability, and scalable UI architecture.
          </p>
          <p>
            Currently, I&apos;m building{' '}
            <Link className='link-underline' href={CV_WISER_URL} target="_blank" rel="noopener noreferrer">
              CV Wiser
            </Link>
            , my own SaaS product, while continuing to improve my skills.
          </p>
          <p>
            I&apos;m open to opportunities where I can contribute to meaningful products, grow as an engineer,
            and collaborate with strong teams.
          </p>
        </div>

        <div className='technologies'>
          <p>Technologies I work with:</p>
          <div className='tech-categories'>
            {techCategories.map(({ title, items }) => (
              <div className="tech-category" key={title}>
                <h4 className="tech-category__title">{title}</h4>
                <div className="tech-stacks">
                  {items.map((tech) => (
                    <div className="list" key={tech}>
                      <MdArrowCircleRight />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='image-wrapper'>
        <Image
          className='about-image'
          src='/prince.jpg'
          alt='Portrait of Prince Kyei, Frontend Developer & SaaS Founder'
          width={500}
          height={300}
        />
      </div>
    </section>
  )
}

export default About
