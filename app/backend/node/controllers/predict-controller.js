const predictService = require('../services/predict-service');

exports.predict = async (req, res) => {
    try {
        const response = await predictService.predict();
        res.json(response.data);
    } catch (error) {
        console.error('Error calling Python API:', error);
        res.status(500).json({ error: 'Error calling Python API' });
    }
};
