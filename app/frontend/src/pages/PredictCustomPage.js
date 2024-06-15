import React, { useState } from 'react';
import axios from 'axios';

function PredictCustomPage() {
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
        <div>
            <h1>Predict Custom Page</h1>
            <input
                type="text"
                value={customInputData}
                onChange={handleCustomInputChange}
                placeholder="Enter custom data for prediction"
            />
            <button onClick={handleCustomPredict}>Predict Custom</button>
            {customPrediction && <p>Custom Prediction: {customPrediction}</p>}
        </div>
    );
}

export default PredictCustomPage;
