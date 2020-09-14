import React from 'react';

// components
import CodeSnippet from 'CodeSnippet/CodeSnippet';

// styles
import './Landing.css';

// images
import linkedin from 'img/linkedin.svg';
import github from 'img/github.svg';
import awsSaa from 'img/aws_saa.png';

// description object for code snippet
const peter = {
    lang: [
        'javascript', 'typescript', 'python', 'swift', 'java', 'bash',
    ],
    cloud: [
        'AWS', 'MongoDB Atlas', 'Confluent Kafka',
    ],
    dev: {
        ops: [
            'git', 'Docker', 'Jira',
        ],
        doc: [
            'Swagger', 'JSDoc', 'Confluence',
        ],
        test: [
            'Mocha',
        ],
    },
    cert: [
        'AWS Certified Solutions Architect - Associate',
    ],
};

const Landing = () => (
    <div id="landing-wrapper">
        <div>
            <h1>Peter Ke</h1>
            <p className="subtitle1">Software Engineering student in the University of Waterloo, specialized in application development and cloud computing.</p>
            <span>
                <a href="https://www.linkedin.com/in/peter-ke-12465b195/" target="_blank" rel="noopener noreferrer">
                    <img alt="LinkedIn" src={linkedin} />
                </a>
                <a href="https://github.com/peterkejun" target="_blank" rel="noopener noreferrer">
                    <img alt="GitHub" src={github} />
                </a>
                <div />
                <a href="https://www.youracclaim.com/badges/6cce4ac8-48ff-411b-9ef9-eb9a6e2a847e/linked_in_profile" target="_blank" rel="noopener noreferrer">
                    <img alt="AWS SAA Cert" src={awsSaa} />
                </a>
            </span>
        </div>
        <div>
            <CodeSnippet declarator="var" variable="peter" object={peter} />
        </div>
    </div>
);

export default Landing;
