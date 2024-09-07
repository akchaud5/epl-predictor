const request = require('supertest');
const app = require('../index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

jest.mock('jsonwebtoken');

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: 5432,
});

describe('Auth Routes', () => {
    beforeAll(async () => {
        // Create the users table if it doesn't exist
        await db.query(`
            CREATE TABLE IF NOT EXISTS users (
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE,
                role VARCHAR(100),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);
    });

    beforeEach(async () => {
        // Clear the users table before each test to ensure independence
        await db.query('DELETE FROM users');

        // Hash password using real bcrypt
        const hashedPassword = await bcrypt.hash('password123', 10);

        // Insert a test user with unique credentials for this test
        await db.query(`
            INSERT INTO users (username, password_hash, email, role)
            VALUES ('testuserauth', $1, 'testuserauth@example.com', 'admin')`,
            [hashedPassword]
        );
    });

    afterEach(async () => {
        // Ensure table is cleaned up after each test
        await db.query('TRUNCATE TABLE users RESTART IDENTITY');
    });

    afterAll(async () => {
        // Clean up the database after all tests in this suite
        await db.query('DELETE FROM users');
        await db.end();
    });

    it('should return 200 OK and a token for valid login', async () => {
        // Mock token generation
        const mockToken = 'test-token';
        jwt.sign.mockReturnValue(mockToken);

        const response = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuserauth', password: 'password123' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token', mockToken);
    });

    it('should return 400 for non-existent user', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ username: 'nonexistentuser', password: 'password123' });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid credentials');
    });

    it('should return 400 for incorrect password', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuserauth', password: 'wrongpassword' });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid credentials');
    });

    it('should return 404 if an incorrect request is sent', async () => {
        const response = await request(app).get('/api/auth/login');

        expect(response.status).toBe(404);
    });

});
