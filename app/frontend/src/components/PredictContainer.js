import React from 'react';
import '../styles/prediction.css';
import axios from 'axios';

const PredictContainer = ({ onPredict }) => {
    const handlePredict = () => {
        axios.post('http://localhost:5000/api/predict')
            .then(response => {
                const fetchedPlayers = response.data;
                onPredict(fetchedPlayers);
            })
            .catch(error => {
                console.error('There was an error making the prediction!', error);
                alert('There was an error making the prediction. Please try again.');
            });
    };

    return (
        <div className="prediction-container">
            <div className="prediction-container1">
                <h1 className="prediction-text">Predictions</h1>
                <p className="description">This page is related to generating the best overall Fantasy Premier League team.</p>
                <button id="make-predictions-btn" className="view-players-button" onClick={handlePredict}>Make Predictions</button>
            </div>
        </div>
    );
};

export default PredictContainer;
