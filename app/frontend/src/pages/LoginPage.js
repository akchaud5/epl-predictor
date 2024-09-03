import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from "../components/Navbar";
import '../styles/login.css'

const LoginPage = () => {
    const handleLoginSuccess = (userData) => {
        console.log('User logged in successfully:', userData);
    };

    return (
        <div className="login-page">
            <LoginForm onLoginSuccess={handleLoginSuccess}/>
        </div>
    );
};

export default LoginPage;
