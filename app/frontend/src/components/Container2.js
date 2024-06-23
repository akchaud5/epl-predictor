import React from 'react';
import '../styles/styles.css';

const Container2 = () => (
    <div className="container1">
        <div className="header-container1">
            <h1 className="header-text">Premier League Player Performance Predictions</h1>
            <p className="description">This web app is designed to help you find the best performing players in the English Premier League for your FPL team according to my machine learning model.</p>
            <form action="/predict" method="post">
                <button id="make-predictions-btn" className="view-players-button">Make Predictions</button>
            </form>
        </div>
    </div>
);

export default Container2;
