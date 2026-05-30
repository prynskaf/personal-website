import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cvWiserCaseStudy } from '@/app/content/cvWiser';
import './CvWiserCaseStudy.scss';

const CvWiserCaseStudy = () => {
  const { title, badge, tagline, url, signupUrl, image, problem, solution, role, metrics, technologies } =
    cvWiserCaseStudy;

  return (
    <article className="case-study">
      <div className="case-study__header">
        <span className="case-study__badge">{badge}</span>
        <h3 className="case-study__title">{title}</h3>
        <p className="case-study__tagline">{tagline}</p>
      </div>

      <ul className="case-study__metrics" aria-label="Product highlights">
        {metrics.map(({ value, label }) => (
          <li key={label} className="case-study__metric">
            <span className="case-study__metric-value">{value}</span>
            <span className="case-study__metric-label">{label}</span>
          </li>
        ))}
      </ul>

      <div className="case-study__grid">
        <div className="case-study__story">
          <div className="case-study__block">
            <h4>Problem</h4>
            <p>{problem}</p>
          </div>
          <div className="case-study__block">
            <h4>Solution</h4>
            <p>{solution}</p>
          </div>
          <div className="case-study__block">
            <h4>My Role</h4>
            <p>{role}</p>
          </div>
          <ul className="case-study__tech">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="case-study__visual">
          <Link href={url} target="_blank" rel="noopener noreferrer" aria-label="View CV Wiser product">
            <Image src={image} alt="CV Wiser product preview" width={600} height={400} priority />
          </Link>
        </div>
      </div>

      <div className="case-study__actions">
        <Link href={url} className="case-study__cta case-study__cta--primary" target="_blank" rel="noopener noreferrer">
          Visit Product
        </Link>
        <Link href={signupUrl} className="case-study__cta case-study__cta--secondary" target="_blank" rel="noopener noreferrer">
          Start Free
        </Link>
      </div>
    </article>
  );
};

export default CvWiserCaseStudy;
