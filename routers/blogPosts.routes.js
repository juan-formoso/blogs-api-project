const router = require('express').Router();
const { 
<<<<<<< HEAD
  create, 
  getAll,
=======
  createBlogPostControllers, 
  getAllCategories,
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
  getPostById, 
  updatePost,
  searchByTitleOrContent, 
  deletePost,
} = require('../controllers/blogPosts');

<<<<<<< HEAD
router.post('/', create);
router.get('/', getAll);
=======
router.post('/', createBlogPostControllers);
router.get('/', getAllCategories);
>>>>>>> 89df334f400ddc796a28e9bd7777f0672c9f38af
router.get('/search', searchByTitleOrContent);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
