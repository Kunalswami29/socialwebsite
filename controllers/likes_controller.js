const Like = require('../models/like');
const Post = require('../models/post');
const Comment = require('../models/comment');
const { findById, findOne } = require('../models/like');

module.exports.toggleLike = async function(req,res){
    try{

        let likeable;
        let deleted = false;
        // this is to check which is liked post or comment
        if(req.query.type == 'Post'){
            likeable = await Post.findById(req.query.id).populate('likes');
        }else{
            likeable = await Comment.findById(req.query.id).populate('likes');
        }

        // checking if like already exist or not
        let existingLike = await Like.findOne({
            user : req.user._id,
            likeable: req.query.id,
            onModel : req.query.type
        });

        // if like exist
        if(existingLike){
            likeable.likes.pull(existingLike._id);
            likeable.save();
            existingLike.remove();
            deleted = true;
        }else{
            // create a new like
            let newLike = Like.create({
                user: req.user._id,
                likeable : req.query.id,
                onModel: req.query.type
            })
            likeable.likes.push(like._id);  // this is for pushing the like into the array
            likeable.save();
        }
        return res.json(200,{
            message:"Request successfull",
            data : {
                deleted : deleted
            }
        })

    }catch(err){
        console.log(err);
        return res.json(500,{
            message: "Internal server error"
        });
    }
}