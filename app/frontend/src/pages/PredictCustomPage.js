import React, { useState } from 'react';
import axios from 'axios';
import CustomContainer from "../components/CustomContainer";
import TeamCustomizationForm from "../components/TeamCustomizationForm";
import {Form} from "react-router-dom";
import FooterContainer from "../components/FooterContainer";

function PredictCustomPage() {
    const [customPrediction, setCustomPrediction] = useState([]);

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
                setCustomPrediction(response.data.topPlayers);
            })
            .catch(error => {
                console.error('There was an error making the custom prediction!', error);
            });
    };

    return (
        <div>
            <CustomContainer/>
            <TeamCustomizationForm onSubmit={handleCustomPredict} customPlayers={customPrediction} />
            <FooterContainer/>
        </div>
    );
}

export default PredictCustomPage;
