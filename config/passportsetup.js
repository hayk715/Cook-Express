const passport=require("passport");
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var keys=require("./keys/keys");
var TwitterStrategy=require("passport-twitter");
const User=require("../models/user");
const mongoose=require("mongoose");

const database=mongoose.model("user").find({})







// Google Oauth 
passport.use(new GoogleStrategy({
    clientID: keys.google.clientId,
    clientSecret: keys.google.clientSecret,
    callbackURL: "/login/google/callback"
  },
  function(accessToken, refreshToken, profile, done)  {
    console.log(profile)
    var id=profile.id
    User.findOne({googleId:id}).then(function(a1) {
      console.log("twitter id from database"+a1)
      if(a1&&a1.googleId==id)
      {
        console.log("it works");
        done(null,id)
      }
      else{
        new User({
          googleId:profile.id,
          username:profile.name.givenName,
         //  email:profile.emails["0"].value   can add this but with emails parameters  in google router 
         }).save().then((userInfo)=>{
         console.log("you just saved this"+userInfo);
         done(null,userInfo)
         })
        }
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
    var id=profile._json.id
    User.findOne({twitterId:id}).then(function(a1) {
      console.log("twitter id from database"+a1)
      if(a1 && a1.twitterId==id)
        {
        cb(null,id)
       }
      else{
        new User({
          twitterId:profile._json.id,
          username:profile._json.name, 
          email:profile.email
         }).save().then((userInfo)=>{
           console.log("this is the cb data"+userInfo.twitterId)
           cb(null,userInfo.twitterId)
           })
          }
       })
}
));

// Serialize and DeSerialize user for passport

passport.serializeUser(function(user, cb) {
  console.log("This is serialize "+user)
 
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  // User.findById(user.id) || 
  User.findOne({twitterId:user}).then((userdb)=>{
    cb(null,userdb);
    console.log(userdb)
  })
  
});