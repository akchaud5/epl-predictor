import React from 'react';
import './styles/styles.css';

const TeamCustomizationForm = () => (
    <div className="team-customization-container">
        <h1 className="team-customization-header">Team Customization</h1>
        <form className="team-customization-form">
            <div className="form-group">
                <label htmlFor="players">Number of Players:</label>
                <input type="number" id="players" name="players" min="1" max="11" />
            </div>
            <button type="submit">Customize Team</button>
        </form>
    </div>
);

export default TeamCustomizationForm;
