const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const predictRoutes = require('./routes/predict-routes');
const customPredictRoutes = require('./routes/custom-predict-routes');
const authRoutes = require('./routes/auth-routes');
const errorHandler = require('./middleware/error-handler');
const rateLimiter = require('./middleware/rate-limiter');
const auth = require('./middleware/auth');
const logger = require('./middleware/logger');

const app = express();
const port = process.env.APP_PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(rateLimiter);
app.use(logger);
app.use(errorHandler);
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/predict', predictRoutes);
app.use('/api/custom-predict', customPredictRoutes);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
} else {
    module.exports = app;
}
