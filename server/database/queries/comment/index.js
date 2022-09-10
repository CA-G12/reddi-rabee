const addComment = require('./add');
const deleteComment = require('./delete');
const getUserCommentByID = require('./get');
const getAllComments = require('./getAll');
const updateComment = require('./update');

module.exports = {addComment, deleteComment, getUserCommentByID,
  getAllComments, updateComment};
