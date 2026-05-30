import React from 'react';
import '../Project/Project.scss';
import { saasProjects } from '@/app/utils/projects/saasProjects';
import SectionHeading from '../SectionHeading/SectionHeading';
import ProjectList from '../Project/ProjectList';

const SaasApps = () => {
  return (
    <section id="SaaS" className="projects">
      <SectionHeading number="03." title="SaaS Apps" />
      <ProjectList projects={saasProjects} />
    </section>
  );
};

export default SaasApps;
