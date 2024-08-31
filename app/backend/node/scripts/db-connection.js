const db = require('../config/db');

async function testDB() {
    try {
        const res = await db.query('SELECT NOW() as currentTime');
        if (res.rows && res.rows.length > 0) {
            console.log('Database connection test successful:', res.rows[0].currenttime);
        } else {
            console.log('No data received from the database.');
        }
    } catch (err) {
        console.error('Database connection test failed:', err);
    } finally {
        await db.end();
    }
}

testDB();
