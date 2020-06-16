const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new strategy for google login
passport.use(new googleStrategy({
    clientID:"500370662340-oovgvfsm329lh7ba0bj4nouqrgeeaidb.apps.googleusercontent.com",
    clientSecret:"r9MY_SNgS95pdYVAqGUzaGZs",
    callbackURL: "http://localhost:8000/users/auth/google/callback",
  },

  function(accessToken,refreshToken,profile,done){
      User.findOne({email : profile.emails[0].value}).exec(function(err,user){
        if(err){console.log("error in google strategy pasport",err);return;}
        console.log(accessToken,refreshToken);
        console.log(profile);
        if(user){
          // if found ,set this user as req.user
          return done(null,user);
        }else{
          //if not found , create the user and set it as req.user
          User.create({
            name:profile.displayName,
            email: profile.emails[0],
            password: crypto.randomBytes(20).toString('hex')
          },function(err,user){
            if(err){console.log('error',err); return;}
            return done(null,user);
          });
        }
      });
  }



))