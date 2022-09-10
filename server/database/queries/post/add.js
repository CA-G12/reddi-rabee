const connection = require('../../config/connection');

const addPost = (data) =>
  connection.query(
      'INSERT INTO posts (title,body,vote,voters,date,user_id) ' +
      'VALUES ($1,$2,$3,$4,$5,$6) RETURNING id',
      data);

module.exports = addPost;
