const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'q1w2e3r4',
    database: 'mydelivery'
});

module.exports = conn;