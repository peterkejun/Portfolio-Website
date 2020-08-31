import React from 'react';

import CodeSnippet from 'CodeSnippet/CodeSnippet';

import './Landing.css';

import linkedin from 'img/linkedin.svg';
import github from 'img/github.svg';
import javascript from 'img/javascript.svg';

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
            </span>
        </div>
        <div>
            <div>
                <CodeSnippet declarator="var" variable="peter" object={peter} />
                <img src={javascript} alt="javascript" />
            </div>
            <div />
        </div>
    </div>
);

export default Landing;
