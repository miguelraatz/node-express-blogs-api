const { CategoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await CategoriesService.createCategory({ name });

  return res.status(201).json(category);
};

module.exports = {
  createCategory,
};
