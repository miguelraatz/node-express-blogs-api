const { PostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { data: { id } } = req.payload;
  const newPost = await PostService.createPost(title, content, id, categoryIds);
  return res.status(201).json(newPost);
};

module.exports = {
  createPost,
};
