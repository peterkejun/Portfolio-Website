import React from 'react';

import './Experience.css';

const Experience = (props) => (
    <div class="experience">
        <div class="experience-title-wrapper" style={props.titleStyle}>
            <h5 
            class="experience-title"
            >{props.title}</h5>
        </div>

        <div class="experience-content-wrapper" style={{backgroundColor: props.titleStyle.backgroundColor}}>
        <div class="experience-content-inner-wrapper">
            {props.children}
        </div>
    </div>
    </div>
    
);

export default Experience;
