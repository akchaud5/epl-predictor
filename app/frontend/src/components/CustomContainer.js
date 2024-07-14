import React, { useState } from 'react';
import '../styles/teamcustomization.css';
import axios from 'axios';

const CustomContainer = () => {
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
        <div className="container-custom">
            <div className="custom-container1">
                <h1 className="custom-text">Custom Predictions</h1>
                <p className="description">Here you can specify the number of players needed and generate a team with a custom budget. Please note that setting the budget too low might end up resulting in the inability to form a full team or effective team.</p>
                <button id="make-predictions-btn" className="custom-players-button" onClick={handleCustomPredict}>Make Custom Predictions</button>
                {customPrediction && <p>Custom Prediction: {customPrediction}</p>}
            </div>
        </div>
    );
};

export default CustomContainer;
