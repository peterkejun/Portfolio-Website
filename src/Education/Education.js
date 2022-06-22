import React from 'react';
import Experience from "Experience/Experience";
import ExperienceCard from 'Experience/ExperienceCard';
import education from './data';

const titleStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    backgroundColor: '#134074',
};

const Education = () => (
    <Experience title="Education" titleStyle={titleStyle}>
        {education.map((e, i) => <ExperienceCard experience={e} key={i} />)}
    </Experience>
)

export default Education;