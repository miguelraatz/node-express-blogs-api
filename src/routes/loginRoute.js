const express = require('express');
const login = require('../controllers/login');
const validateEmailAndPassword = require('../middlewares/validateEmailAndPassword');

const loginRoutes = express.Router();

loginRoutes.post('/', validateEmailAndPassword, login);

module.exports = loginRoutes;