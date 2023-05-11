const { CategoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await CategoriesService.createCategory({ name });

  return res.status(201).json(category);
};

const getCategories = async (_req, res) => {
  const categories = await CategoriesService.getCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};
