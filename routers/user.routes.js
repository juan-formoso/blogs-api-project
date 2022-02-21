const router = require('express').Router();
const { create, getUsers, getUserById, deleteUser } = require('../controllers/user');
const authMiddleware = require('../helpers/auth');

router.post('/', create);
router.get('/', authMiddleware, getUsers);
router.get('/:id', authMiddleware, getUserById);
router.delete('/me', authMiddleware, deleteUser);

module.exports = router;
