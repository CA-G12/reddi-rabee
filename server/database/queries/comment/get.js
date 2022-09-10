const connection = require('../../config/connection');

const getUserCommentByID = (id) =>
  connection.query(
      'SELECT * FROM comments WHERE id = $1',
      [id]);

module.exports = getUserCommentByID;
