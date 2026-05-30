import React from 'react';
import '../Project/Project.scss';
import { saasProjects } from '@/app/utils/projects/saasProjects';
import SectionHeading from '../SectionHeading/SectionHeading';
import ProjectList from '../Project/ProjectList';
import CvWiserCaseStudy from '../CvWiserCaseStudy/CvWiserCaseStudy';

const SaasApps = () => {
  const otherSaasProjects = saasProjects.filter((project) => !project.featured);

  return (
    <section id="SaaS" className="projects">
      <SectionHeading number="03." title="SaaS Apps" />
      <CvWiserCaseStudy />
      {otherSaasProjects.length > 0 && <ProjectList projects={otherSaasProjects} />}
    </section>
  );
};

export default SaasApps;
