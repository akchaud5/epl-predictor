const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    level: 'error',
    format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log' })
    ]
});

module.exports = (err, req, res, next) => {

    logger.error({
        message: err.message,
        stack: err.stack,
        status: err.status || 500,
        url: req.originalUrl,
        method: req.method,
        ip: req.ip
    });

    const response =
        process.env.NODE_ENV === 'development'
            ? { message: err.message, stack: err.stack }
            : { message: 'Internal Server Error' };

    const status = err.status || 500;
    res.status(status).json(response);
};
