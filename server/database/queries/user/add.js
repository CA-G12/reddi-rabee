const connection = require('../../config/connection');

const createUser = (data) =>
  connection.query(
      'INSERT INTO users(name,password,email) VALUES ($1,$2,$3) RETURNING id',
      data);

module.exports =createUser;
