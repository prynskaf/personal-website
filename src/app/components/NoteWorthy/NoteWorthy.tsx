'use client';

import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './NoteWorthy.module.scss';
import Link from 'next/link';
import { projects } from '@/app/utils/otherProjects/otherProjects';
import Button from '../Button/Button';
import { useState } from 'react';

export default function NoteWorthy() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const displayedProjects = showMore ? projects : projects.slice(0, 6);

    return (
        <section className={styles.noteworthy}>
            <div className={styles.noteworthy__header}>
                <h2>Other Noteworthy Projects</h2>
                {/* <Link className='link-style' href="/archive">view the archive</Link> */}
            </div>

            <div className={styles.noteworthy__grid}>
                {displayedProjects.map((project) => (
                    <div className={styles.noteworthy__card} key={project.id}>
                        <div className={styles["noteworthy__card-header"]}>
                            <FiFolder className={styles.folder_icon} />
                            <div className={styles["external-links"]}>
                                {project.githubLink && (
                                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <FiGithub />
                                    </Link>
                                )}
                                {project.externalLink && (
                                    <Link href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                        <FiExternalLink />
                                    </Link>
                                )}
                            </div>
                        </div>

                        {project.externalLink ? (
                            <Link href={project.externalLink}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </Link>
                        ) : (
                            <>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </>
                        )}
                        <div className={styles["noteworthy__card-footer"]}>
                            {project.tech.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {projects.length > 6 && (
                <div className={styles.noteworthy__show_more}>
                    <Button onClick={toggleShowMore}>
                        {showMore ? 'Show Less' : 'Show More'}
                    </Button>
                </div>
            )}
        </section>
    );
}