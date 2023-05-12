const express = require('express');
const { validatePost, validateCategory } = require('../middlewares/validatePost');
const validateJWT = require('../middlewares/validateJWT');
const { createPost, getPosts, getPostById } = require('../controllers/post');

const postRoutes = express.Router();

postRoutes.post('/', validateJWT, validatePost, validateCategory, createPost);

postRoutes.get('/', validateJWT, getPosts);

postRoutes.get('/:id', validateJWT, getPostById);

module.exports = postRoutes;
