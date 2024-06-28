import React from 'react';
import '../styles/playercard.css';

const PlayerCard = ({ imgSrc, playerName }) => (
    <div className="photo-container">
        <img src={imgSrc} alt={playerName} />
        <div className="card-description">
            <p>{playerName}</p>
        </div>
    </div>
);

export default PlayerCard;
