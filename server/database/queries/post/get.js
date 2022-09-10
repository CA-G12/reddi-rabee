const connection = require('../../config/connection');

const getUserPostByID = (id) =>
  connection.query(
      'SELECT * FROM posts WHERE id = $1',
      [id]);

module.exports = getUserPostByID;
