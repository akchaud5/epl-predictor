import React, { useState } from 'react';
import axios from 'axios';

function PredictPage() {
    const [prediction, setPrediction] = useState(null);
    const [inputData, setInputData] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    const handlePredict = () => {
        setError(null);
        axios.post('http://localhost:5000/api/predict', { input: inputData })
            .then(response => {
                setPrediction(response.data.prediction);
            })
            .catch(error => {
                console.error('There was an error making the prediction!', error);
                setError('There was an error making the prediction. Please try again.');
            });
    };

    return (
        <div>
            <h1>Predict Page</h1>
            <input
                type="text"
                value={inputData}
                onChange={handleInputChange}
                placeholder="Enter data for prediction"
            />
            <button onClick={handlePredict}>Predict</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {prediction && <p>Prediction: {prediction}</p>}
        </div>
    );
}

export default PredictPage;
