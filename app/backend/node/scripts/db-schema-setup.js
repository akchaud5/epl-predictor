const db = require('../config/db');

console.log("Running database schema setup...");

async function createSchema() {
    try {
        await db.query('BEGIN');

        const createUsersTable = `
            CREATE TABLE IF NOT EXISTS users (
                user_id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE,
                role VARCHAR(100),
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await db.query(createUsersTable);
        await db.query('COMMIT');
        console.log('Schema creation successful!');
    } catch (err) {
        await db.query('ROLLBACK');
        console.error('Error creating schema:', err);
    } finally {
        await db.end();
    }
}

createSchema();
