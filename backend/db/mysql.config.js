const mysql = require('mysql');
const config = {
    host: "localhost",
    user: "jahidul",
    password: "ikjahidul",
    database: "dry_node",
}
const connection = mysql.createConnection(config);
module.exports = connection;    