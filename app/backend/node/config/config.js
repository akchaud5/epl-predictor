require('dotenv').config();

module.exports = {
    PORT: process.env.APP_PORT || 5000,
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:5001',
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/yourdbname'
};
