const express = require('express');
const {
  validatePost,
  validateCategory,
  validatePostUpdate,
} = require('../middlewares/validatePost');
const validateJWT = require('../middlewares/validateJWT');
const { createPost, getPosts, getPostById, updatePost } = require('../controllers/post');

const postRoutes = express.Router();

postRoutes.post('/', validateJWT, validatePost, validateCategory, createPost);

postRoutes.get('/', validateJWT, getPosts);

postRoutes.get('/:id', validateJWT, getPostById);

postRoutes.put('/:id', validatePostUpdate, validateJWT, updatePost);

module.exports = postRoutes;
