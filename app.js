var express = require("express");
var path = require("path");
var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./scratch');
var routes = require("./routes");

var app = express();


localStorage.setItem('userToken', 'test') //if you are sending token. 
console.log("test");
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
})