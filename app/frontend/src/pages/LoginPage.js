import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from "../components/Navbar";
import '../styles/login.css'

const LoginPage = () => {
    const handleLoginSuccess = (userData) => {
        console.log('User logged in successfully:', userData);
        // To be added: Redirection
    };

    return (
        <div className="login-page">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
