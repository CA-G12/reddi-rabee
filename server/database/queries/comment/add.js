const connection = require('../../config/connection');

/**
 * This function is to insert comments into data base
 * @param {Array} data [comment,user_id,post_id,date]
 * @returns {Number} id of the inserted comment
 */

const addComment = (data) =>
  connection.query(
      'INSERT INTO comments (comment,user_id,post_id,date) ' +
      'VALUES ($1,$2,$3,$4) RETURNING id',
      data);

module.exports = addComment;
