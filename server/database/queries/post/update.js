const connection = require('../../config/connection');

const updatePost = (id, newTitle, newBody, newDate) =>
  connection.query(
      'UPDATE posts SET title = $2, body = $3, date = $4 ' +
      'Where id = $1 RETURNING *',
      [id, newTitle, newBody, newDate]);

const updatePostVote = (id, vote, voters) =>
  connection.query(
      'UPDATE posts SET vote = $2, voters = $3 ' +
      'Where id = $1 RETURNING vote',
      [id, vote, voters]);

module.exports ={updatePost, updatePostVote};
