const User=require('../models/users')
module.exports.home=function(req,res){
    return res.render('home',{
        title:"social login page"
    })
};
// module.exports.profile=function(req,res){
//     return res.end('<h1>So what you wanna know about me ?? </h1>')
// }