const request = require('supertest');
const app = require('../index');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: 5432,
});

describe('Protected Routes', () => {

    // Recreate the users table before each test
    beforeEach(async () => {
        await db.query(`
            DROP TABLE IF EXISTS users;
        `);
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

        // Hash password using real bcrypt
        const hashedPassword = await bcrypt.hash('password123', 10);

        // Insert a test user
        await db.query(`
            INSERT INTO users (username, password_hash, email, role)
            VALUES ('testuser', $1, 'testuser@example.com', 'admin')`,
            [hashedPassword]
        );
    });

    // Close the database connection after all tests
    afterAll(async () => {
        await db.end();
    });

    it('should return 401 Unauthorized for accessing /api/predict without token', async () => {
        const response = await request(app)
            .post('/api/predict')
            .set('Authorization', `Bearer `); // Invalid token
        expect(response.status).toBe(401);
    });

    it('should return 500 for accessing /api/predict with a valid token but with Flask not running', async () => {
        // Login to get a valid token
        const loginResponse = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'password123' });
        const token = loginResponse.body.token;

        // Attempt to access the route with the valid token
        const response = await request(app)
            .post('/api/predict')
            .set('Authorization', `Bearer ${token}`); // Valid token but Flask not running

        expect(response.status).toBe(500); // Expecting Flask to be down and return 500
    });

    it('should return 401 Unauthorized for accessing /api/custom-predict without token', async () => {
        const response = await request(app)
            .post('/api/custom-predict/predict-custom')
            .set('Authorization', `Bearer `); // Invalid token
        expect(response.status).toBe(401);
    });

    it('should return 500 for accessing /api/custom-predict with a valid token but with Flask not running', async () => {
        // Login to get a valid token
        const loginResponse = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'password123' });
        const token = loginResponse.body.token;

        // Attempt to access the route with the valid token
        const response = await request(app)
            .post('/api/custom-predict/predict-custom')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(500); // Expecting Flask to be down and return 500
    });
});
