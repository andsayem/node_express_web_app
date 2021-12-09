var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});
router.get("/login", function(req, res) {
    res.render("user/login");
});
module.exports = router;