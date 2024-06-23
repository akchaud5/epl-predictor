import React from 'react';
import PlayerCard from './PlayerCard';
import '../styles/styles.css';

const Container = ({ players }) => (
    <div className="container">
        {players.map((player, index) => (
            <PlayerCard key={index} imgSrc={player.imgSrc} playerName={player.name} />
        ))}
    </div>
);

export default Container;
