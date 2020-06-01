const Post=require('../models/post')

module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);
   
    // this is to populate the user i.e. to extract user whole details
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title:"codeial | Home",
            posts:posts
        })
    })


     
}

// module.exports.actionName = function(req, res){}