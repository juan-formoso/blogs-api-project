const rescue = require('express-rescue');
const categoryServices = require('../services/category');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
  const category = await categoryServices.createCategory(name);
  if (category.code) {
    return res.status(category.code).json({ message: category.message });
  }
  return res.status(201).json(category);
});

const getCategories = rescue(async (req, res) => {
  const categories = await categoryServices.getCategories();
  return res.status(200).json(categories);
});

module.exports = { createCategory, getCategories };
