const router = require('express').Router();
const { createUser, getAllUsers, getUserById, deleteUser } = require('../controllers/user');
const authMiddleware = require('../helpers/auth');

router.post('/', createUser);
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.delete('/me', authMiddleware, deleteUser);

module.exports = router;
