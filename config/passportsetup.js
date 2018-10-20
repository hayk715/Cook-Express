const passport=require("passport");
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var keys=require("./keys/keys");
var TwitterStrategy=require("passport-twitter");
const User=require("../models/user");

// serialize 
// passport.serializeUser((user,done)=>{
//   done(null,user.twitterId);
// });

// // deserialize
// passport.deserializeUser((id,done)=>{
//   User.findById(id).then((user)=>{
//     done(null,user);
//   });
// });


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Google Oauth 
passport.use(new GoogleStrategy({
    clientID: keys.google.clientId,
    clientSecret: keys.google.clientSecret,
    callbackURL: "/login/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       new User({
         googleId:profile.id,
         username:profile.name.givenName,
         email:profile.emails[0].value
        }).save().then((userInfo)=>{
          console.log("you just saved this"+userInfo);
          done(null,userInfo)
          
        })

  }
));
// Twitter Oauth
passport.use(new TwitterStrategy({
  consumerKey: keys.twitter.consumerKey,
  consumerSecret: keys.twitter.consumerSecret,
  callbackURL: "/login/twitter/callback"
},
function(token, tokenSecret, profile, cb) {
 console.log(profile);
 return cb(null, profile)
 
}
));