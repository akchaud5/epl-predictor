const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) || 15 * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
    message: {
        status: 429,
        message: 'Too many requests, please try again later.'
    },
    handler: (req, res) => {
        res.status(429).json({
            status: 429,
            message: 'Too many requests, please try again later.'
        });
    },
    standardHeaders: true,
    legacyHeaders: false,
});
