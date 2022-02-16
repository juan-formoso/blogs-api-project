const router = require('express').Router();
const { create, getCategories } = require('../controllers/postsCategories');

router.post('/', create);
router.get('/', getCategories);

module.exports = router;
