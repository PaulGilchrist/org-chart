import React, { useState } from 'react';
import './Job.css';

function Job({ job }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="job">
            <i></i>
            <div className={`job-item ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{job.name}</div>
            {isHovered && (<div className="job-description">{job.description}</div>)}
        </div>
    );
}

export default Job;
