const mysql = require('mysql');

const conn = mysql.createPool({
    host: 'mysql743.umbler.com',
    port: 3306,
    user: 'lcsrodrigues',
    password: 'Q1w2e3r4',
    database: 'dbmydelivery'
});

module.exports = conn;