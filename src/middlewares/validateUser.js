const { getPostById } = require('../services/postService');

const validateUser = async (req, res, next) => {
  const { id } = req.params;
  const { data } = req.payload;
  const post = await getPostById(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  if (post.userId !== Number(data.id)) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return next();
};

module.exports = validateUser;
