const { UserService } = require('../services');
const { createToken } = require('../auth/authfunctions');

const createUser = async (req, res) => {
  try {
    const obj = req.body;
    const user = await UserService.createUser(obj);

    if (!user) throw Error;

    const { password: _password, ...userWhitoutPassword } = user.dataValues;
    const token = createToken(userWhitoutPassword);

    res.status(201).json({ token });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
};
