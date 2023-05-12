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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await PostService.getPostById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(post);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};
