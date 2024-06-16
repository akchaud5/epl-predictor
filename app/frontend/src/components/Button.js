import React from 'react';

const Button = ({ buttonText, handleClick }) => {
    return (
        <div>
            <h2>Button Component</h2>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    );
}

export default Button;