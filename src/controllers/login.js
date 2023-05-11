const { createToken } = require('../auth/authfunctions');
const { UserService } = require('../services');

module.exports = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await UserService.getUserByEmail(email);
    console.log('USER', user);
    if (!user || password !== user.password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: _password, ...userWhitoutPassword } = user.dataValues;

    const token = await createToken(userWhitoutPassword);
    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
  }
};
