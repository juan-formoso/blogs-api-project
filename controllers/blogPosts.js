const rescue = require('express-rescue');
const blogPostsServices = require('../services/blogPosts');

const createBlogPost = rescue(async (req, res) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const post = await blogPostsServices.createBlogPost(
    authorization, { title, content, categoryIds },
  );
  if (post.code) return res.status(post.code).json({ message: post.message });
  return res.status(201).json(post);
});

const getAllCategories = rescue(async (req, res) => {
  const blogPosts = await blogPostsServices.getAllCategories();
  return res.status(200).json(blogPosts);
});

const getPostById = rescue(async (req, res) => {
  const { id } = req.params;
  const post = await blogPostsServices.getPostById(id);
  if (post.code) return res.status(post.code).json({ message: post.message });
  return res.status(200).json(post);
});

const updatePost = rescue(async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const post = await blogPostsServices.updatePost(
    authorization, { id, title, content, categoryIds },
  );
  if (post.code) return res.status(post.code).json({ message: post.message });
  return res.status(200).json(post);
});

const deletePost = rescue(async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const post = await blogPostsServices.deletePost(authorization, id);
  if (post.code) return res.status(post.code).json({ message: post.message });
  return res.status(204).end();
});

const searchByTitleOrContent = rescue(async (req, res) => {
  const { q } = req.query;
  const post = await blogPostsServices.searchByTitleOrContent(q);
  return res.status(200).json(post);
});

module.exports = {
  createBlogPost,
  getAllCategories,
  getPostById,
  updatePost,
  deletePost,
  searchByTitleOrContent,
};
