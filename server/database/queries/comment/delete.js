const connection = require('../../config/connection');

const deleteCommentByID = (id) =>
  connection.query(
      'DElETE FROM comments WHERE id = $1 RETURNING comment',
      [id]);

module.exports = deleteCommentByID;
