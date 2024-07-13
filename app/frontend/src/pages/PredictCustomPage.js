import React, { useState } from 'react';
import axios from 'axios';
import CustomContainer from "../components/CustomContainer";
import TeamCustomizationForm from "../components/TeamCustomizationForm";

function PredictCustomPage() {
    const [customPrediction, setCustomPrediction] = useState(null);

    const handleCustomPredict = (formData) => {
        const { numGoalkeepers, numDefenders, numMidfielders, numForwards, budget } = formData;

        const requestData = {
            numGoalkeepers,
            numDefenders,
            numMidfielders,
            numForwards,
            budget,
        };

        axios.post('http://localhost:5001/api/predict-custom', { input: requestData })
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
            <TeamCustomizationForm onSubmit={handleCustomPredict}/>
            {customPrediction && <p>Custom Prediction: {customPrediction}</p>}
        </div>
    );
}

export default PredictCustomPage;
