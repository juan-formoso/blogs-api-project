const categoryModel = require('../models/categories');
const JoiSchema = require('../helpers/schemas');

const createCategory = async (req, res) => {
  const { error } = JoiSchema.categorySchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  const category = await categoryModel.create(req.body);
  return res.status(201).json({
    status: 201,
    data: category,
  });
};

const getAllCategories = async (req, res) => {
  const categories = await categoryModel.findAll();
  return res.status(200).json({
    status: 200,
    data: categories,
  });
};

module.exports = { createCategory, getAllCategories };
