const axios = require('../utils/axios-instance');

exports.predict = () => {
    return axios.post('/api/predict');
};

exports.predictCustom = (input) => {
    return axios.post('/api/predict-custom', { input });
};
