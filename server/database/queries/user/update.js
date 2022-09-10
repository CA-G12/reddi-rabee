const connection = require('../../config/connection');

const updateUserName = (email, newName) =>
  connection.query(
      'UPDATE users SET name = $2 Where email = $1 RETURNING id',
      [email, newName]);
const updateUserAvatar = (email, newAvatar) =>
  connection.query(
      'UPDATE users SET avatar = $2 Where email = $1 RETURNING id',
      [email, newAvatar]);
const updateUserPassword = (email, newPassword) =>
  connection.query(
      'UPDATE users SET password = $2 Where email = $1 RETURNING id',
      [email, newPassword]);

module.exports ={updateUserName, updateUserAvatar, updateUserPassword};
