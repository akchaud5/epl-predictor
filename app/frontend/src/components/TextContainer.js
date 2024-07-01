import React from 'react';
import '../styles/about.css';
import '../styles/information.css';
import NavigationButton from './NavigationButton';

const TextContainer = ({ headerText, paragraphText, buttonText, targetId }) => {
    return (
        <div className="about-container">
            <div className="about-container1">
                <h1 className="about-text">{headerText}</h1>
                <p className="description">{paragraphText}</p>
                <NavigationButton
                    buttonText={buttonText}
                    targetId={targetId}
                    className="view-players-button"
                    id="info-btn"
                />
            </div>
        </div>
    );
};

export default TextContainer;
