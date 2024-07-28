require('dotenv').config();

module.exports = {
    PORT: process.env.APP_PORT || 5000,
    SERVER_URL: process.env.SERVER_URL || 'http://localhost:5001',
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/dbname',
    ENVIRONMENT: process.env.NODE_ENV || 'development',
    JWT_SECRET: process.env.JWT_SECRET || 'jwt_secret',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    RATE_LIMIT_WINDOW: parseInt(process.env.RATE_LIMIT_WINDOW) || 15 * 60 * 1000,
    RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX) || 100,
    CORS_ORIGIN: process.env.CORS_ORIGIN || '*'
};
