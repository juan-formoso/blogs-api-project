const rescue = require('express-rescue');
const blogPostServices = require('../services/blogPosts');

<<<<<<< HEAD
const create = rescue(async (req, res) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const post = await blogPostServices.create(authorization, { title, content, categoryIds });
  if (post.code) {
    return res.status(post.code).json({ message: post.message });
  }
=======
const createBlogPostControllers = async (req, res) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;
  const post = await blogPostsServices.createBlogPostServices(
    authorization, { title, content, categoryIds },
  );
  if (post.code) return res.status(post.code).json({ message: post.message });
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
  return res.status(201).json(post);
};

<<<<<<< HEAD
const getAll = rescue(async (req, res) => {
  const blogPosts = await blogPostServices.getAll();
=======
/* const getAllCategories = rescue(async (_req, res) => {
  const blogPosts = await blogPostsServices.getAllCategories(); 
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
  return res.status(200).json(blogPosts);
}); */

const getAllCategories = (_req, res) => {
  res.status(200).json([]);
}; 

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
  return res.status(200).json(post);
});

module.exports = {
<<<<<<< HEAD
  create,
  getAll,
=======
  createBlogPostControllers,
  getAllCategories,
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
  getPostById,
  updatePost,
  deletePost,
  searchByTitleOrContent,
};
