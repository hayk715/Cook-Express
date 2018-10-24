const unirest = require("unirest");
const router = require("express").Router();


router.get("/recipes", (req, res) => {
  console.log(req.query)
  unirest
    .get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?query=${req.query.q}&limitLicense=false&ranking=2&offset=3&number=10&instructionsRequired=true`)
    .header("X-Mashape-Key", "PmLhGIV6EbmshUTASHgOvs7KY0Jbp1LtMz0jsnYKJHJACqylp0")
    .header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
    .end(function (result) {
  console.log(result.status, result.headers, result.body);
});
})

module.exports = router;