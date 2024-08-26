import React from 'react';
import SignUpForm from '../components/SignUpForm';
import Navbar from "../components/Navbar";
import '../styles/signup.css'

const SignUpPage = () => {
    return (
        <div className="signup-page">
            <SignUpForm />
        </div>
    );
};

export default SignUpPage;
