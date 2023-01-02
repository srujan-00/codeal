const express = require('express');
const router = express.Router();
console.log('router loaded');
homeController = require('../controllers/home_controller');
console.log(homeController);
router.get('/', homeController.home);
router.use('/users', require('./users'));



module.exports = router;