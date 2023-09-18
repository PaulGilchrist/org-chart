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
            <i class="fa fa-caret-right"></i>
            <div className={`job-item ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{job.name}</div>
            {isHovered && job.description && (<div className="job-description" dangerouslySetInnerHTML={{ __html: job.description }}></div>)}
        </div>
    );
}

export default Job;
