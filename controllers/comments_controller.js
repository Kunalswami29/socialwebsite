const Comment = require('../models/comment');
const Post = require('../models/post');
// this is to create a comments to a particular post
module.exports.create = async function (req, res) {
    try {
        let post = await Post.findById(req.body.post);  // this is to find the post in the db by the id passed
        if (post) {  // if the post is find  now it's time to create a comment for that
         let comment= await Comment.create({ // this is creating the commment in the db
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });   // handle error

            post.comments.push(comment); // this is to push comment to the post(arrayofcomments section );
            post.save(); // this is to save after pushing it
            res.redirect('/');
        }
    } catch (err) {
        console.log('error', err);
        return;
    }

};

// this is todelete the comment 
module.exports.destroy = async function (req, res) {
    try {
        let comment = await Comment.findById(req.params.id);
        // this is to find the comment in the db by id 
        if (comment.user == req.user.id) { // this is to check whether the comment belongs to the particular user or not 
            // to store the id of the post in which this particular comment is stored
            let postId = comment.post;

            comment.remove();
            // this is to store the id of the post to which this particular comment belong
            let post= Post.findByIdAndUpdate(postId, { $pull: { comments: req.params.id } });
            return res.redirect('back');
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.log('error', err);
        return;
    }

}