import React from 'react';
import '../styles/about.css';
import '../styles/information.css'

const TextContainer = ({ headerText, paragraphText, buttonText }) => {
    return (
        <div className="about-container">
            <div className="about-container1">
                <h1 className="about-text">{headerText}</h1>
                <p className="description">{paragraphText}</p>
                <button id="info-btn" className="view-players-button">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default TextContainer;
