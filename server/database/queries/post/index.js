const addPost = require('./add');
const deletePost = require('./delete');
const getPostByID = require('./get');
const getAllPosts = require('./getAll');
const {updatePost, updatePostVote} = require('./update');

module.exports = {addPost, deletePost, getPostByID,
  updatePost, updatePostVote, getAllPosts,
};
