const express = require('express');
const { validatePost, validateCategory } = require('../middlewares/validatePost');
const validateJWT = require('../middlewares/validateJWT');
const { createPost } = require('../controllers/post');

const postRoutes = express.Router();

postRoutes.post('/', validateJWT, validatePost, validateCategory, createPost);

module.exports = postRoutes;
