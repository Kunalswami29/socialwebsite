const express= require('express');
const router = express.Router();
const postsController=require('../controllers/posts_controller');//this is for accessing the models

// router.get('/post',postsController.postPage);// this is after signing page rendering to the posts psge
router.post('/create',postsController.create);//this is for calling the controller to create

module.exports=router;