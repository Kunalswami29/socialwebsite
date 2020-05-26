const express = require('express');
//to load express library
const  router= express.Router();

// to use controllers
const homeController=require('../controllers/home_controllers');

// to access the routers and controllers 
router.get('/',homeController.home);

// router.use('/users',require('./users'));
// router.use('/post',require('./posts'));

//to use outside this file in index.js
module.exports=router;

