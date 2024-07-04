const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const predictRoutes = require('./routes/predict-routes');
const customPredictRoutes = require('./routes/custom-predict-routes');
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

// app.use(auth);

// Routes
app.use('/api', predictRoutes);
app.use('/api', customPredictRoutes);

// Error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
