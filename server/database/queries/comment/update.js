const connection = require('../../config/connection');

const updateComment = (id, newComment, newDate) =>
  connection.query(
      'UPDATE posts SET comment = $2, date = $3 ' +
      'Where id = $1 RETURNING *',
      [id, newComment, newDate]);

module.exports = updateComment;
