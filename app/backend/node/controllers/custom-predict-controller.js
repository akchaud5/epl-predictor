const predictService = require('../services/predict-service');

exports.predictCustom = async (req, res) => {
    const input = req.body.input;
    try {
        const response = await predictService.predictCustom(input);
        res.json(response.data);
    } catch (error) {
        console.error('Error calling Python API:', error);
        res.status(500).json({ error: 'Error calling Python API' });
    }
};


exports.test = async (req, res) => {

    res.status(200).send("Test successful");

};