const express = require('express');
const validateJWT = require('../middlewares/validateJWT');
const validateCategory = require('../middlewares/validateCategory');
const { createCategory, getCategories } = require('../controllers/category');

const categoriesRoutes = express.Router();

categoriesRoutes.post('/', validateJWT, validateCategory, createCategory);

categoriesRoutes.get('/', validateJWT, getCategories);

module.exports = categoriesRoutes;