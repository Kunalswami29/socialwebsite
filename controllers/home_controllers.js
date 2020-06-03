const Post=require('../models/post')
const user= require('../models/user');

module.exports.home =  async function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

    // this is the way of async the code.

    try{
        let posts= await Post.find({})  // this  will perform this statement first
        .populate('user')   // this is to populate the user i.e. to extract user whole details
        .populate({
            path:'comments',
            populate:{
                 path:'user'
            }
       });

        let users= await user.find({}); // then this is statement

        return res.render('home',{  // then this is performed
            title:"codeial | Home",
            posts:posts,
            all_users:users
        });
    }catch(err){
        console.log('Error',err);
        return;

    }
    
}

// module.exports.actionName = function(req, res){}


// (this is the way of doing it without asyn await functionality)


// module.exports.home = function(req, res){
//     // console.log(req.cookies);
//     // res.cookie('user_id', 25);
   
//     // this is to populate the user i.e. to extract user whole details
//     Post.find({})
//     .populate('user')
//     .populate({
//         path:'comments',
//         populate:{
//             path:'user'
//         }
//     })
//     .exec(function(err,posts){
//         user.find({},function(err,users){
//             return res.render('home',{
//                 title:"codeial | Home",
//                 posts:posts,
//                 all_users:users
//             });
//         });
       
//     });
     
// }