const { Pool } = require('pg');

export const pool = new Pool({
    user: 'myuser',
    host: '192.168.0.154',
    database: 'mydatabase',
    password: 'mypassword',
    port: 5432,
});
