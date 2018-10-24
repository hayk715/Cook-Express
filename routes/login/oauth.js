const router=require('express').Router();
const passport=require("passport");

// Routes for Google OAuth 
router.get('/login/google',function(req, res, next) { console.log('hi'); next(); },
  passport.authenticate('google', { scope: ['profile'] }));

// Callback route for Google after Authentication 
router.get('/login/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      if (process.env.NODE_ENV === 'production') {
        res.redirect('/');
      } else {
          res.redirect('http://localhost:3000/');
      }
  });

  // Route for Twitter OAuth
  router.get("/login/twitter", passport.authenticate("twitter"));

  // Callback Route for Twitter after Authentication
  router.get('/login/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('hello');

    res.redirect("/profile");
  });


  router.get('/charliesroute', function(req, res) {
    debugger;
    if (req.isAuthenticated()) {
      return res.json({
        username: 'hi'
      })
    }
  })
module.exports=router;