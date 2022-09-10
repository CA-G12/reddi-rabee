const createUser = require('./add');
const deleteUser = require('./delete');
const getUserByEmail = require('./get');
const getAllUsers = require('./getAll');
const {updateUserName, updateUserAvatar,
  updateUserPassword} = require('./update');

module.exports = {deleteUser, getUserByEmail, getAllUsers,
  updateUserName, updateUserAvatar, updateUserPassword,
  createUser,
};
