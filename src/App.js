import React from 'react';
import './App.css';
import Landing from './Landing/Landing';
import Work from 'Work/Work';
import Education from 'Education/Education';

function App() {
    return (
        <div className="App">
            <Landing />
            <Education />
            <Work />
        </div>
    );
}

export default App;
