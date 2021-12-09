var express = require("express");
var router = express.Router();
const axios = require("axios");
router.get("/", function(req, res) {
    axios.get("https://api.neoscan.io/api/main_net/v1/get_all_nodes")
        .then(data => res.json(data))
        .catch(err => res.secn(err))
    res.render("user/login");
});
router.get("/home", function(req, res) {
    res.render("index");
});
router.get("/dashboard-ecommerce", function(req, res) {
    res.render("dashboard-ecommerce");
});
router.get("/dashboard-analytics", function(req, res) {
    res.render("dashboard-analytics");
});
module.exports = router;