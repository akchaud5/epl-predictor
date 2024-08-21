const express = require('express');
const router = express.Router();
const customPredictController = require('../controllers/custom-predict-controller');

router.post('/', customPredictController.predictCustom);
router.get('/test', customPredictController.test);

module.exports = router;
