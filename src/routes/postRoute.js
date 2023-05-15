const express = require('express');

const {
  validatePost,
  validateCategory,
  validatePostUpdate,
} = require('../middlewares/validatePost');

const validateJWT = require('../middlewares/validateJWT');
const validateUser = require('../middlewares/validateUser');

const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/post');

const postRoutes = express.Router();

postRoutes.post('/', validateJWT, validatePost, validateCategory, createPost);

postRoutes.get('/', validateJWT, getPosts);

postRoutes.get('/:id', validateJWT, getPostById);

postRoutes.put('/:id', validateJWT, validateUser, validatePostUpdate, updatePost);

postRoutes.delete('/:id', validateJWT, validateUser, deletePost);

module.exports = postRoutes;
