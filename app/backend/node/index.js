const express = require('express');
const cors = require('cors');
const axios = require('axios');  // Use axios for HTTP requests

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Python server URL
const PYTHON_SERVER_URL = 'http://localhost:5001';

app.get('/api/home', (req, res) => {
    res.json({ message: 'Welcome to the Home Page!' });
});

app.post('/api/predict', async (req, res) => {
    const input = req.body.input;
    try {
        const response = await axios.post(`${PYTHON_SERVER_URL}/api/predict`, { input });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error calling Python API' });
    }
});

app.post('/api/predict-custom', async (req, res) => {
    const input = req.body.input;
    try {
        const response = await axios.post(`${PYTHON_SERVER_URL}/api/predict-custom`, { input });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error calling Python API' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
