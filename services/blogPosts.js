const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { User } = require('../models');
const categoriesModel = require('../models/Categories');
const postsCategoriesModel = require('../models/PostsCategories');
const blogPostsModel = require('../models/BlogPosts');
const JoiSchema = require('../helpers/schemas');
require('dotenv').config();

const decodeToken = (token) => {
  const { id } = jwt.decode(token, process.env.JWT_SECRET);
  return id;
};

const categoryValidation = async (categoryIds) => {
  const categories = categoryIds.map((value) => categoriesModel.findByPk(value));
  const exists = await Promise.all(categories);
  if (exists.some((value) => value === null)) {
    return false;
  }
  return true;
};

const blogPostValidation = async ({ title, content, categoryIds }) => {
  const { error } = JoiSchema.blogPostSchema.validate({ title, content, categoryIds });
  if (error) return { code: 400, message: error.details[0].message };
  const categories = await categoryValidation(categoryIds);
  if (!categories) return { code: 400, message: '"categoryIds" not found' };
  return {};
};

const updatePostValidation = (token, { id, title, content, categoryIds }) => {
  const { error } = JoiSchema.updatePostSchema.validate({ title, content });
  const tokenId = decodeToken(token);
  if (error) return { code: 400, message: error.details[0].message };
  if (categoryIds) return { code: 400, message: 'Categories cannot be edited' };
  if (tokenId !== +id) return { code: 401, message: 'Unauthorized user' };
  return {};
};

const createBlogPost = async (userToken, { title, content, categoryIds }) => {
  const { code, message } = await blogPostValidation({ title, content, categoryIds });
  const id = decodeToken(userToken);
  const date = new Date();
  if (code) return { code, message };
  const post = await blogPostsModel.create(
    { userId: id, title, content, updated: date, published: date },
  );
  const postId = post.dataValues.id;
  await Promise.all(categoryIds.map((categoryId) => postsCategoriesModel.create(
    { postId, categoryId },
  )));
  const { updated, published, ...blogPost } = post.dataValues;
  return blogPost;
};

const getPostById = async (id) => {
  const [categories] = await blogPostsModel.findAll({ 
    where: { id }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: categoriesModel, as: 'categories', through: { attributes: [] } },
    ], 
  });
  return categories || { code: 404, message: 'Post does not exist' };
};

const getAllCategories = async () => {
  const categories = await blogPostsModel.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: categoriesModel, as: 'categories', through: { attributes: [] } },
    ], 
  });
  return categories;
};

const updatePost = async (token, { id, title, content, categoryIds }) => {
  const { code, message } = updatePostValidation(token, { id, title, content, categoryIds });
  if (code) return { code, message };
  await blogPostsModel.update({ title, content, updated: new Date() }, { where: { id } });
  const [post] = await blogPostsModel.findAll({ 
    where: { id },
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: { model: categoriesModel, as: 'categories', through: { attributes: [] } },
  });
  return post;
};

const deletePost = async (token, id) => {
  const tokenId = decodeToken(token); 
  const post = await blogPostsModel.findByPk(id);
  if (!post) return { code: 404, message: 'Post does not exist' };
  if (tokenId !== +id) return { code: 401, message: 'Unauthorized user' };
  await postsCategoriesModel.destroy({ where: { postId: id } });
  const deleteBlogPost = await blogPostsModel.destroy({ where: { id } });
  return deleteBlogPost;
};

const searchByTitleOrContent = async (searchTerm) => {
  const findPost = await blogPostsModel.findAll({
    where: { [Op.or]: [
      { title: { [Op.substring]: searchTerm } },
      { content: { [Op.substring]: searchTerm } },
    ],
    },  
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: categoriesModel, as: 'categories', through: { attributes: [] } },
    ], 
  });
  return findPost || [];
};

module.exports = {
  createBlogPost,
  getAllCategories,
  getPostById,
  updatePost,
  deletePost,
  searchByTitleOrContent,
};
