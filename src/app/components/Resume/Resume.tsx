'use client';

import React from 'react';
import './Resume.scss';

const Resume = () => {
  const handleResumeClick = () => {
    // Open the PDF in a new tab
    window.open('/my-resume.pdf', '_blank');
  };

  return (
    <div className="resume-wrapper">
      <button className="resume-btn" onClick={handleResumeClick}>
        Resume
      </button>
    </div>
  );
};

export default Resume;
