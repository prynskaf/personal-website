import React from 'react';
import './Project.scss';
import { projects } from '@/app/utils/projects/projects';
import SectionHeading from '../SectionHeading/SectionHeading';
import ProjectList from './ProjectList';

const Project = () => {
  return (
    <section id="Work" className="projects">
      <SectionHeading number="04." title="Some Things I've Built" />
      <ProjectList projects={projects} />
    </section>
  );
};

export default Project;
