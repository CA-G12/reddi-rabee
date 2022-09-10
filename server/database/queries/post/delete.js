const connection = require('../../config/connection');

const deletePostByID = (id) =>
  connection.query(
      'DElETE FROM posts WHERE id = $1 RETURNING title',
      [id]);

module.exports = deletePostByID;
