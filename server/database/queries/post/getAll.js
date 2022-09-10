const connection = require('../../config/connection');

const getAllPosts = () => connection.query('SELECT * FROM posts');

module.exports = getAllPosts;
