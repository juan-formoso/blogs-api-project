const router = require('express').Router();
const { 
  createBlogPost, 
  getAllCategories,
  getPostById, 
  updatePost,
  deletePost,
  searchByTitleOrContent,
} = require('../controllers/blogPosts');

router.post('/', createBlogPost);
router.get('/', getAllCategories);
router.get('/search', searchByTitleOrContent);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
