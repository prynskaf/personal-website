'use client';

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import './Resume.scss';

const Resume = () => {
  const handleResumeClick = () => {
    if (typeof window === 'undefined') return;
    window.open('/my-resume.pdf', '_blank');
  };

  return (
    <div className="resume-wrapper">
      <button className="resume-btn" onClick={handleResumeClick} aria-label="Download resume PDF">
        <span className="resume-btn__label">Resume</span>
        <span className="resume-btn__icon" aria-hidden="true">
          <FiDownload />
        </span>
      </button>
    </div>
  );
};

export default Resume;
