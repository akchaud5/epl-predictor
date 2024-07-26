const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth');
const router = express.Router();

const users = [];

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user
    const newUser = { id: users.length + 1, username, password: hashedPassword };
    users.push(newUser);

    const token = generateToken(newUser);
    res.status(201).json({ token });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Find user
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
});

module.exports = router;
