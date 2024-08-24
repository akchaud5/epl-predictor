import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PredictPage from './pages/PredictPage';
import PredictCustomPage from './pages/PredictCustomPage';
import AboutPage from './pages/AboutPage';
import InformationPage from './pages/InformationPage';
import LoginPage from './pages/LoginPage';
import './styles/styles.css';


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
                    <Route path="/info" element={<InformationPage/>} />
                    <Route path="/login" element={<LoginPage/>} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
