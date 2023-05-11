const express = require('express');
const validateJWT = require('../middlewares/validateJWT');
const validateCategory = require('../middlewares/validateCategory');
const { createCategory } = require('../controllers/category');

const categoriesRoutes = express.Router();

categoriesRoutes.post('/', validateJWT, validateCategory, createCategory);

module.exports = categoriesRoutes;