const unirest = require("unirest");
const router = require("express").Router();
const keys = require("../config/keys/keys");

router.get("/recipes", (req, res) => {
  console.log(req.query)
  unirest
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${req.query.q}&limitLicense=false&ranking=2&offset=3&number=10&instructionsRequired=true`)
    .header("X-Mashape-Key", keys.food.foodkey)
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
  console.log(result.body);
      res.send(result.body);
});
})


module.exports = router;