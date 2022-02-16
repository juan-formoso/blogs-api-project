const categoriesModel = require('../models/categories');
const JoiSchema = require('../helpers/schemas');

const create = async (name) => {
  const { error } = JoiSchema.categorySchema.validate({ name });
  if (error) return { code: 400, message: error.details[0].message };
  const category = await categoriesModel.create({ name });
  return category;
};

const getCategories = async () => {
  const category = await categoriesModel.findAll();
  return category;
};

module.exports = { create, getCategories };
