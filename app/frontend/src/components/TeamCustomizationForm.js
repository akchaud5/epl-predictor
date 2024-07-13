import React, { useState } from 'react';
import '../styles/teamcustomization.css';
import PlayerCardContainer from './PlayerCardContainer';

const TeamCustomizationForm = ({ onSubmit, customPlayers }) => {
    const [formData, setFormData] = useState({
        numGoalkeepers: 1,
        numDefenders: 4,
        numMidfielders: 4,
        numForwards: 2,
        budget: 800,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: parseInt(value) });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData); // Pass formData to parent component (PredictCustomPage)
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
                        name="numGoalkeepers"
                        min="0"
                        max="2"
                        value={formData.numGoalkeepers}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="defenders">Number of Defenders:</label>
                    <input
                        type="number"
                        id="defenders"
                        name="numDefenders"
                        min="0"
                        max="5"
                        value={formData.numDefenders}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="midfielders">Number of Midfielders:</label>
                    <input
                        type="number"
                        id="midfielders"
                        name="numMidfielders"
                        min="0"
                        max="5"
                        value={formData.numMidfielders}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="forwards">Number of Forwards:</label>
                    <input
                        type="number"
                        id="forwards"
                        name="numForwards"
                        min="0"
                        max="3"
                        value={formData.numForwards}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="budget">Budget (0-1000):</label>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        min="0"
                        max="1000"
                        value={formData.budget}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Customize Team</button>
            </form>
            <PlayerCardContainer
                players={customPlayers}
                numGoalkeepers={formData.numGoalkeepers}
                numDefenders={formData.numDefenders}
                numMidfielders={formData.numMidfielders}
                numForwards={formData.numForwards}
            />
        </div>
    );
};

export default TeamCustomizationForm;
