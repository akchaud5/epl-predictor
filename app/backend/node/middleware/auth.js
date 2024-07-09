module.exports = (req, res, next) => {

    // Placeholder authentication logic to be created later

    const apiKey = req.headers['api-key'];

    if (apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(403).json({ error: 'Unauthorized' });
    }
};
