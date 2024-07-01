import React from 'react';

const NavigationButton = ({ buttonText, targetId, className, id }) => {
    return (
        <a href={`#${targetId}`} className={className} id={id}>
            {buttonText}
        </a>
    );
};

export default NavigationButton;
