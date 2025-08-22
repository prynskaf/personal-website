'use client';

import React from 'react';
import './Resume.scss';

const Resume = () => {
  const handleResumeClick = () => {
    // window.open('/my-resume.pdf', '_blank');
    window.open('/Prince_Kyei_CV.docx', '_blank');
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
