const express = require('express');
const cors = require('cors');
const axios = require('axios');  // Use axios for HTTP requests
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 5000;
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5001';

app.use(cors());
app.use(express.json());

app.use(helmet());

app.use(morgan('combined'));

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100
});
app.use(limiter);

app.post('/api/predict', async (req, res) => {
    try {
        const response = await axios.post(`${SERVER_URL}/api/predict`);
        res.json(response.data);
    } catch (error) {
        console.error('Error calling Python API:', error);
        res.status(500).json({ error: 'Error calling Python API' });
    }
});

app.post('/api/predict-custom', async (req, res) => {
    const input = req.body.input;
    try {
        const response = await axios.post(`${SERVER_URL}/api/predict-custom`, { input });
        res.json(response.data);
    } catch (error) {
        console.error('Error calling Python API:', error);
        res.status(500).json({ error: 'Error calling Python API' });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
