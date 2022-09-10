const connection = require('../../config/connection');

const getAllUsers = () => connection.query('SELECT * FROM users');

module.exports = getAllUsers;
