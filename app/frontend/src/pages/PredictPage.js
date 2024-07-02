import React, { useState } from 'react';
import axios from 'axios';
import PredictContainer from "../components/PredictContainer";
import PlayerCardContainer from '../components/PlayerCardContainer';

const PredictPage = () => {
    const [players, setPlayers] = useState([]);

    const numGoalkeepers = 2;
    const numDefenders = 5;
    const numMidfielders = 5;
    const numForwards = 3;

    const handlePredict = (fetchedPlayers) => {
        setPlayers(fetchedPlayers);
    };

    return (
        <div>
            <PredictContainer onPredict={handlePredict} />
            <PlayerCardContainer
                players={players}
                numGoalkeepers={numGoalkeepers}
                numDefenders={numDefenders}
                numMidfielders={numMidfielders}
                numForwards={numForwards}
            />
        </div>
    );
};

export default PredictPage;
