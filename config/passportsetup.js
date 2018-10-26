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
    var id=profile.id
    User.findOne({googleId:id}).then(function(a1) {
      console.log("twitter id from database"+a1)
      if(a1.googleId==id)
      {
        console.log("it works");
        done(null)
      }
      else{
        new User({
          googleId:profile.id,
          userName:profile.name.givenName,
         //  email:profile.emails["0"].value   can add this but with emails parameters  in google router 
         }).save().then((userInfo)=>{
         console.log("you just saved this"+userInfo);
         cb(null,userInfo)
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
      if(a1.twitterId==id)
        {
        console.log("it works");
        cb(null)
       }
      else{
        new User({
          twitterId:profile._json.id,
          userName:profile.screen_name, 
          email:profile.email
         }).save().then((userInfo)=>{
           console.log("you just saved this"+userInfo);
           cb(null,userInfo)
           })
          }
       })
}
));

// Serialize and DeSerialize user for passport

passport.serializeUser(function(user, cb) {
  console.log('hi from serialize');
  console.log(database.findOne({userName:"Guru"}));
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  console.log('hi from deserialize');
  
  cb(null, obj);
});