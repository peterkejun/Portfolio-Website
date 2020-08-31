import React from 'react';

import './CodeSnippet.css';

// const generateTab

const generateJSXFromObject = (object) => {
    if (Array.isArray(object)) {
        return (
            <>
                <span className="symbol">[</span>
                <br />
                <div className="tab">
                    {object.map((item, i) => (
                        <React.Fragment
                            key={i}
                        >
                            {generateJSXFromObject(item)}
                        </React.Fragment>
                    ))}
                </div>
                <span className="symbol">],</span>
            </>
        );
    } if (typeof object === 'string') {
        return (
            <>
                <span className="string">
                    &quot;
                    {object}
                    &quot;
                </span>
                <span className="symbol">, </span>
            </>
        );
    }
    return (
        <>
            <span className="symbol">{'{'}</span>
            <br />
            <div className="tab">
                {Object.keys(object).map((key, i) => (
                    <React.Fragment key={i}>
                        <span className="key">{key}</span>
                        <span className="symbol">
                            :&nbsp;
                        </span>
                        {generateJSXFromObject(object[key])}
                        <br />
                    </React.Fragment>
                ))}
            </div>
            <span className="symbol">{'}'}</span>
        </>
    );
};

const CodeSnippet = ({ declarator, variable, object }) => (
    <div className="code-snippet-wrapper">
        <span className="declarator">{declarator}</span>
        &nbsp;
        <span className="variable">{variable}</span>
        &nbsp;
        <span className="symbol">=&nbsp;</span>
        {generateJSXFromObject(object)}
    </div>
);

export default CodeSnippet;
