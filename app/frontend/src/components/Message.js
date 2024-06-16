import React, { useState } from 'react';

const Message = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    }

    return (
        <div>
            {isVisible && (
                <div>
                    <h2>Message</h2>
                    <p>{message}</p>
                    <button onClick={handleClose}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Message;
