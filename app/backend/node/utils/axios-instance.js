const axios = require('axios');

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5001';

const instance = axios.create({
    baseURL: SERVER_URL,
});

module.exports = instance;
