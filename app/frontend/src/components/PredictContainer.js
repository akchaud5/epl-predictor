import React, { useState } from 'react';
import '../styles/prediction.css';
import axios from 'axios';

const PredictContainer = () => {
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handlePredict = () => {
        setError(null);
        axios.post('http://localhost:5000/api/predict')
            .then(response => {
                setPrediction(response.data.prediction);
            })
            .catch(error => {
                console.error('There was an error making the prediction!', error);
                setError('There was an error making the prediction. Please try again.');
            });
    };

    return (
        <div className="prediction-container">
            <div className="prediction-container1">
                <h1 className="prediction-text">Predictions</h1>
                <p className="description">This page is related to generating the best overall Fantasy Premier League team.</p>
                <button id="make-predictions-btn" className="view-players-button" onClick={handlePredict}>Make Predictions</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {prediction && <p>Prediction: {prediction}</p>}
            </div>
        </div>
    );
};

export default PredictContainer;
