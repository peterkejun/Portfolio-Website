import React from 'react';
import Experience from "Experience/Experience";
import ExperienceCard from 'Experience/ExperienceCard';
import work from './data';

const titleStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    backgroundColor: '#13315C',
};

const Work = () => (
    <Experience title="Work Experience" titleStyle={titleStyle}>
        {work.map((w, i) => <ExperienceCard experience={w} key={i} />)}
    </Experience>
)

export default Work;