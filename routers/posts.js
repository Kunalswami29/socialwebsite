const express= require('express');
const route = express.Router();

const postController=require('../controllers/users_post');

route.get('/contacts',postController.contacts);

module.exports=route;