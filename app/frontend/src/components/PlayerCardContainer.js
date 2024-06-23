import React from 'react';
import PlayerCard from './PlayerCard';
import '../styles/styles.css';

const topPlayers = [
    { imgSrc: null, playerName: 'Goalkeeper 1' },
    { imgSrc: null, playerName: 'Goalkeeper 2' },
    { imgSrc: null, playerName: 'Defender 1' },
    { imgSrc: null, playerName: 'Defender 2' },
    { imgSrc: null, playerName: 'Defender 3' },
    { imgSrc: null, playerName: 'Defender 4' },
    { imgSrc: null, playerName: 'Defender 5' },
    { imgSrc: null, playerName: 'Midfielder 1' },
    { imgSrc: null, playerName: 'Midfielder 2' },
    { imgSrc: null, playerName: 'Midfielder 3' },
    { imgSrc: null, playerName: 'Midfielder 4' },
    { imgSrc: null, playerName: 'Midfielder 5' },
    { imgSrc: null, playerName: 'Forward 1' },
    { imgSrc: null, playerName: 'Forward 2' },
    { imgSrc: null, playerName: 'Forward 3' }
];

const PlayerCardContainer = () => {
    return (
        <div>
            <div className="larger-header-div">
                <h1 className="larger-header">Predicted Best Players per Position</h1>
            </div>

            <div className="container">
                {topPlayers.slice(0, 2).map((player, index) => (
                    <PlayerCard key={index} imgSrc={player.imgSrc} playerName={player.playerName} />
                ))}
            </div>

            <div className="container">
                {topPlayers.slice(2, 7).map((player, index) => (
                    <PlayerCard key={index} imgSrc={player.imgSrc} playerName={player.playerName} />
                ))}
            </div>

            <div className="container">
                {topPlayers.slice(7, 12).map((player, index) => (
                    <PlayerCard key={index} imgSrc={player.imgSrc} playerName={player.playerName} />
                ))}
            </div>

            <div className="container">
                {topPlayers.slice(12).map((player, index) => (
                    <PlayerCard key={index} imgSrc={player.imgSrc} playerName={player.playerName} />
                ))}
            </div>
        </div>
    );
};

export default PlayerCardContainer;
