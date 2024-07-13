import React from 'react';
import PlayerCard from './PlayerCard';
import '../styles/playercard.css';

const playerSilhouette = null;

const defaultPlayers = [
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
    { imgSrc: playerSilhouette, playerName: 'Forward 3' },
    { imgSrc: playerSilhouette, playerName: 'Goalkeeper 1' },
    { imgSrc: playerSilhouette, playerName: 'Goalkeeper 2' }
];

const PlayerCardContainer = ({ players = [], headerText, numGoalkeepers = 2, numDefenders = 5, numMidfielders = 5, numForwards = 3 }) => {
    const generatePlayerCards = (count, startIndex) => {
        return (players.length ? players.slice(startIndex, startIndex + count) : defaultPlayers.slice(startIndex, startIndex + count)).map((player, index) => (
            <PlayerCard key={index} imgSrc={player.imgSrc || playerSilhouette} playerName={player[0] || player.playerName} />
        ));
    };

    const goalkeepers = generatePlayerCards(numGoalkeepers, numDefenders+numMidfielders+numForwards);
    const defenders = generatePlayerCards(numDefenders, 0);
    const midfielders = generatePlayerCards(numMidfielders, numDefenders);
    const forwards = generatePlayerCards(numForwards, numDefenders+numMidfielders);

    return (
        <div>
            <div className="card-header-div">
                <h1 className="card-header">{headerText}</h1>
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
