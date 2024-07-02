import React from 'react';
import PlayerCard from './PlayerCard';
import '../styles/playercard.css';

const playerSilhouette = null;

const defaultPlayers = [
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

const PlayerCardContainer = ({ players = [] }) => {
    const generatePlayerCards = (count, startIndex) => {
        return (players.length ? players.slice(startIndex, startIndex + count) : defaultPlayers.slice(startIndex, startIndex + count)).map((player, index) => (
            <PlayerCard key={index} imgSrc={null} playerName={player[0] || player.playerName} />
        ));
    };

    const goalkeepers = generatePlayerCards(2, 13);
    const defenders = generatePlayerCards(5, 0);
    const midfielders = generatePlayerCards(5, 5);
    const forwards = generatePlayerCards(3, 10);

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
