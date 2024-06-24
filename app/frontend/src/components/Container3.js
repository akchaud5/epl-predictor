import React, { useState } from 'react';
import '../styles/styles.css';
import axios from 'axios';

const Container3 = () => {
    const [customPrediction, setCustomPrediction] = useState(null);
    const [customInputData, setCustomInputData] = useState('');

    const handleCustomInputChange = (event) => {
        setCustomInputData(event.target.value);
    };

    const handleCustomPredict = () => {
        axios.post('http://localhost:5000/api/predict-custom', { input: customInputData })
            .then(response => {
                setCustomPrediction(response.data.prediction);
            })
            .catch(error => {
                console.error('There was an error making the custom prediction!', error);
            });
    };

    return (
        <div className="container1">
            <div className="header-container1">
                <h1 className="header-text">Custom Predictions</h1>
                <p className="description">This page is related to generating the best overall Fantasy Premier League team.</p>
                <button id="make-predictions-btn" className="view-players-button" onClick={handleCustomPredict}>Predict Custom</button>
                {customPrediction && <p>Custom Prediction: {customPrediction}</p>}
            </div>
        </div>
    );
};

export default Container3;
