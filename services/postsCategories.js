const { Category } = require('../models');
const JoiSchema = require('../helpers/schemas');

const create = async (name) => {
  const { error } = JoiSchema.categorySchema.validate({ name });
  if (error) return { code: 400, message: error.details[0].message };
  const category = await Category.create({ name });
  return category;
};

const getCategories = async () => {
  const category = await Category.findAll();
  return category;
};

module.exports = { create, getCategories };
