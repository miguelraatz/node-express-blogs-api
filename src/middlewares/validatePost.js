const { getCategoriesById } = require('../services/categoriesService');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  const verifyCategoryId = await Promise
  .all(categoryIds.map((categoryId) => getCategoriesById(categoryId)));

  const resultVerification = verifyCategoryId.every((id) => id);

  if (categoryIds.length === 0 || resultVerification === false) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};

module.exports = {
  validatePost,
  validateCategory,
};