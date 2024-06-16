// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PredictPage from './pages/PredictPage';
import PredictCustomPage from './pages/PredictCustomPage';
import AboutPage from './pages/AboutPage';
import Button from './components/Button';
import Message from './components/Message';
import InputWithButton from './components/InputWithButton';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/predict" element={<PredictPage />} />
                    <Route path="/predict-custom" element={<PredictCustomPage />} />
                    <Route path="/about" element={<AboutPage />} />

                    <Route path="/button" element={<Button buttonText="Click me" handleClick={() => alert('Button clicked!')} />} />
                    <Route path="/message" element={<Message message="Welcome to our website!" />} /> 
                    <Route path="/input" element={<InputWithButton />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
