import React from 'react';

import './Experience.css';
import ExperienceCard from './ExperienceCard';

const experiences = [
    {
        title: 'University of Waterloo',
        date: 'September 2019 - Now',
        position: 'Software Engineering 2A',
        descriptions: [],
        variable: 'temp',
        object: {},
    },
    {
        title: 'Intrigue Media',
        date: 'May 2020 - August 2020',
        position: 'Full-Stack Developer (Game Design)',
        descriptions: [
            'Developed a game dashboard using Vue.js, Express.js and MongoDB, which integrates with individual Dockerized game instances.',
            'Followed a Scrum framework with 2-week sprints and managed tickets on Atlassian Jira.',
        ],
        variable: 'coreTech',
        object: [
            'MongoDB Aggregations',
        ],
    },
    {
        title: 'Horizon AI',
        date: 'April 2020 - Now',
        position: 'Software Team Lead Developer',
        descriptions: [
            'Lead the software team to produce progressive solutions in 2-week sprints.',
            'Develop cloud-native web architecture that supports real-time streaming, OAuth2 authorization, permission-based access management.',
        ],
        variable: 'coreTech',
        object: [
            'Apache Kafka',
            'WebSocket',
            'Docker',
        ],
    },
];

const Experience = () => (
    <div id="experience-wrapper">
        <div id="experience-inner-wrapper">
            {experiences.map((experience, i) => <ExperienceCard experience={experience} key={i} />)}
        </div>
    </div>
);

export default Experience;
