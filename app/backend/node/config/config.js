const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const configPath = path.join(__dirname, 'config.yaml');

const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

module.exports = {
    PORT: process.env.APP_PORT || config.server.port,
    SERVER_URL: process.env.SERVER_URL || config.server.url,
    DB_URL: process.env.DB_URL || config.database.url,
    JWT_SECRET: process.env.JWT_SECRET || config.auth.jwtSecret,
    LOG_LEVEL: process.env.LOG_LEVEL || config.logging.level,
    RATE_LIMIT_WINDOW: parseInt(process.env.RATE_LIMIT_WINDOW) || config.rateLimiter.windowMs,
    RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX) || config.rateLimiter.max,
    CORS_ORIGIN: process.env.CORS_ORIGIN || config.cors.origin,
};
