const { UserService } = require('../services');
const { createToken } = require('../auth/authfunctions');

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const createdUser = await UserService.createUser(user);

    if (!createdUser) throw Error;

    const { password: _password, ...userWhitoutPassword } = createdUser.dataValues;
    const token = createToken(userWhitoutPassword);

    res.status(201).json({ token });
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (req, res) => {
  const { data } = req.payload;

  if (!data) throw Error;

  const users = await UserService.getUsers();

  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getUsers,
};
