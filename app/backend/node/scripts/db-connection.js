const db = require('../config/db');

async function testDB() {
    try {
        const res = await db.query('SELECT NOW() as currentTime');
        console.log('Database connection test successful:', res.rows[0].currentTime);
    } catch (err) {
        console.error('Database connection test failed:', err);
    } finally {
        db.end(); 
    }
}

testDB();
