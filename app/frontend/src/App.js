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
import SignUpPage from "./pages/SignUpPage";
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './authentication/auth-context';
import './styles/styles.css';


function App() {
    return (
        <Router>
            <div>
                <AuthProvider>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/predict" element={<PredictPage />} />
                            <Route path="/predict-custom" element={<PredictCustomPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/info" element={<InformationPage/>} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </div>
        </Router>
    );
}

export default App;
