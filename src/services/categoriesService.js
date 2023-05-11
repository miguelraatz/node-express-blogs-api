const { Category } = require('../models');

const createCategory = (name) => Category.create(name);

const getCategories = () => Category.findAll();

const getCategoriesById = (id) => Category.findOne({ where: { id } });

module.exports = {
  createCategory,
  getCategories,
  getCategoriesById,
};
