const { PostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { data: { id } } = req.payload;
  const newPost = await PostService.createPost(title, content, id, categoryIds);
  return res.status(201).json(newPost);
};

const getPosts = async (_req, res) => {
  const posts = await PostService.getPosts();
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getPosts,
};
