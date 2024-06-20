import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.css';

function Navbar() {
    return (
        <header className="header-bar">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/predict">Predict</Link></li>
                    <li><Link to="/predict-custom">Predict Custom</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href="https://www.instagram.com/matthewiwang/" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-instagram"></i></a>
                <a href="https://github.com/matthewwangg" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-github"></i></a>
                <a href="https://twitter.com/wangganggg" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/matthew-wang-cs/" target="_blank" rel="noopener noreferrer"><i
                    className="fab fa-linkedin"></i></a>
            </div>
        </header>
    );
}

export default Navbar;
