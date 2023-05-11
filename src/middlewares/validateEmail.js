const { getUserByEmail } = require('../services/userService');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const result = regex.test(email);
  if (!result) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const checkingEmailExistence = await getUserByEmail(email);
  if (checkingEmailExistence !== null) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return next();
};

module.exports = validateEmail;
