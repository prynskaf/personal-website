'use client';

import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Archive.module.scss';
import { projects } from '@/app/utils/archieveData/archiveData';




export default function Archive() {
  return (
    <section className={styles.archive}>
      <h1>Archive</h1>
      <h2>A big list of things I&apos;ve worked on</h2>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th className={styles.hide_mobile}>Made at</th>
              <th className={styles.hide_mobile}>Built with</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td className={styles.year}>{project.year}</td>
                <td className={styles.title}>{project.title}</td>
                <td className={styles.hide_mobile}>{project.madeAt}</td>
                <td className={styles.hide_mobile}>
                  {project.builtWith.join(' · ')}
                </td>
                <td className={styles.links}>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </a>
                  )}
                  {project.links.external && (
                    <a href={project.links.external} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}