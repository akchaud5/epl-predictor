const express = require('express');
const router = express.Router();
const customPredictController = require('../controllers/custom-predict-controller');
const auth = require('../middleware/auth');

router.post('/predict-custom', auth, customPredictController.predictCustom);

module.exports = router;
