const Comment = require('../models/comment');
const Post = require('../models/post');
// this is to create a comments to a particular post
module.exports.create = function(req, res){
    Post.findById(req.body.post, function(err, post){  // this is to find the post in the db by the id passed

        if (post){  // if the post is find  now it's time to create a comment for that
            Comment.create({ // this is creating the commment in the db
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                // handle error

                post.comments.push(comment); // this is to push comment to the post(arrayofcomments section );
                post.save(); // this is to save after pushing it

                res.redirect('/');
            });
        }

    });
}

// this is todelete the comment 
module.exports.destroy = function(req, res){
    Comment.findById(req.params.id, function(err, comment){   // this is to find the comment in the db by id 
        if (comment.user == req.user.id){ // this is to check whether the comment belongs to the particular user or not 
            // to store the id of the post in which this particular comment is stored
            let postId = comment.post;

            comment.remove();
            // this is to store the id of the post to which this particular comment belong
            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    });
}