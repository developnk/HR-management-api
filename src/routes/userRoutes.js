// routes/userRoutes.js
const express = require('express');
const queryWrapper = require('../middleware/queryWrapper');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', queryWrapper(userController.getUsers));
router.post('/users', queryWrapper(userController.addUser));

module.exports = router;
