const express = require('express');
const cors = require('cors');
const axios = require('axios');  // Use axios for HTTP requests

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const SERVER_URL = 'http://localhost:5001';

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
        res.status(500).json({ error: 'Error calling Python API' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
