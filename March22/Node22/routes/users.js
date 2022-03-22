var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/details", function (req, res) {
  res.send("you are at details route");
});
router.get("/info", function (req, res) {
  res.send("you are at info route");
});
router.get("/info/mine", function (req, res) {
  res.send("you are at /info/mine");
});
module.exports = router;
