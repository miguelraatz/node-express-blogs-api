const express = require('express');
const { createUser, getUsers } = require('../controllers/user');
const validateEmail = require('../middlewares/validateEmail');
const validateDisplayName = require('../middlewares/validateDisplayName');
const validatePassword = require('../middlewares/validatePassword');
const validateJWT = require('../middlewares/validateJWT');

const userRoutes = express.Router();

userRoutes.post('/', validateDisplayName, validateEmail, validatePassword, createUser);

userRoutes.get('/', validateJWT, getUsers);

module.exports = userRoutes;