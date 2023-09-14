import React, { useState } from 'react';
import './JobPath.css';
import Job from './Job'

function JobPath({ jobPath }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="job-path-container">
            <div className={`job-path ${isHovered ? 'hovered' : ''}`}>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{jobPath.name}</div>
                {/* {isHovered && (<div className="job-path-description">{jobPath.description}</div>)} */}
            </div>
            {jobPath.jobs.map((job, index) => (
                <Job key={index} job={job}></Job>
            ))}   
        </div>
    );
}

export default JobPath;
