import React, { useState } from 'react';

const InputWithButton = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        alert(`Input value: ${inputValue}`);
        setInputValue('');
    }

    return (
        <div>
            <h2>Input with Button</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default InputWithButton;
