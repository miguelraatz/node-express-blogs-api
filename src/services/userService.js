const { User } = require('../models');

const getUserByEmail = (email) => User.findOne({ where: { email } });

const createUser = (body) => {
  const { displayName, email, password, image } = body;
  return User.create({ displayName, email, password, image });
};

const getUsers = () => User.findAll({ attributes: { exclude: 'password' } });

const getUserById = (id) => User
.findOne({ where: { id }, attributes: { exclude: 'password' } });

const deleteUser = async (id) => {
  const deletedUser = User.destroy({ where: { id } });
  return deletedUser > 0;
};

module.exports = {
  getUserByEmail,
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};
