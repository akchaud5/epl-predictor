import React from 'react';
import PlayerCard from './PlayerCard';
import '../styles/playercard.css';

const playerSilhouette = null;

const topPlayers = [
    { imgSrc: playerSilhouette, playerName: 'Goalkeeper 1' },
    { imgSrc: playerSilhouette, playerName: 'Goalkeeper 2' },
    { imgSrc: playerSilhouette, playerName: 'Defender 1' },
    { imgSrc: playerSilhouette, playerName: 'Defender 2' },
    { imgSrc: playerSilhouette, playerName: 'Defender 3' },
    { imgSrc: playerSilhouette, playerName: 'Defender 4' },
    { imgSrc: playerSilhouette, playerName: 'Defender 5' },
    { imgSrc: playerSilhouette, playerName: 'Midfielder 1' },
    { imgSrc: playerSilhouette, playerName: 'Midfielder 2' },
    { imgSrc: playerSilhouette, playerName: 'Midfielder 3' },
    { imgSrc: playerSilhouette, playerName: 'Midfielder 4' },
    { imgSrc: playerSilhouette, playerName: 'Midfielder 5' },
    { imgSrc: playerSilhouette, playerName: 'Forward 1' },
    { imgSrc: playerSilhouette, playerName: 'Forward 2' },
    { imgSrc: playerSilhouette, playerName: 'Forward 3' }
];

const PlayerCardContainer = ({ numGoalkeepers, numDefenders, numMidfielders, numForwards }) => {

    const generatePlayerCards = (count, position, startIndex) => {
        return topPlayers.slice(startIndex, startIndex + count).map((player, index) => (
            <PlayerCard key={index} imgSrc={player.imgSrc} playerName={player.playerName} />
        ));
    };

    const goalkeepers = generatePlayerCards(numGoalkeepers, 'Goalkeeper', 0);
    const defenders = generatePlayerCards(numDefenders, 'Defender', 2);
    const midfielders = generatePlayerCards(numMidfielders, 'Midfielder', 7);
    const forwards = generatePlayerCards(numForwards, 'Forward', 12);

    return (
        <div>
            <div className="card-header-div">
                <h1 className="card-header">Predicted Best Players per Position</h1>
            </div>

            <div className="card-container">
                {goalkeepers}
            </div>

            <div className="card-container">
                {defenders}
            </div>

            <div className="card-container">
                {midfielders}
            </div>

            <div className="card-container">
                {forwards}
            </div>
        </div>
    );
};

export default PlayerCardContainer;
