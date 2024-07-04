const express = require('express');
const router = express.Router();
const customPredictController = require('../controllers/custom-predict-controller');

router.post('/predict-custom', customPredictController.predictCustom);

module.exports = router;
