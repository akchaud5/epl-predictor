import React from 'react';
import '../styles/about.css';

const AboutContainer = ({ reverseOrder = false, source, title, description }) => {
    return (
        <div id="target" className={`about-container2 ${reverseOrder ? 'reversed' : ''}`}>
            <div className="about-picture-container">
                <img className="profile-image" src={source} alt="Profile Picture"/>
            </div>
            <div className="about-text-container2">
                <h1 className="about-header">{title}</h1>
                <p className="about-description">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default AboutContainer;
