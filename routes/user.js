const router = require('express').Router();
const userController = require('../controllers/user');
const authMiddleware = require('../helpers/authentification');

router.post('/', userController.createUser);
router.get('/', authMiddleware, userController.getUsers);
router.get('/:id', authMiddleware, userController.getUserById);
router.delete('/', authMiddleware, userController.deleteUser);

module.exports = router;
