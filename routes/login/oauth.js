const router=require('express').Router();
const passport=require("passport");


router.get('/login/google',function(req, res, next) { console.log('hi'); next(); },
  passport.authenticate('google', { scope: ['profile'] }));

// router.get('/hi', function(req, res) { console.log('hi'); })


router.get('/login/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      if (process.env.NODE_ENV === 'production') {
        res.redirect('/');
      } else {
          res.redirect('http://localhost:3000/');
      }
  });

module.exports=router;