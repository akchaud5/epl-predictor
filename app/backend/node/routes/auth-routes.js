const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/auth');
const router = express.Router();
const db = require('../config/db');

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists in the database
        const userResult = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userResult.rows.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const insertUser = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
        const newUser = await db.query(insertUser, [username, hashedPassword]);

        // Generate a token
        const token = generateToken({ id: newUser.rows[0].id, username });

        res.status(201).json({ token });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
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
