import React from 'react';
import '../styles/styles.css';

const Container4 = ({ headerText, paragraphText, buttonText }) => {
    return (
        <div className="container1">
            <div className="header-container1">
                <h1 className="header-text">{headerText}</h1>
                <p className="description">{paragraphText}</p>
                <button id="info-btn" className="view-players-button">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Container4;
