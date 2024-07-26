const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
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

app.use('/api/auth', authRoutes);

// Protect routes
app.use('/api/predict', auth, predictRoutes);
app.use('/api/custom-predict', auth, customPredictRoutes);

// Error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
