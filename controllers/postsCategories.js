const rescue = require('express-rescue');
const postsCategoriesServices = require('../services/postsCategories');

const create = rescue(async (req, res) => {
  const { name } = req.body;
  const category = await postsCategoriesServices.create(name);
  if (category.code) return res.status(category.code).json({ message: category.message });
  return res.status(201).json(category);
});

const getCategories = rescue(async (_req, res) => {
  const category = await postsCategoriesServices.getCategories();
  return res.status(200).json(category);
});

module.exports = { create, getCategories };
