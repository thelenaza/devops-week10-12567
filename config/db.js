const mysql = require('mysql2');
require('dotenv').config()

// Create the connection pool.
const connect = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// For pool initialization, see above
connect.getConnection(function (err, connection) {
    if (err) {
        console.log('Error connecting to database')
        return
    }
    console.log('Database connected to suuccessfully')
    connection.release();
});

module.exports = connect