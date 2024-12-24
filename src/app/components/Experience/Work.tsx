'us client';
import React, { useState } from 'react';
import './Work.scss';
import Link from 'next/link';
import { workData } from '@/app/utils/workData/workData';

const Experience: React.FC = () => {
        // Sort workData in descending order based on id
        const sortedWorkData = [...workData].sort((a, b) => b.id - a.id);
        const [selectedCompany, setSelectedCompany] = useState<number>(sortedWorkData[0].id);

    const selectedExperience = workData.find(work => work.id === selectedCompany);

    return (
        <section id='Experience' className="work-section">
            <h2 className="work-title">
                <span className="work-number">02.</span> Where I've Worked
            </h2>

            <div className="work-content">
                <div className="companies-list">
                {sortedWorkData.map((work) => (
                        <div
                            key={work.id}
                            className={`company-item ${selectedCompany === work.id ? 'active' : ''}`}
                            onClick={() => setSelectedCompany(work.id)}
                        >
                            {work.company}
                        </div>
                    ))}
                </div>

                {selectedExperience && (
                    <div className="experience-details">
                        <div className="experience-item">
                            <h3 className="role ">
                                {selectedExperience.role}{""} @{" "}
                                <Link className='link-style' href={selectedExperience.link} target="_blank" rel="noopener noreferrer">{selectedExperience.company}</Link>
                            </h3>
                            <p className="period">{selectedExperience.period}</p>
                            <ul className="achievements">
                                {selectedExperience.achievements.map((achievement, idx) => (
                                    <li key={idx}>
                                        <span className="bullet">▹</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;
