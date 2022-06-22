import React from 'react';
import CodeSnippet from 'CodeSnippet/CodeSnippet';

const Description = ({ text }) => (
    <div className="experience-description">
        <p className="dash">-</p>
        <p className="body1">{text}</p>
    </div>   
)

const ExperienceCard = ({ experience }) => {
    let cardClass = [];
    cardClass.push('experience-card');
    if (experience.fullWidth) cardClass.push('full-width');
    cardClass = cardClass.join(' ');
    return <div className={cardClass}>
        <h5>
            @
            {' '}
            {experience.title}
        </h5>
        {experience.location && <p className="subtitle2">{experience.location}</p>}
        <p className="subtitle2">{experience.date}</p>
        <p className="subtitle1">{experience.position}</p>
        {experience.descriptions.map((description, i) => <Description text={description} key={i} />)}
        <CodeSnippet declarator="var" variable={experience.variable} object={experience.object} />
    </div>
};

export default ExperienceCard;
