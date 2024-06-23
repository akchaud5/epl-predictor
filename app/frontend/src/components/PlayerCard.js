import React from 'react';
import '../styles/styles.css';

const PlayerCard = ({ imgSrc, playerName }) => (
    <div className="photo-container">
        <img src={imgSrc} alt={playerName} />
        <div className="description">
            <p>{playerName}</p>
        </div>
    </div>
);

export default PlayerCard;
