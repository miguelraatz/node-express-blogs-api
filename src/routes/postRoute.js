const express = require('express');
const validatePost = require('../middlewares/validatePost');
const { createPost } = require('../controllers/post');

const postRoutes = express.Router();

postRoutes.post('/', validatePost, createPost);

module.exports = postRoutes;
