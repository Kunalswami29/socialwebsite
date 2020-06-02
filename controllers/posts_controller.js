const Post=require('../models/post');

//for creating the post in the db
module.exports.create=function(req,res){
    Post.create({
        content:req.body.content,//this is to sore content in the db
        user:req.user._id, //this is to store content to particular id in db
    },function(err,post){
        if(err){console.log('error in creating a post'); return;}
        

        return res.redirect('back');
    
    });
}

// for delete
