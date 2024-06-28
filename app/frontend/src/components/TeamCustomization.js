import React, { useState } from 'react';
import '../styles/teamcustomization.css';
import PlayerCardContainer from './PlayerCardContainer';

const TeamCustomizationForm = () => {
    const [numGoalkeepers, setNumGoalkeepers] = useState(1);
    const [numDefenders, setNumDefenders] = useState(4);
    const [numMidfielders, setNumMidfielders] = useState(4);
    const [numForwards, setNumForwards] = useState(2);

    const handleInputChange = (setter) => (event) => {
        setter(Number(event.target.value));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Goalkeepers: ${numGoalkeepers}`);
        console.log(`Defenders: ${numDefenders}`);
        console.log(`Midfielders: ${numMidfielders}`);
        console.log(`Forwards: ${numForwards}`);
    };

    return (
        <div className="team-customization-container">
            <h1 className="team-customization-header">Team Customization</h1>
            <form className="team-customization-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="goalkeepers">Number of Goalkeepers:</label>
                    <input
                        type="number"
                        id="goalkeepers"
                        name="goalkeepers"
                        min="0"
                        max="2"
                        value={numGoalkeepers}
                        onChange={handleInputChange(setNumGoalkeepers)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="defenders">Number of Defenders:</label>
                    <input
                        type="number"
                        id="defenders"
                        name="defenders"
                        min="0"
                        max="5"
                        value={numDefenders}
                        onChange={handleInputChange(setNumDefenders)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="midfielders">Number of Midfielders:</label>
                    <input
                        type="number"
                        id="midfielders"
                        name="midfielders"
                        min="0"
                        max="5"
                        value={numMidfielders}
                        onChange={handleInputChange(setNumMidfielders)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="forwards">Number of Forwards:</label>
                    <input
                        type="number"
                        id="forwards"
                        name="forwards"
                        min="0"
                        max="3"
                        value={numForwards}
                        onChange={handleInputChange(setNumForwards)}
                    />
                </div>
                <button type="submit">Customize Team</button>
            </form>
            <PlayerCardContainer
                numGoalkeepers={numGoalkeepers}
                numDefenders={numDefenders}
                numMidfielders={numMidfielders}
                numForwards={numForwards}
            />
        </div>
    );
};

export default TeamCustomizationForm;
