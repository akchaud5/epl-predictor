import React from 'react';
import '../styles/home.css';

const HomeContainer = () => (
    <div className="home-container">
        <div className="home-container1">
            <h1 className="home-text">Premier League Player Performance Predictions</h1>
            <p className="description">This web app is designed to help you find the best performing players in the English Premier League for your FPL team according to my machine learning model. Please utilize this information responsibly and ethically.</p>
            <form action="/predict" method="post">
                <button id="make-predictions-btn" className="home-button">Start</button>
            </form>
        </div>
    </div>
);

export default HomeContainer;
