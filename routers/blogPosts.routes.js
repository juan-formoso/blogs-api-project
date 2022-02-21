const router = require('express').Router();
const { 
  create, 
  getAll,
  getPostById, 
  updatePost,
  searchByTitleOrContent, 
  deletePost,
} = require('../controllers/blogPosts');

router.post('/', create);
router.get('/', getAll);
router.get('/search', searchByTitleOrContent);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
