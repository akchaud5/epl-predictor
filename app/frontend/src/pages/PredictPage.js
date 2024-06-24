import React, { useState } from 'react';
import axios from 'axios';
import Container2 from "../components/Container2";
import PlayerCardContainer from '../components/PlayerCardContainer';

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
            <Container2/>
            <PlayerCardContainer/>
        </div>
    );
}

export default PredictPage;
