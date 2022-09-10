const connection = require('../../config/connection');

const getAllComments = (postID) => connection.query(
    'SELECT * FROM comments WHERE fk_post = $1', [postID]);

module.exports = getAllComments;
