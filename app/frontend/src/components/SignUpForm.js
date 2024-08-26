import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';

const SignUpForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', userData);
            console.log('Signup successful:', response.data);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.error || 'Signup failed. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        className="input-field"
                        value={userData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="input-field"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="input-field"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="input-field"
                        value={userData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default SignUpForm;
