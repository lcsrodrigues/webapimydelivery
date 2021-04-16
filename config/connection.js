const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'mysql743.umbler.com:41890',
    port: 3306,
    user: 'lcsrodrigues',
    password: 'Q1w2e3r4',
    database: 'dbmydelivery'
});

module.exports = conn;