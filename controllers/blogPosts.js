const rescue = require('express-rescue');
const blogPostServices = require('../services/blogPosts');

const create = rescue(async (req, res) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const post = await blogPostServices.create(authorization, { title, content, categoryIds });
  if (post.code) {
    return res.status(post.code).json({ message: post.message });
  }
  return res.status(201).json(post);
});

const getAll = rescue(async (req, res) => {
  const blogPosts = await blogPostServices.getAll();
  return res.status(200).json(blogPosts);
});

const getPostById = rescue(async (req, res) => {
  const { id } = req.params;
  const post = await blogPostServices.getPostById(id);
  if (post.code) {
    return res.status(post.code).json({ message: post.message });
  }
  return res.status(200).json(post);
});

const updatePost = rescue(async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const post = await blogPostServices
  .updatePost(authorization, { id, title, content, categoryIds });
  if (post.code) {
    return res.status(post.code).json({ message: post.message });
  }
  return res.status(200).json(post);
});

const deletePost = rescue(async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const post = await blogPostServices.deletePost(authorization, id);
  if (post.code) {
    return res.status(post.code).json({ message: post.message });
  }
  return res.status(204).end();
});

const searchByTitleOrContent = rescue(async (req, res) => {
  const { q } = req.query;
  const post = await blogPostServices.searchByTitleOrContent(q);
  return res.status(200).son(post);
});

module.exports = {
  create,
  getAll,
  getPostById,
  updatePost,
  deletePost,
  searchByTitleOrContent,
};
