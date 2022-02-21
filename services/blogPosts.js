const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
<<<<<<< HEAD
const { BlogPost, Category, User, PostsCategory } = require('../models');
const { blogPostSchema, updatePostSchema } = require('../helpers/schemas');
=======
const { User } = require('../models');
const { Categories } = require('../models');
const { PostsCategories } = require('../models');
const { BlogPost } = require('../models');
const JoiSchema = require('../helpers/schemas');
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
require('dotenv').config();

const decodeIdToken = (token) => {
  const { id } = jwt.decode(token, process.env.JWT_SECRET);
  return id;
};

const validateCategory = async (categoryIds) => {
  const categories = categoryIds.map((value) => Category.findByPk(value));
  const exists = await Promise.all(categories);
  if (exists.some((value) => value === null)) {
    return false;
  }
  return true;
};

const validateBlogPost = async ({ title, content, categoryIds }) => {
  const { error } = blogPostSchema.validate({ title, content, categoryIds });
  if (error) {
    return { code: 400, message: error.details[0].message };
  }
  const categories = await validateCategory(categoryIds);
  if (!categories) {
    return { code: 400, message: '"categoryIds" not found' };
  }
  return {};
};

const validateUpdatePost = (token, { id, title, content, categoryIds }) => {
  const { error } = updatePostSchema.validate({ title, content });
  const tokenId = decodeIdToken(token);
  if (error) {
    return { code: 400, message: error.details[0].message };
  }
  if (categoryIds) {
    return { code: 400, message: 'Categories cannot be edited' };
  }
  if (tokenId !== +id) {
    return { code: 401, message: 'Unauthorized user' };
  }
  return {};
};

<<<<<<< HEAD
const create = async (userToken, { title, content, categoryIds }) => {
  const { code, message } = await validateBlogPost({ title, content, categoryIds });
  const id = decodeIdToken(userToken);
  const date = new Date();
  if (code) {
    return { code, message };
  }
  const post = await BlogPost
  .create({ userId: id, title, content, updated: date, published: date });
=======
const createBlogPostServices = async (userToken, { title, content, categoryIds }) => {
  const { code, message } = await blogPostValidation({ title, content, categoryIds });
  const id = decodeToken(userToken);
  const date = new Date();
  if (code) return { code, message };
  const post = await BlogPost.create(
    { userId: id, title, content, updated: date, published: date },
  );
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
  const postId = post.dataValues.id;
  await Promise.all(categoryIds.map((categoryId) => PostsCategory.create({ postId, categoryId })));
  const { updated, published, ...blogPost } = post.dataValues;
  return blogPost;
};

const getPostById = async (id) => {
<<<<<<< HEAD
  const [categories] = await BlogPost.findAll({
    where: { id },
=======
  const [categories] = await BlogPost.findAll({ 
    where: { id }, 
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ]
    , 
  });
  return categories || { code: 404, message: 'Post does not exist' };
};

<<<<<<< HEAD
const getAll = async () => {
=======
const getAllCategories = async () => {
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
  const categories = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ]
    , 
  });
  return categories;
};

const updatePost = async (token, { id, title, content, categoryIds }) => {
<<<<<<< HEAD
  const { code, message } = validateUpdatePost(token, { id, title, content, categoryIds });
  if (code) {
    return { code, message };
  }
=======
  const { code, message } = updatePostValidation(token, { id, title, content, categoryIds });
  if (code) return { code, message };
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
  await BlogPost.update({ title, content, updated: new Date() }, { where: { id } });
  const [post] = await BlogPost.findAll({ 
    where: { id },
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: { model: Category, as: 'categories', through: { attributes: [] } } });
  return post;
};

const deletePost = async (token, id) => {
<<<<<<< HEAD
  const tokenId = decodeIdToken(token); 
  const post = await BlogPost.findByPk(id);
  if (!post) {
    return { code: 404, message: 'Post does not exist' };
  }
  if (tokenId !== +id) {
    return { code: 401, message: 'Unauthorized user' };
  }
  await PostsCategory.destroy({ where: { postId: id } });
  const deleteBloPost = await BlogPost.destroy({ where: { id } });
  return deleteBloPost;
=======
  const tokenId = decodeToken(token); 
  const post = await BlogPost.findByPk(id);
  if (!post) return { code: 404, message: 'Post does not exist' };
  if (tokenId !== +id) return { code: 401, message: 'Unauthorized user' };
  await PostsCategories.destroy({ where: { postId: id } });
  const deleteBlogPost = await BlogPost.destroy({ where: { id } });
  return deleteBlogPost;
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
};

const searchByTitleOrContent = async (searchTerm) => {
  const findPost = await BlogPost.findAll({
    where: { [Op.or]: [
        { title: { [Op.substring]: searchTerm } },
        { content: { [Op.substring]: searchTerm } },
    ],
    },
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ]
    , 
  });
  return findPost || [];
};

module.exports = {
<<<<<<< HEAD
  create,
  getAll,
=======
  createBlogPostServices,
  getAllCategories,
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
  getPostById,
  updatePost,
  deletePost,
  searchByTitleOrContent,
};
