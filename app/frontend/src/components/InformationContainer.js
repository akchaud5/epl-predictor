import React from 'react';
import '../styles/information.css';
import axios from 'axios';



const InformationContainer = ({ imageUrl, text, buttonText, targetId }) => {
    const handleButtonClick = () => {
        axios.post('http://localhost:5000/api/i-need-to-fix-this')
            .then(response => {
                console.log('Request successful:', response.data);
            })
            .catch(error => {
                console.error('There was an error making the request!', error);
            });
    };

    return (
        <div className="information-container" id={targetId}>
            <div className="info-header-div">
                <h1 className="info-header">Information Page</h1>
            </div>
            <div className="content">
                <div className="visualization">
                    <img src={imageUrl} alt="Visualization" className="visualization-image"/>
                </div>
                <div className="text-and-button">
                    <p className="information-text">{text}</p>
                    <button className="information-button" onClick={handleButtonClick}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default InformationContainer;
