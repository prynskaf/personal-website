import React from 'react';
import './Project.scss';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/app/utils/projects/projects';

const Project = () => {

  return (
    <section id='Work' className="projects">
      <h2 className="section-heading">
        <span className="section-number">03.</span> Some Things I&apos;ve Built
      </h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-content">
              <div className="project-label">{project.type}</div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <Link href={project.code} aria-label="GitHub Link"  target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </Link>
                <Link href={project.webkitURL} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="project-image">
              <Link href={project.webkitURL} target="_blank" rel="noopener noreferrer">
                <Image src={project.image} alt={project.title} width={500} height={500} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;