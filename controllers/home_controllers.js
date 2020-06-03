const Post=require('../models/post')
const user= require('../models/user');

module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);
   
    // this is to populate the user i.e. to extract user whole details
    Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,posts){
        user.find({},function(err,users){
            return res.render('home',{
                title:"codeial | Home",
                posts:posts,
                all_users:users
            });
        });
       
    });


     
}

// module.exports.actionName = function(req, res){}