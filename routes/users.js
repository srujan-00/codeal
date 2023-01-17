const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');


router.get('/profile', userController.profile);
router.get('/posts', userController.posts);
router.get('/sign-up',userController.signUp);
router.post('/sign-up',userController.create);
router.get('/sign-in',userController.signIn);
router.post('/sign-in',userController.createSession);

module.exports = router;
