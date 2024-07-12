import React, { useState } from 'react';
import axios from 'axios';
import CustomContainer from "../components/CustomContainer";
import TeamCustomizationForm from "../components/TeamCustomizationForm";

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
            <CustomContainer/>
            <div className="larger-header-div">
                <h1 className="larger-header">Custom Predicted Best Players</h1>
            </div>
            <TeamCustomizationForm/>
        </div>
    );
}

export default PredictCustomPage;
