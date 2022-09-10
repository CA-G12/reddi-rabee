const connection = require('../../config/connection');

const deleteUser = (email) =>
  connection.query(
      'DElETE FROM users WHERE email = $1 RETURNING id',
      [email]);

module.exports = deleteUser;
