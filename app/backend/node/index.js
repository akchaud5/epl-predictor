const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

app.post('/call-python', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/predict', req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error calling Python function');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
