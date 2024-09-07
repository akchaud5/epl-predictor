const { Pool } = require("pg");

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: 5432,
});

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
    }
}

async function resetDatabase() {
    try {
        await db.query('BEGIN');
        await db.query('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
        await db.query('COMMIT');
        console.log('Database reset successful!');
    } catch (err) {
        await db.query('ROLLBACK');
        console.error('Error resetting database:', err);
    }
}

describe('Database Schema Tests', () => {
    beforeAll(async () => {
        await createSchema();
    });

    afterAll(async () => {
        // Reset the database state after the test is done
        await resetDatabase();
        await db.end();
    });

    it('should create the "users" table with correct schema', async () => {
        const tableCheckQuery = `
            SELECT column_name, data_type
            FROM information_schema.columns
            WHERE table_name = 'users';
        `;

        const result = await db.query(tableCheckQuery);

        const expectedColumns = [
            { column_name: 'user_id', data_type: 'integer' },
            { column_name: 'username', data_type: 'character varying' },
            { column_name: 'password_hash', data_type: 'character varying' },
            { column_name: 'email', data_type: 'character varying' },
            { column_name: 'role', data_type: 'character varying' },
            { column_name: 'created_at', data_type: 'timestamp with time zone' }
        ];

        const actualColumns = result.rows.map(row => ({
            column_name: row.column_name,
            data_type: row.data_type,
        }));

        expectedColumns.forEach(expectedColumn => {
            expect(actualColumns).toContainEqual(expectedColumn);
        });
    });

    it('should insert a user into the "users" table', async () => {
        const insertUserQuery = `
            INSERT INTO users (username, password_hash, email, role)
            VALUES ('testuserschema', 'hashedpassword123', 'testuserschema@example.com', 'admin')
            RETURNING *;
        `;
        const result = await db.query(insertUserQuery);

        expect(result.rows.length).toBe(1);
        expect(result.rows[0].username).toBe('testuserschema');
        expect(result.rows[0].email).toBe('testuserschema@example.com');
        expect(result.rows[0].role).toBe('admin');
    });

    it('should fail to insert a duplicate username into the "users" table', async () => {
        const duplicateUserQuery = `
            INSERT INTO users (username, password_hash, email, role)
            VALUES ('testuserschema', 'newhashedpassword', 'newemail@example.com', 'user');
        `;

        await expect(db.query(duplicateUserQuery)).rejects.toThrow();
    });
});
