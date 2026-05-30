import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowCircleRight } from 'react-icons/md';
import { ProjectItem } from '@/app/utils/projects/saasProjects';

interface ProjectListProps {
  projects: ProjectItem[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <div className={`project${project.comingSoon ? ' project--coming-soon' : ''}`} key={`${project.title}-${index}`}>
          <div className="project-content">
            <div className="project-label">{project.type}</div>

            {(project.role || project.status || project.year) && (
              <ul className="project-meta">
                {project.role && <li>{project.role}</li>}
                {project.status && <li>{project.status}</li>}
                {project.year && <li>{project.year}</li>}
              </ul>
            )}

            <h3 className="project-title">{project.title}</h3>

            <div className="project-description">
              {project.highlights ? (
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <MdArrowCircleRight aria-hidden className="project-highlights__icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
            </div>

            <ul className="project-tech-list">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>

            <div className="project-links">
              {!project.comingSoon && project.code && (
                <Link href={project.code} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </Link>
              )}
              {!project.comingSoon && project.webkitURL && (
                <Link href={project.webkitURL} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Link>
              )}
              {project.comingSoon && (
                <span className="project-coming-soon">Coming Soon</span>
              )}
            </div>
          </div>

          <div className="project-image">
            {project.comingSoon ? (
              <div className="project-image-static" aria-label={`${project.title} — coming soon`}>
                <Image src={project.image} alt={project.title} width={500} height={500} />
                <span className="project-view-label project-view-label--soon">Coming Soon</span>
              </div>
            ) : (
              <Link href={project.webkitURL!} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
                <Image src={project.image} alt={project.title} width={500} height={500} />
                <span className="project-view-label">View project →</span>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
