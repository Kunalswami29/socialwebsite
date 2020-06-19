const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));        //this is used to call the userss.js file from index.js
router.use('/posts',require('./posts'));        //this is used to call the posts.js file from index.js
router.use('/comments',require('./comments')) ;        //this is used to call the posts.js file from index.js

router.use('/api',require('./api'));
router.use('/likes',require('./likes'))

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;