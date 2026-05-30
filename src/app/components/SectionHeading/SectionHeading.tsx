import React from 'react';
import './SectionHeading.scss';

interface SectionHeadingProps {
  number: string;
  title: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  centered = false,
  className = '',
}) => {
  return (
    <h2
      className={`section-heading ${centered ? 'section-heading--centered' : ''} ${className}`.trim()}
    >
      <span className="section-heading__number">{number}</span>
      {title}
    </h2>
  );
};

export default SectionHeading;
