import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PredictPage from './pages/PredictPage';
import PredictCustomPage from './pages/PredictCustomPage';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/predict" component={PredictPage} />
                <Route path="/predict-custom" component={PredictCustomPage} />
            </Switch>
        </div>
    );
}

export default App;
