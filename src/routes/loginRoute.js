const express = require('express');
const login = require('../controllers/login');
const validateLogin = require('../middlewares/validateLogin');

const loginRoutes = express.Router();

loginRoutes.post('/', validateLogin, login);

module.exports = loginRoutes;