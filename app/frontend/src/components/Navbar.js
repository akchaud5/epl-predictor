import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/predict">Predict</Link></li>
                <li><Link to="/predict-custom">Predict Custom</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
