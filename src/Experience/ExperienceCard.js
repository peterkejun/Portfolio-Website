import React from 'react';
import CodeSnippet from 'CodeSnippet/CodeSnippet';

const ExperienceCard = ({ experience }) => (
    <div className="experience-card">
        <h5>
            @
            {' '}
            {experience.title}
        </h5>
        <p className="subtitle2">{experience.date}</p>
        <p className="subtitle1">{experience.position}</p>
        {experience.descriptions.map((description, i) => <p className="body1" key={i}>{description}</p>)}
        <CodeSnippet declarator="var" variable={experience.variable} object={experience.object} />
    </div>
);

export default ExperienceCard;
