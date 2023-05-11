const { verifyToken } = require('../auth/authfunctions');

const validateJwt = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(400).json({ message: 'A requisição precisa de um token válido' });
    }

    const data = verifyToken(authorization);
    req.payload = data;
    return next();
  } catch (error) {
    res.status(500).json(
      {
        message: 'Erro ao acessar o endpoint',
        error: 'É necessário um token válido par acessar esse endpoint',
      },
);
  }
};

module.exports = validateJwt;
