const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create = async function(req, res){
    try{
        await Post.create({
            content: req.body.content,
            user: req.user._id
        });
         return res.redirect('back');
        
    }catch(err){
        console.log('error',err);
        return;

    }   
}

// this is to delete the post
module.exports.destroy = async function(req, res){
    try{
        let post = await Post.findById(req.params.id);
        // .id means converting the object id into string
       if (post.user == req.user.id){
           post.remove();
        // this is to delete the many comments with same id
           await Comment.deleteMany({post: req.params.id});
           return res.redirect('back');
        }else{
            return res.redirect('back');
        }
    }catch(err){
        console.log('error',err);
        return;
    }
  
}