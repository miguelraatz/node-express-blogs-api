const { UserService } = require('../services');
const { createToken } = require('../auth/authfunctions');

const createUser = async (req, res) => {
  const user = req.body;
  const createdUser = await UserService.createUser(user);

  if (!createdUser) throw Error;

  const { password: _password, ...userWhitoutPassword } = createdUser.dataValues;
  const token = createToken(userWhitoutPassword);

  res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const { data } = req.payload;

  if (!data) throw Error;

  const users = await UserService.getUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getUserById(id);

  if (user === null) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
