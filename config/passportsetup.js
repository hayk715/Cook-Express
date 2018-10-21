const passport=require("passport");
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var keys=require("./keys/keys");
var TwitterStrategy=require("passport-twitter");
const User=require("../models/user");


// Google Oauth 
passport.use(new GoogleStrategy({
    clientID: keys.google.clientId,
    clientSecret: keys.google.clientSecret,
    callbackURL: "/login/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
       new User({
         googleId:profile.id,
         userName:profile.name.givenName,
        //  email:profile.emails["0"].value   can add this but with emails parameters  in google router 
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
  console.log(profile._json)
  new User({
    twitterId:profile._json.id,
    userName:profile.screen_name, 
    email:profile.email
   }).save().then((userInfo)=>{
     console.log("you just saved this"+userInfo);
     cb(null,userInfo)
     
   })

 
}
));

// Serialize and DeSerialize user for passport

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});