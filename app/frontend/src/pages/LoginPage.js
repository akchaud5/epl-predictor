import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from "../components/Navbar";

const LoginPage = () => {
    const handleLoginSuccess = (userData) => {
        console.log('User logged in successfully:', userData);
        // To be added: Redirection
    };

    return (
        <div>
            <Navbar/>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
    );
};

export default LoginPage;
