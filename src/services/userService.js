const { User } = require('../models');

const getUserByEmail = (email) => User.findOne({ where: { email } });

const createUser = (body) => {
  const { displayName, email, password, image } = body;
  return User.create({ displayName, email, password, image });
};

module.exports = {
  getUserByEmail,
  createUser,
};
