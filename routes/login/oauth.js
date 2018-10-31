const router=require('express').Router();
const passport=require("passport");



// Routes for Google OAuth 
router.get('/login/google',function(req, res, next) { console.log('hi'); next(); },
  passport.authenticate('google', { scope: ['profile'] }));

// Callback route for Google after Authentication 
router.get('/login/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      // res.send(req.user.id)
      if (process.env.NODE_ENV === 'production') {
        res.redirect('/profile/logged');
      } else {
          res.redirect('http://localhost:3000/profile/logged');  
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


  router.get('/loggedin', function(req, res) {
    // debugger;
    if (req.isAuthenticated()) {
      var userData={
        name:req.user.username,
        id:req.user.id
      }
      return res.json(userData);
    }
  })

  // Log Out 
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

 

module.exports=router;