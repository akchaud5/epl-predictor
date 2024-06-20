import React from 'react';
import './styles/styles.css';

const Container1 = () => (
    <div className="container1">
        <div className="header-container1">
            <h1 className="header-text">Premier League Player Performance Predictions</h1>
            <p className="description">Here are the best performing players in the English Premier League according to my machine learning model.</p>
            <form action="/predict" method="post">
                <button id="make-predictions-btn" className="view-players-button">Make Predictions</button>
            </form>
        </div>
    </div>
);

export default Container1;
