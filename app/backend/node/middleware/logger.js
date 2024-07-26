const morgan = require('morgan');
const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ],
});

const stream = {
    write: (message) => {
        logger.info(message.trim());
    },
};

const morganMiddleware = morgan('combined', { stream });

module.exports = morganMiddleware;
