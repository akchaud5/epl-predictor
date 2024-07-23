import React from 'react';
import '../styles/about.css';

const AboutContainer = ({ reverseOrder = false, source }) => {
    return (
        <div id="target" className={`about-container2 ${reverseOrder ? 'reversed' : ''}`}>
            <div className="about-picture-container">
                <img className="profile-image" src={source} alt="Profile Picture"/>
            </div>
            <div className="about-text-container2">
                <h1 className="about-header">Overview</h1>
                <p className="about-description">
                    I am an incoming Computer Science senior at Arizona State University, looking
                    to further my experience in the industry. My main interests are Software Engineering and and
                    Artificial Intelligence, specifically related to Machine Learning. I'm a hardworking individual
                    who is adaptable to many situations and puts in a daily commitment to learning and
                    improvement.
                </p>
            </div>
        </div>
    );
}

export default AboutContainer;
